
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './AdminDashboard.css';

// // const AdminDashboard = () => {
// //   const [skills, setSkills] = useState([]);
// //   const [formDatas, setFormDatas] = useState([]);
// //   const [payments, setPayments] = useState([]); // State for payment details
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeSection, setActiveSection] = useState('formdata'); // State to track active section
// //   const [expandedRows, setExpandedRows] = useState({}); // Track expanded rows
  
// //   const toggleChapters = (id) => {
// //     setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
// //   };

// //   // Function to send email to Payer
// //   const sendEmailToPayer = async (payerEmail) => {
// //     try {
// //       const response = await axios.post('http://localhost:8714/api/send-email/payer', { email: payerEmail });
// //       alert(response.data.message);
// //     } catch (error) {
// //       alert('Error sending email to payer');
// //       console.error(error);
// //     }
// //   };

// //   // Function to send email to Instructor
// //   const sendEmailToInstructor = async (instructorEmail) => {
// //     try {
// //       const response = await axios.post('http://localhost:8714/api/send-email/instructor', { email: instructorEmail });
// //       alert(response.data.message);
// //     } catch (error) {
// //       alert('Error sending email to instructor');
// //       console.error(error);
// //     }
// //   };

// //   // Fetch skills, form data, and payment details
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch form data
// //         const formDataResponse = await axios.get('http://localhost:8714/api/formdata');
// //         setFormDatas(formDataResponse.data);

// //         // Fetch skills
// //         const skillsResponse = await axios.get('http://localhost:8714/api/skills');
// //         setSkills(skillsResponse.data);

// //         // Fetch payment details
// //         const paymentResponse = await axios.get('http://localhost:8714/payment');
// //         setPayments(paymentResponse.data.payments); // Assuming the payments are in "payments" array
// //       } catch (error) {
// //         setError('Error fetching data');
// //         console.error(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;


// //   return (
// //     <div className="admin-dashboard-container flex">
// //       {/* Sidebar */}
// //       <div className="sidebar w-1/4 bg-gray-800 text-white h-screen p-4">
// //         <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
// //         <ul>
// //           <li 
// //             className={`p-2 mb-2 cursor-pointer ${activeSection === 'formdata' ? 'bg-blue-500' : 'bg-gray-700'}`} 
// //             onClick={() => setActiveSection('formdata')}
// //           >
// //             Form Data
// //           </li>
// //           <li 
// //             className={`p-2 mb-2 cursor-pointer ${activeSection === 'payments' ? 'bg-blue-500' : 'bg-gray-700'}`} 
// //             onClick={() => setActiveSection('payments')}
// //           >
// //             Payments
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main Content */}
// //       <div className="dashboard-content w-3/4 p-4">
// //         {/* Form Data Section */}
// //         {activeSection === 'formdata' && (
// //           <section className="dashboard-section">
// //       <h2 className="text-xl font-semibold mb-4">Users with Form Data and Skills</h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full border-collapse block md:table">
// //           <thead className="block md:table-header-group">
// //             <tr className="border-b-2 border-gray-200 block md:table-row absolute -top-full md:relative">
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Form Data ID</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Name</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Skill Category</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Profile Name</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Preferred Language</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Educational Background</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Course Description</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">PDF Price</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Languages</th>
// //               <th className="p-2 text-left bg-gray-50 md:table-cell">Chapters</th>
// //             </tr>
// //           </thead>
// //           <tbody className="block md:table-row-group">
// //             {formDatas.map((formData) => (
// //               <React.Fragment key={formData._id}>
// //                 <tr className="block md:table-row">
// //                   <td className="p-2 border-t block md:table-cell">{formData._id}</td>
// //                   <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
// //                   <td className="p-2 border-t block md:table-cell">{formData.skill?.skillCategory}</td>
// //                   <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
// //                   <td className="p-2 border-t block md:table-cell">{formData.skill?.preferredLanguage}</td>
// //                   <td className="p-2 border-t block md:table-cell">{formData.skill?.educationalBackground}</td>
// //                   <td className="p-2 border-t block md:table-cell">{formData.courseDescription}</td>
// //                   <td className="p-2 border-t block md:table-cell">${formData.pdfPrice}</td>
// //                   <td className="p-2 border-t block md:table-cell">{formData.languages}</td>
// //                   <td className="p-2 border-t block md:table-cell">
// //                     <button
// //                       onClick={() => toggleChapters(formData._id)}
// //                       className="text-blue-500 hover:underline"
// //                     >
// //                       {expandedRows[formData._id] ? 'Hide Chapters' : 'View Chapters'}
// //                     </button>
// //                   </td>
// //                 </tr>

// //                 {expandedRows[formData._id] && (
// //                   <tr className="block md:table-row">
// //                     <td colSpan="10" className="p-2 border-t block md:table-cell">
// //                       <div className="mt-2 space-y-2">
// //                         {formData.roadmapIntroduction && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.roadmapIntroduction}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Roadmap PDF
// //                           </a>
// //                         )}
// //                         {formData.firstChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.firstChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             First Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.secondChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.secondChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Second Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.thirdChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.thirdChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Third Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.fourthChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.fourthChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Fourth Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.fifthChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.fifthChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Fifth Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.sixthChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.sixthChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Sixth Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.seventhChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.seventhChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Seventh Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.eighthChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.eighthChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Eighth Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.ninthChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.ninthChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Ninth Chapter PDF
// //                           </a>
// //                         )}
// //                         {formData.tenthChapter && (
// //                           <a
// //                             href={`http://localhost:8714/pdfUploads/${formData.tenthChapter}`}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="block text-blue-500 hover:underline"
// //                           >
// //                             Tenth Chapter PDF
// //                           </a>
// //                         )}
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 )}
// //               </React.Fragment>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </section>
// //         )}

// //         {/* Payment Details Section */}
// //         {activeSection === 'payments' && (
        
// //         <section className="dashboard-section mt-8">
// //         <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full border-collapse block md:table">
// //             <thead className="block md:table-header-group">
// //               <tr className="border-b-2 border-gray-200 block md:table-row absolute -top-full md:relative">
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Payment ID</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Payer Email</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Instructor Email</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Product Name</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Total Amount</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Admin Amount</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Instructor Amount</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Stripe Charge ID</th>
// //                 <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="block md:table-row-group">
// //               {payments.map((payment) => (
// //                 <tr key={payment._id} className="block md:table-row">
// //                   <td className="p-2 border-t block md:table-cell">{payment._id}</td>
// //                   <td className="p-2 border-t block md:table-cell">{payment.payerEmail}</td>
// //                   <td className="p-2 border-t block md:table-cell">{payment.instructorEmail}</td>
// //                   <td className="p-2 border-t block md:table-cell">{payment.productName}</td>
// //                   <td className="p-2 border-t block md:table-cell">${payment.totalAmount}</td>
// //                   <td className="p-2 border-t block md:table-cell">${payment.adminAmount}</td>
// //                   <td className="p-2 border-t block md:table-cell">${payment.instructorAmount}</td>
// //                   <td className="p-2 border-t block md:table-cell">{payment.stripeId}</td>
// //                   <td className="p-2 border-t block md:table-cell">
// //                     <button
// //                       onClick={() => sendEmailToPayer(payment.payerEmail)}
// //                       className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
// //                     >
// //                       Mail to Payer
// //                     </button>
// //                     <button
// //                       onClick={() => sendEmailToInstructor(payment.instructorEmail)}
// //                       className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// //                     >
// //                       Mail to Instructor
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </section>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import emailjs from 'emailjs-com'; // Use the correct import for emailjs
// // import './AdminDashboard.css';
// // import { FaEnvelope } from 'react-icons/fa';

// // const AdminDashboard = () => {
// //   const [skills, setSkills] = useState([]);
// //   const [formDatas, setFormDatas] = useState([]);
// //   const [payments, setPayments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('formdata');
// //   const [expandedRows, setExpandedRows] = useState({});

// //   const toggleChapters = (id) => {
// //     setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
// //   };

// //   const sendEmail = async (recipientEmail, templateParams) => {
// //     try {
// //       await emailjs.send('service_m9qcm0r', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');
// //       alert('Email sent successfully!');
// //     } catch (error) {
// //       alert('Error sending email');
// //       console.error(error);
// //     }
// //   };

// //   const handleEmailToPayer = (payerEmail) => {
// //     const templateParams = {
// //       to_email: payerEmail,
// //       subject: 'Payment Confirmation',
// //       message: 'Thank you for your payment!',
// //     };
// //     sendEmail(payerEmail, templateParams);
// //   };

// //   const handleEmailToInstructor = (instructorEmail) => {
// //     const templateParams = {
// //       to_email: instructorEmail,
// //       subject: 'Course Update',
// //       message: 'Your course information has been updated!',
// //     };
// //     sendEmail(instructorEmail, templateParams);
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const formDataResponse = await axios.get('http://localhost:8714/api/formdata');
// //         setFormDatas(formDataResponse.data);

// //         const skillsResponse = await axios.get('http://localhost:8714/api/skills');
// //         setSkills(skillsResponse.data);

// //         const paymentResponse = await axios.get('http://localhost:8714/payment');
// //         setPayments(paymentResponse.data.payments);
// //       } catch (error) {
// //         setError('Error fetching data');
// //         console.error(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div className="admin-dashboard flex flex-col items-center bg-gray-100 min-h-screen p-6">
// //       <div className="header bg-purple-900 text-white w-full py-4 px-5 rounded-lg mt-20 shadow-lg flex justify-between items-center">
// //         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
// //         <div className="tabs flex">
// //           <button
// //             className={`px-4 py-2 rounded-l-lg ${activeTab === 'formdata' ? 'bg-teal-500' : 'bg-purple-700'}`}
// //             onClick={() => setActiveTab('formdata')}
// //           >
// //             Form Data
// //           </button>
// //           <button
// //             className={`px-4 py-2 rounded-r-lg ${activeTab === 'payments' ? 'bg-teal-500' : 'bg-purple-700'}`}
// //             onClick={() => setActiveTab('payments')}
// //           >
// //             Payments
// //           </button>
// //         </div>
// //       </div>

// //       <div className="content w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
// //         {activeTab === 'formdata' && (
// //           <section className="formdata-section">
// //             <h2 className="text-xl font-semibold text-purple-900 mb-4">Users with Form Data and Skills</h2>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border-collapse block md:table">
// //                 <thead className="block md:table-header-group">
// //                   <tr className="border-b-2 border-gray-200 block md:table-row">
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Form Data ID</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Name</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Skill Category</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Profile Name</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Preferred Language</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Course Description</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">PDF Price</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="block md:table-row-group">
// //                   {formDatas.map((formData) => (
// //                     <React.Fragment key={formData._id}>
// //                       <tr className="block md:table-row">
// //                         <td className="p-2 border-t block md:table-cell">{formData._id}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.skillCategory}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.preferredLanguage}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.courseDescription}</td>
// //                         <td className="p-2 border-t block md:table-cell">${formData.pdfPrice}</td>
// //                         <td className="p-2 border-t block md:table-cell">
// //                           <button
// //                             onClick={() => toggleChapters(formData._id)}
// //                             className="text-teal-500 hover:underline"
// //                           >
// //                             {expandedRows[formData._id] ? 'Hide Chapters' : 'View Chapters'}
// //                           </button>
// //                         </td>
// //                       </tr>
// //                       {expandedRows[formData._id] && (
// //                         <tr className="block md:table-row">
// //                           <td colSpan="8" className="p-2 border-t block md:table-cell">
// //                             <div className="mt-2 space-y-2">
// //                               {[...Array(10)].map((_, index) => (
// //                                 formData[`chapter${index + 1}`] && (
// //                                   <a
// //                                     key={index}
// //                                     href={`http://localhost:8714/pdfUploads/${formData[`chapter${index + 1}`]}`}
// //                                     target="_blank"
// //                                     rel="noopener noreferrer"
// //                                     className="block text-teal-500 hover:underline"
// //                                   >
// //                                     Chapter {index + 1} PDF
// //                                   </a>
// //                                 )
// //                               ))}
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       )}
// //                     </React.Fragment>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </section>
// //         )}

// //         {activeTab === 'payments' && (
// //           <section className="payments-section">
// //             <h2 className="text-xl font-semibold text-purple-900 mb-4">Payment Details</h2>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border-collapse block md:table">
// //                 <thead className="block md:table-header-group">
// //                   <tr className="border-b-2 border-gray-200 block md:table-row">
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Payment ID</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Payer Email</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Instructor Email</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Total Amount</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Admin Amount</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="block md:table-row-group">
// //                   {payments.map((payment) => (
// //                     <tr key={payment._id} className="block md:table-row">
// //                       <td className="p-2 border-t block md:table-cell">{payment._id}</td>
// //                       <td className="p-2 border-t block md:table-cell">{payment.payerEmail}</td>
// //                       <td className="p-2 border-t block md:table-cell">{payment.instructorEmail}</td>
// //                       <td className="p-2 border-t block md:table-cell">${payment.totalAmount}</td>
// //                       <td className="p-2 border-t block md:table-cell">${payment.adminAmount}</td>
// //                       <td className="p-2 border-t block md:table-cell">
// //                         <button
// //                           onClick={() => handleEmailToPayer(payment.payerEmail)}
// //                           className="bg-teal-500 text-white px-1 mr-2 py-1 rounded hover:bg-teal-600"
// //                         >
// //                           Mail to Payer
// //                         </button>
// //                         <button
// //                           onClick={() => handleEmailToInstructor(payment.instructorEmail)}
// //                           className="bg-teal-500 text-white px-2 ml-2 py-1 rounded hover:bg-teal-600"
// //                         >
// //                           Mail to Instructor
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </section>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import emailjs from 'emailjs-com';
// // import './AdminDashboard.css';
// // import { FaEnvelope } from 'react-icons/fa';

// // const AdminDashboard = () => {
// //   const [skills, setSkills] = useState([]);
// //   const [formDatas, setFormDatas] = useState([]);
// //   const [payments, setPayments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('formdata');
// //   const [expandedRows, setExpandedRows] = useState({});
// //   const appName = 'Swapsmaert'; // App name for consistency

// //   const toggleChapters = (id) => {
// //     setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
// //   };

// //   // Send email function using EmailJS
// //   const sendEmail = async (recipientEmail, recipientName, subject, message) => {
// //     const templateParams = {
// //       to_name: recipientName,
// //       from_name: appName,
// //       message,
// //       to_email: recipientEmail
// //     };

// //     try {
// //       await emailjs.send('service_m9qcm0r', 'template_rjhjflr', templateParams, 'NtnDyib--Ww0OZmia');
// //       alert('Email sent successfully!');
// //     } catch (error) {
// //       alert('Error sending email');
// //       console.error(error);
// //     }
// //   };

// //   // Function to handle email to the payer
// //   const handleEmailToPayer = (payerEmail) => {
// //     sendEmail(payerEmail, 'Payer', 'Payment Confirmation', 'Thank you for your payment!');
// //   };

// //   // Function to handle email to the instructor
// //   const handleEmailToInstructor = (instructorEmail) => {
// //     sendEmail(instructorEmail, 'Instructor', 'Course Update', 'Your course information has been updated!');
// //   };

// //   // Fetch data on component mount
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const formDataResponse = await axios.get('http://localhost:8714/api/formdata');
// //         setFormDatas(formDataResponse.data);

// //         const skillsResponse = await axios.get('http://localhost:8714/api/skills');
// //         setSkills(skillsResponse.data);

// //         const paymentResponse = await axios.get('http://localhost:8714/payment');
// //         setPayments(paymentResponse.data.payments);
// //       } catch (error) {
// //         setError('Error fetching data');
// //         console.error(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div className="admin-dashboard flex flex-col items-center bg-gray-100 min-h-screen p-6">
// //       <div className="header bg-purple-900 text-white w-full py-4 px-5 rounded-lg mt-20 shadow-lg flex justify-between items-center">
// //         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
// //         <div className="tabs flex">
// //           <button
// //             className={`px-4 py-2 rounded-l-lg ${activeTab === 'formdata' ? 'bg-teal-500' : 'bg-purple-700'}`}
// //             onClick={() => setActiveTab('formdata')}
// //           >
// //             Form Data
// //           </button>
// //           <button
// //             className={`px-4 py-2 rounded-r-lg ${activeTab === 'payments' ? 'bg-teal-500' : 'bg-purple-700'}`}
// //             onClick={() => setActiveTab('payments')}
// //           >
// //             Payments
// //           </button>
// //         </div>
// //       </div>

// //       <div className="content w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
// //         {activeTab === 'formdata' && (
// //           <section className="formdata-section">
// //             <h2 className="text-xl font-semibold text-purple-900 mb-4">Users with Form Data and Skills</h2>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border-collapse block md:table">
// //                 <thead className="block md:table-header-group">
// //                   <tr className="border-b-2 border-gray-200 block md:table-row">
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Form Data ID</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Name</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Skill Category</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Profile Name</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Preferred Language</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Course Description</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">PDF Price</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="block md:table-row-group">
// //                   {formDatas.map((formData) => (
// //                     <React.Fragment key={formData._id}>
// //                       <tr className="block md:table-row">
// //                         <td className="p-2 border-t block md:table-cell">{formData._id}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.skillCategory}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.skill?.preferredLanguage}</td>
// //                         <td className="p-2 border-t block md:table-cell">{formData.courseDescription}</td>
// //                         <td className="p-2 border-t block md:table-cell">${formData.pdfPrice}</td>
// //                         <td className="p-2 border-t block md:table-cell">
// //                           <button
// //                             onClick={() => toggleChapters(formData._id)}
// //                             className="text-teal-500 hover:underline"
// //                           >
// //                             {expandedRows[formData._id] ? 'Hide Chapters' : 'View Chapters'}
// //                           </button>
// //                         </td>
// //                       </tr>
// //                       {expandedRows[formData._id] && (
// //                         <tr className="block md:table-row">
// //                           <td colSpan="8" className="p-2 border-t block md:table-cell">
// //                             <div className="mt-2 space-y-2">
// //                               {[...Array(10)].map((_, index) => (
// //                                 formData[`chapter${index + 1}`] && (
// //                                   <a
// //                                     key={index}
// //                                     href={`http://localhost:8714/pdfUploads/${formData[`chapter${index + 1}`]}`}
// //                                     target="_blank"
// //                                     rel="noopener noreferrer"
// //                                     className="block text-teal-500 hover:underline"
// //                                   >
// //                                     Chapter {index + 1} PDF
// //                                   </a>
// //                                 )
// //                               ))}
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       )}
// //                     </React.Fragment>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </section>
// //         )}

// //         {activeTab === 'payments' && (
// //           <section className="payments-section">
// //             <h2 className="text-xl font-semibold text-purple-900 mb-4">Payment Details</h2>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border-collapse block md:table">
// //                 <thead className="block md:table-header-group">
// //                   <tr className="border-b-2 border-gray-200 block md:table-row">
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Payment ID</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Payer Email</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Instructor Email</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Total Amount</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Admin Amount</th>
// //                     <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="block md:table-row-group">
// //                   {payments.map((payment) => (
// //                     <tr key={payment._id} className="block md:table-row">
// //                       <td className="p-2 border-t block md:table-cell">{payment._id}</td>
// //                       <td className="p-2 border-t block md:table-cell">{payment.payerEmail}</td>
// //                       <td className="p-2 border-t block md:table-cell">{payment.instructorEmail}</td>
// //                       <td className="p-2 border-t block md:table-cell">${payment.totalAmount}</td>
// //                       <td className="p-2 border-t block md:table-cell">${payment.adminAmount}</td>
// //                       <td className="p-2 border-t block md:table-cell">
// //                         <button
// //                           onClick={() => handleEmailToPayer(payment.payerEmail)}
// //                           className="bg-teal-500 text-white px-1 mr-2 py-1 rounded hover:bg-teal-600"
// //                         >
// //                           Mail to Payer
// //                         </button>
// //                         <button
// //                           onClick={() => handleEmailToInstructor(payment.instructorEmail)}
// //                           className="bg-teal-500 text-white px-2 ml-2 py-1 rounded hover:bg-teal-600"
// //                         >
// //                           Mail to Instructor
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </section>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import emailjs from 'emailjs-com';
// import './AdminDashboard.css';
// import { FaEnvelope } from 'react-icons/fa';

// const AdminDashboard = () => {
//   const [skills, setSkills] = useState([]);
//   const [formDatas, setFormDatas] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('formdata');
//   const [expandedRows, setExpandedRows] = useState({});
//   const appName = 'Swapsmaert'; // App name for consistency

//   const toggleChapters = (id) => {
//     setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   // Send email function using EmailJS
//   const sendEmailToInstructor = async (instructorEmail) => {
//     const templateParams = {
//       to_name: 'Instructor',
//       from_name: appName,
//       message: 'Your course has successfully sold!',
//       to_email: instructorEmail
      
//     };

//     try {
//       await emailjs.send('service_m9qcm0r', 'template_rjhjflr', templateParams, 'NtnDyib--Ww0OZmia');
//       alert(`Email sent successfully to the instructor!`);
//     } catch (error) {
//       alert(`Error sending email to the instructor`);
//       console.error(error);
      
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const formDataResponse = await axios.get('http://localhost:8714/api/formdata');
//         setFormDatas(formDataResponse.data);

//         const skillsResponse = await axios.get('http://localhost:8714/api/skills');
//         setSkills(skillsResponse.data);

//         const paymentResponse = await axios.get('http://localhost:8714/payment');
//         setPayments(paymentResponse.data.payments);
//       } catch (error) {
//         setError('Error fetching data');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="admin-dashboard flex flex-col items-center bg-gray-100 min-h-screen p-6">
//       <div className="header bg-purple-900 text-white w-full py-4 px-5 rounded-lg mt-20 shadow-lg flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <div className="tabs flex">
//           <button
//             className={`px-4 py-2 rounded-l-lg ${activeTab === 'formdata' ? 'bg-teal-500' : 'bg-purple-700'}`}
//             onClick={() => setActiveTab('formdata')}
//           >
//             Form Data
//           </button>
//           <button
//             className={`px-4 py-2 rounded-r-lg ${activeTab === 'payments' ? 'bg-teal-500' : 'bg-purple-700'}`}
//             onClick={() => setActiveTab('payments')}
//           >
//             Payments
//           </button>
//         </div>
//       </div>

//       <div className="content w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         {activeTab === 'formdata' && (
//           <section className="formdata-section">
//             <h2 className="text-xl font-semibold text-purple-900 mb-4">Users with Form Data and Skills</h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full border-collapse block md:table">
//                 <thead className="block md:table-header-group">
//                   <tr className="border-b-2 border-gray-200 block md:table-row">
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Form Data ID</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Name</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Skill Category</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Profile Name</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Preferred Language</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Course Description</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">PDF Price</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="block md:table-row-group">
//                   {formDatas.map((formData) => (
//                     <React.Fragment key={formData._id}>
//                       <tr className="block md:table-row">
//                         <td className="p-2 border-t block md:table-cell">{formData._id}</td>
//                         <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
//                         <td className="p-2 border-t block md:table-cell">{formData.skill?.skillCategory}</td>
//                         <td className="p-2 border-t block md:table-cell">{formData.skill?.profileName}</td>
//                         <td className="p-2 border-t block md:table-cell">{formData.skill?.preferredLanguage}</td>
//                         <td className="p-2 border-t block md:table-cell">{formData.courseDescription}</td>
//                         <td className="p-2 border-t block md:table-cell">${formData.pdfPrice}</td>
//                         <td className="p-2 border-t block md:table-cell">
//                           <button
//                             onClick={() => toggleChapters(formData._id)}
//                             className="text-teal-500 hover:underline"
//                           >
//                             {expandedRows[formData._id] ? 'Hide Chapters' : 'View Chapters'}
//                           </button>
//                         </td>
//                       </tr>
//                       {expandedRows[formData._id] && (
//                         <tr className="block md:table-row">
//                           <td colSpan="8" className="p-2 border-t block md:table-cell">
//                             <div className="mt-2 space-y-2">
//                               {[...Array(10)].map((_, index) => (
//                                 formData[`chapter${index + 1}`] && (
//                                   <a
//                                     key={index}
//                                     href={`http://localhost:8714/pdfUploads/${formData[`chapter${index + 1}`]}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="block text-teal-500 hover:underline"
//                                   >
//                                     Chapter {index + 1} PDF
//                                   </a>
//                                 )
//                               ))}
//                             </div>
//                           </td>
//                         </tr>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         )}

//         {activeTab === 'payments' && (
//           <section className="payments-section">
//             <h2 className="text-xl font-semibold text-purple-900 mb-4">Payment Details</h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full border-collapse block md:table">
//                 <thead className="block md:table-header-group">
//                   <tr className="border-b-2 border-gray-200 block md:table-row">
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Payment ID</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Payer Email</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Instructor Email</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Total Amount</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Admin Amount</th>
//                     <th className="p-2 text-left bg-gray-50 md:table-cell">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="block md:table-row-group">
//                   {payments.map((payment) => (
//                     <tr key={payment._id} className="block md:table-row">
//                       <td className="p-2 border-t block md:table-cell">{payment._id}</td>
//                       <td className="p-2 border-t block md:table-cell">{payment.payerEmail}</td>
//                       <td className="p-2 border-t block md:table-cell">{payment.instructorEmail}</td>
//                       <td className="p-2 border-t block md:table-cell">${payment.totalAmount}</td>
//                       <td className="p-2 border-t block md:table-cell">${payment.adminAmount}</td>
//                       <td className="p-2 border-t block md:table-cell">
//                         <button
//                           onClick={() => sendEmailToInstructor(payment.instructorEmail)}
//                           className="bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600"
//                         >
//                           Mail to Instructor
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './AdminDashboard.css';
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
        const formDataResponse = await axios.get('http://localhost:8714/api/formdata');
        setFormDatas(formDataResponse.data);

        const skillsResponse = await axios.get('http://localhost:8714/api/skills');
        setSkills(skillsResponse.data);

        const paymentResponse = await axios.get('http://localhost:8714/payment');
        setPayments(paymentResponse.data.payments);

        const userResponse = await axios.get('http://localhost:8714/api/auth/admin/users');
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
        await axios.put(`http://localhost:8714/api/auth/admin/users/${userId}/block`, { isBlocked: newStatus });
        
        alert(`User with ID ${userId} has been ${newStatus ? 'blocked' : 'unblocked'}!`);

        // Refresh user list after toggling block status
        const userResponse = await axios.get('http://localhost:8714/api/auth/admin/users');
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
      <div className="header bg-purple-900 text-white w-full py-4 px-5 rounded-lg mt-20 shadow-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="tabs flex">
          <button
            className={`px-4 py-2 rounded-l-lg ${activeTab === 'formdata' ? 'bg-teal-500' : 'bg-purple-700'}`}
            onClick={() => setActiveTab('formdata')}
          >
            Form Data
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${activeTab === 'payments' ? 'bg-teal-500' : 'bg-purple-700'}`}
            onClick={() => setActiveTab('payments')}
          >
            Payments
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${activeTab === 'users' ? 'bg-teal-500' : 'bg-purple-700'}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
        </div>
      </div>

      <div className="content w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
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
                          <td colSpan="8" className="p-2 border-t block md:table-cell">
                            <div className="mt-2 space-y-2">
                              {[...Array(10)].map((_, index) => (
                                formData[`chapter${index + 1}`] && (
                                  <a
                                    key={index}
                                    href={`http://localhost:8714/pdfUploads/${formData[`chapter${index + 1}`]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-teal-500 hover:underline"
                                  >
                                    Chapter {index + 1} PDF
                                  </a>
                                )
                              ))}
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
                  {payments.map((payment) => (
                    <tr key={payment._id} className="block md:table-row">
                      <td className="p-2 border-t block md:table-cell">{payment._id}</td>
                      <td className="p-2 border-t block md:table-cell">{payment.payerEmail}</td>
                      <td className="p-2 border-t block md:table-cell">{payment.instructorEmail}</td>
                      <td className="p-2 border-t block md:table-cell">${payment.totalAmount}</td>
                      <td className="p-2 border-t block md:table-cell">${payment.adminAmount}</td>
                      <td className="p-2 border-t block md:table-cell">
                        <button
                          onClick={() => {
                            console.log("Sending email to:", payment.instructorEmail); // Log email before sending
                            sendEmailToInstructor(payment.instructorEmail);
                          }}
                          className="bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600"
                        >
                          Mail to Instructor
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
          {users.map((user) => (
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
                  className={`px-2 py-1 rounded ${user.isBlocked ? 'bg-green-500' : 'bg-red-500'} text-white hover:${user.isBlocked ? 'bg-green-600' : 'bg-red-600'}`}
                >
                  {user.isBlocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
