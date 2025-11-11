// import React from 'react'
// import ImageSlider from './Slider'

// const Home = () => {
//   return (
//     <div>
//         <ImageSlider></ImageSlider>
//     </div>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import ImageSlider from './Slider'; // Adjust the path based on your folder structure
import { storage } from '../firebase'; // Adjust the path to your firebase.js file
import { db } from '../firebaseFirestore'; // Firestore
import { doc, getDoc } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import CountUp from 'react-countup';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {


  useEffect(() => {
  AOS.init({
    duration: 3000, // animation duration in ms
    once: true,     // only animate once when scrolled into view
  });
}, []);

  // State to store image URLs for What We Provide section
  const [provideImages, setProvideImages] = useState({
    bestTeachers: '',
    highTechLabs: '',
    lowCostService: '',
    govtCertification: '',
  });

  // Fetch images from Firebase Storage when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Reference to the 'WhatWeProvide' folder in Firebase Storage
        const storageRef = ref(storage, 'WhatWeProvide/');

        // List all images in the 'WhatWeProvide' folder
        const result = await listAll(storageRef);

        // Get download URLs for each image
        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
        const urls = await Promise.all(urlPromises);

        // Map filenames to their URLs
        const imageMap = {};
        result.items.forEach((item, index) => {
          const name = item.name.toLowerCase();
          if (name.includes('best-teachers')) imageMap.bestTeachers = urls[index];
          if (name.includes('high-tech-labs')) imageMap.highTechLabs = urls[index];
          if (name.includes('low-cost-service')) imageMap.lowCostService = urls[index];
          if (name.includes('govt-certification')) imageMap.govtCertification = urls[index];
        });

        // Update state with the fetched URLs
        setProvideImages({
          bestTeachers: imageMap.bestTeachers || 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Fteachers-day.png?alt=media&token=71843684-7772-40d1-b267-f06711e45e30',
          highTechLabs: imageMap.highTechLabs || 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Fflask.png?alt=media&token=20e0f76a-f233-4514-a65e-930b687b293f',
          lowCostService: imageMap.lowCostService || 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Freduce-cost.png?alt=media&token=4a00cf5e-d3e5-4b83-8ab4-9e795215365b',
          govtCertification: imageMap.govtCertification || 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Fcertificate.png?alt=media&token=25c2bbc0-a2fa-46d8-9fd6-e2ff6c230003',
        });
      } catch (error) {
        console.error('Error fetching What We Provide images from Firebase Storage:', error);
        // Fallback to placeholder images if fetching fails
        setProvideImages({
          bestTeachers: 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Fteachers-day.png?alt=media&token=71843684-7772-40d1-b267-f06711e45e30',
          highTechLabs: 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Fflask.png?alt=media&token=20e0f76a-f233-4514-a65e-930b687b293f',
          lowCostService: 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Freduce-cost.png?alt=media&token=4a00cf5e-d3e5-4b83-8ab4-9e795215365b',
          govtCertification: 'https://firebasestorage.googleapis.com/v0/b/image-server-87d0a.appspot.com/o/Images%2Fcertificate.png?alt=media&token=25c2bbc0-a2fa-46d8-9fd6-e2ff6c230003',
        });
      }
    };

    fetchImages();
  }, []); // Empty dependency array to run only once on mount


  const [stats, setStats] = useState({
    teachers: 45, // Fallback values
    students: 51300,
    supportStaff: 45,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statsDoc = await getDoc(doc(db, 'FacultyNames', 'importantFacts'));
        if (statsDoc.exists()) {
          setStats(statsDoc.data());
        } else {
          console.warn('importantFacts document not found in Firestore');
        }
      } catch (error) {
        console.error('Error fetching important facts:', error);
      }
    };

    fetchStats();
  }, []);

  const [founders, setFounders] = useState({
    founder: '',
    cofounder: '',
  });

  useEffect(() => {
    const fetchFounderImages = async () => {
      try {
        const founderRef = ref(storage, 'Founder&Co/founder.jpg');
        const cofounderRef = ref(storage, 'Founder&Co/cofounder.jpg');

        const founderURL = await getDownloadURL(founderRef);
        const cofounderURL = await getDownloadURL(cofounderRef);

        setFounders({
          founder: founderURL,
          cofounder: cofounderURL,
        });
      } catch (error) {
        console.error('Error fetching founder images:', error);
      }
    };

    fetchFounderImages();
  }, []);



  // const [principalImage, setPrincipalImage] = useState('');

  // useEffect(() => {
  //   const fetchPrincipalImage = async () => {
  //     try {
  //       const imageRef = ref(storage, 'Principal/Principal.jpg'); // your image path in Firebase Storage
  //       const url = await getDownloadURL(imageRef);
  //       setPrincipalImage(url);
  //     } catch (error) {
  //       console.error('Error fetching principal image:', error);
  //       setPrincipalImage('https://via.placeholder.com/150'); // fallback image
  //     }
  //   };
  //   fetchPrincipalImage();
  // }, []);


  const [principalImage, setPrincipalImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [person1, setPerson1] = useState({ name: 'Dr. [Principal Name]', role: 'Principal' });
  const [person2, setPerson2] = useState({ name: 'Mrs. [Second Name]', role: 'Vice-Principal' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the images from Firebase Storage
        const principalRef = ref(storage, 'Principal/principal-image.jpg'); // Adjust path as needed
        const secondImageRef = ref(storage, 'Principal/second-image.jpg'); // Adjust path as needed
        const principalUrl = await getDownloadURL(principalRef);
        const secondImageUrl = await getDownloadURL(secondImageRef);
        setPrincipalImage(principalUrl);
        setSecondImage(secondImageUrl);

        // Fetch the names and roles from Firestore
        const principalDeskDoc = await getDoc(doc(db, 'FacultyNames', 'principalDesk'));
        if (principalDeskDoc.exists()) {
          const data = principalDeskDoc.data();
          setPerson1({ name: data.person1.name, role: data.person1.role });
          setPerson2({ name: data.person2.name, role: data.person2.role });
        } else {
          console.warn('principalDesk document not found in Firestore');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallbacks for images
        setPrincipalImage('https://via.placeholder.com/150?text=Principal');
        setSecondImage('https://via.placeholder.com/150?text=Second+Image');
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <ImageSlider />

      {/* Why Choose Us Section */}
      <section className="container my-5" data-aos="zoom-in">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <p className="text-center lead">
          At Mahatma Vidya Mandir & Somnag Prashala, we are dedicated to providing exceptional education that prepares students for a bright future. Our holistic approach ensures academic excellence, personal growth, and a supportive community for every student.
        </p>
      </section>

      {/* What We Provide Section */}
      <section className="container my-5" data-aos="zoom-in">
        <h3 className="text-center mb-4">What We Provide</h3>
        <div className="row">
          <div className="col-md-3 mb-4 text-center">
            <img
              src={provideImages.bestTeachers}
              alt="Best Teachers"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }}
            />
            <i className="bi bi-person-check-fill display-4 text-primary mb-3"></i>
            <h5>Best Teachers</h5>
            <p>
              Our experienced and dedicated teachers provide personalized guidance to help every student succeed.
            </p>
          </div>
          <div className="col-md-3 mb-4 text-center">
            <img
              src={provideImages.highTechLabs}
              alt="High Tech Labs"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }}
            />
            <i className="bi bi-motherboard-fill display-4 text-primary mb-3"></i>
            <h5>High Tech. Labs</h5>
            <p>
              State-of-the-art labs equipped with the latest technology to foster hands-on learning and innovation.
            </p>
          </div>
          <div className="col-md-3 mb-4 text-center">
            <img
              src={provideImages.lowCostService}
              alt="Low Cost Service"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }}
            />
            <i className="bi bi-wallet2 display-4 text-primary mb-3"></i>
            <h5>Low Cost Service</h5>
            <p>
              Quality education at an affordable price, ensuring accessibility for all families.
            </p>
          </div>
          <div className="col-md-3 mb-4 text-center">
            <img
              src={provideImages.govtCertification}
              alt="Govt Certification"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }}
            />
            <i className="bi bi-award-fill display-4 text-primary mb-3"></i>
            <h5>Govt. Certification</h5>
            <p>
              Recognized and certified by the government, ensuring our programs meet the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Some Important Facts Section */}
<section className="container my-5" data-aos="zoom-in">
      <h3 className="text-center mb-4">Some Important Facts</h3>
      <div className="row justify-content-center text-center">
        <div className="col-md-3 mb-4">
          <h2 className="display-5 fw-bold text-primary">
            <CountUp end={stats.teachers} duration={2} />
          </h2>
          <p className="fw-semibold">Teachers</p>
        </div>
        <div className="col-md-3 mb-4">
          <h2 className="display-5 fw-bold text-primary">
            <CountUp end={stats.students} duration={3} separator="," />
          </h2>
          <p className="fw-semibold">Students</p>
        </div>
        <div className="col-md-3 mb-4">
          <h2 className="display-5 fw-bold text-primary">
            <CountUp end={stats.supportStaff} duration={2} />
          </h2>
          <p className="fw-semibold">Support Staff</p>
        </div>
      </div>
    </section>



      {/* Founder & Co-Founder Section */}
      <section className="container my-5" data-aos="zoom-in">
        <h3 className="text-center mb-4">Our Founders</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center mb-4">
            <img
              src={founders.founder}
              alt="Founder"
              className="founder-avatar rounded-circle"
            />
            <h5 className="mt-3">Shanker Chowgule</h5>
            <p>Founder</p>
          </div>
          <div className="col-md-4 text-center mb-4">
            <img
              src={founders.cofounder}
              alt="Co-Founder"
              className="founder-avatar rounded-circle"
            />
            <h5 className="mt-3">Co-Founder Name</h5>
            <p>Co-Founder</p>
          </div>
        </div>
      </section>



      {/* From Principal's Desk Section */}


      {/* <section className="container my-5" data-aos="zoom-in">
        <h3 className="text-center mb-4">From Principal's Desk</h3>
        <div className="card shadow p-4">
          <div className="row align-items-center">
            <div className="col-md-3 text-center mb-3 mb-md-0">
              <img
                src={principalImage}
                alt="Principal"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #0d6efd' }}
              />
              <h5 className="mt-3">Dr. [Principal Name]</h5>
              <p className="text-muted">Principal</p>
            </div>
            <div className="col-md-9">
              <p className="lead">
                "Welcome to Mahatma Vidya Mandir & Somnag Prashala. Our mission is to foster holistic development,
                nurturing both intellectual and emotional growth. Together, let’s build a bright future for our students."
              </p>
            </div>
          </div>
        </div>
      </section> */}





      <section className="container my-5" data-aos="zoom-in">
      <h3 className="text-center mb-4">From Principal's Desk</h3>
      <div className="card shadow p-4">
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <div className="row">
              {/* First Image and Name (Principal) */}
              <div className="col-6">
                <img
                  src={principalImage}
                  alt={person1.name}
                  className="rounded-circle"
                  style={{ width: '120px', height: '120px', objectFit: 'cover', border: '3px solid #0d6efd' }}
                />
                <h5 className="mt-2">{person1.name}</h5>
                <p className="text-muted">{person1.role}</p>
              </div>
              {/* Second Image and Name */}
              <div className="col-6">
                <img
                  src={secondImage}
                  alt={person2.name}
                  className="rounded-circle"
                  style={{ width: '120px', height: '120px', objectFit: 'cover', border: '3px solid #0d6efd' }}
                />
                <h5 className="mt-2">{person2.name}</h5>
                <p className="text-muted">{person2.role}</p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <p className="lead">
              "Welcome to Mahatma Vidya Mandir & Somnag Prashala. Our mission is to foster holistic development,
              nurturing both intellectual and emotional growth. Together, let’s build a bright future for our students."
            </p>
          </div>
        </div>
      </div>
    </section>


    
      {/* MAP Section */}


      <section className="container my-5" data-aos="zoom-in">
        <h3 className="text-center mb-4">Visit us at Mahatma Vidya Mandir & Somnath Prashala, where learning begins.</h3>
        <div className="d-flex justify-content-center">
          <div style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.8826051227857!2d75.93942157421598!3d17.65571829502149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da35935e4d13%3A0x932326b206f5171!2sMahatma%20Vidya%20Mandir%20Shala!5e0!3m2!1sen!2sin!4v1749481942650!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;