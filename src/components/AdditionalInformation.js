import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook, faClock, faUser, faTag,
    faLanguage, faDollarSign, faImage, 
} from '@fortawesome/free-solid-svg-icons';
import welcomeVideo from '../assets/66387c8b-f554-45bd-b813-6b4b940a610b.mp4';



const AdditionalInformation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Use skillId from location.state or fallback to localStorage
    const { skillId } = location.state || {};
    const storedSkillId = localStorage.getItem('skillId');
    const currentSkillId = skillId || storedSkillId;

    const [formData, setFormData] = useState({
        courseDescription: '',
        courseDuration: '',
        targetAudience: '',
        courseCategory: '',
        languages: '',
        roadmapIntroduction: null,
        firstChapter: null,
        secondChapter: null,
        thirdChapter: null,
        fourthChapter: null,
        fifthChapter: null,
        sixthChapter: null,
        seventhChapter: null,
        eighthChapter: null,
        ninthChapter: null,
        tenthChapter: null,
        pdfPrice: '',
        image: null
    });

    const [fileNames, setFileNames] = useState({});
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [chapterCount, setChapterCount] = useState(1); // Start with 1 chapter visible

    // Define chapter field names to align with backend multer configuration
    const chapterNames = [
        'firstChapter', 'secondChapter', 'thirdChapter', 'fourthChapter', 'fifthChapter',
        'sixthChapter', 'seventhChapter', 'eighthChapter', 'ninthChapter', 'tenthChapter'
    ];

    // Save skillId to localStorage when it is available
    useEffect(() => {
        if (currentSkillId) localStorage.setItem('skillId', currentSkillId);
    }, [currentSkillId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const selectedFile = files[0];
        setFormData({ ...formData, [name]: selectedFile });
        setFileNames({ ...fileNames, [name]: selectedFile.name });
    };

    const handlePriceChange = (e) => {
        const { value } = e.target;
        if (/^\d*\.?\d*$/.test(value)) {
            setFormData({ ...formData, pdfPrice: value });
        }
    };

    const handleShowNextChapter = () => {
        if (chapterCount < 10) {
            setChapterCount((prev) => prev + 1);
        }
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.courseDescription.trim()) formErrors.courseDescription = 'Course description is required';
        if (!formData.courseDuration.trim()) formErrors.courseDuration = 'Course duration is required';
        if (!formData.targetAudience.trim()) formErrors.targetAudience = 'Target audience is required';
        if (!formData.courseCategory.trim()) formErrors.courseCategory = 'Course category is required';
        if (!formData.languages.trim()) formErrors.languages = 'Languages are required';
        if (!formData.pdfPrice.trim()) formErrors.pdfPrice = 'Price is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                const formDataObj = new FormData();
                formDataObj.append('courseDescription', formData.courseDescription);
                formDataObj.append('courseDuration', formData.courseDuration);
                formDataObj.append('targetAudience', formData.targetAudience);
                formDataObj.append('courseCategory', formData.courseCategory);
                formDataObj.append('languages', formData.languages);
                formDataObj.append('pdfPrice', formData.pdfPrice);
                formDataObj.append('skillId', currentSkillId);

                Object.keys(formData).forEach(key => {
                    if (formData[key] instanceof File) {
                        formDataObj.append(key, formData[key]);
                    }
                });

                const response = await axios.post('https://project-backend-delta-seven.vercel.app/api/formdata', formDataObj, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                const formDataId = response.data.formData._id;
                await axios.patch(`https://project-backend-delta-seven.vercel.app/api/skills/${currentSkillId}`, { formDataId });

                const skillResponse = await axios.get(`https://project-backend-delta-seven.vercel.app/api/skills/${currentSkillId}`);
                const submittedStatus = skillResponse.data.submittedStatus;

                localStorage.setItem('submittedStatus', submittedStatus);

                // Emit custom event to notify Navbar
                window.dispatchEvent(new Event('formSubmitted'));

                alert('Successfully submitted your information!');
                navigate('/list');
            } catch (error) {
                console.error('Error submitting additional information', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
<div className="min-h-screen flex items-center justify-center p-10  mr-8 ml-9">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
        {/* Welcome Section */}
        <div className="flex h-screen items-center shadow-1xl rounded-lg w-full">
    {/* Left side with image covering half the page */}
    <div className="relative w-6/5 h-full overflow-hidden mt-[20%]">
    <video 
        src={welcomeVideo} // Use the imported video file as the source
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
        style={{ width: '120%', height: '120%' }} // Increase dimensions by 20%

    />
    {/* Overlay text on the video */}
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8">
    <h2 className="text-8xl font-bold mt-[30%]">SwapSmart</h2>
    <p className="text-xl text-center mb-[50%] mt-2">
        Welcome to the Course Submission Portal! Here, you can submit your course details, including descriptions, 
        audience, and pricing. Please follow the instructions and fill in all required fields. We’re excited to help 
        you share your knowledge!
    </p>
</div>
</div>
</div>
        {/* Form Section */}
        <div
    className="bg-white shadow-1xl rounded-lg w-full h-auto mt-[10%] mb-[20%]overflow-auto my-10"
    style={{
        paddingTop: '5%',
        paddingBottom: '1%',
        paddingLeft: '14%',
        paddingRight: '14%',
    }}
>
            <h1 className="text-4xl font-bold text-center text-purple-900 mb-10">Course Submission Form</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* General Information Fields */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="form-group">
        <label htmlFor="courseDescription" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
            <FontAwesomeIcon icon={faBook} />
            <span>Course Description</span>
        </label>
        <textarea
            id="courseDescription"
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleChange}
            className="block w-full mt-1 border border-gray-300 shadow-sm p-3 focus:ring focus:ring-blue-500 placeholder-gray-400 text-lg font-serif"
            style={{ borderRadius: '50px', height: '80px' }}
            placeholder="Enter a brief description of the course"
        />
    </div>
    <div className="form-group">
        <label htmlFor="courseDuration" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
            <FontAwesomeIcon icon={faClock} />
            <span>Course Duration</span>
        </label>
        <input
            type="text"
            id="courseDuration"
            name="courseDuration"
            value={formData.courseDuration}
            onChange={handleChange}
            className="block w-full mt-1 border border-gray-300 shadow-sm p-3 focus:ring focus:ring-blue-500 placeholder-gray-400 text-lg font-serif"
            style={{ borderRadius: '50px', height: '80px' }}
            placeholder="e.g., 3 weeks"
        />
    </div>
</div>

                {/* Additional Information Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="form-group">
        <label htmlFor="targetAudience" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
            <FontAwesomeIcon icon={faUser} />
            <span>Target Audience</span>
        </label>
        <input
            type="text"
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="block w-full mt-1 border border-gray-300 shadow-sm p-3 focus:ring focus:ring-blue-500 placeholder-gray-400 text-lg font-serif"
            style={{ borderRadius: '50px', height: '80px' }}
            placeholder="e.g., Beginners, Professionals"
        />
    </div>
    <div className="form-group">
        <label htmlFor="courseCategory" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
            <FontAwesomeIcon icon={faTag} />
            <span>Course Category</span>
        </label>
        <input
            type="text"
            id="courseCategory"
            name="courseCategory"
            value={formData.courseCategory}
            onChange={handleChange}
            className="block w-full mt-1 border border-gray-300 shadow-sm p-3 focus:ring focus:ring-blue-500 placeholder-gray-400 text-lg font-serif"
            style={{ borderRadius: '50px', height: '80px' }}
            placeholder="e.g., Technology, Arts"
        />
    </div>
</div>

                {/* Pricing and Language Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="form-group">
        <label htmlFor="languages" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
            <FontAwesomeIcon icon={faLanguage} />
            <span>Languages I Speak</span>
        </label>
        <input
            type="text"
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className="block w-full mt-1 border border-gray-300 shadow-sm p-3 focus:ring focus:ring-blue-500 placeholder-gray-400 text-lg font-serif"
            style={{ borderRadius: '50px', height: '80px' }}
            placeholder="e.g., English, Spanish"
        />
    </div>
    <div className="form-group">
        <label htmlFor="pdfPrice" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
            <FontAwesomeIcon icon={faDollarSign} />
            <span>Price for PDFs (in USD)</span>
        </label>
        <input
            type="number"
            id="pdfPrice"
            name="pdfPrice"
            value={formData.pdfPrice}
            onChange={handlePriceChange}
            min="1"
            className="block w-full mt-1 border border-gray-300 shadow-sm p-3 focus:ring focus:ring-blue-500 placeholder-gray-400 text-lg font-serif"
            style={{ borderRadius: '50px', height: '80px' }}
            placeholder="Enter price"
        />
    </div>
</div>


                {/* File Upload Section */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                        <label htmlFor="image" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
                            <FontAwesomeIcon icon={faImage} />
                            <span>Upload Image</span>
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full mt-2"
                            style={{ borderRadius: '50px' }}
                        />
                        {fileNames.image && (
                            <span className="text-gray-500 text-sm">{fileNames.image} uploaded successfully!</span>
                        )}
                    </div>
                    <div className="form-group ">
                        <label htmlFor="roadmapIntroduction" className="text-xl font-medium text-purple-900 flex items-center space-x-2 font-serif">
                            <FontAwesomeIcon icon={faBook} />
                            <span>Roadmap Introduction (PDF)</span>
                        </label>
                        <input
                            type="file"
                            id="roadmapIntroduction"
                            name="roadmapIntroduction"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="block w-full mt-2"
                            style={{ borderRadius: '50px' }}
                        />
                        {fileNames.roadmapIntroduction && (
                            <span className="text-gray-500 text-sm">{fileNames.roadmapIntroduction} uploaded successfully!</span>
                        )}
                    </div>
                </div>
                <div className="border rounded-md bg-gradient-to-r from-gray-50 to-gray-100 shadow-md mt-1 p-4">
    {/* Display chapters up to the chapterCount in a grid layout with 5 columns */}
    <div className="grid grid-cols-5 gap-4">
        {chapterNames.slice(0, 10).map((fieldName, index) => (
            <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-2 border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col items-center"
                style={{ height: "100px" }} // Reduced height
            >
                <label
                    htmlFor={fieldName}
                    className="block text-xs font-medium text-gray-800 mb-1 text-center"
                >
                    Chapter {index + 1} (PDF)
                </label>
                <input
                    type="file"
                    id={fieldName}
                    name={fieldName}
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="block w-full rounded p-0.5 text-xs focus:ring focus:ring-blue-400" // Reduced input size
                    style={{
                        border: "none", // Removed border
                        fontSize: "0.75rem", // Smaller font size
                        padding: "2px 4px", // Minimal padding
                    }}
                />
                <span
                    className="text-gray-500 text-xs mt-1 text-center"
                    style={{ height: "1.25rem", lineHeight: "1.25rem" }} // Reduced height for the message
                >
                    {fileNames[fieldName] && `${fileNames[fieldName]} uploaded successfully!`}
                </span>
            </div>
        ))}
    </div>
</div>



                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-lg hover:from-white-600 hover:to-white-800 transition duration-300 font-semibold mt-8"
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    </div>
</div>



    );
};

export default AdditionalInformation;



