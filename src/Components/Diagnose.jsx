import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {

    const logout =()=>{
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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Image Uploader</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center w-full mb-4">
                    <label htmlFor="image-upload" className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out">
                        Select Image
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </div>
                {selectedImage && (
                    <div className="mb-4">
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected Image"
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Upload Image
                </button>
            </form>

            {showResult && (
                <div className="mt-6">
                    <p className="font-semibold text-lg">Prediction:</p>
                    <p>{message}</p>
                </div>
            )}

        <div>
            <button onClick={logout}>Logout</button>
        </div>
        </div>
    );
}

export default ImageUploader;
