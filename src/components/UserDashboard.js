import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [skillData, setSkillData] = useState(null);
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileName, setProfileName] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [educationalBackground, setEducationalBackground] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [updatedForm, setUpdatedForm] = useState({});
  const skillId = localStorage.getItem('skillId');

  const fetchSkill = async () => {
    if (!skillId) {
      setError(new Error('No skill ID found in local storage.'));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8715/api/skills/${skillId}`);
      setSkillData(response.data);
      setProfileName(response.data.profileName);
      setPreferredLanguage(response.data.preferredLanguage);
      setEducationalBackground(response.data.educationalBackground);
      setProfilePicture(response.data.profilePicture);
    } catch (err) {
      console.error('Error fetching skill data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFormData = async () => {
    if (!skillId) return;

    try {
      const response = await axios.get(`http://localhost:8715/api/formdata`);
      setFormData(response.data);
    } catch (err) {
      console.error('Error fetching form data:', err);
      setError(err);
    }
  };

  const handleFormChange = (e, fieldName) => {
    setUpdatedForm({
      ...updatedForm,
      [fieldName]: e.target.value === "" ? "" : e.target.value,
    });
  };  

  const handleFileChange = (e, fieldName) => {
    setUpdatedForm({
      ...updatedForm,
      [fieldName]: e.target.files[0],
    });
  };

  const updateFormData = async (id) => {
    const formDataObj = new FormData();
  
    Object.keys(updatedForm).forEach((key) => {
      if (key !== 'image') {
        formDataObj.append(key, updatedForm[key]);
      }
    });

    if (updatedForm.image && updatedForm.image instanceof File) {
      formDataObj.append('image', updatedForm.image);
    }

    try {
      const response = await axios.patch(`http://localhost:8715/api/formdata/${id}`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Form data updated successfully');
        setFormData((prevFormData) =>
          prevFormData.map((form) => (form._id === id ? response.data.formData : form))
        );
        setUpdatedForm({});
        fetchFormData();
      } else {
        alert('Failed to update form data. Please try again.');
      }
    } catch (err) {
      console.error('Error updating form data:', err);
      setError(err);
      alert('An error occurred while updating the form data.');
    }
  };

  const updateSkill = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profileName', profileName);
    formData.append('preferredLanguage', preferredLanguage);
    formData.append('educationalBackground', educationalBackground);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    try {
      const response = await axios.patch(`http://localhost:8715/api/skills/${skillId}/details`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Skill updated successfully');
        setSkillData(response.data);
        setProfilePicture(response.data.profilePicture);
      } else {
        alert('Failed to update skill. Please try again.');
      }
    } catch (err) {
      console.error('Error updating skill:', err);
      setError(err);
      alert('An error occurred while updating the skill.');
    }
  };

  useEffect(() => {
    fetchSkill();
    fetchFormData();
  }, [skillId]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error.message}</div>;
  }

  const filteredFormData = formData.filter((form) => form.skill._id === skillId);

  return (
    // <div className="max-w-4xl mx-auto p-9 mt-[7%] bg-white rounded-lg shadow-md">
    //   <h1 className="text-3xl font-semibold text-center">Edit youre details</h1>
    //   {skillData && (
    //     <div className="skill-info mt-6">
    //       <h2 className="text-2xl font-semibold mb-4">Skill Information</h2>
    //       <img
    //         src={`http://localhost:8715${profilePicture}` || 'default_profile_picture_url.jpg'}
    //         alt="Profile"
    //         className="w-32 h-32 rounded-full mb-4"
    //       />
    //       <form onSubmit={updateSkill} className="space-y-4">
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">Profile Name:</label>
    //           <input
    //             type="text"
    //             value={profileName}
    //             onChange={(e) => setProfileName(e.target.value)}
    //             required
    //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
    //           />
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">Preferred Language:</label>
    //           <input
    //             type="text"
    //             value={preferredLanguage}
    //             onChange={(e) => setPreferredLanguage(e.target.value)}
    //             required
    //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
    //           />
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">Educational Background:</label>
    //           <input
    //             type="text"
    //             value={educationalBackground}
    //             onChange={(e) => setEducationalBackground(e.target.value)}
    //             required
    //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
    //           />
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">Profile Picture:</label>
    //           <input
    //             type="file"
    //             onChange={(e) => setProfilePicture(e.target.files[0])}
    //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
    //           />
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
    //         >
    //           Update Skill
    //         </button>
    //       </form>
    //     </div>
    //   )}
    //   {filteredFormData.length > 0 && (
    //     <div className="form-data mt-6">
    //       <h2 className="text-2xl font-semibold mb-4">Form Data</h2>
    //       {filteredFormData.map((form) => (
    //         <div key={form._id} className="p-4 bg-gray-100 rounded-md shadow-sm mb-4">
    //           {Object.keys(form).map((key) => (
    //             key !== '_id' && key !== 'skill' && (
    //               <div key={key} className="mb-2">
    //                 <label className="block text-sm font-medium text-gray-700 capitalize">{key}:</label>
    //                 {key.includes('Chapter') || key.includes('roadmapIntroduction') ? (
    //                   <>
    //                     {form[key] && (
    //                       <a
    //                         href={`http://localhost:8715/pdfUploads/${form[key]}`}
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                         className="text-indigo-600 hover:underline"
    //                       >
    //                         Download PDF
    //                       </a>
    //                     )}
    //                     <input
    //                       type="file"
    //                       onChange={(e) => handleFileChange(e, key)}
    //                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
    //                     />
    //                   </>
    //                 ) : key === 'image' ? (
    //                   <>
    //                     {form.image && (
    //                       <img
    //                         src={`http://localhost:8715/imageUploads/${form.image}`}
    //                         alt="Formdataimage"
    //                         className="w-32 h-32 rounded-md mb-4"
    //                       />
    //                     )}
    //                     <input
    //                       type="file"
    //                       onChange={(e) => handleFileChange(e, 'image')}
    //                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
    //                     />
    //                   </>
    //                 ) : (
    //                   <input
    //                     type="text"
    //                     defaultValue={form[key]}
    //                     onChange={(e) => handleFormChange(e, key)}
    //                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
    //                   />
    //                 )}
    //               </div>
    //             )
    //           ))}
    //           <button
    //             onClick={() => updateFormData(form._id)}
    //             className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
    //           >
    //             Update Form
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
  {/* Header Section */}
  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 rounded-lg shadow-lg">
    <h1 className="text-4xl  font-extrabold text-white text-center tracking-wide">
      Profile Settings
    </h1>
    <p className="text-white text-center mt-2 text-sm">
      Customize your profile and manage your data effortlessly.
    </p>
  </div>

  {skillData && (
    <div className="p-8 space-y-12">
      {/* Profile Section */}
      <div className="skill-info bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Profile
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-indigo-100 group-hover:ring-indigo-300 transition-all duration-300">
              <img
                src={`http://localhost:8715${profilePicture}` || 'default_profile_picture_url.jpg'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 p-3 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="file"
                onChange={(e) => setProfilePicture(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
          <form onSubmit={updateSkill} className="space-y-6 w-full max-w-md">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Name
              </label>
              <input
                type="text"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Preferred Language
              </label>
              <input
                type="text"
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Educational Background
              </label>
              <input
                type="text"
                value={educationalBackground}
                onChange={(e) => setEducationalBackground(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-[1.03]"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      {/* Form Data Section */}
      {filteredFormData.length > 0 && (
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Form Data
          </h2>
          <div className="space-y-6">
            {filteredFormData.map((form) => (
              <div
                key={form._id}
                className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.keys(form).map((key) => (
                    key !== '_id' && key !== 'skill' && (
                      <div key={key} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 capitalize">
                          {key.split(/(?=[A-Z])/).join(' ')}
                        </label>
                        {key.includes('Chapter') || key.includes('roadmapIntroduction') ? (
                          <div className="space-y-2">
                            {form[key] && (
                              <a
                                href={`http://localhost:8715/pdfUploads/${form[key]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 transition"
                              >
                                Download PDF
                              </a>
                            )}
                            <input
                              type="file"
                              onChange={(e) => handleFileChange(e, key)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>
                        ) : key === 'image' ? (
                          <div className="space-y-2">
                            {form.image && (
                              <img
                                src={`http://localhost:8715/imageUploads/${form.image}`}
                                alt="Form data"
                                className="w-32 h-32 rounded-lg object-cover"
                              />
                            )}
                            <input
                              type="file"
                              onChange={(e) => handleFileChange(e, 'image')}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>
                        ) : (
                          <input
                            type="text"
                            defaultValue={form[key]}
                            onChange={(e) => handleFormChange(e, key)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                          />
                        )}
                      </div>
                    )
                  ))}
                </div>
                <button
                  onClick={() => updateFormData(form._id)}
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-[1.03]"
                >
                  Update Form
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )}
</div>

  );
};

export default UserDashboard;
