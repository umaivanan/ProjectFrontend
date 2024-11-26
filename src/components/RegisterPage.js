





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = ({ onSuccess }) => {
  const initialStateErrors = {
    email: { required: false },
    name: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = { ...initialStateErrors };
    let hasError = false;

    // Basic validation
    if (inputs.name === '') {
      errors.name.required = true;
      hasError = true;
    }
    if (inputs.email === '') {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password === '') {
      errors.password.required = true;
      hasError = true;
    }

    if (hasError) {
      setErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://project-backend-delta-seven.vercel.app/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (response.ok) {
        const secretKey = '12345'; // Secure your secret key in production
        const encryptedEmail = CryptoJS.AES.encrypt(inputs.email, secretKey).toString();
        localStorage.setItem('userEmail', encryptedEmail);

        const encryptedToken = CryptoJS.AES.encrypt(data.token, secretKey).toString();
        localStorage.setItem('token', encryptedToken);

        // Show success toast after successful registration
        toast.success('Registration successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Delay navigation to let the toast display
        setTimeout(() => {
          onSuccess(); // Close modal if applicable
          navigate('/list');
        }, 3000); // Adjust time as per toast autoClose time
      } else {
        setErrors({ ...errors, custom_error: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setErrors({ ...errors, custom_error: 'An unexpected error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-auto bg-transparent">
      <ToastContainer /> {/* Toast container for notifications */}
      <div className="max-w-md w-full h-auto p-6 rounded-xl shadow-lg backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 255, 250, 0.8)', borderRadius: '30px' }}>
        <h2 className="text-4xl mb-6 text-center font-bold">Register</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2">Name</label>
            <input
              style={{ borderRadius: '30px' }}
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleInput}
              placeholder="John Doe"
              className="w-full h-12 p-4 border border-gray-300 rounded-md"
            />
            {errors.name.required && <span className="text-red-500">Name is required.</span>}
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Email</label>
            <input
              style={{ borderRadius: '30px' }}
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleInput}
              placeholder="example@example.com"
              className="w-full h-12 p-4 border border-gray-300 rounded-md"
            />
            {errors.email.required && <span className="text-red-500">Email is required.</span>}
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Password</label>
            <input
              style={{ borderRadius: '30px' }}
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleInput}
              placeholder="Enter your password"
              className="w-full h-12 p-4 border border-gray-300 rounded-md"
            />
            {errors.password.required && <span className="text-red-500">Password is required.</span>}
          </div>
          {errors.custom_error && <span className="text-red-500">{errors.custom_error}</span>}
          {loading ? <div className="text-center text-purple-600">Loading...</div> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-purple-600 text-white border py-2 mt-6"
            style={{ borderRadius: '30px' }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
