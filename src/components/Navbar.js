
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLogout, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'; // Import necessary icons
import { FaCog } from 'react-icons/fa'; // Import settings icon
import logo from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 22.16.59 - An abstract geometric logo design, similar to the uploaded image, featuring a complex diamond pattern with directional arrows. Replace the green tones.webp'; // Update the path to your logo
import Popup from './Popup'; // Import Popup component
import CryptoJS from 'crypto-js'; // Import CryptoJS

const Navbar = ({ heroRef }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [showSetupButton, setShowSetupButton] = useState(false); // State for setup button visibility
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const decryptEmail = (encryptedEmail) => {
    const secretKey = '12345';
    const bytes = CryptoJS.AES.decrypt(encryptedEmail, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const checkLoginStatus = useCallback(() => {
    const token = localStorage.getItem('token');
    const encryptedUserEmail = localStorage.getItem('userEmail');

    if (token && encryptedUserEmail) {
      setIsLoggedIn(true);
      const userEmail = decryptEmail(encryptedUserEmail);

      const localSubmittedStatus = localStorage.getItem('submittedStatus');
      if (localSubmittedStatus !== null) {
        setFormSubmitted(JSON.parse(localSubmittedStatus));
      }

      fetchUserProfile(userEmail);
    }
    setLoading(false);
  }, []);

  const fetchUserProfile = async (email) => {
    try {
      const response = await fetch(`http://localhost:8707/api/skills?email=${email}`);
      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    checkLoginStatus();

    const handleStorageChange = () => {
      const localSubmittedStatus = localStorage.getItem('submittedStatus');
      if (localSubmittedStatus !== null) {
        setFormSubmitted(JSON.parse(localSubmittedStatus));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('formSubmitted', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('formSubmitted', handleStorageChange);
    };
  }, [checkLoginStatus]);

  useEffect(() => {
    if (isLoggedIn) {
      const encryptedUserEmail = localStorage.getItem('userEmail');
      if (encryptedUserEmail) {
        const userEmail = decryptEmail(encryptedUserEmail);
        fetchUserProfile(userEmail);

        const localSubmittedStatus = localStorage.getItem('submittedStatus');
        if (localSubmittedStatus !== null) {
          setFormSubmitted(JSON.parse(localSubmittedStatus));
        }
      }
    }
  }, [isLoggedIn, showPopup]);

  const handleLogout = () => {
    const encryptedUserEmail = localStorage.getItem('userEmail');
    
    if (encryptedUserEmail) {
      const email = decryptEmail(encryptedUserEmail); // Decrypt the email from localStorage
  
      localStorage.removeItem(`skillId_${email}`);
    }
  
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('submittedStatus');
  
    setIsLoggedIn(false);
    setFormSubmitted(false);
    setUserProfile(null);
  
    navigate('/');
  };

  const handleDashboardNavigation = () => {
    navigate('/user-dashboard');
  };

  const handleNavigation = () => {
    if (!formSubmitted) {
      navigate('/skill-form');
    } else {
      navigate('/additionalInformation');
    }
  };

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    const encryptedUserEmail = localStorage.getItem('userEmail');
    if (encryptedUserEmail) {
      const userEmail = decryptEmail(encryptedUserEmail);
      setIsLoggedIn(true);
      const localSubmittedStatus = localStorage.getItem('submittedStatus');
      if (localSubmittedStatus !== null) {
        setFormSubmitted(JSON.parse(localSubmittedStatus));
      } else {
        const checkFormSubmissionStatus = async () => {
          try {
            const response = await fetch('http://localhost:8707/api/skills/check-form', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: userEmail }),
            });
            const data = await response.json();
            setFormSubmitted(data.formSubmitted);
            localStorage.setItem('submittedStatus', data.formSubmitted ? 'true' : 'false');
          } catch (error) {
            console.error('Error checking form submission status:', error);
          }
        };
        checkFormSubmissionStatus();
      }
      fetchUserProfile(userEmail);
    }
  };

  // Scroll to specific sections in Hero component
  const scrollToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        heroRef.current?.scrollToAbout();
      }, 100); // Ensure that navigation happens first
    } else {
      heroRef.current?.scrollToAbout();
    }
  };

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        heroRef.current?.scrollToContact();
      }, 100);
    } else {
      heroRef.current?.scrollToContact();
    }
  };

  // Show or hide buttons based on page location
  useEffect(() => {
    // Always show the logo, but only show Home, About, Contact buttons on Home and Learn More pages
    if (location.pathname === '/' || location.pathname === '/learnmore') {
      setShowSetupButton(true); // Show buttons on home and learnmore page
    } else {
      setShowSetupButton(false); // Hide buttons on other pages
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!showPopup && (
        <nav className="flex justify-between items-center p-4 bg-white fixed top-0 left-0 w-full h-[8%] z-50">
          <div className="navbar-logo">
            {/* Logo will always be visible */}
            <Link to="/" onClick={scrollToHome}>
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
          </div>

          {/* Show Home, About, Contact buttons on all pages */}
          <div className="flex space-x-6">
            <button
              className="flex items-center text-purple-900 border border-transparent px-4 py-2 rounded-md hover:text-purple-600 hover:border-purple-600 transition-colors duration-300"
              onClick={scrollToHome}
            >
              <AiOutlineHome className="text-2xl mr-2" />
            </button>
            <button
              className="flex items-center text-purple-900 border border-transparent px-4 py-2 rounded-md hover:text-purple-600 hover:border-purple-600 transition-colors duration-300"
              onClick={scrollToAbout}
            >
              <AiOutlineInfoCircle className="text-2xl mr-2" />
            </button>
            <button
              className="flex items-center text-purple-900 border border-transparent px-4 py-2 rounded-md hover:text-purple-600 hover:border-purple-600 transition-colors duration-300"
              onClick={scrollToContact}
            >
              <AiOutlineMail className="text-2xl mr-2" />
            </button>
          </div>

          <ul className="flex space-x-4">
            {location.pathname === '/' || location.pathname === '/learnmore' ? ( // Show setup button on home and learnmore page
              <li>
                <button
                  className="flex items-center bg-purple-900 text-white border-2 border-purple-900 py-3 px-6 rounded-full transition-transform duration-300 transform hover:bg-purple-700 focus:outline-none focus:ring focus:ring-white"
                  onClick={handlePopup}
                >
                  <FaCog className="mr-2" />
                  SETUP
                </button>
              </li>
            ) : (
              <>
                {!isLoggedIn ? (
                  <li>
                    <button
                      className="flex items-center bg-purple-900 text-white border-2 border-purple-900 py-3 px-6 rounded-full transition-transform duration-300 transform hover:bg-purple-700 focus:outline-none focus:ring focus:ring-white"
                      onClick={handlePopup}
                    >
                      <FaCog className="mr-2" />
                      SETUP
                    </button>
                  </li>
                ) : (
                  <>
                    {userProfile && userProfile.profilePicture && (
                      <li className="flex items-center ml-5">
                        <img
                          src={`http://localhost:8707${userProfile.profilePicture}`}
                          alt="Profile"
                          className="w-10 h-10 rounded-full cursor-pointer"
                          onClick={handleDashboardNavigation}
                        />
                      </li>
                    )}
                    <li>
                      <button
                        className="flex items-center bg-purple-900 text-white border-2 border-purple-900 py-3 px-6 rounded-full transition-transform duration-300 transform hover:bg-purple-700 focus:outline-none focus:ring focus:ring-white"
                        onClick={handleNavigation}
                      >
                        <AiOutlineUser className="mr-2" />
                        {!formSubmitted ? 'Create Profile' : 'Create Course'}
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center bg-purple-900 text-white border-2 border-purple-900 py-3 px-6 rounded-full transition-transform duration-300 transform hover:bg-purple-700 focus:outline-none focus:ring focus:ring-white"
                        onClick={handleLogout}
                      >
                        <AiOutlineLogout className="mr-2" />
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </nav>
      )}
      {showPopup && <Popup onClose={handlePopupClose} />}
    </div>
  );
};

export default Navbar;
