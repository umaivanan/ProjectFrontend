

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { SkillContext } from '../context/SkillContext';
// import { useNavigate } from 'react-router-dom';  // Add useNavigate for navigation
// import lockIcon from '../assets/lo2.jpg'; // Add your lock icon image path here
// import CryptoJS from 'crypto-js';
// import StripeCheckout from "react-stripe-checkout";

// const DisplayData = ({ id, onClose }) => {  // onClose prop இங்கே பெறப்படுகிறது
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [loggedInEmail, setLoggedInEmail] = useState("");  
//   const [isLocked, setIsLocked] = useState(true);  // State to manage if PDFs are locked
  
//   const { skills, setSkills } = useContext(SkillContext); 
//   const userSkill = skills ? skills.find(skill => skill.formDataId === id) : null;

//   const [product, setProduct] = useState({
//     name: "buying pdf",
//     price: 0,
//     productBy: "instructors"
//   });

//   const navigate = useNavigate();  // Hook to navigate between pages

//   // Payment Handling Function
//   const makePayment = (token) => {
//     const body = {
//       token,
//       product,
//       payer: loggedInEmail,  
//       payingTo: userSkill ? userSkill.email : "Unknown",  
//     };

//     const headers = {
//       "Content-Type": "application/json"
//     };

//     return fetch("http://localhost:8713/payment", {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body)
//     })
//       .then((response) => {
//         console.log("Payment response:", response);
//         alert("Payment Successfully Completed!");  // Show success notification
//         setIsLocked(false);  // Unlock the PDFs after successful payment
//       })
//       .catch((err) => {
//         console.log("Payment error:", err);
//       });
//   };

//   useEffect(() => {
//     const fetchUserEmail = async () => {
//       const encryptedEmail = localStorage.getItem("userEmail"); 
  
//       if (encryptedEmail) {
//         try {
//           const secretKey = '12345';  
//           const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, secretKey);
//           const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8); 
//           setLoggedInEmail(decryptedEmail); 
//         } catch (error) {
//           console.error("Error decrypting email:", error);
//         }
//       } else {
//         console.error("No encrypted email found in localStorage");
//       }
//     };
//     fetchUserEmail();
//   }, []);

//   useEffect(() => {
//     if (id) {  
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8713/api/formdata/${id}`);
//           setData(response.data);  

//           if (response.data.pdfPrice) {
//             setProduct({
//               name: "buying pdf",
//               price: response.data.pdfPrice * 100, 
//               productBy: "instructors"
//             });
//           }
  
//         } catch (error) {
//           setError('Error fetching data');
//           console.error(error);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchData();
//     } else {
//       setError("Invalid ID or ID not found");
//     }
//   }, [id]);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const response = await axios.get('http://localhost:8713/api/skills'); 
//         setSkills(response.data);  
//       } catch (error) {
//         console.error('Error fetching skills:', error);
//       }
//     };
//     fetchSkills();
//   }, [setSkills]);

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   const isAuthorizedUser = userSkill && userSkill.email === loggedInEmail && userSkill.formDataId === data._id;

//   // Close function with navigation to 'list' page
//   const handleClose = () => {
//     if (onClose && typeof onClose === 'function') {  // onClose பிழையின்றி function என சரிபார்க்கிறது
//       onClose();  // Call the onClose function from parent
//       navigate('/list');  // Navigate to the list page
//     } else {
//       console.error("onClose is not a function or not provided");
//     }
//   };

//   return (

//     // <div className="data-display-container fixed inset-0 flex items-center justify-center mt-[10%] bg-gray-800   first-line:bg-opacity-50 z-50">
//     // <div className=" mt-[10%] mb-[8%] py-2 first-line:bg-opacity-50 overflow-y-auto h-[90vh] z-50">
//     <div
//     className=" py-2 first-line:bg-opacity-50 overflow-y-auto h-[120vh] z-50"
//     style={{
//       scrollbarWidth: 'thin', // For Firefox
//       scrollbarColor: '#888 #e0e0e0', // Track color (light gray) and thumb color (dark gray)

    
//     }}
    
//   >
//     {/* <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-full sm:w-[85%] mx-auto relative overflow-y-auto h-[90vh]"> */}
//     <div
//   className="popup-content mt-[30%] mb-[20%] bg-white p-6 rounded-lg shadow-lg mx-auto relative "
//   style={{ width: '700px', maxWidth: '1000px' }}
// >

//       <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">
//         {/* Form Data Display for User {id} */}
//       </h1>
  
//       {/* Content sections aligned one by one */}
//       <div className="space-y-8 h-full">
//         {/* Course Information Section */}
//         <div className="user-info-section border border-blue-500 p-4 rounded-lg shadow-md w-full">
//           <h2 className="text-lg font-bold mb-2 text-blue-600">Course Information</h2>
//           <div className="space-y-2">
//             <p><strong>Course Description:</strong> {data.courseDescription}</p>
//             <p><strong>Course Duration:</strong> {data.courseDuration}</p>
//             <p><strong>Target Audience:</strong> {data.targetAudience}</p>
//             <p><strong>Course Category:</strong> {data.courseCategory}</p>
//             <p><strong>Languages:</strong> {data.languages}</p>
//             <p><strong>PDF Price:</strong> ${data.pdfPrice}</p>
//           </div>
//           {data.image && (
//             <div className="image-section mt-4">
//               <h3>Course Image</h3>
//               <img
//                 src={`http://localhost:8713/imageUploads/${data.image}`}
//                 alt="Course uploaded"
//                 className="rounded-lg w-full h-60 object-cover"
//               />
//             </div>
//           )}
//         </div>
  
//         {/* PDF Links Section */}
//         <div className="pdf-links-section border border-blue-500 p-4 rounded-lg shadow-md w-full">
//           <h2 className="text-lg font-bold mb-2 text-blue-600">PDF Links</h2>
  
//           {data.roadmapIntroduction && (
//             <div className="pdf-card mb-4">
//               <a
//                 href={`http://localhost:8713/pdfUploads/${data.roadmapIntroduction}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-500 text-white p-2 rounded block text-center"
//               >
//                 View Roadmap Introduction
//               </a>
//             </div>
//           )}
  
//           {[
//             'firstChapter',
//             'secondChapter',
//             'thirdChapter',
//             'fourthChapter',
//             'fifthChapter',
//             'sixthChapter',
//             'seventhChapter',
//             'eighthChapter',
//             'ninthChapter',
//             'tenthChapter',
//           ].map((chapter, index) =>
//             data[chapter] ? (
//               <div className="pdf-card mb-4" key={index}>
//                 {index < 3 || !isLocked ? (
//                   <a
//                     href={`http://localhost:8713/pdfUploads/${data[chapter]}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-green-500 text-white p-2 rounded block text-center"
//                   >
//                     View {chapter.replace('Chapter', ' Chapter ')}
//                   </a>
//                 ) : (
//                   <div className="flex items-center justify-center p-2 bg-gray-300 rounded">
//                     <img src={lockIcon} alt="Locked" className="w-5 h-5 mr-2" />
//                     <p>Locked</p>
//                   </div>
//                 )}
//               </div>
//             ) : null
//           )}
  
//           <StripeCheckout
//             name="Buying PDF"
//             amount={product.price}
//             stripeKey="pk_test_51Q0z3OIDR6fHncujf4V778OtQb2gJHqfP54FvBGnuvugIcT4fSmXMDSn4qIkkKJ5pw6aGRdwyluYJsGGsH1kLN9s00c1SapMSi"
//             token={makePayment}
//           >
//             <button className="payment-button bg-green-500 text-white p-2 rounded mt-4 w-full">
//               Make Payment to Unlock PDFs ${data.pdfPrice}
//             </button>
//           </StripeCheckout>
//         </div>
  
//         {/* Profile Information Section */}
//         {/* {userSkill && (
//           <div className="profile-section border border-blue-500 p-4 rounded-lg shadow-md w-full">
//             <h2 className="text-lg font-bold mb-2 text-blue-600">Profile Information</h2>
//             <div className="space-y-2">
//               <p><strong>Profile Name:</strong> {userSkill.profileName}</p>
//               <p><strong>Preferred Language:</strong> {userSkill.preferredLanguage}</p>
//               <p><strong>Educational Background:</strong> {userSkill.educationalBackground}</p>
//               {userSkill.profilePicture && (
//                 <img
//                   src={`http://localhost:8713${userSkill.profilePicture}`}
//                   alt={userSkill.profileName}
//                   className="rounded-full mt-4 w-40 h-40 object-cover"
//                 />
//               )}
//             </div>
//           </div>
//         )} */}
//       </div>
  
//       <button
//         className="close-button bg-red-500 text-white p-2 rounded-full mt-4 absolute top-4 right-4"
//         onClick={handleClose}
//       >
//         Close
//       </button>
//     </div>
//   </div>
  
//   );
// };

// export default DisplayData;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SkillContext } from '../context/SkillContext';
import { useNavigate } from 'react-router-dom';  // Add useNavigate for navigation
import lockIcon from '../assets/lo2.jpg'; // Add your lock icon image path here
import CryptoJS from 'crypto-js';
import StripeCheckout from "react-stripe-checkout";

const DisplayData = ({ id, onClose }) => {  // onClose prop இங்கே பெறப்படுகிறது
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [loggedInEmail, setLoggedInEmail] = useState("");  
  const [isLocked, setIsLocked] = useState(true);  // State to manage if PDFs are locked
  
  const { skills, setSkills } = useContext(SkillContext); 
  const userSkill = skills ? skills.find(skill => skill.formDataId === id) : null;

  const [product, setProduct] = useState({
    name: "buying pdf",
    price: 0,
    productBy: "instructors"
  });

  const navigate = useNavigate();  // Hook to navigate between pages

  // Payment Handling Function
  const makePayment = (token) => {
    const body = {
      token,
      product,
      payer: loggedInEmail,  
      payingTo: userSkill ? userSkill.email : "Unknown",  
    };

    const headers = {
      "Content-Type": "application/json"
    };

    return fetch("http://localhost:8713/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then((response) => {
        console.log("Payment response:", response);
        alert("Payment Successfully Completed!");  // Show success notification
        setIsLocked(false);  // Unlock the PDFs after successful payment
      })
      .catch((err) => {
        console.log("Payment error:", err);
      });
  };

  useEffect(() => {
    const fetchUserEmail = async () => {
      const encryptedEmail = localStorage.getItem("userEmail"); 
  
      if (encryptedEmail) {
        try {
          const secretKey = '12345';  
          const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, secretKey);
          const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8); 
          setLoggedInEmail(decryptedEmail); 
        } catch (error) {
          console.error("Error decrypting email:", error);
        }
      } else {
        console.error("No encrypted email found in localStorage");
      }
    };
    fetchUserEmail();
  }, []);

  useEffect(() => {
    if (id) {  
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8713/api/formdata/${id}`);
          setData(response.data);  

          if (response.data.pdfPrice) {
            setProduct({
              name: "buying pdf",
              price: response.data.pdfPrice * 100, 
              productBy: "instructors"
            });
          }
  
        } catch (error) {
          setError('Error fetching data');
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setError("Invalid ID or ID not found");
    }
  }, [id]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:8713/api/skills'); 
        setSkills(response.data);  
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchSkills();
  }, [setSkills]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const isAuthorizedUser = userSkill && userSkill.email === loggedInEmail && userSkill.formDataId === data._id;

  // Close function with navigation to 'list' page
  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {  // onClose பிழையின்றி function என சரிபார்க்கிறது
      onClose();  // Call the onClose function from parent
      navigate('/list');  // Navigate to the list page
    } else {
      console.error("onClose is not a function or not provided");
    }
  };

  return (

    <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-full sm:w-[85%] mx-auto  mt-[120%]relative overflow-y-auto h-[80vh]"
    style={{ width: '600px', maxWidth: '1200px',borderRadius: '1px' }}>
      <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">
        {/* Form Data Display for User {id} */}
      </h1>
  
      {/* Content sections aligned one by one */}
      <div className="space-y-8 h-full">
        {/* Course Information Section */}
        <div className="user-info-section border border-blue-500 p-4 rounded-lg shadow-md w-full">
          <h2 className="text-lg font-bold mb-2 text-blue-600">Course Information</h2>
          <div className="space-y-2">
            <p><strong>Course Description:</strong> {data.courseDescription}</p>
            <p><strong>Course Duration:</strong> {data.courseDuration}</p>
            <p><strong>Target Audience:</strong> {data.targetAudience}</p>
            <p><strong>Course Category:</strong> {data.courseCategory}</p>
            <p><strong>Languages:</strong> {data.languages}</p>
            <p><strong>PDF Price:</strong> ${data.pdfPrice}</p>
          </div>
          {data.image && (
            <div className="image-section mt-4">
              <h3>Course Image</h3>
              <img
                src={`http://localhost:8713/imageUploads/${data.image}`}
                alt="Course uploaded"
                className="rounded-lg w-full h-60 object-cover"
              />
            </div>
          )}
        </div>
  
        {/* PDF Links Section */}
        <div className="pdf-links-section border border-blue-500 p-4 rounded-lg shadow-md w-full">
          <h2 className="text-lg font-bold mb-2 text-blue-600">PDF Links</h2>
  
          {data.roadmapIntroduction && (
            <div className="pdf-card mb-4">
              <a
                href={`http://localhost:8713/pdfUploads/${data.roadmapIntroduction}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 rounded block text-center"
              >
                View Roadmap Introduction
              </a>
            </div>
          )}
  
          {[
            'firstChapter',
            'secondChapter',
            'thirdChapter',
            'fourthChapter',
            'fifthChapter',
            'sixthChapter',
            'seventhChapter',
            'eighthChapter',
            'ninthChapter',
            'tenthChapter',
          ].map((chapter, index) =>
            data[chapter] ? (
              <div className="pdf-card mb-4" key={index}>
                {index < 3 || !isLocked ? (
                  <a
                    href={`http://localhost:8713/pdfUploads/${data[chapter]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-2 rounded block text-center"
                  >
                    View {chapter.replace('Chapter', ' Chapter ')}
                  </a>
                ) : (
                  <div className="flex items-center justify-center p-2 bg-gray-300 rounded">
                    <img src={lockIcon} alt="Locked" className="w-5 h-5 mr-2" />
                    <p>Locked</p>
                  </div>
                )}
              </div>
            ) : null
          )}
  
          <StripeCheckout
            name="Buying PDF"
            amount={product.price}
            stripeKey="pk_test_51Q0z3OIDR6fHncujf4V778OtQb2gJHqfP54FvBGnuvugIcT4fSmXMDSn4qIkkKJ5pw6aGRdwyluYJsGGsH1kLN9s00c1SapMSi"
            token={makePayment}
          >
            <button className="payment-button bg-green-500 text-white p-2 rounded mt-4 w-full">
              Make Payment to Unlock PDFs ${data.pdfPrice}
            </button>
          </StripeCheckout>
        </div>
  
        {/* Profile Information Section */}
        {/* {userSkill && (
          <div className="profile-section border border-blue-500 p-4 rounded-lg shadow-md w-full">
            <h2 className="text-lg font-bold mb-2 text-blue-600">Profile Information</h2>
            <div className="space-y-2">
              <p><strong>Profile Name:</strong> {userSkill.profileName}</p>
              <p><strong>Preferred Language:</strong> {userSkill.preferredLanguage}</p>
              <p><strong>Educational Background:</strong> {userSkill.educationalBackground}</p>
              {userSkill.profilePicture && (
                <img
                  src={`http://localhost:8713${userSkill.profilePicture}`}
                  alt={userSkill.profileName}
                  className="rounded-full mt-4 w-40 h-40 object-cover"
                />
              )}
            </div>
          </div>
        )} */}
      </div>
  
      <button
        className="close-button bg-red-500 text-white p-2 rounded-full mt-4 absolute top-4 right-4"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  
  );
};

export default DisplayData;