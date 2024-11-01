// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import DisplayData from './DisplayData';
// import {
//   FaCode,
//   FaCogs,
//   FaFlask,
//   FaCalculator,
//   FaBook,
//   FaFilePdf,
//   FaSearch,
// } from 'react-icons/fa';

// const SkillList = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [selectedId, setSelectedId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8713/api/formdata');
//         setUsersData(response.data);
//         setFilteredData(response.data);
//       } catch (error) {
//         setError('Error fetching users data');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllData();
//   }, []);

//   const handleShowMore = (userId) => {
//     setSelectedId(userId);
//   };

//   const handleClosePopup = () => {
//     setSelectedId(null);
//   };

//   const generateRandomColor = () => {
//     const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   useEffect(() => {
//     if (searchTerm === '') {
//       setFilteredData(usersData);
//     } else {
//       const filtered = usersData.filter((user) =>
//         user.courseDescription.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredData(filtered);
//     }
//   }, [searchTerm, usersData]);

//   const chunkArray = (array, chunkSizes) => {
//     let i = 0;
//     const result = [];
//     while (i < array.length) {
//       for (const size of chunkSizes) {
//         result.push(array.slice(i, i + size));
//         i += size;
//       }
//     }
//     return result;
//   };

//   const chunkedUsersData = chunkArray(filteredData, [3, 4, 3]);

//   return (
//     <div className="bg-white">
//       <h1 className="text-4xl font-bold text-center mt-20 text-cyan-500">Explore Our Courses</h1>

//       {/* Fixed Search Bar and Icon Grid Container */}
//       <div className="fixed top-0 left-0 w-full mt-20 bg-white shadow-md z-10">
//         {/* Search Bar with Icon */}
//         <div className="flex justify-center mb-6 pt-4">
//           <div className="w-2/3 md:w-1/2 relative">
//             <input
//               type="text"
//               placeholder="What kind of module do you want?"
//               className="w-full py-3 pl-5 pr-12 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-purple-600 p-2 text-white cursor-pointer"
//               onClick={() => console.log('Search icon clicked')}
//             >
//               <FaSearch />
//             </div>
//           </div>
//         </div>

//         {/* Icon Grid under Search Bar */}
//         <div className="flex justify-center mb-4">
//           <div className="grid grid-cols-6 gap-4 text-center text-gray-600">
//             <div className="flex flex-col items-center">
//               <FaCode size={24} />
//               <span>Programming</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaCogs size={24} />
//               <span>Engineering</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaFlask size={24} />
//               <span>Science</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaCalculator size={24} />
//               <span>Mathematics</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaBook size={24} />
//               <span>History</span>
//             </div>
//             <a href='http://localhost:3001' >

//             <div
//               className="flex flex-col items-center cursor-pointer"
//               // onClick={() => navigate('/summarize')}
//               >
//               <FaFilePdf size={24} />
//               <span>PDF Summarizer</span>
//             </div>
//               </a>
//           </div>
//         </div>
//       </div>

//       {/* Adjust content padding to prevent overlap */}
//       <div className="pt-48">
//         {chunkedUsersData.map((row, rowIndex) => (
//           <div
//             key={rowIndex}
//             className={`grid ${rowIndex % 2 === 1 ? 'grid-cols-4' : 'grid-cols-3'} gap-8 mb-8`}
//           >
//             {row.map((user) => (
//               <div
//                 key={user._id}
//                 onClick={() => handleShowMore(user._id)}
//                 className={`relative bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] p-6 rounded-lg shadow-xl h-72`}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 rounded-lg">
//                   <h2 className="text-white font-bold text-lg mb-2">
//                     {user.courseDescription}
//                   </h2>
//                   <button
//                     className={`absolute bottom-4 right-4 py-2 px-4 text-white rounded-full shadow-lg hover:shadow-2xl transition-all ${generateRandomColor()}`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleShowMore(user._id);
//                     }}
//                   >
//                     Show More
//                   </button>
//                 </div>
//                 {user.image && (
//                   <img
//                     src={`http://localhost:8713/imageUploads/${user.image}`}
//                     alt="Course"
//                     className="object-cover w-full h-full rounded-lg"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Modal for DisplayData */}
//       {selectedId && (
//         <div>
//           <div>
//             <DisplayData id={selectedId} onClose={handleClosePopup} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SkillList;
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
        const response = await axios.get('http://localhost:8713/api/formdata');
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
        user.courseDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, usersData]);

  const chunkArray = (array, chunkSizes) => {
    let i = 0;
    const result = [];
    while (i < array.length) {
      for (const size of chunkSizes) {
        result.push(array.slice(i, i + size));
        i += size;
      }
    }
    return result;
  };

  const chunkedUsersData = chunkArray(filteredData, [3, 4, 3]);

  return (
    <div className="bg-white p-12">
      <h1 className="text-4xl font-bold text-center mt-20 text-cyan-500">Explore Our Courses</h1>

      {/* Fixed Search Bar and Icon Grid Container */}
      <div className="fixed top-0 left-0 w-full mt-20 bg-white shadow-md z-10">
        {/* Search Bar with Icon */}
        <div className="flex justify-center mb-6 pt-4">
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
            <div className="flex flex-col items-center">
              <FaCode size={24} />
              <span>Programming</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCogs size={24} />
              <span>Engineering</span>
            </div>
            <div className="flex flex-col items-center">
              <FaFlask size={24} />
              <span>Science</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCalculator size={24} />
              <span>Mathematics</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBook size={24} />
              <span>History</span>
            </div>
            <a href="http://localhost:3001">
              <div className="flex flex-col items-center cursor-pointer">
                <FaFilePdf size={24} />
                <span>PDF Summarizer</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Adjust content padding to prevent overlap */}
      <div className={`pt-48 ${selectedId ? 'blur-sm' : ''}`}>
        {chunkedUsersData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${rowIndex % 2 === 1 ? 'grid-cols-4' : 'grid-cols-3'} gap-8 mb-8`}
          >
            {row.map((user) => (
              <div
                key={user._id}
                onClick={() => handleShowMore(user._id)}
                className="relative bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] p-6 rounded-lg shadow-xl h-72 cursor-pointer"
              >
                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-between  rounded-lg">
                <h2 className="font-bold text-lg mb-4" style={{ background: 'linear-gradient(to right, purple 70%, black 30%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>

                    {user.courseDescription}
                  </h2>
                  <button
                  className={`absolute bottom-4 right-4 py-1 px-1  rounded-full shadow-lg hover:shadow-2xl transition-all bg-gradient-to-r from-purple-600 to-white`}
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
                    src={`http://localhost:8713/imageUploads/${user.image}`}
                    alt="Course"
                    className="object-cover w-full h-full rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for DisplayData */}
      {selectedId && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-20 flex items-center justify-center">
          <DisplayData id={selectedId} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
};

export default SkillList;
