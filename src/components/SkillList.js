
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DisplayData from './DisplayData';
import {
  FaCode,
  FaCogs,
  FaFlask,
  FaCalculator,
  FaBook,
  FaFilePdf,
  FaSearch,
  FaArrowRight,
} from 'react-icons/fa';

const SkillList = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get('https://project-backend-delta-seven.vercel.app/api/formdata');
        setUsersData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        setError('Error fetching users data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleShowMore = (userId) => {
    setSelectedId(userId);
  };

  const handleClosePopup = () => {
    setSelectedId(null);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData(usersData);
    } else {
      const filtered = usersData.filter((user) =>
        user.courseCategory.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, usersData]);

  const handleIconClick = (category) => {
    setSearchTerm(category);
  };


  return (
   <div className="bg-white -p-[1%] mb-3">
  <h1 className="text-4xl font-bold text-center mt-20 text-cyan-500">
    Explore Our Courses
  </h1>

  {/* Fixed Search Bar and Icon Grid Container */}
  <div className="fixed top-0 left-0 w-full mt-20 bg-white shadow-md z-10">
    {/* Search Bar with Icon */}
    <div className="flex justify-center mb-8 pt-4">
      <div className="w-2/3 md:w-1/2 relative">
        <input
          type="text"
          placeholder="What kind of module do you want?"
          className="w-full py-3 pl-5 pr-12 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-purple-600 p-2 text-white cursor-pointer"
          onClick={() => console.log('Search icon clicked')}
        >
          <FaSearch />
        </div>
      </div>
    </div>

    {/* Icon Grid under Search Bar */}
    <div className="flex justify-center mb-4">
      <div className="grid grid-cols-6 gap-4 text-center text-gray-600">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleIconClick('programming')}
        >
          <FaCode size={24} />
          <span>programming</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleIconClick('engineerig')}
        >
          <FaCogs size={24} />
          <span>engineerig</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleIconClick('Science')}
        >
          <FaFlask size={24} />
          <span>Science</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleIconClick('Mathematics')}
        >
          <FaCalculator size={24} />
          <span>Mathematics</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleIconClick('History')}
        >
          <FaBook size={24} />
          <span>History</span>
        </div>
        {/* <a href="http://localhost:3001">
          <div className="flex flex-col items-center cursor-pointer">
            <FaFilePdf size={24} />
            <span>PDF Summarizer</span>
          </div>
        </a> */}
      </div>
    </div>
  </div>

  {/* Course List with 3-Card Row Layout */}
  <div
    className={`pt-48 grid grid-cols-1 md:grid-cols-3 gap-8 ml-[5%] mr-[4%]`}
  >
    {filteredData.map((user) => (
      <div
        key={user._id}
        onClick={() => handleShowMore(user._id)}
        className="relative bg-white p-6 rounded-lg shadow-xl h-80 w-full cursor-pointer border-4 "
      >
        <div className="absolute inset-0 bg-black bg-opacity-5 flex flex-col justify-between rounded-lg p-4">
          <h2
            className="font-bold text-lg ml-[28%] -mt-[6%] "
            style={{
              background: 'linear-gradient(to right, purple 70%, black 30%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {user.courseCategory}
          </h2>
          <button
            className="absolute bottom-4 right-1 mr-[46%] p-1 -mb-[5%] rounded-full shadow-lg hover:shadow-1xl transition-all bg-purple-600 text-white"
            onClick={(e) => {
              e.stopPropagation();
              handleShowMore(user._id);
            }}
          >
            Show More
          </button>
        </div>
        {user.image && (
          <img
            src={`https://project-backend-delta-seven.vercel.app/imageUploads/${user.image}`}
            alt="Course"
            className="object-cover w-full h-full rounded-lg"
          />
        )}
      </div>
    ))}
  </div>

  {/* Modal for DisplayData */}
  {selectedId && (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex items-center justify-center">
      <DisplayData id={selectedId} onClose={handleClosePopup} />
    </div>
  )}
</div>

    
  );
};

export default SkillList;

