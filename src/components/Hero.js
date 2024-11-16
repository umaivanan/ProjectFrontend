// Import necessary modules and images
import React,{ useState , useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup'; // Import the Popup component
import StudentImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/Screenshot_from_2024-11-08_15-30-22-removebg-preview.png'; // Replace with the correct path to your student image
import { AiOutlineFilePdf, AiOutlineAppstore, AiOutlineRead } from "react-icons/ai"; // Importing React Icons
import { AiOutlineUserAdd, AiOutlineCheckSquare, AiOutlineMail, AiOutlineStar,AiOutlineClockCircle } from "react-icons/ai"; // Importing React Icons
import Student from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/e6a66f65-264b-4bf4-8459-e7166caed8d0.webp'; // Replace with the actual path to your student image
import ui from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b71518604c4aa067e67eaf49d62d431b.jpg'; // Placeholder image for courses
import ux from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/599210dac929ac2bcaa451ab53f73441.jpg'; // Placeholder image for courses
import digital from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/389d05fd9c667452e6642f6275d8d5fc.jpg'; // Placeholder image for courses
import graphic from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/f59abfadd3d46eb60428a0395c1bfecc.jpg'; // Placeholder image for courses
import web from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/5fc25992225094ee02663a068e8e2397.jpg'; // Placeholder image for courses
import api from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b71518604c4aa067e67eaf49d62d431b.jpg'; // Placeholder image for courses


const Hero = React.forwardRef((props, ref) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    scrollToHome: () => {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToAbout: () => {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToContact: () => {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    },
  }));

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/learnmore'); // Replace with the path you want to navigate to
  };

  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true); // Show the popup
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Close the popup
  };



  const courses = [
    {
      title: "UI Design",
      image: ui,
    },
    {
      title: "Media Design",
      image: ux,
    },
    {
      title: "Digital Marketing",
      image: digital,
    },
    {
      title: "Content Design",
      image: graphic,
    },
    {
      title: "Mobile Appdevelopment",
      image: web,
    },
    {
      title: "UI UX Design",
      image: api,
    },
  ];
  return (
    <div className="min-h-[600px] bg-white">
      {/* Decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full border border-purple-100" />
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full border border-purple-100" />
      </div>
       */}
    {/* Outer container for horizontal layout on larger screens */}
    <section ref={homeRef} id="home">
    <div id="home" className="container mx-auto px-4 mt-[4%] py-20 lg:px-10 lg:py-32 flex flex-col lg:flex-row items-center lg:space-x-16">
  
  {/* Container for Text and Buttons */}
  <div className="max-w-2xl mx-auto lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pr-10 space-y-8">
    {/* Badge */}
    {/* <span className="inline-block mb-6 px-8 py-4 text-xl font-semibold text-purple-900 bg-purple-100 rounded-full">
      New
    </span> */}
    
    <h1 className="text-8xl font-bold mr-4 tracking-tight text-black-900 lg:text-8xl">
  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Find your</span> 
  <span className="text-purple-500"> Course</span> & make sure 
  <span className="text-purple-500"> goal.</span>
</h1>

    <p className="text-4xl text-black-600 text-left">
      Your dream course is waiting for you 👋. Unlock the knowledge and skills you've always wanted.
    </p>
    
    {/* <p className="text-lg text-black-700 leading-relaxed">
      Whether you're looking to advance your career, learn something new, or achieve your personal goals, we offer a wide range of courses designed to help you succeed. Join us today and take the first step towards a brighter future.
    </p> */}
    
    <div>
      <div className="flex justify-center lg:justify-start gap-6 mt-10">
        {/* Get Started Button */}
        <button
          className="px-3 py-2 ml-[40%] -mt-9 h-16 bg-purple-500 text-white text-2xl font-medium rounded-xl hover:bg-purple-600 transition duration-200"
          onClick={handlePopup} // Show popup on click
        >
          Get Started
        </button>
        {/* Play Video Button */}
      </div>

      {/* Conditionally Render Popup */}
      {showPopup && <Popup onClose={handlePopupClose} />}
    </div>
  </div>

  {/* Container for Image and Decorative Elements */}
  <div className="relative mx-auto w-full max-w-lg lg:max-w-xl lg:w-1/2">
    <div className="relative">
      <img 
        alt="Student with educational materials"
        className="mx-auto w-full h-auto object-cover rounded-lg shadow-lg"
        src={StudentImage}
        style={{ Height: '1000px' }} // Increased height to match content size
      />
      
      {/* Floating decorative elements */}
      <div className="absolute -right-10 top-1/4 h-32 w-32 rounded-lg bg-purple-100/70 backdrop-blur-lg" />
      <div className="absolute -left-10 bottom-1/4 h-32 w-32 rounded-lg bg-purple-100/70 backdrop-blur-lg" />
    </div>
  </div>
</div>
</section>








 <section  ref={aboutRef}id="about" className="py-16">
      <div className="container px-4 md:px-6 mb-7">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-9">
              <h2 className="text-7xl font-medium text-purple-500 ">What we do?</h2>
              <h3 className="text-3xl font-bold tracking-tighter text-gray-900 lg:text-5xl">
                Our education system will give<br />you the perfect solution
              </h3>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* PDF Summarizer Card */}
            <div className="border shadow-lg rounded-lg p-6 space-y-4 group bg-white">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 transition duration-300 group-hover:bg-purple-200">
                <AiOutlineFilePdf className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600" />
              </div>
              <h4 className="text-3xl font-semibold text-gray-900">PDF Summarizer</h4>
              <p className="text-xl text-gray-500">
                Quickly summarize PDF documents for easy understanding and review.
              </p>
               <button 
      onClick={handleLearnMore}
      className="px-3 py-2 ml-[1%] bg-purple-500 text-white text-lg font-medium rounded-md hover:bg-purple-600 transition duration-200"
    >
      Learn more
    </button>
            </div>

            {/* Variety of Courses Card */}
            <div className="border shadow-lg rounded-lg p-6 space-y-4 group bg-white">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 transition duration-300 group-hover:bg-purple-200">
                <AiOutlineAppstore className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600" />
              </div>
              <h4 className="text-3xl font-semibold text-gray-900">Variety of Courses</h4>
              <p className="text-xl text-gray-500">
                Explore a range of courses designed to suit various learning needs and goals.
              </p>
              <button 
      onClick={handleLearnMore}
      className="px-3 py-2 ml-[1%] bg-purple-500 text-white text-lg font-medium rounded-md hover:bg-purple-600 transition duration-200"
    >
      Learn more
    </button>
            </div>

            {/* Learning Easily Card */}
            <div className="border shadow-lg rounded-lg p-6 space-y-4 group bg-white">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 transition duration-300 group-hover:bg-purple-200">
                <AiOutlineRead className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600" />
              </div>
              <h4 className="text-3xl font-semibold text-gray-900">Learning Easily</h4>
              <p className="text-xl text-gray-500">
                Simplify the learning process with user-friendly resources and support.
              </p>
              <button 
      onClick={handleLearnMore}
      className="px-3 py-2 ml-[1%] bg-purple-500 text-white text-lg font-medium rounded-md hover:bg-purple-600 transition duration-200"
    >
      Learn more
    </button>
            </div>
          </div>
        </div>
      </div>
    </section>




<section className="py-20">
  <div className="container px-4 md:px-6">
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Left Column */}
      <div className="space-y-12">
        {/* Text Content */}
        <div className="space-y-7">
          <p className="text-7xl font-medium text-purple-500">
            Join   people
          </p>
          <div className="grid gap-4 lg:grid-cols-[fr,1fr]">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 lg:text-5xl">
              Various types of courses will scale up your skills
            </h2>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Create Account Card */}
          <div className="border-none shadow-lg rounded-lg p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100">
              <AiOutlineUserAdd className="h-10 w-10 text-purple-500" /> {/* React Icon */}
            </div>
            <h3 className="mb-2 text-3xl font-semibold">Create Account</h3>
            <p className="text-2xl text-black-500">
            User successfully registers and logs in, navigating to a variety of card component pages
            </p>
          </div>

          {/* Select Courses Card */}
          <div className="border-none shadow-lg rounded-lg p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100">
              <AiOutlineCheckSquare className="h-10 w-10 text-purple-500" /> {/* React Icon */}
            </div>
            <h3 className="mb-2 text-3xl font-semibold">Select Courses</h3>
            <p className="text-2xl text-black-500">
            first read three free sections in each chapter. After that, you can proceed with the payment
            </p>
          </div>

          {/* Confirmation Mail Card */}
          <div className="border-none shadow-lg rounded-lg p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-orange-100">
              <AiOutlineMail className="h-10 w-10 text-purple-500" /> {/* React Icon */}
            </div>
            <h3 className="mb-2 text-3xl font-semibold">Confirmation Mail</h3>
            <p className="text-2xl text-black-500">
            If anyone purchases an instructor's course, the instructor receives a message.
            </p>
          </div>

          {/* Enjoy Course Card */}
          <div className="border-none shadow-lg rounded-lg p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100">
              <AiOutlineStar className="h-10 w-10 text-purple-500" /> {/* React Icon */}
            </div>
            <h3 className="mb-2 text-3xl font-semibold">Enjoy your Course</h3>
            <p className="text-2xl text-black-500">
            Get ready to dive in and make the most of your learning experience!
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Image */} 
      <div className="relative mx-auto aspect-[6/9] w-full max-w-lg  mt-[17%] rounded-2xl bg-purple-100/100 lg:ml-auto">
        <img
          alt="Student with educational materials"
          className="rounded-2xl object-cover w-full h-full"
          src={Student}
        />
     </div> 
    </div>
  </div>
</section>






    






<section className="py-5 ">
  <div className="container px-3 md:px-6">
    <div className="space-y-12">
      {/* Header Section */}
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          {/* <h2 className="text-3xl font-medium text-purple-500">Popular courses</h2> */}
          <h3 className="text-4xl mb-7 gap-y-15 font-bold tracking-tighter text-black-900 lg:text-5xl">
            Our most popular courses among students
          </h3>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 sm:grid-cols-1 gap-y-9 md:grid-cols-2  lg:grid-cols-3">
        {courses.map((course, index) => (
          <div key={index} className="w-full max-w-sm overflow-hidden border-none shadow-lg rounded-lg mx-auto">
            <div className="aspect-[3/3] relative">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 space-y-2">
              <h4 className="text-2xl font-semibold">{course.title}</h4>
              <p className="text-sm text-black-500">{course.description}</p>
            </div>
            <div className="px-4  pb-2 flex items-center justify-between text-sm text-black-500">
              <div className="flex items-center gap-2">
                <AiOutlineClockCircle className="h-4 w-4 -mt-8" aria-label="Duration" />
                <span className='-mt-8'>20h</span>
              </div>
              <button
          className="px-1 py-2 ml-[40%] -mt-8 h-9 bg-purple-500  text-white text-xl font-medium rounded-md hover:bg-purple-600 transition duration-200"
          onClick={handlePopup} // Show popup on click
        >
          Learn more
        </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>
  );
})
export default Hero;