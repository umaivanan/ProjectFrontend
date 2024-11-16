
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
// import './AdminDashboard.css';
import { FaEnvelope } from 'react-icons/fa';

const AdminDashboard = () => {
  const [skills, setSkills] = useState([]);
  const [formDatas, setFormDatas] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('formdata');
  const [expandedRows, setExpandedRows] = useState({});
  const appName = 'Swapsmaert'; // App name for consistency
  const [users, setUsers] = useState([]); // State for users


  const [clickedButtons, setClickedButtons] = useState(() => {
    // Load the clicked buttons from local storage on initialization
    const storedClickedButtons = localStorage.getItem('clickedButtons');
    return storedClickedButtons ? JSON.parse(storedClickedButtons) : [];
  });
  
  const handleMailButtonClick = (id, instructorEmail) => {
    if (!clickedButtons.includes(id)) {
      // Update the state and local storage
      const updatedClickedButtons = [...clickedButtons, id];
      setClickedButtons(updatedClickedButtons);
      localStorage.setItem('clickedButtons', JSON.stringify(updatedClickedButtons));
  
      // Perform the email sending action
      sendEmailToInstructor(instructorEmail);
    }
  };

  const ITEMS_PER_PAGE = 10;

  // State to track the current page for payments
  const [paymentPage, setPaymentPage] = useState(1);
  const [userPage, setUserPage] = useState(1); // Current page for users table
  
  // Function to calculate total pages for the payments table
  const totalPaymentPages = () => Math.ceil(payments.length / ITEMS_PER_PAGE);
  
  // Function to get the current page's data for the payments table
  const getPaginatedPayments = () => {
    const startIndex = (paymentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return payments.slice(startIndex, endIndex);
  };


  const totalUserPages = () => Math.ceil(users.length / ITEMS_PER_PAGE);

// Get users for the current page
const getPaginatedUsers = () => {
  const startIndex = (userPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  return users.slice(startIndex, endIndex);
};
  const toggleChapters = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Send email function using EmailJS
  const sendEmailToInstructor = async (instructorEmail) => {
    // Console log to check if instructorEmail is received correctly
    console.log("Instructor Email:", instructorEmail);

    const templateParams = {
      to_name: 'Instructor',
      from_name: appName,
      message: 'Your course has successfully sold!',
      to_email: instructorEmail // Using the actual email here from payment.instructorEmail
    };

    try {
      await emailjs.send('service_m9qcm0r', 'template_rjhjflr', templateParams, 'NtnDyib--Ww0OZmia');
      alert(`Email sent successfully to the instructor!`);
    } catch (error) {
      alert(`Error sending email to the instructor`);
      console.error(error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const formDataResponse = await axios.get('http://localhost:8715/api/formdata');
        setFormDatas(formDataResponse.data);

        const skillsResponse = await axios.get('http://localhost:8715/api/skills');
        setSkills(skillsResponse.data);

        const paymentResponse = await axios.get('http://localhost:8715/payment');
        setPayments(paymentResponse.data.payments);

        const userResponse = await axios.get('http://localhost:8715/api/auth/admin/users');
        setUsers(userResponse.data);
      } catch (error) {
        setError('Error fetching data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const toggleBlockUser = async (userId, currentStatus) => {
    try {
        // Toggle the blocking status based on the current status
        const newStatus = !currentStatus;
        await axios.put(`http://localhost:8715/api/auth/admin/users/${userId}/block`, { isBlocked: newStatus });
        
        alert(`User with ID ${userId} has been ${newStatus ? 'blocked' : 'unblocked'}!`);

        // Refresh user list after toggling block status
        const userResponse = await axios.get('http://localhost:8715/api/auth/admin/users');
        setUsers(userResponse.data);
    } catch (error) {
        alert('Error toggling user block status');
        console.error(error);
    }
};


            
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="admin-dashboard flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="header bg-purple-900 text-white  w-full py-3 px-5  mt-20 shadow-lg flex justify-between items-center rounded-3xl">
        <h1 className="text-2xl font-bold ">Admin Dashboard</h1>
        <div className="tabs flex">
          {/* <button
            className={`px-4 py-2 mr-5 rounded-l-lg ${activeTab === 'formdata' ? 'bg-teal-500' : 'bg-purple-700'}`}
            onClick={() => setActiveTab('formdata')}
          >
            Form Data
          </button>
          <button
            className={`px-4 py-2  mr-5 rounded-r-lg ${activeTab === 'payments' ? 'bg-teal-500' : 'bg-purple-700'}`}
            onClick={() => setActiveTab('payments')}
          >
            Payments
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg mr-5 ${activeTab === 'users' ? 'bg-teal-500' : 'bg-purple-700'}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button> */}
          <button
  className={`px-4 py-1 w-32 mr-5  bg-teal-500 rounded-md`}
  onClick={() => setActiveTab('formdata')}
>
  Form Data
</button>
<button
  className={`px-4 py-2 w-32 mr-5  bg-teal-500 rounded-md`}
  onClick={() => setActiveTab('payments')}
>
  Payments
</button>
<button
  className={`px-4 py-2 w-32 mr-5  bg-teal-500 rounded-md`}
  onClick={() => setActiveTab('users')}
>
  Users
</button>
        </div>
      </div>

      <div className="content w-full max-w-6xl mt-5 bg-white  shadow-lg p-6">
      {activeTab === 'formdata' && (
  <section className="formdata-section">
    <h2 className="text-xl font-semibold text-purple-900 mb-4">Users with Form Data and Skills</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border-b-2 border-gray-200 block md:table-row">
            <th className="p-2 text-left bg-gray-50 md:table-cell">Form Data ID</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Name</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Skill Category</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Profile Name</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Preferred Language</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Course Description</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">PDF Price</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Image</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {formDatas.map((formData) => (
            <React.Fragment key={formData._id}>
              <tr className="block md:table-row">
                <td className="p-2 border-t block md:table-cell">{formData._id}</td>
                <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
                <td className="p-2 border-t block md:table-cell">{formData.skill?.skillCategory}</td>
                <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
                <td className="p-2 border-t block md:table-cell">{formData.skill?.preferredLanguage}</td>
                <td className="p-2 border-t block md:table-cell">{formData.courseDescription}</td>
                <td className="p-2 border-t block md:table-cell">${formData.pdfPrice}</td>
                <td className="p-2 border-t block md:table-cell">
                  {formData.image && (
                    <img
                      src={`http://localhost:8715/imageUploads/${formData.image}`}
                      alt="Course"
                      className="object-cover w-20 h-20 rounded-lg"
                    />
                  )}
                </td>
                <td className="p-2 border-t block md:table-cell">
                  <button
                    onClick={() => toggleChapters(formData._id)}
                    className="text-teal-500 hover:underline"
                  >
                    {expandedRows[formData._id] ? 'Hide Chapters' : 'View Chapters'}
                  </button>
                </td>
              </tr>
              {expandedRows[formData._id] && (
                <tr className="block md:table-row">
                  <td colSpan="9" className="p-2 border-t block md:table-cell">
                    <div className="mt-2 space-y-2">
                      {formData.roadmapIntroduction && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.roadmapIntroduction}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Roadmap PDF
                        </a>
                      )}
                      {formData.firstChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.firstChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          First Chapter PDF
                        </a>
                      )}
                      {formData.secondChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.secondChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Second Chapter PDF
                        </a>
                      )}
                      {formData.thirdChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.thirdChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Third Chapter PDF
                        </a>
                      )}
                      {formData.fourthChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.fourthChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Fourth Chapter PDF
                        </a>
                      )}
                      {formData.fifthChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.fifthChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Fifth Chapter PDF
                        </a>
                      )}
                      {formData.sixthChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.sixthChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Sixth Chapter PDF
                        </a>
                      )}
                      {formData.seventhChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.seventhChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Seventh Chapter PDF
                        </a>
                      )}
                      {formData.eighthChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.eighthChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Eighth Chapter PDF
                        </a>
                      )}
                      {formData.ninthChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.ninthChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Ninth Chapter PDF
                        </a>
                      )}
                      {formData.tenthChapter && (
                        <a
                          href={`http://localhost:8715/pdfUploads/${formData.tenthChapter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline"
                        >
                          Tenth Chapter PDF
                        </a>
                      )}
                    </div>
                    
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)}


{activeTab === 'payments' && (
  <section className="payments-section">
    <h2 className="text-xl font-semibold text-purple-900 mb-4">Payment Details</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border-b-2 border-gray-200 block md:table-row">
            <th className="p-2 text-left bg-gray-50 md:table-cell">Payment ID</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Payer Email</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Instructor Email</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Total Amount</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Admin Amount</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {getPaginatedPayments().map((payment) => (
            <tr key={payment._id} className="block md:table-row">
              <td className="p-2 border-t block md:table-cell">{payment._id}</td>
              <td className="p-2 border-t block md:table-cell">{payment.payerEmail}</td>
              <td className="p-2 border-t block md:table-cell">{payment.instructorEmail}</td>
              <td className="p-2 border-t block md:table-cell">${payment.totalAmount}</td>
              <td className="p-2 border-t block md:table-cell">${payment.adminAmount}</td>
              <td className="p-2 border-t block md:table-cell">
                <button
                  onClick={() => handleMailButtonClick(payment._id, payment.instructorEmail)}
                  className={`px-2 py-1 rounded ${
                    clickedButtons.includes(payment._id)
                      ? 'bg-green-500 text-white cursor-default rounded-md'
                      : 'bg-teal-500 text-white hover:bg-teal-600 rounded-md'
                  }`}
                  disabled={clickedButtons.includes(payment._id)}
                >
                  {clickedButtons.includes(payment._id) ? 'Emailed' : 'Mail to Instructor'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination flex justify-center mt-4">
        {Array.from({ length: totalPaymentPages() }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 rounded ${
              index + 1 === paymentPage ? 'bg-teal-500 text-white rounded-md' : 'bg-gray-300 rounded-md'
            }`}
            onClick={() => setPaymentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  </section>
)}


{activeTab === 'users' && (
  <section className="users-section">
    <h2 className="text-xl font-semibold text-purple-900 mb-4">User Details</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border-b-2 border-gray-200 block md:table-row">
            <th className="p-2 text-left bg-gray-50 md:table-cell">User ID</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Name</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Email</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Role</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Status</th>
            <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {getPaginatedUsers().map((user) => (
            <tr key={user._id} className="block md:table-row">
              <td className="p-2 border-t block md:table-cell">{user._id}</td>
              <td className="p-2 border-t block md:table-cell">{user.name}</td>
              <td className="p-2 border-t block md:table-cell">{user.email}</td>
              <td className="p-2 border-t block md:table-cell">{user.role}</td>
              <td className="p-2 border-t block md:table-cell">
                {user.isBlocked ? 'Blocked' : 'Active'}
              </td>
              <td className="p-2 border-t block md:table-cell">
                <button
                  onClick={() => toggleBlockUser(user._id, user.isBlocked)}
                  className={`px-2 py-1 rounded ${
                    user.isBlocked ? 'bg-green-500' : 'bg-red-500 rounded-md'
                  } text-white hover:${user.isBlocked ? 'bg-green-600' : 'bg-red-600 rounded-md'}`}
                >
                  {user.isBlocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination flex justify-center mt-4">
        {Array.from({ length: totalUserPages() }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 rounded ${
              index + 1 === userPage ? 'bg-teal-500 text-white rounded-md' : 'bg-gray-300 rounded-md'
            }`}
            onClick={() => setUserPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  </section>
)}
      </div>
    </div>
  );
};

export default AdminDashboard;
