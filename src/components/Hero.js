// import React from "react";
// // Importing images at the top
// import placeholder from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 20.41.52 - A full-screen image of a single person studying with a roadmap or study plan in front of them, inspired by the color palette of the provided hero imag.webp';
// import placeholder2 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 20.49.12 - A natural-looking photo of a group of students learning web development together. They are sitting around a table with laptops, textbooks, and papers .webp';
// import placeholder3 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/a-man-reads-a-book-1024x683.jpg';
// import growthMarketing from '/home/ukijaffna/um/swapSmartFrontend/src/assets/a-man-reads-a-book-1024x683.jpg';
// import financingOptions from '/home/ukijaffna/um/swapSmartFrontend/src/assets/7-11-19-story-time.png';
// import teacher1 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/7-11-19-story-time.png';
// import teacher2 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/apus-574x420.jpg';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

// // Placeholder Button component using Tailwind classes
// const Button = ({ children, className, ...props }) => {
//   return (
//     <button
//       {...props}
//       className={`py-2 px-6 rounded-full ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// // Placeholder Card component structure
// const Card = ({ children }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       {children}
//     </div>
//   );
// };

// const CardHeader = ({ children }) => {
//   return <div className="p-4">{children}</div>;
// };

// const CardContent = ({ children }) => {
//   return <div className="p-4">{children}</div>;
// };

// const CardFooter = ({ children }) => {
//   return <div className="p-4">{children}</div>;
// };

// const CardTitle = ({ children }) => {
//   return <h3 className="text-xl font-bold mb-2">{children}</h3>;
// };

// const Badge = ({ children, className }) => {
//   return (
//     <div className={`inline-block py-1 px-4 rounded-full ${className}`}>
//       {children}
//     </div>
//   );
// };

// const Hero = () => {

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[800px] bg-cover bg-center mt-[4rem]">
//       {/* Adding the image with img tag instead of background image */}
//       <img
//         src={placeholder}
//         alt="Placeholder image"
//         className="absolute inset-0 w-full h-full object-cover" // This will make the image cover the section area
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
//         <h1 className="text-10xl md:text-6xl font-bold text-white mb-4">
//         Roadmap enhances <br />learning, structure, and success..
//         </h1>
//         <p className="text-xl text-white mb-8">improve day by day.</p>
//         <Button className="bg-purple-600 hover:bg-purple-700 text-white">
//           Discover More
//         </Button>
//       </div>
//     </section>

//       {/* Trusted Companies Section */}
//       <section className="bg-purple-600 py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center items-center space-x-8">
//             {['numerous collection of roadmaps'].map((company) => (
//               <div key={company} className="text-white font-bold text-xl">{company}</div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bootcamp Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">Join a career-changing bootcamp</h2>
//           <p className="text-center text-gray-600 mb-12">20,000+ alumni. Full-time programs.</p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {['Web Development', 'Data Science & AI', 'Data Engineering', 'Data Analytics'].map((course) => (
//               <Card key={course}>
//                 <CardHeader>
//                   <img src={placeholder2} alt={course} className="w-full h-40 object-cover" />
//                 </CardHeader>
//                 <CardContent>
//                   <CardTitle>{course}</CardTitle>
//                 </CardContent>
//                 <CardFooter>
//                   <Button className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
//                     Learn More
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Growth Marketing Promo */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:w-1/2 p-8">
//               <h2 className="text-3xl font-bold text-purple-600 mb-4">The way of how man growing while reading</h2>
//               <p className="text-gray-600 mb-6">Learn the importanceof roadmaps.</p>
//               <Button className="bg-purple-600 hover:bg-purple-700 text-white">Learn more</Button>
//             </div>
//             <div className="md:w-1/2">
//               <img src={growthMarketing} alt="Growth Marketing" className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Ranked Tech Bootcamp */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Everyone learn something and earn something</h2>
//           <p className="text-gray-600 mb-8">Recognized for excellence in education</p>
//           <div className="flex justify-center space-x-4">
//             {['learn as a student, earn as a instructor'].map((badge) => (
//               <Badge key={badge} className="text-purple-600 bg-purple-100">
//                 {badge}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-100 lg:wr-[120%]">
//         <div className="w-[90%] lg:w-[50%] mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//           Reading enhances knowledge, sharpens skills, and opens doors to  career advancement opportunities
//           </h2>
//           <p className="text-center text-gray-600 mb-12">
//             Our experienced instructors are dedicated to your success
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[1, 2].map((card) => (
//               <Card key={card}>
//                 <CardHeader>
//                   <img
//                     src={card === 1 ? teacher1 : teacher2}
//                     alt={`Teacher ${card}`}
//                     className="w-full h-40 object-cover"
//                   />
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600">
//                     Learn from industry experts who are passionate about teaching and mentoring.
//                   </p>
//                 </CardContent>
//                 <CardFooter>
//                   <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
//                     Learn More
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Sections */}
//       {/* Top Section: Find the Right Financing Options */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto md:flex items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <h2 className="text-3xl font-bold mb-4"> Our goal is to make quality  education accessible to everyone and affordable for everyone.</h2>
//             <p className="text-gray-600 mb-6">
//                creating a own earing.
//             </p>
//             <Button className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white border">
//               Explore Financing
//             </Button>
//           </div>
//           <div className="md:w-1/2">
//             <img
//               src={financingOptions}
//               alt="Financing Options"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Middle Section: Enterprise Looking for Tech Skills */}
//       <section className="bg-purple-600 py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-6">we are looking for everyone become a talented instructors</h2>
//           <Button className="border-white text-white hover:bg-white hover:text-purple-600 border">
//             Learn More
//           </Button>
//         </div>
//       </section>

//       {/* Bottom Section: More Than a Bootcamp */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Mutual benefict users no restriction</h2>
//           <p className="text-gray-600 mb-12">Reading habits vary across different demographics, with notable distinctions in gender and age</p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <p className="text-4xl font-bold text-purple-600 mb-2">95%</p>
//               <p className="text-gray-600">Employment rate</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-purple-600 mb-2">1,500+</p>
//               <p className="text-gray-600">Partner companies</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-purple-600 mb-2">100k+</p>
//               <p className="text-gray-600">Alumni worldwide</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="flex justify-around p-8 bg-white">
//       {/* Location */}
//       <div className="flex flex-col items-center bg-purple-900 p-6 rounded-lg w-64 shadow-lg">
//         <FaMapMarkerAlt className="text-white text-4xl mb-4" />
//         <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
//         <p className="text-white text-center font-Demographics">
//           Sunshine Business Park <br />
//           Srilanka, jaffna
//         </p>
//       </div>

//       {/* Contact */}
//       <div className="flex flex-col items-center bg-purple-900 p-6 rounded-lg w-64 shadow-lg">
//         <FaPhoneAlt className="text-white text-4xl mb-4" />
//         <h3 className="text-white font-semibold text-lg mb-2">Contact</h3>
//         <p className="text-white text-center font-Demographics">
//           +880 555-0108 <br />
//           +880 555-0117
//         </p>
//       </div>

//       {/* Email */}
//       <div className="flex flex-col items-center bg-purple-900 p-6 rounded-lg w-64 shadow-lg">
//         <FaEnvelope className="text-white text-4xl mb-4" />
//         <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
//         <p className="text-white text-center font-Demographics">
//           swapsmart@gmail.com<br />
//           smartswap@gmail.com
//         </p>
//       </div>

//       {/* Visit Between */}
//       <div className="flex flex-col items-center bg-purple-900 p-6 rounded-lg w-64 shadow-lg">
//         <FaClock className="text-white text-4xl mb-4" />
//         <h3 className="text-white font-semibold text-lg mb-2">Visit Between</h3>
//         <p className="text-white text-center font-Demographics">
//           Mon - Sat: 8:00-5:00 <br />
//           Sunday: Closed
//         </p>
//       </div>
//     </div>
//       <footer className="bg-purple-900 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="w-1/3 text-center">
//             <a href="/home" className="hover:underline">
//               Home
//             </a>
//           </div>
//           <div className="w-1/3 text-center">
//             <a href="/about" className="hover:underline">
//               About
//             </a>
//           </div>
//           <div className="w-1/3 text-center">
//             <a href="/contact" className="hover:underline">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Hero;
// import React from "react";
// import { useNavigate,useLocation } from "react-router-dom"; // Import useNavigate from react-router-dom

// // Importing images at the top
// import placeholder from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 20.41.52 - A full-screen image of a single person studying with a roadmap or study plan in front of them, inspired by the color palette of the provided hero imag.webp';
// import webDevImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/website-development-banner_33099-1687.avif';
// import dataScienceImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/what_is_Data_Science.avif';
// import dataEngineeringImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/maxresdefault (1).jpg';
// import dataAnalyticsImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/Nalytics_Legal-Big-Data_Implementing-LegalTech_roadmap-1024x679.png';

// import growthMarketing from '/home/ukijaffna/um/swapSmartFrontend/src/assets/a-man-reads-a-book-1024x683.jpg';
// import financingOptions from '/home/ukijaffna/um/swapSmartFrontend/src/assets/7-11-19-story-time.png';
// import teacher1 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/7-11-19-story-time.png';
// import teacher2 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/apus-574x420.jpg';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube,  } from 'react-icons/fa';
// import { FaChalkboardTeacher, FaHeadset, FaQuestionCircle } from 'react-icons/fa'; // Importing required icons



// // Placeholder Button component using Tailwind classes
// const Button = ({ children, className, ...props }) => {
//   return (
//     <button
//       {...props}
//       className={`py-2 px-6 rounded-full ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// // Placeholder Card component structure
// const Card = ({ children }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       {children}
//     </div>
//   );
// };

// const CardHeader = ({ children }) => {
//   return <div className="p-4">{children}</div>;
// };

// const CardContent = ({ children }) => {
//   return <div className="p-4">{children}</div>;
// };

// const CardFooter = ({ children }) => {
//   return <div className="p-4">{children}</div>;
// };

// const CardTitle = ({ children }) => {
//   return <h3 className="text-xl font-bold mb-2">{children}</h3>;
// };

// const Badge = ({ children, className }) => {
//   return (
//     <div className={`inline-block py-1 px-4 rounded-full ${className}`}>
//       {children}
//     </div>
//   );
// };

// const Hero = () => {
//   const navigate = useNavigate(); // Initialize the navigate function
//   const location = useLocation();


//   // Function to handle navigation to the /learnmore page
//   const handleNavigateLearnMore = () => {
//     navigate('/learnmore'); // Navigate to /learnmore
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       {location.pathname === '/' && (

//       <section className="relative h-[800px] bg-cover bg-center mt-[4rem]">
//         {/* Adding the image with img tag instead of background image */}
//         <img
//           src={placeholder}
//           alt="Placeholder image"
//           className="absolute inset-0 w-full h-full object-cover" // This will make the image cover the section area
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
//           <h1 className="text-10xl md:text-6xl font-bold text-white mb-4">
//             Roadmap enhances <br />learning, structure, and success..
//           </h1>
//           <p className="text-xl text-white mb-8">Improve day by day.</p>
//           <Button
//             className="bg-purple-600 hover:bg-purple-700 text-white"
//             onClick={handleNavigateLearnMore} // Navigate to /learnmore
//           >
//             Discover More
//           </Button>
//         </div>
//       </section>
//       )}
       
//       {/* Trusted Companies Section */}
//       <section className="bg-purple-600 py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center items-center space-x-8">
//             {['numerous collection of roadmaps'].map((company) => (
//               <div key={company} className="text-white font-bold text-xl">{company}</div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bootcamp Section */}
//       <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-4">Stay Connected with SwapSmart</h2>
//         <p className="text-center text-gray-600 mb-12">If you love learning through reading lots of documents</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { title: 'Web Development', image: webDevImage },
//             { title: 'Data Science & AI', image: dataScienceImage },
//             { title: 'Data Engineering', image: dataEngineeringImage },
//             { title: 'Data Analytics', image: dataAnalyticsImage }
//           ].map((course, index) => (
//             <Card key={index}>
//               <CardHeader>
//                 <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
//               </CardHeader>
//               <CardContent>
//                 <CardTitle>{course.title}</CardTitle>
//               </CardContent>
//               <CardFooter>
//                 <Button
//                   className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
//                   onClick={handleNavigateLearnMore} // Navigate to /learnmore
//                 >
//                   Learn More
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>

//       {/* Growth Marketing Promo */}
//       <section className="py-16" style={{ background: 'linear-gradient(to bottom, #3B0944 50%, #F7F7F7 100%)' }}>

//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:w-1/2 p-8">
//               <h2 className="text-3xl font-bold text-purple-600 mb-4">The way of how man growing while reading</h2>
//               <p className="text-gray-600 mb-6">Learn the importance of roadmaps.</p>
//               <Button
//                 className="bg-purple-600 hover:bg-purple-700 text-white"
//                 onClick={handleNavigateLearnMore} // Navigate to /learnmore
//               >
//                 Learn more
//               </Button>
//             </div>
//             <div className="md:w-1/2">
//               <img src={growthMarketing} alt="Growth Marketing" className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Ranked Tech Bootcamp */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Everyone learn something and earn something</h2>
//           <p className="text-gray-600 mb-8">Recognized for excellence in education</p>
//           <div className="flex justify-center space-x-4">
//             {['learn as a student, earn as a instructor'].map((badge) => (
//               <Badge key={badge} className="text-purple-600 bg-purple-100">
//                 {badge}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-100 lg:wr-[120%]">
//         <div className="w-[90%] lg:w-[50%] mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             Reading enhances knowledge, sharpens skills, and opens doors to career advancement opportunities
//           </h2>
//           <p className="text-center text-gray-600 mb-12">
//             Our experienced instructors are dedicated to your success
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[1, 2].map((card) => (
//               <Card key={card}>
//                 <CardHeader>
//                   <img
//                     src={card === 1 ? teacher1 : teacher2}
//                     alt={`Teacher ${card}`}
//                     className="w-full h-40 object-cover"
//                   />
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600">
//                     Learn from industry experts who are passionate about teaching and mentoring.
//                   </p>
//                 </CardContent>
//                 <CardFooter>
//                   <Button
//                     className="w-full bg-purple-600 hover:bg-purple-700 text-white"
//                     onClick={handleNavigateLearnMore} // Navigate to /learnmore
//                   >
//                     Learn More
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Sections */}
//       {/* Top Section: Find the Right Financing Options */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto md:flex items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <h2 className="text-3xl font-bold mb-4">Our goal is to make quality education accessible to everyone and affordable for everyone.</h2>
//             <p className="text-gray-600 mb-6">
//               Creating your own earnings.
//             </p>
//             <Button
//               className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white border"
//               onClick={handleNavigateLearnMore} // Navigate to /learnmore
//             >
//               Explore Financing
//             </Button>
//           </div>
//           <div className="md:w-1/2">
//             <img
//               src={financingOptions}
//               alt="Financing Options"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Middle Section: Enterprise Looking for Tech Skills */}
//       <section className="bg-purple-600 py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-6">We are looking for everyone to become a talented instructor</h2>
//           <Button
//             className="border-white text-white hover:bg-white hover:text-purple-600 border"
//             onClick={handleNavigateLearnMore} // Navigate to /learnmore
//           >
//             Learn More
//           </Button>
//         </div>
//       </section>

//       {/* Bottom Section: More Than a Bootcamp */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Mutual benefit users, no restrictions</h2>
//           <p className="text-gray-600 mb-12">Reading habits vary across different demographics, with notable distinctions in gender and age.</p>
//           {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <p className="text-4xl font-bold text-purple-600 mb-2">95%</p>
//               <p className="text-gray-600">Employment rate</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-purple-600 mb-2">1,500+</p>
//               <p className="text-gray-600">Partner companies</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-purple-600 mb-2">100k+</p>
//               <p className="text-gray-600">Alumni worldwide</p>
//             </div>
//           </div> */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//   <div className="flex flex-col items-center">
//     <FaChalkboardTeacher className="text-purple-600 text-6xl mb-4" />  {/* Icon for Highly Experienced */}
//     <p className="text-gray-600 font-bold">Highly Experienced</p>
//   </div>
//   <div className="flex flex-col items-center">
//     <FaHeadset className="text-purple-600 text-6xl mb-4" />  {/* Icon for Dedicated Support */}
//     <p className="text-gray-600 font-bold">Dedicated Support</p>
//   </div>
//   <div className="flex flex-col items-center">
//     <FaQuestionCircle className="text-purple-600 text-6xl mb-4" />  {/* Icon for Question, Quiz & Course */}
//     <p className="text-gray-600 font-bold">Question, Quiz & Course</p>
//   </div>
// </div>
//         </div>
//       </section>

      
//       <footer className=" bg-purple-600 text-purple-600 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* Left section */}
//           <div className="text-white">
//             <h2 className="text-xl font-bold mb-4">Swap swapsmart</h2>
//             <p className="mb-4 flex items-center">
//               <FaPhoneAlt className="mr-2" />
//               +94 767217448
//             </p>
//             <p className="mb-4 flex items-center">
//               <FaEnvelope className="mr-2" />
//               swapsmart@gmail.com
//             </p>
//             <div className="flex space-x-4 text-white">
//                 <FaTwitter size={20} />
            
//                 <FaFacebookF size={20} />
            
//                 <FaLinkedinIn size={20} />
              
//                 <FaYoutube size={20} />
//             </div>
//           </div>

//           {/* Middle section */}
//           <div className="text-white mt-6 md:mt-0">
//             <ul>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Home</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Aboutus</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Contact</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline">Faq</a>
//               </li>
//             </ul>
//           </div>

//           {/* Right section */}
//           <div className="mt-6 md:mt-0 text-white">
//             <h3 className="mb-4">Subscribe to our Newsletter</h3>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Type something..."
//                 className="py-2 px-4 rounded-l-full focus:outline-none"
//               />
//               <button className=" bg-purple-600 text-purple-900 py-2 px-6 rounded-r-full hover:bg-gray-100">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Hero;

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Importing images
import placeholder from '/home/ukijaffna/um/swapSmartFrontend/src/assets/a059ab83-26d8-459e-917a-b198bacd3999.webp';
import webDevImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/website-development-banner_33099-1687.avif';
import dataScienceImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/what_is_Data_Science.avif';
import dataEngineeringImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/maxresdefault (1).jpg';
import dataAnalyticsImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/Nalytics_Legal-Big-Data_Implementing-LegalTech_roadmap-1024x679.png';

import growthMarketing from '/home/ukijaffna/um/swapSmartFrontend/src/assets/a-man-reads-a-book-1024x683.jpg';
import financingOptions from '/home/ukijaffna/um/swapSmartFrontend/src/assets/7-11-19-story-time.png';
import teacher1 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/7-11-19-story-time.png';
import teacher2 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/apus-574x420.jpg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube,  } from 'react-icons/fa';


import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChalkboardTeacher, FaHeadset, FaQuestionCircle } from 'react-icons/fa';

// Button component using Tailwind classes
const Button = ({ children, className, ...props }) => (
  <button {...props} className={`py-2 px-6 rounded-full ${className}`}>
    {children}
  </button>
);

// Card component structure
const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="p-4">{children}</div>;
const CardContent = ({ children }) => <div className="p-4">{children}</div>;
const CardFooter = ({ children }) => <div className="p-4">{children}</div>;
const CardTitle = ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>;

const Badge = ({ children, className }) => (
  <div className={`inline-block py-1 px-4 rounded-full ${className}`}>
    {children}
  </div>
);

const Hero = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Refs for scrollable sections
  const heroRef = useRef(null);  // Ref for the Hero section

  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Expose scroll functions to the parent component
  useImperativeHandle(ref, () => ({
    scrollToHome: () => heroRef.current.scrollIntoView({ behavior: 'smooth' }),  // Scroll to Hero

    scrollToAbout: () => aboutRef.current.scrollIntoView({ behavior: 'smooth' }),
    scrollToContact: () => contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }));

  // Function to navigate to the /learnmore page
  const handleNavigateLearnMore = () => {
    navigate('/learnmore');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {location.pathname === '/' && (

      <section ref={heroRef}className="relative h-[800px] bg-cover bg-center mt-[4rem]">
        {/* Adding the image with img tag instead of background image */}
        <img
          src={placeholder}
          alt="Placeholder image"
          className="absolute inset-0 w-full h-full object-cover" // This will make the image cover the section area
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-10xl md:text-6xl font-bold text-white mb-4">
            Roadmap enhances <br />learning, structure, and success..
          </h1>
          <p className="text-xl text-white mb-8">Improve day by day.</p>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={handleNavigateLearnMore} // Navigate to /learnmore
          >
            Discover More
          </Button>
        </div>
      </section>
      )}
       
      {/* Trusted Companies Section */}
      <section className="bg-purple-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            {['numerous collection of roadmaps'].map((company) => (
              <div key={company} className="text-white font-bold text-xl">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Section */}
      <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Stay Connected with SwapSmart</h2>
        <p className="text-center text-gray-600 mb-12">If you love learning through reading lots of documents</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Web Development', image: webDevImage },
            { title: 'Data Science & AI', image: dataScienceImage },
            { title: 'Data Engineering', image: dataEngineeringImage },
            { title: 'Data Analytics', image: dataAnalyticsImage }
          ].map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{course.title}</CardTitle>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  onClick={handleNavigateLearnMore} // Navigate to /learnmore
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>

      {/* Growth Marketing Promo */}
      <section className="py-16"ref={aboutRef} style={{ background: 'linear-gradient(to bottom, #9333EA 50%, #F7F7F7 100%)' }}>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">The way of how man growing while reading</h2>
              <p className="text-gray-600 mb-6">Learn the importance of roadmaps.</p>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={handleNavigateLearnMore} // Navigate to /learnmore
              >
                Learn more
              </Button>
            </div>
            <div className="md:w-1/2">
              <img src={growthMarketing} alt="Growth Marketing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Ranked Tech Bootcamp */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Everyone learn something and earn something</h2>
          <p className="text-gray-600 mb-8">Recognized for excellence in education</p>
          <div className="flex justify-center space-x-4">
            {['learn as a student, earn as a instructor'].map((badge) => (
              <Badge key={badge} className="text-purple-600 bg-purple-100">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 lg:wr-[120%]">
        <div className="w-[90%] lg:w-[50%] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Reading enhances knowledge, sharpens skills, and opens doors to career advancement opportunities
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our experienced instructors are dedicated to your success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((card) => (
              <Card key={card}>
                <CardHeader>
                  <img
                    src={card === 1 ? teacher1 : teacher2}
                    alt={`Teacher ${card}`}
                    className="w-full h-40 object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn from industry experts who are passionate about teaching and mentoring.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={handleNavigateLearnMore} // Navigate to /learnmore
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {/* Top Section: Find the Right Financing Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Our goal is to make quality education accessible to everyone and affordable for everyone.</h2>
            <p className="text-gray-600 mb-6">
              Creating your own earnings.
            </p>
            <Button
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white border"
              onClick={handleNavigateLearnMore} // Navigate to /learnmore
            >
              Explore Financing
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src={financingOptions}
              alt="Financing Options"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Middle Section: Enterprise Looking for Tech Skills */}
      <section className="bg-purple-600 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">We are looking for everyone to become a talented instructor</h2>
          <Button
            className="border-white text-white hover:bg-white hover:text-purple-600 border"
            onClick={handleNavigateLearnMore} // Navigate to /learnmore
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Bottom Section: More Than a Bootcamp */}
      <section ref={contactRef} className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mutual benefit users, no restrictions</h2>
          <p className="text-gray-600 mb-12">Reading habits vary across different demographics, with notable distinctions in gender and age.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="flex flex-col items-center">
    <FaChalkboardTeacher className="text-purple-600 text-6xl mb-4" />  {/* Icon for Highly Experienced */}
    <p className="text-gray-600 font-bold">Highly Experienced</p>
  </div>
  <div className="flex flex-col items-center">
    <FaHeadset className="text-purple-600 text-6xl mb-4" />  {/* Icon for Dedicated Support */}
    <p className="text-gray-600 font-bold">Dedicated Support</p>
  </div>
  <div className="flex flex-col items-center">
    <FaQuestionCircle className="text-purple-600 text-6xl mb-4" />  {/* Icon for Question, Quiz & Course */}
    <p className="text-gray-600 font-bold">Question, Quiz & Course</p>
  </div>
</div>
        </div>
      </section>

      
      <footer className=" bg-purple-600 text-purple-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section */}
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">Swap swapsmart</h2>
            <p className="mb-4 flex items-center">
              <FaPhoneAlt className="mr-2" />
              +94 767217448
            </p>
            <p className="mb-4 flex items-center">
              <FaEnvelope className="mr-2" />
              swapsmart@gmail.com
            </p>
            <div className="flex space-x-4 text-white">
                <FaTwitter size={20} />
            
                <FaFacebookF size={20} />
            
                <FaLinkedinIn size={20} />
              
                <FaYoutube size={20} />
            </div>
          </div>

          {/* Middle section */}
          <div className="text-white mt-6 md:mt-0">
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Aboutus</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Faq</a>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div className="mt-6 md:mt-0 text-white">
            <h3 className="mb-4">Subscribe to our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Type something..."
                className="py-2 px-4 rounded-l-full focus:outline-none"
              />
              <button className=" bg-purple-600 text-purple-900 py-2 px-6 rounded-r-full hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
});

export default Hero;