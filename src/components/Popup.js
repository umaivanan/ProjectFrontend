import React, { useState } from 'react';
import LoginPage from './LoginPage'; // Import Login Page Component
import RegisterPage from './RegisterPage'; // Import Register Page Component
import './popup.css';  // Import your Popup styles

const Popup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  const handleSuccess = () => {
    // On successful login or register, close the popup
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
      <div className="relative w-[550px] h-[600px] p-6 bg-purple-50 rounded-[10%] shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-6 text-lg text-black hover:text-purple-500"
          onClick={onClose}
        >
          X
        </button>

        {/* Conditionally render Login or Register form */}
        {isLogin ? (
          <LoginPage onSuccess={handleSuccess} />
        ) : (
          <RegisterPage onSuccess={handleSuccess} />
        )}

        {/* Toggle Button */}
        <button
  className={`absolute -mt-9 left-1/2 transform -translate-x-1/2 w-3/4 py-2 text-lg ${
    isLogin
      ? '-mt-10' // Styling for 'No account? Register'
      : 'mt-2' // Styling for 'Have an account? Login'
  }`}
  onClick={() => setIsLogin(!isLogin)}
>
  {isLogin ? 'No account? Register' : 'Have an account? Login'}
</button>

      </div>
    </div>
  );
};

export default Popup;
