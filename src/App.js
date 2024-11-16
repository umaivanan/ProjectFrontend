

import './App.css';
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SkillProvider } from './context/SkillContext';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UpdateInfo from './components/UpdateInfo';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import SkillForm from './components/SkillForm';
import SkillList from './components/SkillList';
import AdditionalInformation from './components/AdditionalInformation';
import DisplayData from './components/DisplayData';
import UserDashboard from './components/UserDashboard';
import LearnMore from './components/LearnMore';

const App = () => {
  const heroRef = useRef(null); // Ref for Hero component
  const footerRef = useRef(null); // Ref for Footer component

  return (
    <SkillProvider>
      <Router>
        {/* Pass heroRef and footerRef to Navbar */}
        <Navbar heroRef={heroRef} footerRef={footerRef} />

        <Routes>
          <Route path="/" element={<Hero ref={heroRef} />} />
          <Route path="/update-info/:id" element={<UpdateInfo />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/skill-form" element={<SkillForm />} />
          <Route path="/additionalInformation" element={<AdditionalInformation />} />
          <Route path="/list" element={<SkillList />} />
          <Route path="/display-data/:id" element={<DisplayData />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>

        {/* Attach the Footer ref */}
        <Footer ref={footerRef} />
      </Router>
    </SkillProvider>
  );
};

export default App;
