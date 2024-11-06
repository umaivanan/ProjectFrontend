
import React, { useRef, forwardRef, useImperativeHandle, useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons from react-icons
import { useNavigate, useLocation } from 'react-router-dom';

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
import SlideImage1 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/ce840533-3f09-4596-95df-f42cf5c77d57.webp";
import SlideImage2 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/99ec8a42-c1a5-440b-95f0-14161f882ff1.webp";
import SlideImage3 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/DALL·E 2024-11-06 11.14.51 - A realistic, widescreen scene of three diverse students studying together in a cozy, modern library setting. They are seated around a large table, foc.webp";
import SlideImage4 from "/home/ukijaffna/um/swapSmartFrontend/src/assets latest/DALL·E 2024-11-06 11.14.51 - A realistic, widescreen scene of three diverse students studying together in a cozy, modern library setting. They are seated around a large table, foc.webp";
import LogoPlymouth from "/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 20.41.52 - A full-screen image of a single person studying with a roadmap or study plan in front of them, inspired by the color palette of the provided hero imag.webp";
import LogoVictoria from "/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-20 20.41.52 - A full-screen image of a single person studying with a roadmap or study plan in front of them, inspired by the color palette of the provided hero imag.webp";

const Hero = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Refs for scrollable sections
  const heroRef = useRef(null);  // Ref for the Hero section

  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Expose scroll functions to the parent component
  useImperativeHandle(ref, () => ({
    scrollToHome: () => heroRef.current.scrollIntoView({ behavior: 'smooth' }),  // Scroll to Hero

    scrollToAbout: () => aboutRef.current.scrollIntoView({ behavior: 'smooth' }),
    scrollToContact: () => contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }));

  // Function to navigate to the /learnmore page
  const handleNavigateLearnMore = () => {
    navigate('/learnmore');
  };

   

  const carouselSlides = [
    {
      image: SlideImage1,
      title: "swap smart",
      titleStyle: { color: '#FFF9C4' },

      // subtitle: "Reading enhances understanding and retention of key concepts",
      // description: "FOUNDATION PROGRAMME FOR BACHELOR'S DEGREE",
      // fields: "BUSINESS | COMPUTING | ENGINEERING | SCIENCE | DESIGN",
    },
    {
      image: SlideImage2,
      title: "DISCOVER YOUR POTENTIAL",
      titleStyle: { color: '#E0F7FA' },
      // subtitle: "WORLD-CLASS EDUCATION AT NSBM GREEN UNIVERSITY",
      // description: "INNOVATIVE LEARNING ENVIRONMENT",
      // fields: "STATE-OF-THE-ART FACILITIES | INDUSTRY PARTNERSHIPS",
    },
    {
      image: SlideImage3,
      title: "SHAPE YOUR FUTURE",
      titleStyle: { color: '#FFF9C4' },

      // subtitle: "JOIN THE NEXT GENERATION OF LEADERS",
      // description: "COMPREHENSIVE DEGREE PROGRAMMES",
      // fields: "PRACTICAL EXPERIENCE | CAREER DEVELOPMENT",
    },
    {
      image: SlideImage4,
      title: "TRANSFORM YOUR CAREER",
      titleStyle: { color: '#FFF9C4' },

      // subtitle: "EXCELLENCE IN EDUCATION AND RESEARCH",
      // description: "INTERNATIONAL RECOGNITION",
      // fields: "GLOBAL OPPORTUNITIES | INDUSTRY READY",
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
      <section ref={heroRef} >
       <div className="relative w-full mt-[4%]">

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
    </section>









<div className="min-h-screen bg-gray-50 mb-20 ">
      {/* Faculty Sections */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-4 ml-[10%] mr-[10%] mt-[4%]">
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
      <section/>
      <div  className="container mx-auto px-4 py-12 mt-8">
        <section ref={aboutRef}>
      <div className=" grid gap-8 lg:grid-cols-2">
         
        {/* Left Column - Text Content */}
        <div className="space p-7 mb-5">
          <h1 className="text-4xl font-bold text-[#2B4B96] lg:text-4xl">
          Getting Started with Your Account
          </h1>
          
          <p className="text-gray-700 leading-relaxed p-9">
          Welcome to our platform! To get started, new users can click the "Sign Up" button to register and create their account. After successfully registering, you’ll be redirected to the main page, where you can explore available courses. If you’re interested in becoming an instructor, click the "Create Profile" button to set up your instructor profile and start sharing your expertise. Existing users can simply log in to access their dashboard, purchase courses, or apply to become an instructor, gaining full access to all features and resources available on the platform.







          </p>

          <ul className="space-y-6 list-disc list-inside text-gray-700 p-9">
            <li>Click "Sign Up" to register as a new user.</li>
            <li>After registration, you’ll be redirected to the main page</li>
            <li>Click "Create Profile" to apply as an instructor.</li>
            <li>Logged-in users can buy courses or start instructing.</li>
            <li>Existing users can directly log in to access all features.</li>
           
          </ul>

          {/* <button className="px-4 py-2 mt-9 bg-[#2B4B96] text-white font-semibold rounded hover:bg-[#1a3270]">
            Read More
          </button> */}
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
      </section>
    </div>


    
    </div>

    




      
      <div className="max-w-7xl mx-auto -p-[10%] -mt-[6%]">
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
              <h2 className="text-2xl font-semibold mb-4">PDF Summarizer
</h2>
              <p className="mb-6">Allows users to upload PDFs for quick, automatic summaries. Ideal for students and instructors to quickly review large documents and focus on key insights.

</p>
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
              <h2 className="text-2xl font-semibold mb-4">Easy Course Search</h2>
              <p>The search bar helps users find specific courses by typing keywords,saving time and improving navigation across the platform..</p>
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
              <h2 className="text-2xl font-semibold mb-4">No Cost to Create Courses</h2>
              <p>Instructors can publish courses for free, lowering barriers for experts to share knowledge without upfront costs..</p>
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
              <h2 className="text-2xl font-semibold mb-4">User-Friendly Design</h2>
              <p>The platform’s simple, intuitive layout ensures easy navigation, making it accessible for users of all technical levels..</p>
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
              <h2 className="text-2xl font-semibold mb-4">Passive Income for Instructors</h2>
              <p>Instructors earn ongoing income from course enrollments, creating a steady revenue stream as users continue to join.</p>
            </div>
            <button className="bg-white text-black px-6 py-2 w-fit hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>




    <div className="relative w-full  max-w-7xl mx-auto -px-[4%] py-10  mt-9">
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






    
    </div>
  );
});

export default Hero;
