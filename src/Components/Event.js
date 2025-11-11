// import React, { useState, useEffect } from 'react';
// import { collection, query, orderBy, getDocs } from 'firebase/firestore';
// import { ref, getDownloadURL } from 'firebase/storage';
// import { db } from '../firebaseFirestore'; // Firestore config
// import { storage } from '../firebase';      // Firebase Storage config
// import Spinner from 'react-bootstrap/Spinner';
// import Card from 'react-bootstrap/Card';
// import './Event.css';

// const Event = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'));
//         const querySnapshot = await getDocs(q);

//         const eventPromises = querySnapshot.docs.map(async (doc) => {
//           const data = doc.data();
//           const mediaUrl = await getDownloadURL(ref(storage, data.mediaPath));
//           return {
//             id: doc.id,
//             title: data.title,
//             description: data.description,
//             type: data.type,     // 👈 Using the 'type' field now
//             mediaUrl,
//           };
//         });

//         const eventData = await Promise.all(eventPromises);
//         setEvents(eventData);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load events. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="container py-4">
//       <h2 className="text-center fw-bold mb-4">Events Gallery</h2>

//       {loading && (
//         <div className="d-flex justify-content-center my-5">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       )}

//       {error && (
//         <div className="alert alert-danger text-center">{error}</div>
//       )}

//       {events.length === 0 && !loading && !error && (
//         <div className="text-center text-muted">No events to display.</div>
//       )}

//       <div className="row g-4">
//         {events.map((event) => (
//           <div className="col-12 col-md-6 col-lg-4" key={event.id}>
//             <Card className="h-100 shadow-sm event-card">
//               {event.type === 'video' ? (
//                 <video
//                   controls
//                   className="event-img"
//                   style={{ width: '100%', height: '250px', objectFit: 'cover' }}
//                 >
//                   <source src={event.mediaUrl} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <Card.Img
//                   variant="top"
//                   src={event.mediaUrl}
//                   className="event-img"
//                   style={{ objectFit: 'cover', height: '250px' }}
//                 />
//               )}

//               <Card.Body>
//                 <Card.Title className="fw-semibold">{event.title}</Card.Title>
//                 <Card.Text className="text-muted">{event.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Event;


// import React, { useState, useEffect } from 'react';
// import { collection, query, orderBy, getDocs } from 'firebase/firestore';
// import { db } from '../firebaseFirestore'; // Firestore config
// import Spinner from 'react-bootstrap/Spinner';
// import Card from 'react-bootstrap/Card';
// import './Event.css';

// const Event = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'));
//         const querySnapshot = await getDocs(q);

//         const eventData = querySnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             title: data.title,
//             description: data.description,
//             type: data.type,
//             mediaUrl: data.mediaPath, // ✅ Use directly, it's already a full URL
//           };
//         });

//         setEvents(eventData);
//       } catch (err) {
//         console.error(err);
//         setError(err.message || 'Failed to load events. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="container py-4">
//       <h2 className="text-center fw-bold mb-4">Events Gallery</h2>

//       {loading && (
//         <div className="d-flex justify-content-center my-5">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       )}

//       {error && (
//         <div className="alert alert-danger text-center">{error}</div>
//       )}

//       {events.length === 0 && !loading && !error && (
//         <div className="text-center text-muted">No events to display.</div>
//       )}

//       <div className="row g-4">
//         {events.map((event) => (
//           <div className="col-12 col-md-6 col-lg-4" key={event.id}>
//             <Card className="h-100 shadow-sm event-card">
//               {event.type === 'video' ? (
//                 <video
//                   controls
//                   className="event-img"
//                   style={{ width: '100%', height: '250px', objectFit: 'cover' }}
//                 >
//                   <source src={event.mediaUrl} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <Card.Img
//                   variant="top"
//                   src={event.mediaUrl}
//                   className="event-img"
//                   style={{ objectFit: 'cover', height: '250px' }}
//                 />
//               )}

//               <Card.Body>
//                 <Card.Title className="fw-semibold">{event.title}</Card.Title>
//                 <Card.Text className="text-muted">{event.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Event;




import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebaseFirestore'; // Firestore config
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Event.css';

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const eventData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            description: data.description,
            type: data.type,
            mediaUrl: data.mediaPath,
          };
        });

        setEvents(eventData);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const openModal = (media) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-4">Events Gallery</h2>

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}

      {events.length === 0 && !loading && !error && (
        <div className="text-center text-muted">No events to display.</div>
      )}

      <div className="row g-4">
        {events.map((event) => (
          <div className="col-12 col-md-6 col-lg-4" key={event.id}>
            <Card
              className="h-100 shadow-sm event-card"
              onClick={() => openModal(event)}
              style={{ cursor: 'pointer' }}
            >
              {event.type === 'video' ? (
                <video
                  muted
                  playsInline
                  preload="metadata"
                  className="event-img"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                >
                  <source src={event.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <Card.Img
                  variant="top"
                  src={event.mediaUrl}
                  className="event-img"
                  style={{ objectFit: 'cover', height: '250px' }}
                />
              )}

              <Card.Body>
                <Card.Title className="fw-semibold">{event.title}</Card.Title>
                <Card.Text className="text-muted">{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for preview */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0 bg-black">
          {selectedMedia?.type === 'video' ? (
            <video
              src={selectedMedia.mediaUrl}
              controls
              autoPlay
              className="w-100 h-100"
              style={{ maxHeight: '90vh' }}
            />
          ) : (
            <img
              src={selectedMedia?.mediaUrl}
              alt={selectedMedia?.title || 'Event'}
              className="w-100 h-100"
              style={{ objectFit: 'contain', maxHeight: '90vh' }}
            />
          )}
        </Modal.Body>
        <Modal.Footer className="bg-dark border-0 justify-content-between">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            href={selectedMedia?.mediaUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Event;
