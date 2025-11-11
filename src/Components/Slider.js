// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
// import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles
// import './Slider.css'; // Import custom styles

// const ImageSlider = () => {
//   // Slider settings
//   const settings = {
//     dots: true, // Show navigation dots
//     infinite: true, // Loop the slider
//     speed: 1000, // Transition speed in milliseconds
//     slidesToShow: 1, // Show one slide at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Automatically slide
//     autoplaySpeed: 3000, // 3 seconds per slide
//     arrows: true, // Show next/prev arrows
//     responsive: [
//       {
//         breakpoint: 768, // Mobile view
//         settings: {
//           arrows: false, // Hide arrows on mobile for better UX
//         },
//       },
//     ],
//   };

//   // Sample images (replace with your own image paths)
//   const images = [
//     'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Slider%2FWhatsApp%20Image%202025-06-10%20at%204.15.23%20PM.jpeg?alt=media&token=afe70631-cc92-49b1-9596-1dc1d2675d42',
//     'https://content.jdmagicbox.com/v2/comp/solapur/t8/9999px217.x217.110416220543.a4t8/catalogue/unique-english-medium-pre-primary-school-solapur-city-solapur-english-medium-schools-a75riNRGFl.jpg',
//     'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Slider%2FWhatsApp%20Image%202025-06-10%20at%204.15.28%20PM.jpeg?alt=media&token=cc0696d3-b13d-43a2-80c7-2a9e04e4dfad',
//   ];

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               style={{ width: '100%', height: '400px', objectFit: 'cover' }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;



// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
// import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles
// import './Slider.css'; // Import custom styles
// import { storage } from '../firebase'; // Adjust the path to your firebase.js file
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

// const ImageSlider = () => {
//     // Slider settings
//     const settings = {
//         dots: true, // Show navigation dots
//         infinite: true, // Loop the slider
//         speed: 1000, // Transition speed in milliseconds
//         slidesToShow: 1, // Show one slide at a time
//         slidesToScroll: 1, // Scroll one slide at a time
//         autoplay: true, // Automatically slide
//         autoplaySpeed: 3000, // 3 seconds per slide
//         arrows: true, // Show next/prev arrows
//         responsive: [
//             {
//                 breakpoint: 768, // Mobile view
//                 settings: {
//                     arrows: false, // Hide arrows on mobile for better UX
//                 },
//             },
//         ],
//     };

//     // State to store image URLs
//     const [images, setImages] = useState([]);

//     // Fetch images from Firebase Storage when the component mounts
//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 // Reference to the 'Slider' folder in Firebase Storage
//                 const storageRef = ref(storage, 'Slider/');

//                 // List all images in the 'Slider' folder
//                 const result = await listAll(storageRef);

//                 // Get download URLs for each image
//                 const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

//                 // Wait for all URLs to be fetched
//                 const urls = await Promise.all(urlPromises);

//                 // Update state with the fetched URLs
//                 setImages(urls);
//             } catch (error) {
//                 console.error('Error fetching images from Firebase Storage:', error);
//             }
//         };

//         fetchImages();
//     }, []); // Empty dependency array to run only once on mount

//     return (
//         <div className="slider-container">
//             <Slider {...settings}>
//                 {images.length > 0 ? (
//                     images.map((image, index) => (
//                         <div key={index}>
//                             {/* <img
//                    src={image}
//                    alt={`Slide ${index + 1}`}
//                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
//                  /> */}

//                             <div style={{ width: '100%', height: '300px', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <img
//                                     src={image}
//                                     alt={`Slide ${index + 1}`}
//                                     style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
//                                 />
//                             </div>


//                         </div>
//                     ))
//                 ) : (
//                     <div>Loading images...</div> // Fallback while images are being fetched
//                 )}
//             </Slider>
//         </div>
//     );
// };

// export default ImageSlider;



// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Slider.css'; // Custom styles
// import { storage } from '../firebase'; // Adjust the path as per your project
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   };

//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const storageRef = ref(storage, 'SlidingImages/');
//         const result = await listAll(storageRef);
//         const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
//         const urls = await Promise.all(urlPromises);
//         setImages(urls);
//       } catch (error) {
//         console.error('Error fetching images from Firebase Storage:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {images.length > 0 ? (
//           images.map((image, index) => (
//             <div key={index}>
//               <div className="image-container">
//                 <img
//                   src={image}
//                   alt={`Slide ${index + 1}`}
//                   className="slider-image"
//                 />
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>Loading images...</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;







import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Custom styles
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import Spinner from 'react-bootstrap/Spinner'; // Optional: Bootstrap Spinner for better visuals

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, 'SlidingImages/');
        const result = await listAll(storageRef);
        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
        const urls = await Promise.all(urlPromises);
        setImages(urls);
      } catch (error) {
        console.error('Error fetching images from Firebase Storage:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="slider-container">
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          flexDirection: 'column',
          color: '#555',
          fontSize: '1.2rem',
        }}>
          <Spinner animation="border" role="status" variant="primary" />
          <div className="mt-3">Loading Images...</div>
        </div>
      ) : (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="image-container">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="slider-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ImageSlider;


