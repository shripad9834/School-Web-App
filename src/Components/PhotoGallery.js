// import React, { useState, useEffect } from 'react';
// import { storage } from '../firebase'; 
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import { Modal } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';
// import './Photo.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const PhotoGallery = () => {

//   useEffect(() => {
//     AOS.init({
//       duration: 3000, // animation duration in ms
//       once: true,     // only animate once when scrolled into view
//     });
//   }, []);

//   const [imageUrls, setImageUrls] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const listRef = ref(storage, 'Photo Gallery/'); 
//         const res = await listAll(listRef);
        
//         if (res.items.length === 0) {
//           setError('No images available in the gallery yet.');
//         } else {
//           const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
//           setImageUrls(urls);
//         }
//       } catch (err) {
//         console.error("Error listing images:", err);
//         setError('Failed to load images. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const openModal = (url) => {
//     setSelectedImage(url);
//     setShowModal(true);
//   };

//   return (
//     <div className="container py-4">
//       <h2 className="text-center mb-4 fw-bold">Photo Gallery</h2>

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

//       {!loading && !error && imageUrls.length > 0 && (
//         <div className="row g-3">
//           {imageUrls.map((url, index) => (
//             <div className="col-6 col-md-4 col-lg-3" key={index}>
//               <img
//                 src={url}
//                 alt={`uploaded-img-${index}`}
//                 className="img-fluid gallery-img"
//                 onClick={() => openModal(url)}
//                 style={{ cursor: 'pointer' }}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
//         <Modal.Body className="p-0 bg-black" data-aos="zoom-in" >
//           <img src={selectedImage} alt="Selected" className="modal-img" />
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default PhotoGallery;




// import React, { useState, useEffect } from 'react';
// import { storage } from '../firebase';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import { Modal, Button } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';
// import './Photo.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const PhotoGallery = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 3000,
//       once: true,
//     });
//   }, []);

//   const [imageUrls, setImageUrls] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const listRef = ref(storage, 'Photo Gallery/');
//         const res = await listAll(listRef);

//         if (res.items.length === 0) {
//           setError('No images available in the gallery yet.');
//         } else {
//           const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
//           setImageUrls(urls);
//         }
//       } catch (err) {
//         console.error("Error listing images:", err);
//         setError('Failed to load images. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const openModal = (url) => {
//     setSelectedImage(url);
//     setShowModal(true);
//   };

//   return (
//     <div className="container py-4">
//       <h2 className="text-center mb-4 fw-bold">Photo Gallery</h2>

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

//       {!loading && !error && imageUrls.length > 0 && (
//         <div className="row g-3">
//           {imageUrls.map((url, index) => (
//             <div className="col-6 col-md-4 col-lg-3" key={index}>
//               <img
//                 src={url}
//                 alt={`uploaded-img-${index}`}
//                 className="img-fluid gallery-img"
//                 onClick={() => openModal(url)}
//                 style={{ cursor: 'pointer' }}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
//         <Modal.Body className="p-0 bg-black" data-aos="zoom-in">
//           <img src={selectedImage} alt="Selected" className="modal-img" />
//         </Modal.Body>
//         <Modal.Footer className="bg-dark border-0 justify-content-between">
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button
//             variant="primary"
//             href={selectedImage}
//             download
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Download Image
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default PhotoGallery;




import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Modal, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import './Photo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, 'Photo Gallery/');
        const res = await listAll(listRef);

        if (res.items.length === 0) {
          setError('No images available in the gallery yet.');
        } else {
          const urls = await Promise.all(
            res.items.map(async (itemRef) => {
              const url = await getDownloadURL(itemRef);
              return { name: itemRef.name, url };
            })
          );

          // ✅ Sort by name descending (latest first *if* names include date/timestamp)
          urls.sort((a, b) => b.name.localeCompare(a.name));

          setImageUrls(urls);
        }
      } catch (err) {
        console.error('Error listing images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openModal = (url) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold">Photo Gallery</h2>

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <div className="alert alert-warning text-center my-4" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && imageUrls.length > 0 && (
        <div className="row g-3">
          {imageUrls.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <img
                src={item.url}
                alt={item.name}
                className="img-fluid gallery-img"
                onClick={() => openModal(item.url)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
        <Modal.Body className="p-0 bg-black" data-aos="zoom-in">
          <img src={selectedImage} alt="Selected" className="modal-img" />
        </Modal.Body>
        <Modal.Footer className="bg-dark border-0 justify-content-between">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            href={selectedImage}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Image
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PhotoGallery;

