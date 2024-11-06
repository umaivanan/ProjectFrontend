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
    <footer className="w-full py-6 bg-gray-100 text-center">
       <div className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Contact Info and Social Links */}
          <div className="flex flex-col gap-4">
            <a href="/" className="text-xl font-bold">
              SwapSmart
            </a>
            <p className="text-sm text-muted-foreground">
              jaffna, northern province,
              <br />
              Srilanka
            </p>
            <div className="flex gap-4 mr-10">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">About</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Home</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Features</a>
            <a href="" className="text-sm text-muted-foreground hover:text-primary">about</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">contact</a>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Why Tripco</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Partner with us</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">FAQ</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Support</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Account</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Support center</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Feedback</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact us</a>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter and get exciting offers</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="max-w-[300px] p-2 border border-gray-300 rounded"
              />
              <button type="submit" className="p-2 bg-primary text-white rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}


export default App;
