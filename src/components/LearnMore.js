// import { Star, ChevronRight } from 'lucide-react';
// import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaFilePdf, FaLaptopCode, FaTiktok, FaFacebookF } from 'react-icons/fa';

import React, { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons from react-icons


// Importing images directly
// import learnfirst from '/home/ukijaffna/um/swapSmartFrontend/src/assets/Roadmap_Process_Inspiration_PDF_Slide_1.jpg';
// import peopleCollaborating from '/home/ukijaffna/um/swapSmartFrontend/src/assets/57602174-53a8-44eb-b64a-1e7d1fea7070.webp';
// import onlineLocation from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-18 19.32.11 - A simple, full-screen road map image with clear points numbered from 1 to 10, each point representing a chapter or milestone. The road stretches from  (1).webp';
// import romeLocation from '/home/ukijaffna/um/swapSmartFrontend/src/assets/apus-574x420.jpg';

import tableTennisVideo from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/ce59a7cb-276b-4fb1-8f03-21a9d5c30505.mp4';
import activityClubImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/71d7c9ea-8eea-4895-bf2e-af8ad2865c9c.webp';
import internationalStudentsImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/71d7c9ea-8eea-4895-bf2e-af8ad2865c9c.webp';
import photographerImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/afc2f1f8-4d0a-48c5-a615-3446bd73c3c9 (1).webp';
import internationalClubImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-18 19.32.11 - A simple, full-screen road map image with clear points numbered from 1 to 10, each point representing a chapter or milestone. The road stretches from  (1).webp';
import religiousClubImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-18 19.32.11 - A simple, full-screen road map image with clear points numbered from 1 to 10, each point representing a chapter or milestone. The road stretches from  (1).webp';
import religiousEventImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-9052476.jpeg';
import culturalClubImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-18 19.32.11 - A simple, full-screen road map image with clear points numbered from 1 to 10, each point representing a chapter or milestone. The road stretches from  (1).webp';




import phdManagementImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-3861958.webp';
import mbsMbaImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-356040.webp';
import businessMgmtDiplomaImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-3760081.webp';
import hrMgmtDiplomaImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-1181474.webp';
import compNetworksDiplomaImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-31 12.02.10 - A visually captivating digital art image with a similar overlay style to the reference image, featuring a person studying a book in a serene and inspi.webp';
import msITImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-31 12.02.10 - A visually captivating digital art image with a similar overlay style to the reference image, featuring a person studying a book in a serene and inspi.webp';
import executiveMbaImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-31 12.02.10 - A visually captivating digital art image with a similar overlay style to the reference image, featuring a person studying a book in a serene and inspi.webp';
import doctorateInBusinessImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-31 12.02.10 - A visually captivating digital art image with a similar overlay style to the reference image, featuring a person studying a book in a serene and inspi.webp';
import digitalMarketingCertImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-31 12.02.10 - A visually captivating digital art image with a similar overlay style to the reference image, featuring a person studying a book in a serene and inspi.webp';




import nsbmMasterPlan from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/free-photo-of-students-examining-in-classroom-with-uk-theme.jpeg';
import constructionProgress from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-armin-rimoldi-5554303.jpg';
import modernBuildingDesign from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-4050293.webp';
import educationalFacilities from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-4144144.webp';
import amphitheaterDesign from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-4144144.webp';
import buildingConstruction from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-4144144.webp';



import { FaSearch, FaArrowRight } from "react-icons/fa";
import BusinessImage from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/DALL·E 2024-11-05 07.10.53 - A friendly, professional young woman with dark curly hair, sitting comfortably in a bright, modern workspace, holding a laptop with colorful business .webp";
import ComputingImage from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/DALL·E 2024-11-05 07.13.10 - A vibrant image of a diverse group of young, enthusiastic individuals gathered around a laptop in a modern learning or work environment. The individua.webp";
import EngineeringImage from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/DALL·E 2024-11-05 07.14.29 - Two young men engaged in a hands-on engineering activity with a drone. One is holding a tablet while observing and analyzing, while the other adjusts .webp";
import ScienceImage from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/e088ee8b-1125-4422-9455-5a5b741ee6d2.webp";
import NewsImage1 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/DALL·E 2024-11-05 07.47.58 - A modern login screen design with a bold red color scheme, featuring a unique background with dynamic abstract elements. The background includes smoot.webp";
import NewsImage2 from "/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-31 18.40.13 - A detailed, full-screen background image filled with study materials on a clean, organized desk. Include items like open textbooks, notebooks with han.webp";
import NewsImage3 from "/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-31 18.40.13 - A detailed, full-screen background image filled with study materials on a clean, organized desk. Include items like open textbooks, notebooks with han.webp";




import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SlideImage1 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-armin-rimoldi-5554303.jpg";
import SlideImage2 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-4050293.webp";
import SlideImage3 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/free-photo-of-students-examining-in-classroom-with-uk-theme.jpeg";
import SlideImage4 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/pexels-photo-4144144.webp";
import LogoPlymouth from "/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 20.41.52 - A full-screen image of a single person studying with a roadmap or study plan in front of them, inspired by the color palette of the provided hero imag.webp";
import LogoVictoria from "/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 20.41.52 - A full-screen image of a single person studying with a roadmap or study plan in front of them, inspired by the color palette of the provided hero imag.webp";

const LearnMore = () => {


   

  const carouselSlides = [
    {
      image: SlideImage1,
      title: "AFTER G.C.E. O/L",
      subtitle: "GRADUATE WITH A 360° DEGREE FROM NSBM GREEN UNIVERSITY",
      description: "FOUNDATION PROGRAMME FOR BACHELOR'S DEGREE",
      fields: "BUSINESS | COMPUTING | ENGINEERING | SCIENCE | DESIGN",
    },
    {
      image: SlideImage2,
      title: "DISCOVER YOUR POTENTIAL",
      subtitle: "WORLD-CLASS EDUCATION AT NSBM GREEN UNIVERSITY",
      description: "INNOVATIVE LEARNING ENVIRONMENT",
      fields: "STATE-OF-THE-ART FACILITIES | INDUSTRY PARTNERSHIPS",
    },
    {
      image: SlideImage3,
      title: "SHAPE YOUR FUTURE",
      subtitle: "JOIN THE NEXT GENERATION OF LEADERS",
      description: "COMPREHENSIVE DEGREE PROGRAMMES",
      fields: "PRACTICAL EXPERIENCE | CAREER DEVELOPMENT",
    },
    {
      image: SlideImage4,
      title: "TRANSFORM YOUR CAREER",
      subtitle: "EXCELLENCE IN EDUCATION AND RESEARCH",
      description: "INTERNATIONAL RECOGNITION",
      fields: "GLOBAL OPPORTUNITIES | INDUSTRY READY",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCarouselSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextCarouselSlide = () => {
    setCurrentCarouselSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevCarouselSlide = () => {
    setCurrentCarouselSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };





  const faculties = [
    {
      title: "BUSINESS",
      color: "bg-[#98D133]",
      image: BusinessImage,
      // description: "We are a forward-thinking and innovative faculty striving to lead the way in business education and research.",
    
    },
    {
      title: "COMPUTING",
      color: "bg-[#4169E1]",
      image: ComputingImage,
      // description: "Turn into a skilled computer scientist by developing real-life projects while learning cutting-edge technologies.",
    },
    {
      title: "ENGINEERING",
      color: "bg-[#9370DB]",
      image: EngineeringImage,
      // description: "Step into the future of innovation engineering. Access to state-of-the-art equipment and learning facilities.",
    },
    {
      title: "SCIENCE",
      color: "bg-[#00CED1]",
      image: ScienceImage,
      // description: "Discover scientific excellence and innovation in a thriving research environment with state-of-the-art .",
    },
  ];
  
  const news = [
    {
      title: "NSBM Green University Concludes T20 League 2024",
      date: "November 1, 2024",
      image: NewsImage1,
      description: "The NSBM Green University T20 League 2024 recently concluded, showcasing outstanding cricketing talent...",
    },
    {
      title: "NSBM IEEE Computer Society Hosts TechnoVAC 1.2",
      date: "November 1, 2024",
      image: NewsImage2,
      description: "The IEEE Computer Society of NSBM recently hosted TechnoVAC 1.2, welcoming 200+ participants...",
    },
    {
      title: "NSBM Project Management Circle Explores Colombo Port City",
      date: "November 1, 2024",
      image: NewsImage3,
      description: "The Project Management Circle of NSBM Green University recently organized an insightful field...",
    },
  ];
  
  const conferences = [
    {
      title: "ICOBI 2024",
      date: "08 Nov 2024",
      description: "ICOBI 2024 – 7th International Conference on Business Innovation",
    },
    {
      title: "ICTAR 2024",
      date: "31 Jan 2025",
      description: "ICTAR 2024 – International Conference on Transformative Applied Research 2024",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);


  const programs = [
    { title: "PhD in Management", image: phdManagementImage },
    { title: "Master of Business Studies (MBS) and Master of Business Administration (MBA)", image: mbsMbaImage },
    { title: "Postgraduate Diploma in Business Management", image: businessMgmtDiplomaImage },
    { title: "Postgraduate Diploma in Human Resource Management", image: hrMgmtDiplomaImage },
    { title: "Postgraduate Diploma in Computer Networks", image: compNetworksDiplomaImage },
    { title: "Master of Science in Information Technology", image: msITImage },
    { title: "Executive MBA", image: executiveMbaImage },
    { title: "Doctorate in Business Administration", image: doctorateInBusinessImage },
    { title: "Certificate in Digital Marketing", image: digitalMarketingCertImage },
  ];

  const slides = [];
  for (let i = 0; i < programs.length; i += 4) {
    slides.push(programs.slice(i, i + 4));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };





  return (
    <div className="min-h-screen bg-white font-sans">
       <div className="relative w-full mt-[4%]">
      {/* Top Bar */}
      {/* <div className="bg-[#FFB800] text-white py-2 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <a href="https://facebook.com" className="hover:text-gray-200">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-200">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-200">
            <FaTwitter size={20} />
          </a>
        </div>
        <a href="https://www.nsbm.ac.lk" className="hover:text-gray-200">
          www.nsbm.ac.lk
        </a>
      </div> */}

      {/* Carousel */}
      <div className="relative h-[650px] w-full overflow-hidden mb-[2%]">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentCarouselSlide ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ transform: `translateX(${(index - currentCarouselSlide) * 100}%)` }}
          >
            <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/30">
              <div className="container mx-auto h-full flex flex-col justify-center px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-4">{slide.subtitle}</p>
                <p className="text-lg md:text-xl mb-2">{slide.description}</p>
                <p className="text-sm md:text-base opacity-90">{slide.fields}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevCarouselSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <FaChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextCarouselSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <FaChevronRight className="text-white" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCarouselSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentCarouselSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* University Partner Logos */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <img src={LogoPlymouth} alt="University of Plymouth" width={60} height={60} className="bg-white rounded-full p-1" />
        <img src={LogoVictoria} alt="Victoria University" width={60} height={60} className="bg-white rounded-full p-1" />
      </div>
    </div>









<div className="min-h-screen bg-gray-50 mb-20 ">
      {/* Faculty Sections */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-4 ml-[10%] mr-[10%]">
        {faculties.map((faculty, index) => (
          <div key={index} className="relative h-[300px] overflow-hidden">
            <img src={faculty.image} alt={faculty.title} className="object-cover w-full h-full mt-[15%]" />
            <div className="absolute inset-0 flex flex-col">
              <div className={`${faculty.color} p-3 text-center text-white font-semibold`}>
                {faculty.title}
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-black/40">
                <p className="text-white mb-4">{faculty.description}</p>
                <button className="px-2 py-1 mt-[50%] bg-white text-black font-semibold rounded hover:bg-gray-100 flex items-center gap-2">
                  MORE <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-4">
          <p className="text-lg">
            Ready to Begin Your Higher Education Journey?{" "}
            <span className="text-blue-600 font-semibold">REGISTER NOW!</span>
          </p>
        </div>
        <div className="relative">
          <input
            placeholder="Type the name of Your Desired Degree / Pathway to explore more..."
            className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* News and Conferences Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Latest News</h2>
            <div className="space-y-6">
              {news.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img src={item.image} alt={item.title} className="rounded-lg object-cover w-[200px] h-[120px]" />
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-green-600 text-sm my-1">{item.date}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Conferences */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Upcoming Conferences</h2>
            <div className="space-y-6">
              {conferences.map((conference, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 text-white rounded-lg flex flex-col items-center justify-center text-center">
                      {conference.date.split(" ")[0]}
                      <span className="text-xs">{conference.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{conference.title}</h3>
                      <p className="text-sm text-gray-600">{conference.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>






      
      <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-[#2E51A2] text-4xl font-semibold mb-8 ">Student Life</h1>
      
      <div className="grid grid-cols-12 gap-4 mr-9">
        {/* Sports Clubs - Spans 4 columns */}
        <div className="col-span-4 row-span-2">
          <div className="h-full flex flex-col">
            <div className="relative h-3/4">
            <video 
  src={tableTennisVideo} 
  autoPlay 
  loop 
  muted 
  className="w-full h-full object-cover"
/>
            </div>
            <div className="bg-[#0A4D8C] text-white p-6 flex-1">
              <h2 className="text-2xl font-semibold mb-4">Sports Clubs</h2>
              <p className="mb-6">Recreation is a part of NSBM. Not only it keeps the body fit but also builds the inner qualities of the students.</p>
              <button className="bg-white text-black px-6 py-2 hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Activity Based Clubs - Spans 4 columns */}
        <div className="col-span-4 h-[300px]">
          <div className="bg-[#00A651] text-white h-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Activity Based Clubs</h2>
              <p>We strive to innovate when it comes to functionality. Our mission is to be the best, come and join the ride.</p>
            </div>
            <button className="bg-white text-black px-6 py-2 w-fit hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Group Photo Section - Spans 4 columns */}
        <div className="col-span-4 h-[300px]">
          <img 
            src={internationalStudentsImage}
            alt="International Students"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Photography Section - Spans 4 columns */}
        <div className="col-span-4 row-span-2">
          <img 
            src={photographerImage}
            alt="Student Photographer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* International Clubs - Spans 4 columns */}
        <div className="col-span-4 h-[300px]">
          <div className="bg-[#8B2131] text-white h-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">International Clubs</h2>
              <p>NSBM is committed to bringing in the best of the world educational experience to encourage global exposure among students.</p>
            </div>
            <button className="bg-white text-black px-6 py-2 w-fit hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Religious Clubs - Spans 4 columns */}
        <div className="col-span-4 h-[300px]">
          <div className="bg-[#9A1A8E] text-white h-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Religious Clubs</h2>
              <p>We foster a rich religious diversity on campus that welcomes all religious faiths and spiritual beliefs alike.</p>
            </div>
            <button className="bg-white text-black px-6 py-2 w-fit hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Religious Event Photo - Spans 8 columns */}
        <div className="col-span-8 h-[300px]">
          <img 
            src={religiousEventImage}
            alt="Religious Event"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cultural Clubs - New Section, Spans 4 columns */}
        <div className="col-span-4 h-[300px]">
          <div className="bg-[#FF7F50] text-white h-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Cultural Clubs</h2>
              <p>Celebrate diversity and learn about cultures around the world through performances, exhibitions, and more.</p>
            </div>
            <button className="bg-white text-black px-6 py-2 w-fit hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>




    <div className="relative w-full max-w-8xl mx-auto px-4 py-12 ">
      <div className="bg-[#000033] rounded-lg p-8 relative">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex space-x-4">
                {slide.map((program, programIndex) => (
                  <div key={programIndex} className="w-1/4 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative aspect-[3/2]">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-center line-clamp-2">{program.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <FaChevronLeft className="h-4 w-4" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FaChevronRight className="h-4 w-4" />
        </button>

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Slide ${index + 1} of ${slides.length}`}
            />
          ))}
        </div>
      </div>
    </div>






    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#2B4B96] lg:text-5xl">
             why students found swpsmart
          </h1>
          
          <p className="text-gray-700 leading-relaxed">
            Gathering momentum from the promising journey over the past successful years, NSBM
            sets the green university experience to the next level with the Phase II. This giant step in
            crafting a future of greater impact gives unwavering faith to envision the university's
            vision and purpose from a broader perspective. The Phase 2 developments in another 15
            acres of land adjoining the existing premises are currently in progress and believed to be
            a key driver of the NSBM's future growth to further expand its services and opportunities
            to the generations to come as well as to impact the world at large. The master plan for
            Phase II encompasses the following main facilities.
          </p>

          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>New Faculty Building Complex</li>
            <li>Hostel facilities for over 1,000 students</li>
            <li>Multipurpose Conference Hall with over 1,500 seating capacity</li>
            <li>Large Playground</li>
            <li>Scenic Walking paths</li>
            <li>Rainwater Harvesting Pond</li>
            <li>Extended Car Parking facilities</li>
          </ul>

          <button className="px-4 py-2 bg-[#2B4B96] text-white font-semibold rounded hover:bg-[#1a3270]">
            Read More
          </button>
        </div>

        {/* Right Column - Image Gallery */}
        <div className="grid grid-cols-6 grid-rows-6 gap-2 h-[600px]">
          <div className="col-span-3 row-span-6">
            <img
              src={nsbmMasterPlan}
              alt="NSBM Campus Master Plan"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="col-span-3 row-span-3">
            <img
              src={constructionProgress}
              alt="Construction Progress"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              src={modernBuildingDesign}
              alt="Modern Building Design"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={educationalFacilities}
              alt="Educational Facilities"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <img
              src={amphitheaterDesign}
              alt="Amphitheater Design"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={buildingConstruction}
              alt="Building Construction"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LearnMore;
