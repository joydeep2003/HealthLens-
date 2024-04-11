import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {

    const Logout =()=>{
        localStorage.clear()
        window.location.reload()
        history.back()
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [message, setMessage] = useState('');
    const [showResult, setShowResult] = useState(false);

    // Function to handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedImage) {
            console.log('No image selected');
            return;
        }

        const formData = new FormData();
        formData.append('img', selectedImage);

        try {
            const response = await axios.post('/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage(response.data.message);
            setShowResult(true);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Image Uploader</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label htmlFor="image-upload" className="block w-full mb-4">
                        <div className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                            <span className="text-gray-500">Select Image</span>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>
                    </label>
                    {selectedImage && (
                        <div className="flex justify-center">
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Selected Image"
                                className="max-h-64 rounded-lg"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                    >
                        Upload Image
                    </button>
                </form>

                {showResult && (
                    <div className="mt-6 text-center">
                        <p className="font-semibold text-lg">Prediction:</p>
                        <p className="mt-2 text-gray-700">{message}</p>
                    </div>
                )}

                <div className="flex justify-end mt-6">
                    <button onClick={Logout} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageUploader;
