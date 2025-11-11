// import React, { useState, useEffect } from 'react';
// import { storage } from '../firebase'; 
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import { Modal } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';
// import './VideoGallery.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const VideoGallery = () => {

//   useEffect(() => {
//   AOS.init({
//     duration: 3000, // animation duration in ms
//     once: true,     // only animate once when scrolled into view
//   });
// }, []);

//   const [videoUrls, setVideoUrls] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState('');

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const listRef = ref(storage, 'Video Gallery/'); // Update with your folder name
//         const res = await listAll(listRef);
        
//         if (res.items.length === 0) {
//           setError('No videos available in the gallery yet.');
//         } else {
//           const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
//           setVideoUrls(urls);
//         }
//       } catch (err) {
//         console.error("Error listing videos:", err);
//         setError('Failed to load videos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const openModal = (url) => {
//     setSelectedVideo(url);
//     setShowModal(true);
//   };

//   return (
//     <div className="container py-4">
//       <h2 className="text-center mb-4 fw-bold">Video Gallery</h2>

//       {loading && (
//         <div className="d-flex justify-content-center my-5">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       )}

//       {!loading && error && (
//         <div className="alert alert-warning text-center my-4" role="alert">
//           {error}
//         </div>
//       )}

//       {!loading && !error && videoUrls.length > 0 && (
//         <div className="row g-3">
//           {videoUrls.map((url, index) => (
//             <div className="col-6 col-md-4 col-lg-3" key={index}>
//               <div 
//                 className="video-thumbnail shadow-sm"
//                 onClick={() => openModal(url)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <video
//                   src={url}
//                   className="w-100 h-100 rounded"
//                   muted
//                   playsInline
//                   preload="metadata"
//                 />
//                 <div className="overlay">
//                   <span className="play-icon">▶</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
//         <Modal.Body className="p-0 bg-black" data-aos="zoom-in">
//           <video
//             src={selectedVideo}
//             controls
//             autoPlay
//             className="w-100 h-100"
//             style={{ maxHeight: '90vh' }}
//           />
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default VideoGallery;



import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Modal } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import './VideoGallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [videoUrls, setVideoUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const listRef = ref(storage, 'Video Gallery/');
        const res = await listAll(listRef);

        if (res.items.length === 0) {
          setError('No videos available in the gallery yet.');
        } else {
          // Sort by file name DESC (latest first based on filename)
          const sortedItems = res.items.sort((a, b) => b.name.localeCompare(a.name));

          const urls = await Promise.all(sortedItems.map((itemRef) => getDownloadURL(itemRef)));
          setVideoUrls(urls);
        }
      } catch (err) {
        console.error("Error listing videos:", err);
        setError('Failed to load videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const openModal = (url) => {
    setSelectedVideo(url);
    setShowModal(true);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold">Video Gallery</h2>

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {!loading && error && (
        <div className="alert alert-warning text-center my-4" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && videoUrls.length > 0 && (
        <div className="row g-3">
          {videoUrls.map((url, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div
                className="video-thumbnail shadow-sm"
                onClick={() => openModal(url)}
                style={{ cursor: 'pointer' }}
              >
                <video
                  src={url}
                  className="w-100 h-100 rounded"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="overlay">
                  <span className="play-icon">▶</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
        <Modal.Body className="p-0 bg-black" data-aos="zoom-in">
          <video
            src={selectedVideo}
            controls
            autoPlay
            className="w-100 h-100"
            style={{ maxHeight: '90vh' }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoGallery;
