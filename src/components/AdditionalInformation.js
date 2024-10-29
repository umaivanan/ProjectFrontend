import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook, faClock, faUser, faTag,
    faLanguage, faDollarSign, faImage, faPlus
} from '@fortawesome/free-solid-svg-icons';

import backgroundImage from '../assets/a-man-reads-a-book-1024x683.jpg';  // Import the background image

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

                const response = await axios.post('http://localhost:8712/api/formdata', formDataObj, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                const formDataId = response.data.formData._id;
                await axios.patch(`http://localhost:8712/api/skills/${currentSkillId}`, { formDataId });

                const skillResponse = await axios.get(`http://localhost:8712/api/skills/${currentSkillId}`);
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
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw',
                position: 'relative',
            }}
        >
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mt-[8%] bg-opacity-90">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700">
                                <FontAwesomeIcon icon={faBook} /> Course Description
                            </label>
                            <textarea
                                id="courseDescription"
                                name="courseDescription"
                                value={formData.courseDescription}
                                onChange={handleChange}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="courseDuration" className="block text-sm font-medium text-gray-700">
                                <FontAwesomeIcon icon={faClock} /> Course Duration
                            </label>
                            <input
                                type="text"
                                id="courseDuration"
                                name="courseDuration"
                                value={formData.courseDuration}
                                onChange={handleChange}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">
                                <FontAwesomeIcon icon={faUser} /> Target Audience
                            </label>
                            <input
                                type="text"
                                id="targetAudience"
                                name="targetAudience"
                                value={formData.targetAudience}
                                onChange={handleChange}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="courseCategory" className="block text-sm font-medium text-gray-700">
                                <FontAwesomeIcon icon={faTag} /> Course Category
                            </label>
                            <input
                                type="text"
                                id="courseCategory"
                                name="courseCategory"
                                value={formData.courseCategory}
                                onChange={handleChange}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="languages" className="block text-sm font-medium text-gray-700">
                            <FontAwesomeIcon icon={faLanguage} /> Languages I Speak
                        </label>
                        <input
                            type="text"
                            id="languages"
                            name="languages"
                            value={formData.languages}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pdfPrice" className="block text-sm font-medium text-gray-700">
                            <FontAwesomeIcon icon={faDollarSign} /> Price for PDFs (in USD)
                        </label>
                        <input
                            type="number"
                            id="pdfPrice"
                            name="pdfPrice"
                            value={formData.pdfPrice}
                            onChange={handlePriceChange}
                            min="1"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            <FontAwesomeIcon icon={faImage} /> Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full mt-1"
                        />
                        {fileNames.image && (
                            <span className="text-green-500 text-sm">{fileNames.image} uploaded successfully!</span>
                        )}
                    </div>

                    {/* File inputs for Roadmap and Chapters */}
                    <div className="form-group">
                        <label htmlFor="roadmapIntroduction" className="block text-sm font-medium text-gray-700">
                            <FontAwesomeIcon icon={faBook} /> Roadmap Introduction (PDF)
                        </label>
                        <input
                            type="file"
                            id="roadmapIntroduction"
                            name="roadmapIntroduction"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="block w-full mt-1"
                        />
                        {fileNames.roadmapIntroduction && (
                            <span className="text-green-500 text-sm">{fileNames.roadmapIntroduction} uploaded successfully!</span>
                        )}
                    </div>

                    {/* Scrollable PDF Section */}
                    <div className="max-h-48 overflow-y-auto border p-4 rounded-md">
                        {chapterNames.slice(0, chapterCount).map((fieldName, index) => (
                            <div className="form-group" key={index}>
                                <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700">
                                    Chapter {index + 1} (PDF)
                                </label>
                                <input
                                    type="file"
                                    id={fieldName}
                                    name={fieldName}
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                    className="block w-full mt-1"
                                />
                                {fileNames[fieldName] && (
                                    <span className="text-green-500 text-sm">{fileNames[fieldName]} uploaded successfully!</span>
                                )}
                            </div>
                        ))}

                        {chapterCount < 10 && (
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleShowNextChapter}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <FontAwesomeIcon icon={faPlus} /> Add Chapter
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdditionalInformation;
