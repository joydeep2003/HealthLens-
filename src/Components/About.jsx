// // AboutUs.js
// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Card 1 */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-2">X-ray Analysis</h2>
//           <p className="text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique cumque quae excepturi sequi quia nobis facere, aliquid officiis? Rerum minima ea at temporibus illum mollitia voluptas ratione laborum consequatur!
//           </p>
//         </div>
//         {/* Card 2 */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-2">X-ray Analysis</h2>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique cumque quae excepturi sequi quia nobis facere, aliquid officiis? Rerum minima ea at temporibus illum mollitia voluptas ratione laborum consequatur!
//           </p>
//         </div>
//         {/* Card 3 */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-2">X-ray Analysis</h2>
//           <p className="text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique cumque quae excepturi sequi quia nobis facere, aliquid officiis? Rerum minima ea at temporibus illum mollitia voluptas ratione laborum consequatur!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Our Services</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-blue-500 border-2 border-transparent hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">X-ray Analysis</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique cumque quae excepturi sequi quia nobis facere, aliquid officiis? Rerum minima ea at temporibus illum mollitia voluptas ratione laborum consequatur!
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-green-500 border-2 border-transparent hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Booking Appointment</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique cumque quae excepturi sequi quia nobis facere, aliquid officiis? Rerum minima ea at temporibus illum mollitia voluptas ratione laborum consequatur!
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-purple-500 border-2 border-transparent hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Giving Ptiority</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique cumque quae excepturi sequi quia nobis facere, aliquid officiis? Rerum minima ea at temporibus illum mollitia voluptas ratione laborum consequatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


// import React from "react";
// import {motion} from 'framer-motion'

// const services = [
//     {
//       title: "Web Developer",
//       icon: web,
//     },
//     {
//       title: "React Native Developer",
//       icon: mobile,
//     },
//     {
//       title: "Backend Developer",
//       icon: backend,
//     },
//     {
//       title: "Content Creator",
//       icon: creator,
//     },
//   ];

//   const ServiceCard =({index, title, icon }) => {
//     return (
//       <Tilt className="xs:w-[250px] w-full">
//         <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//         >
//             <div
//             options={{
//               max: 45,
//               scale: 1,
//               speed: 450
//             }}
//             className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//             >
//                 <img src={icon} alt={title}
//                 className="w-16 h-16 object-contain" />
//                 <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
//             </div>
//         </motion.div>
//       </Tilt>
//     )
//   }

//   const About = () => {
//     return (

//       <>
//         <motion.div variants={textVariant()}>
//           <h2 className={styles.sectionHeadText}>Our Services</h2>
//         </motion.div>

//         <div className="mt-20 flex flex-wrap gap-10">
  
//           {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service } />))}
//         </div>
//       </>
//     )
//   }
  
//   export default About;