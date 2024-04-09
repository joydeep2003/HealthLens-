import React from "react";
import { useState } from "react";

function Diagnose() {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
        window.history.back(); // Redirect to the previous page
    }

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
        <div>
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
            <div>
            <h1>Image Uploader</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button type="submit">Upload Image</button>
            </form>
        </div>
        </div>
    );
}

export default Diagnose;
