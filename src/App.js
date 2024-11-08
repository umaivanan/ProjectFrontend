// import './App.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { PayPalScriptProvider } from '@paypal/react-paypal-js';
// import { SkillProvider } from './context/SkillContext'; // Import SkillProvider
// import UpdateInfo from './components/UpdateInfo'; 
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import AdminDashboard from './components/AdminDashboard';
// import Blank from './components/Blank';
// import SkillForm from './components/SkillForm';
// import SkillList from './components/SkillList';
// import AdditionalInformation from './components/AdditionalInformation';
// import DisplayData from './components/DisplayData';
// // import PayPalButton from './components/PayPalButton';
// // import PaymentSuccess from './components/PaymentSuccess'; 
// import FormDataDetails from './components/FormDataDetails'; 
// import FileDisplay from './components/FileDisplay';  // Import FileDisplay from components folder
// import UserDashboard from './components/UserDashboard';
// import LearnMore from './components/LearnMore';




// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State for handling login status

//   return (
//     <SkillProvider>
//       {/* <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID", currency: "USD" }}> */}
//         <Router>
//           {/* Pass isLoggedIn and setIsLoggedIn to Navbar */}
//           <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/update-info/:id" element={<UpdateInfo />} />
//             <Route path="/register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />
//             <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//             <Route path="/blank" element={<Blank />} />
//             <Route path="/skill-form" element={<SkillForm />} />
//             <Route path="/additionalInformation" element={<AdditionalInformation />} />
//             <Route path="/list" element={<SkillList />} />
//             <Route path="/display-data/:id" element={<DisplayData />} />
//             <Route path="/file-display" element={<FileDisplay />} />
//             <Route path="learnmore" element={<LearnMore />} />


            
//             {/* <Route path="/paypal-button" element={<PayPalButton />} /> */}
//             {/* <Route path="/payment-success" element={<PaymentSuccess />} /> */}
//             <Route path="/formdata/:id" component={<FormDataDetails/>} />

//             <Route path="/user-dashboard" element={<UserDashboard />} />

//           </Routes>
//         </Router>
//       {/* </PayPalScriptProvider> */}
//     </SkillProvider>
//   );
// }

// export default App;
import './App.css';
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SkillProvider } from './context/SkillContext'; // Import SkillProvider
import UpdateInfo from './components/UpdateInfo'; 
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import Blank from './components/Blank';
import SkillForm from './components/SkillForm';
import SkillList from './components/SkillList';
import AdditionalInformation from './components/AdditionalInformation';
import DisplayData from './components/DisplayData';
import FormDataDetails from './components/FormDataDetails'; 
import FileDisplay from './components/FileDisplay'; // Import FileDisplay from components folder
import UserDashboard from './components/UserDashboard';
import LearnMore from './components/LearnMore';
import {  FaFacebook,FaTwitter, FaYoutube } from "react-icons/fa";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for handling login status
  const heroRef = useRef(null); // Reference to Hero component

  return (
    <SkillProvider>
      <Router>
        {/* Pass isLoggedIn and setIsLoggedIn to Navbar, along with heroRef */}
        <Navbar heroRef={heroRef} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Hero ref={heroRef} />} />
          <Route path="/update-info/:id" element={<UpdateInfo />} />
          <Route path="/register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/skill-form" element={<SkillForm />} />
          <Route path="/additionalInformation" element={<AdditionalInformation />} />
          <Route path="/list" element={<SkillList />} />
          <Route path="/display-data/:id" element={<DisplayData />} />
          <Route path="/file-display" element={<FileDisplay />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/formdata/:id" element={<FormDataDetails />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          
        </Routes>
        <Footer />
      </Router>
    </SkillProvider>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t bg-white">
    <div className="mx-auto w-full max-w-7xl px-6 py-5">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <a href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span>SwapSmart</span>
          </a>
          <nav className="flex gap-4 text-sm">
            <a className="text-gray-500 hover:text-gray-900" href="#">
              Home
            </a>
            <a className="text-gray-500 hover:text-gray-900" href="#">
              About
            </a>
            <a className="text-gray-500 hover:text-gray-900" href="#">
              Contact
            </a>
            <a className="text-gray-500 hover:text-gray-900" href="#">
              Careers
            </a>
            <a className="text-gray-500 hover:text-gray-900" href="#">
              Help
            </a>
            <a className="text-gray-500 hover:text-gray-900" href="#">
              Privacy
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="max-w-[240px] px-3 py-2 border rounded"
            placeholder="Enter your email"
            type="email"
          />
          <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-red-700">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm text-gray-500">
        <div>© 2024 YourCompanyName. All rights reserved.</div>
        <div className="flex gap-4">
          <a className="hover:text-gray-900" href="#">
            Terms
          </a>
          <a className="hover:text-gray-900" href="#">
            Privacy
          </a>
          <a className="hover:text-gray-900" href="#">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}


export default App;
