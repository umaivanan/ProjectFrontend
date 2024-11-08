import React from 'react';
import { useNavigate } from "react-router-dom";

import chefImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';



import chef from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/7051fe596b79e49070d5d0ecb606f411-removebg-preview.png';


import MicIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';
import VideoIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';
import PlayCircleIcon from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';
import MentorImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';
import StudentLearningImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets latest/b92488a6d184c618d8102da1550dc210-removebg-preview.png';



import webDevImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/website-development-banner_33099-1687.avif';
import dataScienceImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/what_is_Data_Science.avif';
import dataEngineeringImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/maxresdefault (1).jpg';
import dataAnalyticsImage from '/home/ukijaffna/um/swapSmartFrontend/src/assets/Nalytics_Legal-Big-Data_Implementing-LegalTech_roadmap-1024x679.png';



import teacher1 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/7-11-19-story-time.png';
import teacher2 from '/home/ukijaffna/um/swapSmartFrontend/src/assets/apus-574x420.jpg';
function Hero() {
  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate("/learnmore");
  };

  const Button = ({ children, className, ...props }) => (
    <button {...props} className={`py-2 px-6 rounded-full ${className}`}>
      {children}
    </button>
  );

// Card component structure
const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="p-4">{children}</div>;
const CardContent = ({ children }) => <div className="p-4">{children}</div>;
const CardFooter = ({ children }) => <div className="p-4">{children}</div>;
const CardTitle = ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>;


  return (
    <div className='bg-gradient-to-br from-red-50 mt-[4%] to-pink-100'>
    <div className="relative overflow-hidden ">
      <div className="container mx-auto px-9 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1">
              <span className="rounded-full bg-pink-600 p-1">
                <div className="h-2 w-2" />
              </span>
              <span className="ml-3 text-sm font-medium text-pink-600"> Courses paltform</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Master every field with expert-led courses on Swapsmart
            </h1>
            <p className="text-lg  text-gray-900">
            This version captures a concise, educational tone with a clear call to action, suitable for your platform. Let me know if this aligns with your vision!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-600 text-white hover:bg-red-700 px-4 py-2 rounded">
                Join Us
              </button>
              <button className="border border-red-200 hover:bg-red-50 px-4 py-2 rounded"      onClick={handleNavigate}
>
                
                Explore
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Decorative elements */}
              <div className="absolute -right-4 top-4 z-10 rounded-full bg-red-100 p-2">
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="text-sm font-semibold text-pink-600">enhance talent</span>
                </div>
              </div>
              <div className="absolute -left-6 top-1/4 h-3 w-3 rounded-full bg-red-400" />
              <div className="absolute bottom-1/4 right-0 h-4 w-4 rounded-full bg-pink-400" />
              {/* Main circular image */}
              <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-t from-pink-900 to-white shadow-xl">
  <img
    src={chefImage}
    alt="Professional Chef"
    className="object-cover object-center h-120 w-full"
  />
</div>
            </div>
          </div>
        </div>
      </div>
    </div>



{/* Bootcamp Section */}
<section className="py-16 bg-gradient-to-br ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-4">Stay Connected with SwapSmart</h2>
        <p className="text-center text-gray-900 mb-12">If you love learning through reading lots of documents</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Web Development', image: webDevImage },
            { title: 'Data Science & AI', image: dataScienceImage },
            { title: 'Data Engineering', image: dataEngineeringImage },
            { title: 'Data Analytics', image: dataAnalyticsImage }
          ].map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{course.title}</CardTitle>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full  bg-pink-500 "
                  onClick={handleNavigate} // Navigate to /learnmore
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>





       
      </div>
    </section>















    <div className="px-4 py-18 mx-auto max-w-9xl  bg-gradient-to-br from-red-50 mt-[4%] to-pink-100">
      {/* Partners Section */}
     
      {/* Features Section */}
      <div className="relative">
        {/* Pink circle decoration */}
        <div className="absolute -left-4 top-1/2 w-8 h-8 bg-pink-100 rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="w-[300px] h-[300px] mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-white rounded-full" />
              <img
                src={chef}
                alt="Chef with plate"
                width={500}
                height={400}
                className="relative z-10"
              />
              <div className="absolute top-0 right-0 bg-white rounded-full px-3 py-1 shadow-lg">
                <span className="text-lg font-bold">leaning</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6  mr-12">
            <div className="inline-block">
              {/* <span className="bg-pink-100 text-pink-500 px-4 py-1 rounded-full text-sm">New</span> */}
            </div>
            <h2 className="text-2xl font-bold">
              SwapSmart <span className="text-pink-500">features</span>
            </h2>
            <p className=" text-gray-900 max-w-md">
            Discover the powerful features of our platform, crafted to provide an intuitive learning experience with hands-on activities, personalized progress tracking, and immersive lessons designed to help you master new skills and knowledge effortlessly
            </p>

            <div className="space-y-4">
              {/* Learning Feature */}
              <div className="p-4 flex gap-4 border border-gray-200 rounded-lg shadow-sm">
                <div className="bg-pink-50 p-2 rounded-lg">
                  <div className="w-5 h-5 bg-pink-500" /> {/* Icon placeholder */}
                </div>
                <div>
                  <h3 className="font-semibold">PDF Resources for In-Depth Learning</h3>
                  <p className="text-sm  text-gray-900">
                  Access a rich library of PDF study materials tailored to each course, providing you with organized, easily downloadable content. These resources are designed to offer in-depth knowledge
                  </p>
                </div>
              </div>

              {/* Virtual Kitchen Feature */}
              <div className="p-4 flex gap-4 border border-gray-900 rounded-lg shadow-sm">
                <div className="bg-pink-50 p-2 rounded-lg">
                  <div className="w-5 h-5 bg-pink-500" /> {/* Icon placeholder */}
                </div>
                <div>
                  <h3 className="font-semibold"> Share Your Knowledge Freely and Easily</h3>
                  <p className="text-sm  text-gray-900">
                  oin our platform as an instructor without any fees or restrictions. Whether you're an expert or passionate about teaching, our community welcomes everyone eager to share their knowledge
                  </p>
                </div>
              </div>

              {/* Expert-Led Masterclass Feature */}
              <div className="p-4 flex gap-4 border border-gray-200 rounded-lg shadow-sm">
                <div className="bg-pink-50 p-2 rounded-lg">
                  <div className="w-5 h-5 bg-pink-500" /> {/* Icon placeholder */}
                </div>
                <div>
                  <h3 className="font-semibold">
Affordable Access to Quality PDF Study Materials

</h3>
                  <p className="text-sm  text-gray-900">
                  Our platform ensures that essential PDF resources are accessible to all learners at an affordable price. These high-quality materials are carefully curated to support your studies without straining your budget
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>





    





        



    <section className="py-16 bg-gradient-to-br from-red-50 mt-[4%] to-pink-100 lg:wr-[120%]">
        <div className="w-[90%] lg:w-[50%] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Reading enhances knowledge, sharpens skills, and opens doors to career advancement opportunities
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our experienced instructors are dedicated to your success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((card) => (
              <Card key={card}>
                <CardHeader>
                  <img
                    src={card === 1 ? teacher1 : teacher2}
                    alt={`Teacher ${card}`}
                    className="w-full h-40 object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn from industry experts who are passionate about teaching and mentoring.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                    onClick={handleNavigate} // Navigate to /learnmore
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Hero;
