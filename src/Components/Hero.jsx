import React, { useState, useEffect } from 'react';
import {auth, provider} from "./Config.jsx";
import { signInWithPopup } from "firebase/auth";
import Diagnose from './Diagnose.jsx';
// const Hero = () => {
//   return (
//     <div className="bg-blue-50 text-center py-20 px-4 md:px-0">
//       <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-gray-800 mb-4" style={{ paddingTop: '8rem', fontFamily: "'Roboto Slab', serif" }}>
//         Welcome to HealthLens
//       </h1>
//       <p className="text-xl md:text-2xl lg:text-4xl font-light text-gray-600" style={{ paddingTop: '1.5rem', fontFamily: "'Open Sans', sans-serif" }}>
//         From Shadows to Clarity: Your Health Deciphered.
//       </p>
//       <button className="mt-20 bg-blue-500 hover:bg-blue-200 text-white font-bold text-lg md:text-xl lg:text-2xl py-5 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//         Sign Up 
//       </button>
//     </div>
//   );
// };

const Hero = () => {

  const [value, setValue] = useState('');
  const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
    })
}

useEffect(()=>{
    setValue(localStorage.getItem('email'))
})

    return (
      <div className="bg-blue-50 py-20 px-4 md:px-0 flex items-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="text-left md:text-center md:mr-12">
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Roboto Slab', serif" }}>
                Welcome to HealthLens
              </h1>
              <p className="text-xl md:text-2xl lg:text-4xl font-light text-gray-600 mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                From Shadows to Clarity: Your Health Deciphered.
              </p>
              {value?<Diagnose/>:
              <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-200 text-white font-bold text-lg md:text-xl lg:text-2xl py-5 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Diagnose
              </button>}
            </div>
            <div className="hidden md:block w-596 h-896 bg-transparent ml-12">
              {/* Add your image here */}
              <img src="public\doctor.png" alt="HealthLens Image" className="object-contain" style={{ width: '300%', height: '300%', maxWidth: '300%', position:'relative', left:'-124%' }}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Hero;
