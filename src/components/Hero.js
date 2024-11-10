// Import necessary modules and images
import React from 'react';
import StudentImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/Screenshot_from_2024-11-08_15-30-22-removebg-preview.png'; // Replace with the correct path to your student image
import PlayIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/Screenshot_from_2024-11-08_15-30-22-removebg-preview.png'; // Replace with the correct path to your play icon
import { AiOutlineFilePdf, AiOutlineAppstore, AiOutlineRead } from "react-icons/ai"; // Importing React Icons
import { AiOutlineUserAdd, AiOutlineCheckSquare, AiOutlineMail, AiOutlineStar } from "react-icons/ai"; // Importing React Icons



import ArrowRightIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';






// import UserPlusIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/Screenshot_from_2024-11-08_15-30-22-removebg-preview.png'; // Replace with the correct path to your local icons

import Student from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/Screenshot_from_2024-11-08_15-30-22-removebg-preview.png'; // Replace with the actual path to your student image






import ClockIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png'; // Replace with the correct paths to your local icons
import BookOpenIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';
import BarChartIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';
// import ArrowRight from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/Screenshot_from_2024-11-08_15-30-22-removebg-preview.png';
import ui from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b71518604c4aa067e67eaf49d62d431b.jpg'; // Placeholder image for courses
import ux from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/599210dac929ac2bcaa451ab53f73441.jpg'; // Placeholder image for courses

import digital from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/389d05fd9c667452e6642f6275d8d5fc.jpg'; // Placeholder image for courses

import graphic from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/f59abfadd3d46eb60428a0395c1bfecc.jpg'; // Placeholder image for courses

import web from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/5fc25992225094ee02663a068e8e2397.jpg'; // Placeholder image for courses

import api from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b71518604c4aa067e67eaf49d62d431b.jpg'; // Placeholder image for courses


export default function Hero() {






  const courses = [
    {
      title: "UI Design",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      image: ui,
    },
    {
      title: "UX Design",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      image: ux,
    },
    {
      title: "Digital Marketing",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      image: digital,
    },
    {
      title: "Graphic Design",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      image: graphic,
    },
    {
      title: "Web Development",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      image: web,
    },
    {
      title: "API Development",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      image: api,
    },
  ];
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-purple-100 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full border border-purple-100" />
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full border border-purple-100" />
      </div>
      
    {/* Outer container for horizontal layout on larger screens */}
    <div className="container mx-auto px-4 py-20 lg:px-10 lg:py-32 flex flex-col lg:flex-row items-center lg:space-x-16">
  
  {/* Container for Text and Buttons */}
  <div className="max-w-2xl mx-auto lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pr-10 space-y-8">
    {/* Badge */}
    {/* <span className="inline-block mb-6 px-8 py-4 text-xl font-semibold text-purple-900 bg-purple-100 rounded-full">
      New
    </span> */}
    
    <h1 className="text-6xl font-bold tracking-tight text-gray-900 lg:text-7xl">
      Find your <span className="text-purple-500">Course</span> & make sure <span className="text-purple-500">goal.</span>
    </h1>

    <p className="text-3xl text-gray-600">
      Your dream course is waiting for you 👋. Unlock the knowledge and skills you've always wanted.
    </p>
    
    {/* <p className="text-lg text-gray-700 leading-relaxed">
      Whether you're looking to advance your career, learn something new, or achieve your personal goals, we offer a wide range of courses designed to help you succeed. Join us today and take the first step towards a brighter future.
    </p> */}
    
    <div className="flex justify-center lg:justify-start gap-6 mt-10">
      {/* Get Started Button */}
      <button className="px-3 py-2 bg-purple-500 text-white text-lg font-medium rounded-md hover:bg-purple-600 transition duration-200">
  Get Started
</button>

{/* Play Video Button */}
<button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 text-lg font-medium rounded-md hover:bg-gray-100 transition duration-200">
  <img src={PlayIcon} alt="Play icon" className="mr-2 h-5 w-5" />
  Play Video
</button>
    </div>
  </div>

  {/* Container for Image and Decorative Elements */}
  <div className="relative mx-auto w-full max-w-lg lg:max-w-xl lg:w-1/2">
    <div className="relative">
      <img 
        alt="Student with educational materials"
        className="mx-auto w-full h-auto object-cover rounded-lg shadow-lg"
        src={StudentImage}
        style={{ maxHeight: '700px' }} // Increased height to match content size
      />
      
      {/* Floating decorative elements */}
      <div className="absolute -right-10 top-1/4 h-32 w-32 rounded-lg bg-purple-100/70 backdrop-blur-lg" />
      <div className="absolute -left-10 bottom-1/4 h-32 w-32 rounded-lg bg-purple-100/70 backdrop-blur-lg" />
    </div>
  </div>
</div>









<section className="py-16">
  <div className="container px-4 md:px-6 mb-[7%]">
    <div className="space-y-12">
      {/* Header Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-5xl font-medium text-purple-500">What we do</h2>
          <h3 className="text-3xl font-bold tracking-tighter text-gray-900 lg:text-4xl">
            Our education system will give<br />you the perfect solution
          </h3>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* PDF Summarizer Card */}
        <div className="border-none shadow-lg rounded-lg p-6 space-y-4 group">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 transition duration-300 group-hover:bg-purple-200">
            <AiOutlineFilePdf className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900">PDF Summarizer</h4>
          <p className="text-sm text-gray-500">
            Quickly summarize PDF documents for easy understanding and review.
          </p>
          <a
            className="inline-flex items-center space-x-1 text-sm font-medium text-purple-500 hover:text-purple-600"
            href="#"
          >
            <span>Learn More</span>
            <AiOutlineRead className="h-4 w-4" />
          </a>
        </div>

        {/* Variety of Courses Card */}
        <div className="border-none shadow-lg rounded-lg p-6 space-y-4 group">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 transition duration-300 group-hover:bg-purple-200">
            <AiOutlineAppstore className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900">Variety of Courses</h4>
          <p className="text-sm text-gray-500">
            Explore a range of courses designed to suit various learning needs and goals.
          </p>
          <a
            className="inline-flex items-center space-x-1 text-sm font-medium text-purple-500 hover:text-purple-600"
            href="#"
          >
            <span>Learn More</span>
            <AiOutlineRead className="h-4 w-4" />
          </a>
        </div>

        {/* Learning Easily Card */}
        <div className="border-none shadow-lg rounded-lg p-6 space-y-4 group">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 transition duration-300 group-hover:bg-purple-200">
            <AiOutlineRead className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900">Learning Easily</h4>
          <p className="text-sm text-gray-500">
            Simplify the learning process with user-friendly resources and support.
          </p>
          <a
            className="inline-flex items-center space-x-1 text-sm font-medium text-purple-500 hover:text-purple-600"
            href="#"
          >
            <span>Learn More</span>
            <AiOutlineRead className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>








<section className="py-20">
  <div className="container px-4 md:px-6">
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Left Column */}
      <div className="space-y-8">
        {/* Text Content */}
        <div className="space-y-4">
          <p className="text-lg font-medium text-purple-500">
            Join over 15,000+ tech people
          </p>
          <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
            <h2 className="text-3xl font-bold tracking-tighter text-black-900 lg:text-4xl">
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
            <h3 className="mb-2 text-xl font-semibold">Create Account</h3>
            <p className="text-lg text-black-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Select Courses Card */}
          <div className="border-none shadow-lg rounded-lg p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100">
              <AiOutlineCheckSquare className="h-10 w-10 text-purple-500" /> {/* React Icon */}
            </div>
            <h3 className="mb-2 text-xl font-semibold">Select Courses</h3>
            <p className="text-lg text-black-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Confirmation Mail Card */}
          <div className="border-none shadow-lg rounded-lg p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-orange-100">
              <AiOutlineMail className="h-10 w-10 text-orange-500" /> {/* React Icon */}
            </div>
            <h3 className="mb-2 text-xl font-semibold">Confirmation Mail</h3>
            <p className="text-lg text-black-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Enjoy Course Card */}
          <div className="border-none shadow-lg rounded-lg p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100">
              <AiOutlineStar className="h-10 w-10 text-yellow-500" /> {/* React Icon */}
            </div>
            <h3 className="mb-2 text-xl font-semibold">Enjoy your Course</h3>
            <p className="text-lg text-black-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative mx-auto aspect-[3/4] w-full max-w-lg rounded-2xl bg-purple-100/100 lg:ml-auto">
        <img
          alt="Student with educational materials"
          className="rounded-2xl object-cover w-full h-full"
          src={Student}
        />
      </div>
    </div>
  </div>
</section>






    






    <section className="py-12">
  <div className="container px-4 md:px-6">
    <div className="space-y-12">
      {/* Header Section */}
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-purple-500">Popular courses</h2>
          <h3 className="text-3xl font-bold tracking-tighter text-gray-900 lg:text-4xl">
            Our most popular courses in students
          </h3>
        </div>
        
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div key={index} className="w-full max-w-xs overflow-hidden border-none shadow-lg rounded-lg mx-auto">
            <div className="aspect-[3/3] relative h-80">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 space-y-2">
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-500">{course.description}</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <img src={ClockIcon} alt="Duration" className="h-4 w-4" />
                  <span>20h</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={BookOpenIcon} alt="Lectures" className="h-4 w-4" />
                  <span>24 lectures</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={BarChartIcon} alt="Progress" className="h-4 w-4" />
                  <span>Progress</span>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                className="inline-flex items-center space-x-1 text-sm font-medium text-purple-500 hover:text-purple-600"
                href="#"
              >
                <span>Learn More</span>
                <img src={ArrowRightIcon} alt="Arrow Right" className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
