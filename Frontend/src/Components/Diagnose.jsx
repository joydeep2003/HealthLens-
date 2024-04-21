import axios from 'axios';
import { useState } from 'react';

function ImageUploader() {

    const Logout = () => {
        localStorage.clear();
        window.location.reload();
        history.back();
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const [message, setMessage] = useState('');
    const [confidence,setConfidence] = useState('');
    const [prediction, setPrediction] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedImage) {
            console.log('No image selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedImage);

        try {
            const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // setMessage(JSON.stringify(response.data));
            setMessage(response.data.class);
            setConfidence(response.data.confidence);
            console.log(response.data)
            setShowResult(true);
        } catch (error) {
            console.error('Error uploading image:', error);
            if (error.response) {
                console.error('Error response:', error.response);
            }
        }
    };

    const handleImagePrediction = async () => {
        if (!selectedImage) {
            console.log('No image selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedImage);

        try {
            const response = await axios.post('http://127.0.0.1:8000/predict/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setPrediction(`Class: ${response.data.class}, Confidence: ${response.data.confidence.toFixed(2)}`);
        } catch (error) {
            console.error('Error predicting image:', error);
            if (error.response) {
                console.error('Error response:', error.response);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Image Uploader and Predictor</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label htmlFor="image-upload" className="block w-full mb-4">
                        <div className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition duration-300 ease-in-out">
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                            Select or Drop Image Here
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
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="submit"
                            className="py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            Upload Image
                        </button>
                    </div>
                </form>

                {showResult && (
                    <>
                    <div className="mt-6 text-center">
                        <p className="font-semibold text-lg">Class:</p>
                        <p className="mt-2 text-gray-700">{message}</p>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="font-semibold text-lg">Confidence :</p>
                        <p className="mt-2 text-gray-700">{confidence}</p>
                    </div>
                    </>
                )}

                {prediction && (
                    <div className="mt-6 text-center">
                        <p className="font-semibold text-lg">Prediction Result :</p>
                        <p className="mt-2 text-gray-700">{prediction}</p>
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
