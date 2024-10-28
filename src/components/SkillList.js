// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import DisplayData from './DisplayData'; // Import DisplayData component

// const SkillList = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]); // To store filtered data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [selectedId, setSelectedId] = useState(null); // State to handle selected user ID for the modal
//   const [searchTerm, setSearchTerm] = useState(''); // State for search input
//   const navigate = useNavigate();
  

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8707/api/formdata');
//         setUsersData(response.data);
//         setFilteredData(response.data); // Initially, display all data
//       } catch (error) {
//         setError('Error fetching users data');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllData();
//   }, []);

//   // Handle opening the popup
//   const handleShowMore = (userId) => {
//     setSelectedId(userId); // Set the selected user ID
//   };

//   // Handle closing the popup
//   const handleClosePopup = () => {
//     setSelectedId(null); // Reset selected ID to close the popup
//   };

//   // Helper function to generate random button colors
//   const generateRandomColor = () => {
//     const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   // Filter data based on search input
//   useEffect(() => {
//     if (searchTerm === '') {
//       setFilteredData(usersData); // Show all data if no search term
//     } else {
//       const filtered = usersData.filter((user) =>
//         user.courseDescription.toLowerCase().includes(searchTerm.toLowerCase()) // Filter based on course description
//       );
//       setFilteredData(filtered);
//     }
//   }, [searchTerm, usersData]); // Re-run the filter whenever searchTerm or usersData changes

//   // Divide the usersData into rows with different card counts (3, 4, 3 pattern)
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

//   // Define the chunk sizes for each row (3, 4, 3)
//   const chunkedUsersData = chunkArray(filteredData, [3, 4, 3]);

//   return (
//     <div className={`skill-list-container px-4 py-8 bg-white `}>
//       <h1 className="text-4xl font-bold text-center mb-12 text-cyan-500">Explore Our Courses</h1>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-20">
//         <input
//           type="text"
//           placeholder="What kind of module do you want?"
//           className="w-2/3 md:w-1/2 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as user types
//         />
//       </div>

//       {chunkedUsersData.map((row, rowIndex) => (
//         <div
//           key={rowIndex}
//           className={`grid ${
//             rowIndex % 2 === 1 ? 'grid-cols-4' : 'grid-cols-3'
//           } gap-8 mb-8`} // Alternate between 3 and 4 columns
//         >
//           {row.map((user) => (
//             <div
//               key={user._id} // Make sure each card has a unique key (like user ID)
//               onClick={() => handleShowMore(user._id)} // Remove zoom effect, keep only the show more functionality
//               className={`relative bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] p-6 rounded-lg shadow-xl h-72`} // Removed zoom-related classes
//               style={{ cursor: 'pointer' }} // Change cursor to pointer
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 rounded-lg">
//                 <h2 className="text-white font-bold text-lg mb-2">
//                   {user.courseDescription}
//                 </h2>
//                 <button
//                   className={`absolute bottom-4 right-4 py-2 px-4 text-white rounded-full shadow-lg hover:shadow-2xl transition-all ${generateRandomColor()}`}
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent card click from triggering
//                     handleShowMore(user._id); // Show the popup with selected ID
//                   }}
//                 >
//                   Show More
//                 </button>
//               </div>
//               {user.image && (
//                 <img
//                   src={`http://localhost:8707/imageUploads/${user.image}`}
//                   alt="Course"
//                   className="object-cover w-full h-full rounded-lg"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       ))}

//       {/* Modal for DisplayData */}
//       {selectedId && (
//         <div >
//           <div>

//             {/* Render DisplayData with selected user ID and pass the onClose function */}
//             <DisplayData id={selectedId} onClose={handleClosePopup} /> 
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SkillList;

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
//         const response = await axios.get('http://localhost:8707/api/formdata');
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
//     <div className="skill-list-container px-4 py-8 bg-white">
//       <h1 className="text-4xl font-bold text-center mb-12 text-cyan-500">Explore Our Courses</h1>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="What kind of module do you want?"
//           className="w-2/3 md:w-1/2 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Icon Grid under Search Bar */}
//       <div className="flex justify-center ml-10 mb-20">
//         <div className="grid grid-cols-6 gap-4 text-center text-gray-600">
//           <div className="flex flex-col items-center">
//             <FaCode size={24} />
//             <span>Programming</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaCogs size={24} />
//             <span>Engineering</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaFlask size={24} />
//             <span>Science</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaCalculator size={24} />
//             <span>Mathematics</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaBook size={24} />
//             <span>History</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaFilePdf size={24} />
//             <span>PDF Summarizer</span>
//           </div>
//         </div>
//       </div>


//       {chunkedUsersData.map((row, rowIndex) => (
//         <div
//           key={rowIndex}
//           className={`grid ${rowIndex % 2 === 1 ? 'grid-cols-4' : 'grid-cols-3'} gap-8 mb-8`}
//         >
//           {row.map((user) => (
//             <div
//               key={user._id}
//               onClick={() => handleShowMore(user._id)}
//               className={`relative bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] p-6 rounded-lg shadow-xl h-72`}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 rounded-lg">
//                 <h2 className="text-white font-bold text-lg mb-2">
//                   {user.courseDescription}
//                 </h2>
//                 <button
//                   className={`absolute bottom-4 right-4 py-2 px-4 text-white rounded-full shadow-lg hover:shadow-2xl transition-all ${generateRandomColor()}`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleShowMore(user._id);
//                   }}
//                 >
//                   Show More
//                 </button>
//               </div>
//               {user.image && (
//                 <img
//                   src={`http://localhost:8707/imageUploads/${user.image}`}
//                   alt="Course"
//                   className="object-cover w-full h-full rounded-lg"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       ))}

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
//         const response = await axios.get('http://localhost:8707/api/formdata');
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
//     <div className="  bg-white">
//       <h1 className="text-4xl font-bold text-center mb-12 text-cyan-500">Explore Our Courses</h1>

//       {/* Search Bar with Icon */}
//       <div className="flex justify-center mb-6 relative w-full">
//   <div className="w-2/3 md:w-1/2 relative">
//     <input
//       type="text"
//       placeholder="What kind of module do you want?"
//       className="w-full py-3 pl-5 pr-12 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//     />
//     <div
//       className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-purple-600 p-2 text-white cursor-pointer"
//       onClick={() => console.log('Search icon clicked')}
//     >
//       <FaSearch />
//     </div>
//   </div>
// </div>


//       {/* Icon Grid under Search Bar */}
//       <div className="flex justify-center ml-10 mb-20">
//         <div className="grid grid-cols-6 gap-4 text-center text-gray-600">
//           <div className="flex flex-col items-center">
//             <FaCode size={24} />
//             <span>Programming</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaCogs size={24} />
//             <span>Engineering</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaFlask size={24} />
//             <span>Science</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaCalculator size={24} />
//             <span>Mathematics</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaBook size={24} />
//             <span>History</span>
//           </div>
//           <div
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() => navigate('/summarize')}
//           >
//             <FaFilePdf size={24} />
//             <span>PDF Summarizer</span>
//           </div>
//         </div>
//       </div>

//       {chunkedUsersData.map((row, rowIndex) => (
//         <div
//           key={rowIndex}
//           className={`grid ${rowIndex % 2 === 1 ? 'grid-cols-4' : 'grid-cols-3'} gap-8 mb-8`}
//         >
//           {row.map((user) => (
//             <div
//               key={user._id}
//               onClick={() => handleShowMore(user._id)}
//               className={`relative bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] p-6 rounded-lg shadow-xl h-72`}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 rounded-lg">
//                 <h2 className="text-white font-bold text-lg mb-2">
//                   {user.courseDescription}
//                 </h2>
//                 <button
//                   className={`absolute bottom-4 right-4 py-2 px-4 text-white rounded-full shadow-lg hover:shadow-2xl transition-all ${generateRandomColor()}`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleShowMore(user._id);
//                   }}
//                 >
//                   Show More
//                 </button>
//               </div>
//               {user.image && (
//                 <img
//                   src={`http://localhost:8707/imageUploads/${user.image}`}
//                   alt="Course"
//                   className="object-cover w-full h-full rounded-lg"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       ))}

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
        const response = await axios.get('http://localhost:8707/api/formdata');
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

  const generateRandomColor = () => {
    const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400'];
    return colors[Math.floor(Math.random() * colors.length)];
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
    <div className="bg-white">
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
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate('/summarize')}
            >
              <FaFilePdf size={24} />
              <span>PDF Summarizer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Adjust content padding to prevent overlap */}
      <div className="pt-48">
        {chunkedUsersData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${rowIndex % 2 === 1 ? 'grid-cols-4' : 'grid-cols-3'} gap-8 mb-8`}
          >
            {row.map((user) => (
              <div
                key={user._id}
                onClick={() => handleShowMore(user._id)}
                className={`relative bg-gradient-to-r from-[#ebf8ff] to-[#e6f7ff] p-6 rounded-lg shadow-xl h-72`}
                style={{ cursor: 'pointer' }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 rounded-lg">
                  <h2 className="text-white font-bold text-lg mb-2">
                    {user.courseDescription}
                  </h2>
                  <button
                    className={`absolute bottom-4 right-4 py-2 px-4 text-white rounded-full shadow-lg hover:shadow-2xl transition-all ${generateRandomColor()}`}
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
                    src={`http://localhost:8707/imageUploads/${user.image}`}
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
        <div>
          <div>
            <DisplayData id={selectedId} onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillList;
