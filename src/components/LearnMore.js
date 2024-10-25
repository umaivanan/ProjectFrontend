import { Star, ChevronRight } from 'lucide-react';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaFilePdf, FaLaptopCode, FaTiktok, FaFacebookF } from 'react-icons/fa';

// Importing images directly
import learnfirst from '/home/ukijaffna/um/swapSmartFrontend/src/assets/Roadmap_Process_Inspiration_PDF_Slide_1.jpg';
import peopleCollaborating from '/home/ukijaffna/um/swapSmartFrontend/src/assets/57602174-53a8-44eb-b64a-1e7d1fea7070.webp';
import onlineLocation from '/home/ukijaffna/um/swapSmartFrontend/src/assets/DALL·E 2024-10-18 19.32.11 - A simple, full-screen road map image with clear points numbered from 1 to 10, each point representing a chapter or milestone. The road stretches from  (1).webp';
import romeLocation from '/home/ukijaffna/um/swapSmartFrontend/src/assets/apus-574x420.jpg';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">5,000+ students enrolled</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              we are the only platform sharing a roadmap with explanations
            </h1>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={learnfirst}
              alt="Woman using laptop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Logos Section */}
        <div className="py-12 grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
  {[FaGraduationCap, FaBook, FaChalkboardTeacher, FaFilePdf, FaLaptopCode].map((Icon, index) => (
    <div key={index} className="flex justify-center">
      <Icon size={40} />
    </div>
  ))}
</div>
        {/* Become a Growth Marketer Section */}
        <div className="py-12">
          <div className="md:flex items-start">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">Discover and Share Roadmaps for Learning</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <span>Access curated roadmaps to master new skills efficiently</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <span>Build and share your personalized learning paths</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <span>Stay on track with clear definitions and milestones</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <p className="text-gray-600 mb-4">
              SwapSmart helps learners and professionals create, share, and follow roadmaps for skill development, ensuring a structured approach to mastering new topics with clarity
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[FaBook, FaChalkboardTeacher].map((Icon, index) => (
                  <div key={index} className="flex justify-center items-center bg-gray-100 rounded-lg p-2">
                    <Icon size={30} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What you'll learn Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold mb-8">What You'll Learn in SwapSmart Roadmap Sharing Platform</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Introduction to Roadmap Creation',
              'Understanding Learning Milestones',
              'Defining Clear Steps and Goals',
              'Collaborating and Sharing Roadmaps',
              'Tracking Progress Efficiently',
              'Community Feedback and Engagement',
              'Customizing Roadmaps for Different Skills',
              'Utilizing Analytics for Continuous Improvement',
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <span className="text-purple-600 font-semibold">{index + 1}</span>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Study Location Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold mb-8">Where Would You Like to Explore Roadmaps?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Online', students: 5302, image: onlineLocation },
              { name: 'Rome', students: 1203, image: romeLocation },
            ].map((location) => (
              <div key={location.name} className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <p className="text-gray-600">{location.students} students</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boost your skills Section */}
        <div className="py-12 md:flex items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-6">Boost Your Skills by Following and Sharing Roadmaps</h2>
            <p className="text-gray-600 mb-6">
            SwapSmart enables you to follow structured roadmaps designed by experts and peers. Enhance your learning by collaborating on customized paths that match your goals and skill level.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-700 transition duration-300">
            Start Sharing Roadmaps
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={peopleCollaborating}
              alt="People collaborating"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
