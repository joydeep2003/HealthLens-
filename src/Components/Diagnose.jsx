import React, { useState } from 'react';

function ImageUploader() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        setSelectedImage(file);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the selected image, e.g., upload to server
        if (selectedImage) {
            console.log('Selected image:', selectedImage);
            // Add your logic to upload the image here
        } else {
            console.log('No image selected');
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
        </div>
    );
}

export default ImageUploader;
