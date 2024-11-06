
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';

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

  const decrypt = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
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
      const response = await fetch('http://localhost:8714/api/auth/login', {
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

        // Fetch the form submission status after login
        const checkFormResponse = await fetch('http://localhost:8714/api/skills/check-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: inputs.email }),
        });

        const formStatusData = await checkFormResponse.json();
        const submittedStatus = formStatusData.formSubmitted;

        // Store the submittedStatus in localStorage
        localStorage.setItem('submittedStatus', JSON.stringify(submittedStatus));

        // If form is submitted, save Skill ID to localStorage
      if (submittedStatus) {
        const skillIdResponse = await fetch(`http://localhost:8714/api/skills?email=${inputs.email}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        const skillData = await skillIdResponse.json();
        // console.log(skillData._id);
        localStorage.setItem('skillId', skillData._id);

        if (skillData?._id) {
          const encryptedSkillId = encrypt(skillData._id);
          localStorage.setItem(`skillId_${inputs.email}`, encryptedSkillId);
        }
      } 

        // Navigate based on role (admin or user)
        navigate(data.role === 'admin' ? '/admin-dashboard' : '/list');
        onSuccess();
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
    <div className="flex justify-center items-center h-auto w-[500px] bg-transparent">
  <div className="flex flex-col max-w-md w-full h-auto p-8 rounded-xl shadow-lg  backdrop-blur-md"
    style={{ backgroundColor: 'rgba(255, 255, 250, 0.8)',borderRadius: '40px' }} // 50% opacity
    
    >
    <h2 className="text-4xl  mb-6 text-center font-bold"
    style={{ color: 'rgba(70, 30, 120, 20)' }}>Login</h2>
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block  text-lg mb-1" style={{ color: 'rgba(70, 30, 120, 20)' }}>Email</label>
        <input
        style={{ borderRadius: '30px' }}
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleInput}
          placeholder="example@example.com"  // Added placeholder here
          className={`w-full p-3 text-lg bg-gray-100 rounded-md ${errors.email.required ? 'border border-red-500' : ''}`}
        />
        {errors.email.required && (
          <span className="">Email is required.</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block  text-lg mb-1" style={{ color: 'rgba(70, 30, 120, 20)' }}>Password</label>
        <input
        style={{ borderRadius: '30px' }}
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleInput}
          placeholder="Enter your password"

          className={`w-full p-3 text-lg bg-gray-100 rounded-md ${errors.password.required ? 'border border-red-500' : ''}`}
        />
        {errors.password.required && (
          <span className="">Password is required.</span>
        )}
      </div>
      {errors.custom_error && (
        <span className="text-red-500 text-sm">{errors.custom_error}</span>
      )}
      {loading ? <div className="text-center text-lg text-purple-600">Loading...</div> : null}
      <button
  type="submit"
  disabled={loading}
  className="w-full mt-4 py-3 bg-purple-600 text-white text-lg font-semibold rounded-md hover:bg-purple-500 transition duration-300"
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
