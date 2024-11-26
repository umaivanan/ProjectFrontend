import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const secretKey = '12345'; // Encryption key

const LoginPage = ({ onSuccess }) => {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const encrypt = (data) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = { ...initialStateErrors };
    let hasError = false;

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
      const response = await fetch('https://project-backend-delta-seven.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (response.ok) {
        const encryptedEmail = encrypt(inputs.email);
        localStorage.setItem('userEmail', encryptedEmail);

        const encryptedToken = encrypt(data.token);
        localStorage.setItem('token', encryptedToken);

        const checkFormResponse = await fetch('https://project-backend-delta-seven.vercel.app/api/skills/check-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: inputs.email }),
        });

        const formStatusData = await checkFormResponse.json();
        const submittedStatus = formStatusData.formSubmitted;

        localStorage.setItem('submittedStatus', JSON.stringify(submittedStatus));

        if (submittedStatus) {
          const skillIdResponse = await fetch(`https://project-backend-delta-seven.vercel.app/api/skills?email=${inputs.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });

          const skillData = await skillIdResponse.json();
          if (skillData?._id) {
            localStorage.setItem('skillId', skillData._id);
            const encryptedSkillId = encrypt(skillData._id);
            localStorage.setItem(`skillId_${inputs.email}`, encryptedSkillId);
          }
        }

        // Show success toast after successful login
        toast.success('Login successful!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
        });

        // Delay navigation to let the toast display
        setTimeout(() => {
          navigate(data.role === 'admin' ? '/admin-dashboard' : '/list');
          onSuccess();
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
    <div className="flex justify-center items-center h-[550px] w-[500px] bg-transparent">
      <ToastContainer /> {/* Toast container for notifications */}
      <div className="flex flex-col max-w-md w-full h-auto p-8 rounded-xl shadow-lg backdrop-blur-md"
           style={{ backgroundColor: 'rgba(255, 255, 250, 0.8)', borderRadius: '40px' }}>
        <h2 className="text-4xl mb-6 text-center  font-bold">Login</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-1">Email</label>
            <input
              style={{ borderRadius: '30px' }}
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleInput}
              placeholder="example@example.com"
              className={`w-full p-3 text-lg bg-gray-100 rounded-md ${errors.email.required ? 'border border-red-500' : ''}`}
            />
            {errors.email.required && <span className="text-red-500">Email is required.</span>}
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-1">Password</label>
            <input
              style={{ borderRadius: '30px' }}
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleInput}
              placeholder="Enter your password"
              className={`w-full p-3 text-lg bg-gray-100 rounded-md ${errors.password.required ? 'border border-red-500' : ''}`}
            />
            {errors.password.required && <span className="text-red-500">Password is required.</span>}
          </div>
          {errors.custom_error && <span className="text-red-500 text-sm">{errors.custom_error}</span>}
          {loading && <div className="text-center text-lg text-purple-600">Loading...</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 bg-purple-600 text-white text-lg font-semibold rounded-md"
            style={{ borderRadius: '30px' }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
