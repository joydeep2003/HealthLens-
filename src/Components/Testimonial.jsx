import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Partha Prati Paul',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus eget sapien pulvinar eleifend.'
    },
    {
      id: 2,
      name: 'Dedipya Goswami',
      testimonial: 'Vestibulum vel arcu vel ligula commodo laoreet at quis libero. Donec rutrum nunc vitae sem dictum placerat.'
    },
    {
      id: 3,
      name: 'Sujal',
      testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae magna vel turpis dapibus tincidunt.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <div className="bg-gray-200 py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Patient's Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="px-8 py-6 bg-white rounded-lg shadow-lg">
              <div className="relative">
                {/* <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500 flex justify-center items-center rounded-full">
                  <svg className="text-white w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10a3 3 0 00-3-3H9a3 3 0 00-3 3v4a3 3 0 003 3h6a3 3 0 003-3v-1l3-3z" />
                  </svg>
                </div> */}
                {/* <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-500 flex justify-center items-center rounded-full">
                  <svg className="text-white w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-6">{testimonial.testimonial}</p>
              <p className="text-sm font-bold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
