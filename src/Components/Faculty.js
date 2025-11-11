// import React from 'react'

// const Faculty = () => {
//   return (
//     <div>
//       Faculty
//     </div>
//   )
// }

// export default Faculty



// import React, { useState, useEffect } from 'react';
// import { storage } from '../firebase'; // Adjust the path to your firebase.js file
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

// const Faculty = () => {
//   // State to store image URLs for faculty
//   const [facultyImages, setFacultyImages] = useState({
//     nurseryTeachers: Array(3).fill(''), // For Nursery teachers
//     classTeachers: Array(10).fill(''), // For class teachers (1st to 10th)
//     commonSubjectTeachers: Array(6).fill(''), // Updated to 6 for 1st to 7th common subject teachers
//     subjectTeachers8to10: {
//       marathi: Array(3).fill(''), // Added for 8th to 10th Marathi teachers
//       hindi: Array(3).fill(''), // Added for 8th to 10th Hindi teachers
//       english: Array(3).fill(''), // For 8th to 10th English teachers
//       math: Array(3).fill(''), // For 8th to 10th Math teachers
//       science: Array(3).fill(''), // For 8th to 10th Science teachers
//       socialStudies: Array(3).fill(''), // For 8th to 10th Social Studies teachers
//     },
//   });
//   const [loading, setLoading] = useState(true); // Add loading state

//   // Fetch images from Firebase Storage when the component mounts
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         // Reference to the 'Faculty' folder in Firebase Storage
//         const storageRef = ref(storage, 'Faculty/');
//         const result = await listAll(storageRef);
//         const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
//         const urls = await Promise.all(urlPromises);

//         // Initialize imageMap with arrays of the correct length
//         const imageMap = {
//           nurseryTeachers: Array(3).fill(''), // Ensure length 3 for Nursery teachers
//           classTeachers: Array(10).fill(''), // Ensure length 10
//           commonSubjectTeachers: Array(6).fill(''), // Updated to 6
//           subjectTeachers8to10: {
//             marathi: Array(3).fill(''), // Added
//             hindi: Array(3).fill(''), // Added
//             english: Array(3).fill(''),
//             math: Array(3).fill(''),
//             science: Array(3).fill(''),
//             socialStudies: Array(3).fill(''),
//           },
//         };

//         // Map filenames to their URLs
//         result.items.forEach((item, index) => {
//           const name = item.name.toLowerCase();
//           // Nursery Teachers
//           for (let i = 1; i <= 3; i++) {
//             if (name.includes(`nursery-teacher-${i}`)) imageMap.nurseryTeachers[i - 1] = urls[index];
//           }
//           // Class Teachers
//           for (let i = 1; i <= 10; i++) {
//             if (name.includes(`class-teacher-${i}`)) imageMap.classTeachers[i - 1] = urls[index];
//           }
//           // Common Subject Teachers for 1st to 7th
//           for (let i = 1; i <= 6; i++) {
//             if (name.includes(`subject-teacher-common-${i}`)) imageMap.commonSubjectTeachers[i - 1] = urls[index];
//           }
//           // Subject Teachers for 8th to 10th
//           ['marathi', 'hindi', 'english', 'math', 'science', 'social-studies'].forEach((subject) => {
//             for (let i = 8; i <= 10; i++) {
//               if (name.includes(`subject-teacher-${subject}-${i}`)) {
//                 imageMap.subjectTeachers8to10[subject][i - 8] = urls[index];
//               }
//             }
//           });
//         });

//         // Update state with the fetched URLs, using placeholders as fallback
//         setFacultyImages({
//           nurseryTeachers: imageMap.nurseryTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: imageMap.classTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: imageMap.commonSubjectTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: {
//             marathi: imageMap.subjectTeachers8to10.marathi.map((url, idx) => url || `https://via.placeholder.com/150?text=Marathi+Teacher+${idx + 8}`),
//             hindi: imageMap.subjectTeachers8to10.hindi.map((url, idx) => url || `https://via.placeholder.com/150?text=Hindi+Teacher+${idx + 8}`),
//             english: imageMap.subjectTeachers8to10.english.map((url, idx) => url || `https://via.placeholder.com/150?text=English+Teacher+${idx + 8}`),
//             math: imageMap.subjectTeachers8to10.math.map((url, idx) => url || `https://via.placeholder.com/150?text=Math+Teacher+${idx + 8}`),
//             science: imageMap.subjectTeachers8to10.science.map((url, idx) => url || `https://via.placeholder.com/150?text=Science+Teacher+${idx + 8}`),
//             socialStudies: imageMap.subjectTeachers8to10.socialStudies.map((url, idx) => url || `https://via.placeholder.com/150?text=Social+Studies+Teacher+${idx + 8}`),
//           },
//         });
//       } catch (error) {
//         console.error('Error fetching Faculty images from Firebase Storage:', error);
//         // Fallback to placeholder images if fetching fails
//         setFacultyImages({
//           nurseryTeachers: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: Array(10).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: Array(6).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: {
//             marathi: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Marathi+Teacher+${idx + 8}`),
//             hindi: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Hindi+Teacher+${idx + 8}`),
//             english: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=English+Teacher+${idx + 8}`),
//             math: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Math+Teacher+${idx + 8}`),
//             science: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Science+Teacher+${idx + 8}`),
//             socialStudies: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Social+Studies+Teacher+${idx + 8}`),
//           },
//         });
//       } finally {
//         setLoading(false); // Set loading to false after fetching (success or failure)
//       }
//     };

//     fetchImages();
//   }, []);

//   // Show loading state while fetching images
//   if (loading) {
//     return (
//       <div className="container my-5 text-center">
//         <h3>Loading faculty details...</h3>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Page Header */}
//       <section className="container my-5">
//         <p className="text-center lead">
//           Meet our dedicated team of teachers at Mahatma Vidya Mandir & Somnag Prashala, committed to shaping the future of our students.
//         </p>
//       </section>

//       {/* Nursery Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Nursery Teachers</h2>
//         <div className="row">
//           {Array.from({ length: 3 }, (_, idx) => idx + 1).map((teacher) => (
//             <div key={teacher} className="col-md-4 col-sm-6 mb-4">
//               <div className="card h-100 text-center">
//                 <img
//                   src={facultyImages.nurseryTeachers[teacher - 1] || 'https://via.placeholder.com/150?text=Nursery+Teacher'}
//                   alt={`Nursery Teacher ${teacher}`}
//                   className="card-img-top rounded-circle mx-auto mt-3"
//                   style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{`Nursery Teacher ${teacher}`}</h5>
//                   <p className="card-text">Nursery Section</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Class Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Class Teachers (1st to 10th Standard)</h2>
//         <div className="row">
//           {Array.from({ length: 10 }, (_, idx) => idx + 1).map((std) => (
//             <div key={std} className="col-md-3 col-sm-6 mb-4">
//               <div className="card h-100 text-center">
//                 <img
//                   src={facultyImages.classTeachers[std - 1] || 'https://via.placeholder.com/150?text=Class+Teacher'}
//                   alt={`Class Teacher ${std}`}
//                   className="card-img-top rounded-circle mx-auto mt-3"
//                   style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{`Teacher for ${std}${std === 1 ? 'st' : std === 2 ? 'nd' : std === 3 ? 'rd' : 'th'} Standard`}</h5>
//                   <p className="card-text">Class Teacher</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Subject Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Subject Teachers</h2>

//         {/* 1st to 7th Standards */}
//         <div className="mb-5">
//           <h4 className="text-center mb-4">1st to 7th Standards (Common Teachers)</h4>
//           <div className="row">
//             {Array.from({ length: 6 }, (_, idx) => idx + 1).map((teacher) => (
//               <div key={teacher} className="col-md-3 col-sm-6 mb-4">
//                 <div className="card h-100 text-center">
//                   <img
//                     src={facultyImages.commonSubjectTeachers[teacher - 1] || 'https://via.placeholder.com/150?text=Common+Teacher'}
//                     alt={`Common Subject Teacher ${teacher}`}
//                     className="card-img-top rounded-circle mx-auto mt-3"
//                     style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{`Common Teacher ${teacher}`}</h5>
//                     <p className="card-text">Teaches All Subjects (1st to 7th)</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 8th to 10th Standards */}
//         <div>
//           <h4 className="text-center mb-4">8th to 10th Standards (Subject-Specific Teachers)</h4>
//           {['Marathi', 'Hindi', 'English', 'Math', 'Science', 'Social Studies'].map((subject) => (
//             <div key={subject} className="mb-5">
//               <h5 className="text-center mb-4">{subject} Teachers</h5>
//               <div className="row">
//                 {[8, 9, 10].map((std, idx) => (
//                   <div key={std} className="col-md-3 col-sm-6 mb-4">
//                     <div className="card h-100 text-center">
//                       <img
//                         src={
//                           facultyImages.subjectTeachers8to10[subject.toLowerCase()]?.[idx] ||
//                           'https://via.placeholder.com/150?text=Subject+Teacher'
//                         }
//                         alt={`${subject} Teacher ${std}`}
//                         className="card-img-top rounded-circle mx-auto mt-3"
//                         style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{`${subject} Teacher`}</h5>
//                         <p className="card-text">{`For ${std}${std === 8 ? 'th' : std === 9 ? 'th' : 'th'} Standard`}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Faculty;


// import React, { useState, useEffect } from 'react';
// import { storage } from '../firebase'; // Adjust the path to your firebase.js file
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

// const Faculty = () => {
//   const [facultyImages, setFacultyImages] = useState({
//     nurseryTeachers: Array(3).fill(''),
//     classTeachers: Array(10).fill(''),
//     commonSubjectTeachers: Array(6).fill(''),
//     subjectTeachers8to10: {
//       marathi: Array(3).fill(''),
//       hindi: Array(3).fill(''),
//       english: Array(3).fill(''),
//       math: Array(3).fill(''),
//       science: Array(3).fill(''),
//       socialStudies: Array(3).fill(''),
//     },
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const imageMap = {
//           nurseryTeachers: Array(3).fill(''),
//           classTeachers: Array(10).fill(''),
//           commonSubjectTeachers: Array(6).fill(''),
//           subjectTeachers8to10: {
//             marathi: Array(3).fill(''),
//             hindi: Array(3).fill(''),
//             english: Array(3).fill(''),
//             math: Array(3).fill(''),
//             science: Array(3).fill(''),
//             socialStudies: Array(3).fill(''),
//           },
//         };

//         // Helper function to safely fetch URLs
//         const safeGetDownloadURL = async (imageRef) => {
//           try {
//             return await getDownloadURL(imageRef);
//           } catch (error) {
//             console.error(`Error fetching URL for ${imageRef.name}:`, error);
//             return '';
//           }
//         };

//         // Fetch Nursery Teachers
//         const nurseryRef = ref(storage, 'Faculty/Nursery/');
//         const nurseryResult = await listAll(nurseryRef);
//         const nurseryUrls = await Promise.all(nurseryResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         nurseryResult.items.forEach((item, index) => {
//           const name = item.name.toLowerCase();
//           if (nurseryUrls[index]) {
//             for (let i = 1; i <= 3; i++) {
//               if (name.includes(`nursery-teacher-${i}`)) imageMap.nurseryTeachers[i - 1] = nurseryUrls[index];
//             }
//           }
//         });

//         // Fetch Class Teachers
//         const classRef = ref(storage, 'Faculty/ClassTeacher/');
//         const classResult = await listAll(classRef);
//         const classUrls = await Promise.all(classResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         classResult.items.forEach((item, index) => {
//           const name = item.name.toLowerCase();
//           if (classUrls[index]) {
//             for (let i = 1; i <= 10; i++) {
//               if (name.includes(`class-teacher-${i}`)) imageMap.classTeachers[i - 1] = classUrls[index];
//             }
//           }
//         });

//         // Fetch Common Subject Teachers
//         const commonRef = ref(storage, 'Faculty/Common Subject Teacher/');
//         const commonResult = await listAll(commonRef);
//         const commonUrls = await Promise.all(commonResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         commonResult.items.forEach((item, index) => {
//           const name = item.name.toLowerCase();
//           if (commonUrls[index]) {
//             for (let i = 1; i <= 6; i++) {
//               if (name.includes(`subject-teacher-common-${i}`)) imageMap.commonSubjectTeachers[i - 1] = commonUrls[index];
//             }
//           }
//         });

//         // Fetch Subject-Specific Teachers
//         const subjectFolders = {
//           marathi: 'Marathi Teacher',
//           hindi: 'Hindi Teacher',
//           english: 'English Teacher',
//           math: 'MathTeacher',
//           science: 'Science Teacher',
//           socialStudies: 'Social StudiesTeacher',
//         };

//         for (const [subjectKey, folderName] of Object.entries(subjectFolders)) {
//           const subjectRef = ref(storage, `Faculty/${folderName}/`);
//           const subjectResult = await listAll(subjectRef);
//           const subjectUrls = await Promise.all(subjectResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//           subjectResult.items.forEach((item, index) => {
//             const name = item.name.toLowerCase();
//             if (subjectUrls[index]) {
//               for (let i = 8; i <= 10; i++) {
//                 if (name.includes(`subject-teacher-${subjectKey}-${i}`)) {
//                   imageMap.subjectTeachers8to10[subjectKey][i - 8] = subjectUrls[index];
//                 }
//               }
//             }
//           });
//         }

//         setFacultyImages({
//           nurseryTeachers: imageMap.nurseryTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: imageMap.classTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: imageMap.commonSubjectTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: {
//             marathi: imageMap.subjectTeachers8to10.marathi.map((url, idx) => url || `https://via.placeholder.com/150?text=Marathi+Teacher+${idx + 8}`),
//             hindi: imageMap.subjectTeachers8to10.hindi.map((url, idx) => url || `https://via.placeholder.com/150?text=Hindi+Teacher+${idx + 8}`),
//             english: imageMap.subjectTeachers8to10.english.map((url, idx) => url || `https://via.placeholder.com/150?text=English+Teacher+${idx + 8}`),
//             math: imageMap.subjectTeachers8to10.math.map((url, idx) => url || `https://via.placeholder.com/150?text=Math+Teacher+${idx + 8}`),
//             science: imageMap.subjectTeachers8to10.science.map((url, idx) => url || `https://via.placeholder.com/150?text=Science+Teacher+${idx + 8}`),
//             socialStudies: imageMap.subjectTeachers8to10.socialStudies.map((url, idx) => url || `https://via.placeholder.com/150?text=Social+Studies+Teacher+${idx + 8}`),
//           },
//         });
//       } catch (error) {
//         console.error('Error fetching Faculty images from Firebase Storage:', error);
//         setFacultyImages({
//           nurseryTeachers: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: Array(10).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: Array(6).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: {
//             marathi: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Marathi+Teacher+${idx + 8}`),
//             hindi: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Hindi+Teacher+${idx + 8}`),
//             english: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=English+Teacher+${idx + 8}`),
//             math: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Math+Teacher+${idx + 8}`),
//             science: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Science+Teacher+${idx + 8}`),
//             socialStudies: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Social+Studies+Teacher+${idx + 8}`),
//           },
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container my-5 text-center">
//         <h3>Loading faculty details...</h3>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Page Header */}
//       <section className="container my-5">
//         <h1 className="text-center mb-4">Faculty</h1>
//         <p className="text-center lead">
//           Meet our dedicated team of teachers at Mahatma Vidya Mandir & Somnag Prashala, committed to shaping the future of our students.
//         </p>
//       </section>

//       {/* Nursery Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Nursery Teachers</h2>
//         <div className="row">
//           {Array.from({ length: 3 }, (_, idx) => idx + 1).map((teacher) => (
//             <div key={teacher} className="col-md-4 col-sm-6 mb-4">
//               <div className="card h-100 text-center">
//                 <img
//                   src={facultyImages.nurseryTeachers[teacher - 1] || 'https://via.placeholder.com/150?text=Nursery+Teacher'}
//                   alt={`Nursery Teacher ${teacher}`}
//                   className="card-img-top rounded-circle mx-auto mt-3"
//                   style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{`Nursery Teacher ${teacher}`}</h5>
//                   <p className="card-text">Nursery Section</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Class Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Class Teachers (1st to 10th Standard)</h2>
//         <div className="row">
//           {Array.from({ length: 10 }, (_, idx) => idx + 1).map((std) => (
//             <div key={std} className="col-md-3 col-sm-6 mb-4">
//               <div className="card h-100 text-center">
//                 <img
//                   src={facultyImages.classTeachers[std - 1] || 'https://via.placeholder.com/150?text=Class+Teacher'}
//                   alt={`Class Teacher ${std}`}
//                   className="card-img-top rounded-circle mx-auto mt-3"
//                   style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{`Teacher for ${std}${std === 1 ? 'st' : std === 2 ? 'nd' : std === 3 ? 'rd' : 'th'} Standard`}</h5>
//                   <p className="card-text">Class Teacher</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Subject Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Subject Teachers</h2>

//         {/* 1st to 7th Standards */}
//         <div className="mb-5">
//           <h4 className="text-center mb-4">1st to 7th Standards (Common Teachers)</h4>
//           <div className="row">
//             {Array.from({ length: 6 }, (_, idx) => idx + 1).map((teacher) => (
//               <div key={teacher} className="col-md-3 col-sm-6 mb-4">
//                 <div className="card h-100 text-center">
//                   <img
//                     src={facultyImages.commonSubjectTeachers[teacher - 1] || 'https://via.placeholder.com/150?text=Common+Teacher'}
//                     alt={`Common Subject Teacher ${teacher}`}
//                     className="card-img-top rounded-circle mx-auto mt-3"
//                     style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                     onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{`Common Teacher ${teacher}`}</h5>
//                     <p className="card-text">Teaches All Subjects (1st to 7th)</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 8th to 10th Standards */}
//         <div>
//           <h4 className="text-center mb-4">8th to 10th Standards (Subject-Specific Teachers)</h4>
//           {['Marathi', 'Hindi', 'English', 'Math', 'Science', 'Social Studies'].map((subject) => (
//             <div key={subject} className="mb-5">
//               <h5 className="text-center mb-4">{subject} Teachers</h5>
//               <div className="row">
//                 {[8, 9, 10].map((std, idx) => (
//                   <div key={std} className="col-md-3 col-sm-6 mb-4">
//                     <div className="card h-100 text-center">
//                       <img
//                         src={
//                           facultyImages.subjectTeachers8to10[subject.toLowerCase()]?.[idx] ||
//                           'https://via.placeholder.com/150?text=Subject+Teacher'
//                         }
//                         alt={`${subject} Teacher ${std}`}
//                         className="card-img-top rounded-circle mx-auto mt-3"
//                         style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                         onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{`${subject} Teacher`}</h5>
//                         <p className="card-text">{`For ${std}${std === 8 ? 'th' : std === 9 ? 'th' : 'th'} Standard`}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Faculty;

















// import React, { useState, useEffect } from 'react';
// import { storage } from '../firebase'; // Adjust the path to your firebase.js file
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

// const Faculty = () => {
//   const [facultyImages, setFacultyImages] = useState({
//     nurseryTeachers: Array(3).fill(''),
//     classTeachers: Array(10).fill(''),
//     commonSubjectTeachers: Array(6).fill(''),
//     subjectTeachers8to10: {
//       marathi: Array(3).fill(''),
//       hindi: Array(3).fill(''),
//       english: Array(3).fill(''),
//       math: Array(3).fill(''),
//       science: Array(3).fill(''),
//       socialStudies: Array(3).fill(''),
//     },
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const imageMap = {
//           nurseryTeachers: Array(3).fill(''),
//           classTeachers: Array(10).fill(''),
//           commonSubjectTeachers: Array(6).fill(''),
//           subjectTeachers8to10: {
//             marathi: Array(3).fill(''),
//             hindi: Array(3).fill(''),
//             english: Array(3).fill(''),
//             math: Array(3).fill(''),
//             science: Array(3).fill(''),
//             socialStudies: Array(3).fill(''),
//           },
//         };

//         // Helper function to safely fetch URLs
//         const safeGetDownloadURL = async (imageRef) => {
//           try {
//             return await getDownloadURL(imageRef);
//           } catch (error) {
//             console.error(`Error fetching URL for ${imageRef.name}:`, error);
//             return '';
//           }
//         };

//         // Fetch Nursery Teachers
//         const nurseryRef = ref(storage, 'Faculty/Nursery/');
//         const nurseryResult = await listAll(nurseryRef);
//         const nurseryUrls = await Promise.all(nurseryResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         nurseryResult.items.forEach((item, index) => {
//           const name = item.name.toLowerCase();
//           if (nurseryUrls[index]) {
//             for (let i = 1; i <= 3; i++) {
//               if (name.includes(`nursery-teacher-${i}`)) imageMap.nurseryTeachers[i - 1] = nurseryUrls[index];
//             }
//           }
//         });

//         // Fetch Class Teachers
//         const classRef = ref(storage, 'Faculty/ClassTeacher/');
//         const classResult = await listAll(classRef);
//         const classUrls = await Promise.all(classResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         classResult.items.forEach((item, index) => {
//           const name = item.name.toLowerCase();
//           if (classUrls[index]) {
//             for (let i = 1; i <= 10; i++) {
//               if (name.includes(`class-teacher-${i}`)) imageMap.classTeachers[i - 1] = classUrls[index];
//             }
//           }
//         });

//         // Fetch Common Subject Teachers
//         const commonRef = ref(storage, 'Faculty/Common Subject Teacher/');
//         const commonResult = await listAll(commonRef);
//         const commonUrls = await Promise.all(commonResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         commonResult.items.forEach((item, index) => {
//           const name = item.name.toLowerCase();
//           if (commonUrls[index]) {
//             for (let i = 1; i <= 6; i++) {
//               if (name.includes(`subject-teacher-common-${i}`)) imageMap.commonSubjectTeachers[i - 1] = commonUrls[index];
//             }
//           }
//         });

//         // Fetch Subject-Specific Teachers
//         const subjectFolders = {
//           marathi: 'Marathi Teacher',
//           hindi: 'Hindi Teacher',
//           english: 'English Teacher',
//           math: 'MathTeacher',
//           science: 'Science Teacher',
//           social: 'Social Teacher', // Adjusted to match the likely folder name
//         };

//         for (const [subjectKey, folderName] of Object.entries(subjectFolders)) {
//           const subjectRef = ref(storage, `Faculty/${folderName}/`);
//           const subjectResult = await listAll(subjectRef);
//           console.log(`Listing files in Faculty/${folderName}/:`, subjectResult.items.map(item => item.name));
//           const subjectUrls = await Promise.all(subjectResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//           subjectResult.items.forEach((item, index) => {
//             const name = item.name.toLowerCase();
//             console.log(`Processing file in ${folderName}: ${name}, URL: ${subjectUrls[index]}`);
//             if (subjectUrls[index]) {
//               for (let i = 8; i <= 10; i++) {
//                 if (name.includes(`subject-teacher-${subjectKey}-${i}`)) {
//                   console.log(`Matched ${name} to subject-teacher-${subjectKey}-${i}`);
//                   imageMap.subjectTeachers8to10[subjectKey][i - 8] = subjectUrls[index];
//                 }
//               }
//             }
//           });
//         }

//         setFacultyImages({
//           nurseryTeachers: imageMap.nurseryTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: imageMap.classTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: imageMap.commonSubjectTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: {
//             marathi: imageMap.subjectTeachers8to10.marathi.map((url, idx) => url || `https://via.placeholder.com/150?text=Marathi+Teacher+${idx + 8}`),
//             hindi: imageMap.subjectTeachers8to10.hindi.map((url, idx) => url || `https://via.placeholder.com/150?text=Hindi+Teacher+${idx + 8}`),
//             english: imageMap.subjectTeachers8to10.english.map((url, idx) => url || `https://via.placeholder.com/150?text=English+Teacher+${idx + 8}`),
//             math: imageMap.subjectTeachers8to10.math.map((url, idx) => url || `https://via.placeholder.com/150?text=Math+Teacher+${idx + 8}`),
//             science: imageMap.subjectTeachers8to10.science.map((url, idx) => url || `https://via.placeholder.com/150?text=Science+Teacher+${idx + 8}`),
//             socialStudies: imageMap.subjectTeachers8to10.socialStudies.map((url, idx) => url || `https://via.placeholder.com/150?text=Social+Studies+Teacher+${idx + 8}`),
//           },
//         });
//       } catch (error) {
//         console.error('Error fetching Faculty images from Firebase Storage:', error);
//         setFacultyImages({
//           nurseryTeachers: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: Array(10).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: Array(6).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: {
//             marathi: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Marathi+Teacher+${idx + 8}`),
//             hindi: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Hindi+Teacher+${idx + 8}`),
//             english: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=English+Teacher+${idx + 8}`),
//             math: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Math+Teacher+${idx + 8}`),
//             science: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Science+Teacher+${idx + 8}`),
//             socialStudies: Array(3).fill('').map((_, idx) => `https://via.placeholder.com/150?text=Social+Studies+Teacher+${idx + 8}`),
//           },
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container my-5 text-center">
//         <h3>Loading faculty details...</h3>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Page Header */}
//       <section className="container my-5">
//         <h1 className="text-center mb-4">Faculty</h1>
//         <p className="text-center lead">
//           Meet our dedicated team of teachers at Mahatma Vidya Mandir & Somnag Prashala, committed to shaping the future of our students.
//         </p>
//       </section>

//       {/* Nursery Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Nursery Teachers</h2>
//         <div className="row">
//           {Array.from({ length: 3 }, (_, idx) => idx + 1).map((teacher) => (
//             <div key={teacher} className="col-md-4 col-sm-6 mb-4">
//               <div className="card h-100 text-center">
//                 <img
//                   src={facultyImages.nurseryTeachers[teacher - 1] || 'https://via.placeholder.com/150?text=Nursery+Teacher'}
//                   alt={`Nursery Teacher ${teacher}`}
//                   className="card-img-top rounded-circle mx-auto mt-3"
//                   style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{`Nursery Teacher ${teacher}`}</h5>
//                   <p className="card-text">Nursery Section</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Class Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Class Teachers (1st to 10th Standard)</h2>
//         <div className="row">
//           {Array.from({ length: 10 }, (_, idx) => idx + 1).map((std) => (
//             <div key={std} className="col-md-3 col-sm-6 mb-4">
//               <div className="card h-100 text-center">
//                 <img
//                   src={facultyImages.classTeachers[std - 1] || 'https://via.placeholder.com/150?text=Class+Teacher'}
//                   alt={`Class Teacher ${std}`}
//                   className="card-img-top rounded-circle mx-auto mt-3"
//                   style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{`Teacher for ${std}${std === 1 ? 'st' : std === 2 ? 'nd' : std === 3 ? 'rd' : 'th'} Standard`}</h5>
//                   <p className="card-text">Class Teacher</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Subject Teachers Section */}
//       <section className="container my-5">
//         <h2 className="text-center mb-4">Subject Teachers</h2>

//         {/* 1st to 7th Standards */}
//         <div className="mb-5">
//           <h4 className="text-center mb-4">1st to 7th Standards (Common Teachers)</h4>
//           <div className="row">
//             {Array.from({ length: 6 }, (_, idx) => idx + 1).map((teacher) => (
//               <div key={teacher} className="col-md-3 col-sm-6 mb-4">
//                 <div className="card h-100 text-center">
//                   <img
//                     src={facultyImages.commonSubjectTeachers[teacher - 1] || 'https://via.placeholder.com/150?text=Common+Teacher'}
//                     alt={`Common Subject Teacher ${teacher}`}
//                     className="card-img-top rounded-circle mx-auto mt-3"
//                     style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                     onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{`Common Teacher ${teacher}`}</h5>
//                     <p className="card-text">Teaches All Subjects (1st to 7th)</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 8th to 10th Standards */}
//         <div>
//           <h4 className="text-center mb-4">8th to 10th Standards (Subject-Specific Teachers)</h4>
//           {['Marathi', 'Hindi', 'English', 'Math', 'Science', 'Social Studies'].map((subject) => (
//             <div key={subject} className="mb-5">
//               <h5 className="text-center mb-4">{subject} Teachers</h5>
//               <div className="row">
//                 {[8, 9, 10].map((std, idx) => (
//                   <div key={std} className="col-md-3 col-sm-6 mb-4">
//                     <div className="card h-100 text-center">
//                       <img
//                         src={
//                           facultyImages.subjectTeachers8to10[subject.toLowerCase()]?.[idx] ||
//                           'https://via.placeholder.com/150?text=Subject+Teacher'
//                         }
//                         alt={`${subject} Teacher ${std}`}
//                         className="card-img-top rounded-circle mx-auto mt-3"
//                         style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                         onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found')}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{`${subject} Teacher`}</h5>
//                         <p className="card-text">{`For ${std}${std === 8 ? 'th' : std === 9 ? 'th' : 'th'} Standard`}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Faculty;



















// import React, { useState, useEffect } from 'react';
// import { storage, db } from '../firebase'; // ✅ Combined firebase file
// import { firestore } from '../firebaseFirestore'; // Adjust the path to your firebase.js file
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import { doc, getDoc } from 'firebase/firestore'; // ✅ Correct import for Firestore


// const Faculty = () => {
//   const [facultyImages, setFacultyImages] = useState({
//     nurseryTeachers: Array(3).fill(''),
//     classTeachers: Array(10).fill(''),
//     commonSubjectTeachers: Array(6).fill(''),
//     subjectTeachers8to10: {
//       marathi: Array(3).fill(''),
//       hindi: Array(3).fill(''),
//       english: Array(3).fill(''),
//       math: Array(3).fill(''),
//       science: Array(3).fill(''),
//       socialStudies: Array(3).fill(''),
//     },
//   });

//   const [facultyNames, setFacultyNames] = useState({
//     nurseryTeachers: Array(3).fill('Nursery Teacher'),
//     classTeachers: Array(10).fill('Class Teacher'),
//     commonSubjectTeachers: Array(6).fill('Common Teacher'),
//     subjectTeachers8to10: {
//       marathi: Array(3).fill('Marathi Teacher'),
//       hindi: Array(3).fill('Hindi Teacher'),
//       english: Array(3).fill('English Teacher'),
//       math: Array(3).fill('Math Teacher'),
//       science: Array(3).fill('Science Teacher'),
//       socialStudies: Array(3).fill('Social Studies Teacher'),
//     },
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImagesAndNames = async () => {
//       try {
//         const imageMap = {
//           nurseryTeachers: Array(3).fill(''),
//           classTeachers: Array(10).fill(''),
//           commonSubjectTeachers: Array(6).fill(''),
//           subjectTeachers8to10: {
//             marathi: Array(3).fill(''),
//             hindi: Array(3).fill(''),
//             english: Array(3).fill(''),
//             math: Array(3).fill(''),
//             science: Array(3).fill(''),
//             socialStudies: Array(3).fill(''),
//           },
//         };

//         const safeGetDownloadURL = async (imageRef) => {
//           try {
//             return await getDownloadURL(imageRef);
//           } catch (error) {
//             console.error(`Error fetching URL for ${imageRef.name}:`, error);
//             return '';
//           }
//         };

//         // Fetch Nursery Teachers Images
//         const nurseryResult = await listAll(ref(storage, 'Faculty/Nursery/'));
//         const nurseryUrls = await Promise.all(nurseryResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         nurseryResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 3; i++) {
//             if (item.name.toLowerCase().includes(`nursery-teacher-${i}`)) imageMap.nurseryTeachers[i - 1] = nurseryUrls[index];
//           }
//         });

//         // Fetch Class Teachers Images
//         const classResult = await listAll(ref(storage, 'Faculty/ClassTeacher/'));
//         const classUrls = await Promise.all(classResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         classResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 10; i++) {
//             if (item.name.toLowerCase().includes(`class-teacher-${i}`)) imageMap.classTeachers[i - 1] = classUrls[index];
//           }
//         });

//         // Fetch Common Subject Teachers Images
//         const commonResult = await listAll(ref(storage, 'Faculty/Common Subject Teacher/'));
//         const commonUrls = await Promise.all(commonResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//         commonResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 6; i++) {
//             if (item.name.toLowerCase().includes(`subject-teacher-common-${i}`)) imageMap.commonSubjectTeachers[i - 1] = commonUrls[index];
//           }
//         });

//         // Subject-specific teachers (8th to 10th)
//         const subjectFolders = {
//           marathi: 'Marathi Teacher',
//           hindi: 'Hindi Teacher',
//           english: 'English Teacher',
//           math: 'MathTeacher',
//           science: 'Science Teacher',
//           socialStudies: 'Social Teacher',
//         };

//         for (const [subjectKey, folderName] of Object.entries(subjectFolders)) {
//           const subjectResult = await listAll(ref(storage, `Faculty/${folderName}/`));
//           const subjectUrls = await Promise.all(subjectResult.items.map((imageRef) => safeGetDownloadURL(imageRef)));
//           subjectResult.items.forEach((item, index) => {
//             for (let i = 8; i <= 10; i++) {
//               if (item.name.toLowerCase().includes(`subject-teacher-${subjectKey}-${i}`)) {
//                 imageMap.subjectTeachers8to10[subjectKey][i - 8] = subjectUrls[index];
//               }
//             }
//           });
//         }

//         // Fetch names from Firestore
//         const nurseryDoc = await getDoc(doc(db, 'FacultyNames', 'nurseryTeachers'));
//         const classDoc = await getDoc(doc(db, 'FacultyNames', 'classTeachers'));
//         const commonDoc = await getDoc(doc(db, 'FacultyNames', 'commonSubjectTeachers'));
//         const subjectDoc = await getDoc(doc(db, 'FacultyNames', 'subjectTeachers8to10'));


//         setFacultyImages({
//           nurseryTeachers: imageMap.nurseryTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: imageMap.classTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: imageMap.commonSubjectTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: Object.fromEntries(
//             Object.entries(imageMap.subjectTeachers8to10).map(([key, arr]) => [
//               key,
//               arr.map((url, idx) => url || `https://via.placeholder.com/150?text=${key}+Teacher+${idx + 8}`),
//             ])
//           ),
//         });

//         setFacultyNames({
//           nurseryTeachers: nurseryDoc.exists() ? nurseryDoc.data().names : Array(3).fill('Nursery Teacher'),
//           classTeachers: classDoc.exists() ? classDoc.data().names : Array(10).fill('Class Teacher'),
//           commonSubjectTeachers: commonDoc.exists() ? commonDoc.data().names : Array(6).fill('Common Teacher'),
//           subjectTeachers8to10: subjectDoc.exists()
//             ? subjectDoc.data()
//             : {
//               marathi: Array(3).fill('Marathi Teacher'),
//               hindi: Array(3).fill('Hindi Teacher'),
//               english: Array(3).fill('English Teacher'),
//               math: Array(3).fill('Math Teacher'),
//               science: Array(3).fill('Science Teacher'),
//               socialStudies: Array(3).fill('Social Studies Teacher'),
//             },
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImagesAndNames();
//   }, []);

//   if (loading) {
//     return <div className="container my-5 text-center"><h3>Loading faculty details...</h3></div>;
//   }

//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-5">Faculty</h1>

//       {/* Nursery Teachers */}
//       <h2>Nursery Teachers</h2>
//       <div className="row mb-5">
//         {facultyImages.nurseryTeachers.map((img, idx) => (
//           <div className="col-md-4 mb-3" key={idx}>
//             <div className="card text-center">
//               <img src={img} alt="Nursery Teacher" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{facultyNames.nurseryTeachers[idx]}</h5>
//                 <p className="card-text">Nursery Section</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Class Teachers */}
//       <h2>Class Teachers (1st to 10th Standard)</h2>
//       <div className="row mb-5">
//         {facultyImages.classTeachers.map((img, idx) => (
//           <div className="col-md-3 mb-3" key={idx}>
//             <div className="card text-center">
//               <img src={img} alt="Class Teacher" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{facultyNames.classTeachers[idx]}</h5>
//                 <p className="card-text">{`${idx + 1}${idx + 1 === 1 ? 'st' : idx + 1 === 2 ? 'nd' : idx + 1 === 3 ? 'rd' : 'th'} Standard`}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Subject Teachers */}
//       <h2>Subject Teachers (8th to 10th)</h2>
//       {Object.entries(facultyImages.subjectTeachers8to10).map(([subject, arr]) => (
//         <div key={subject} className="mb-5">
//           <h3 className="text-center text-capitalize">{subject}</h3>
//           <div className="row">
//             {arr.map((img, idx) => (
//               <div className="col-md-3 mb-3" key={idx}>
//                 <div className="card text-center">
//                   <img src={img} alt={`${subject} Teacher`} className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
//                   <div className="card-body">
//                     <h5 className="card-title">{facultyNames.subjectTeachers8to10[subject][idx]}</h5>
//                     <p className="card-text">{`${idx + 8}th Standard`}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Faculty;






























// import React, { useState, useEffect } from 'react';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import { doc, getDoc } from 'firebase/firestore';
// import { storage } from '../firebase';             // For Storage (FIRST Firebase)
// import { db } from '../firebaseFirestore';         // For Firestore (SECOND Firebase)

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// //import { storage } from '../firebase';  
// //import { storage, db } from '../firebase'; // ✅ SINGLE import now
// //import { db } from '../firebaseFirestore';      // ✅ Firestore only

// const Faculty = () => {


//   useEffect(() => {
//     AOS.init({
//       duration: 3000, // animation duration in ms
//       once: true,     // only animate once when scrolled into view
//     });
//   }, []);



//   const [facultyImages, setFacultyImages] = useState({
//     nurseryTeachers: Array(3).fill(''),
//     classTeachers: Array(10).fill(''),
//     commonSubjectTeachers: Array(6).fill(''),
//     subjectTeachers8to10: {
//       marathi: Array(3).fill(''),
//       hindi: Array(3).fill(''),
//       english: Array(3).fill(''),
//       math: Array(3).fill(''),
//       science: Array(3).fill(''),
//       socialStudies: Array(3).fill(''),
//     },
//   });

//   const [facultyNames, setFacultyNames] = useState({
//     nurseryTeachers: Array(3).fill('Nursery Teacher'),
//     classTeachers: Array(10).fill('Class Teacher'),
//     commonSubjectTeachers: Array(6).fill('Common Teacher'),
//     subjectTeachers8to10: {
//       marathi: Array(3).fill('Marathi Teacher'),
//       hindi: Array(3).fill('Hindi Teacher'),
//       english: Array(3).fill('English Teacher'),
//       math: Array(3).fill('Math Teacher'),
//       science: Array(3).fill('Science Teacher'),
//       socialStudies: Array(3).fill('Social Studies Teacher'),
//     },
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImagesAndNames = async () => {
//       try {
//         const imageMap = {
//           nurseryTeachers: Array(3).fill(''),
//           classTeachers: Array(10).fill(''),
//           commonSubjectTeachers: Array(6).fill(''),
//           subjectTeachers8to10: {
//             marathi: Array(3).fill(''),
//             hindi: Array(3).fill(''),
//             english: Array(3).fill(''),
//             math: Array(3).fill(''),
//             science: Array(3).fill(''),
//             socialStudies: Array(3).fill(''),
//           },
//         };

//         const safeGetDownloadURL = async (imageRef) => {
//           try {
//             return await getDownloadURL(imageRef);
//           } catch {
//             return '';
//           }
//         };

//         // Nursery Teachers
//         const nurseryResult = await listAll(ref(storage, 'Faculty/Nursery/'));
//         const nurseryUrls = await Promise.all(nurseryResult.items.map(safeGetDownloadURL));
//         nurseryResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 3; i++) {
//             if (item.name.toLowerCase().includes(`nursery-teacher-${i}`)) imageMap.nurseryTeachers[i - 1] = nurseryUrls[index];
//           }
//         });

//         // Class Teachers
//         const classResult = await listAll(ref(storage, 'Faculty/ClassTeacher/'));
//         const classUrls = await Promise.all(classResult.items.map(safeGetDownloadURL));
//         classResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 10; i++) {
//             if (item.name.toLowerCase().includes(`class-teacher-${i}`)) imageMap.classTeachers[i - 1] = classUrls[index];
//           }
//         });

//         // Common Subject Teachers
//         const commonResult = await listAll(ref(storage, 'Faculty/Common Subject Teacher/'));
//         const commonUrls = await Promise.all(commonResult.items.map(safeGetDownloadURL));
//         commonResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 6; i++) {
//             if (item.name.toLowerCase().includes(`subject-teacher-common-${i}`)) imageMap.commonSubjectTeachers[i - 1] = commonUrls[index];
//           }
//         });

//         // Subject-specific teachers (8th to 10th)
//         const subjectFolders = {
//           marathi: 'Marathi Teacher',
//           hindi: 'Hindi Teacher',
//           english: 'English Teacher',
//           math: 'MathTeacher',
//           science: 'Science Teacher',
//           socialStudies: 'Social Studies Teacher',
//         };

//         for (const [subjectKey, folderName] of Object.entries(subjectFolders)) {
//           const subjectResult = await listAll(ref(storage, `Faculty/${folderName}/`));
//           const subjectUrls = await Promise.all(subjectResult.items.map(safeGetDownloadURL));
//           subjectResult.items.forEach((item, index) => {
//             for (let i = 8; i <= 10; i++) {
//               if (item.name.toLowerCase().includes(`subject-teacher-${subjectKey}-${i}`)) {
//                 imageMap.subjectTeachers8to10[subjectKey][i - 8] = subjectUrls[index];
//               }
//             }
//           });
//         }

//         // Names from Firestore
//         const nurseryDoc = await getDoc(doc(db, 'FacultyNames', 'nurseryTeachers'));
//         const classDoc = await getDoc(doc(db, 'FacultyNames', 'classTeachers'));
//         const commonDoc = await getDoc(doc(db, 'FacultyNames', 'commonSubjectTeachers'));
//         const subjectDoc = await getDoc(doc(db, 'FacultyNames', 'subjectTeachers8to10'));

//         setFacultyImages({
//           nurseryTeachers: imageMap.nurseryTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Nursery+Teacher+${idx + 1}`),
//           classTeachers: imageMap.classTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Class+Teacher+${idx + 1}`),
//           commonSubjectTeachers: imageMap.commonSubjectTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: Object.fromEntries(
//             Object.entries(imageMap.subjectTeachers8to10).map(([key, arr]) => [
//               key,
//               arr.map((url, idx) => url || `https://via.placeholder.com/150?text=${key}+Teacher+${idx + 8}`),
//             ])
//           ),
//         });

//         setFacultyNames({
//           nurseryTeachers: nurseryDoc.exists() ? nurseryDoc.data().names : Array(3).fill('Nursery Teacher'),
//           classTeachers: classDoc.exists() ? classDoc.data().names : Array(10).fill('Class Teacher'),
//           commonSubjectTeachers: commonDoc.exists() ? commonDoc.data().names : Array(6).fill('Common Teacher'),
//           subjectTeachers8to10: subjectDoc.exists()
//             ? subjectDoc.data()
//             : {
//               marathi: Array(3).fill('Marathi Teacher'),
//               hindi: Array(3).fill('Hindi Teacher'),
//               english: Array(3).fill('English Teacher'),
//               math: Array(3).fill('Math Teacher'),
//               science: Array(3).fill('Science Teacher'),
//               socialStudies: Array(3).fill('Social Studies Teacher'),
//             },
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImagesAndNames();
//   }, []);

//   if (loading) return <div className="container my-5 text-center"><h3>Loading faculty details...</h3></div>;

//   return (
//     <div className="container my-5">

//       {/* Page Header */}
//       <section className="container my-5">
//         <p className="text-center lead">
//           Meet our dedicated team of teachers at Mahatma Vidya Mandir & Somnag Prashala, committed to shaping the future of our students.
//         </p>
//       </section>
//       {/* Nursery Teachers */}
//       <h2>Nursery Teachers</h2>
//       <div className="row mb-5" data-aos="zoom-in">
//         {facultyImages.nurseryTeachers.map((img, idx) => (
//           <div className="col-md-4 mb-3" key={idx}>
//             <div className="card text-center">
//               <img src={img} alt="Nursery Teacher" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{facultyNames.nurseryTeachers[idx]}</h5>
//                 <p className="card-text">Nursery Section</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Class Teachers */}
//       <h2>Class Teachers (1st to 10th Standard)</h2>
//       <div className="row mb-5" data-aos="zoom-in">
//         {facultyImages.classTeachers.map((img, idx) => (
//           <div className="col-md-3 mb-3" key={idx}>
//             <div className="card text-center">
//               <img src={img} alt="Class Teacher" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{facultyNames.classTeachers[idx]}</h5>
//                 <p className="card-text">{`${idx + 1}${idx + 1 === 1 ? 'st' : idx + 1 === 2 ? 'nd' : idx + 1 === 3 ? 'rd' : 'th'} Standard`}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Subject Teachers */}
//       <h2>Subject Teachers (8th to 10th)</h2>
//       {Object.entries(facultyImages.subjectTeachers8to10).map(([subject, arr]) => (
//         <div key={subject} className="mb-5" data-aos="zoom-in">
//           <h3 className="text-center text-capitalize">{subject}</h3>
//           <div className="row">
//             {arr.map((img, idx) => (
//               <div className="col-md-3 mb-3" key={idx}>
//                 <div className="card text-center">
//                   <img src={img} alt={`${subject} Teacher`} className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
//                   <div className="card-body">
//                     <h5 className="card-title">{facultyNames.subjectTeachers8to10[subject][idx]}</h5>
//                     <p className="card-text">{`${idx + 8}th Standard`}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Faculty;



















// import React, { useState, useEffect } from 'react';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';
// import { doc, getDoc } from 'firebase/firestore';
// import { storage } from '../firebase'; // Firebase Storage
// import { db } from '../firebaseFirestore'; // Firestore
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Faculty = () => {
//   const [facultyImages, setFacultyImages] = useState({
//     nurseryTeachers: Array(3).fill(''),
//     classTeachers: Array(10).fill(''),
//     commonSubjectTeachers: Array(10).fill(''),
//     subjectTeachers8to10: Array(6).fill(''),
//   });

//   const [facultyData, setFacultyData] = useState({
//     nurseryTeachers: [],
//     classTeachers: [],
//     commonSubjectTeachers: [],
//     subjectTeachers8to10: [],
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const imageMap = {
//           nurseryTeachers: Array(3).fill(''),
//           classTeachers: Array(10).fill(''),
//           commonSubjectTeachers: Array(10).fill(''),
//           subjectTeachers8to10: Array(6).fill(''),
//         };

//         const safeGetDownloadURL = async (imageRef) => {
//           try {
//             return await getDownloadURL(imageRef);
//           } catch {
//             return '';
//           }
//         };

//         // Nursery Teachers
//         const nurseryResult = await listAll(ref(storage, 'Faculty/Nursery/'));
//         const nurseryUrls = await Promise.all(nurseryResult.items.map(safeGetDownloadURL));
//         nurseryResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 3; i++) {
//             if (item.name.toLowerCase().includes(`nursery-teacher-${i}`)) {
//               imageMap.nurseryTeachers[i - 1] = nurseryUrls[index];
//             }
//           }
//         });

//         // Class Teachers
//         const classResult = await listAll(ref(storage, 'Faculty/ClassTeacher/'));
//         const classUrls = await Promise.all(classResult.items.map(safeGetDownloadURL));
//         classResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 10; i++) {
//             if (item.name.toLowerCase().includes(`class-teacher-${i}`)) {
//               imageMap.classTeachers[i - 1] = classUrls[index];
//             }
//           }
//         });


//         // Common Subject Teachers
//         const commonResult = await listAll(ref(storage, 'Faculty/Common Subject Teacher/'));
//         const commonUrls = await Promise.all(commonResult.items.map(safeGetDownloadURL));
//         commonResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 10; i++) {
//             if (item.name.toLowerCase().includes(`subject-teacher-common-${i}`))
//               imageMap.commonSubjectTeachers[i - 1] = commonUrls[index];
//           }
//         });

//         // Subject Teachers (8th to 10th)
//         const subjectResult = await listAll(ref(storage, 'Faculty/Common Subject Teacher8to10/'));
//         const subjectUrls = await Promise.all(subjectResult.items.map(safeGetDownloadURL));
//         subjectResult.items.forEach((item, index) => {
//           for (let i = 1; i <= 6; i++) {
//             if (item.name.toLowerCase().includes(`subject-common-teacher8t010-${i}`))
//               imageMap.subjectTeachers8to10[i - 1] = subjectUrls[index];
//           }
//         });

//         // Firestore Data: Names & Roles
//         const nurseryDoc = await getDoc(doc(db, 'FacultyNames', 'nurseryTeachers'));
//         const classDoc = await getDoc(doc(db, 'FacultyNames', 'classTeachers'));
//         const commonDoc = await getDoc(doc(db, 'FacultyNames', 'commonSubjectTeachers'));
//         const subjectDoc = await getDoc(doc(db, 'FacultyNames', 'subjectTeachers8to10'));

//         setFacultyImages({
//           nurseryTeachers: imageMap.nurseryTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Nursery+${idx + 1}`),
//           classTeachers: imageMap.classTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Class+${idx + 1}`),
//           commonSubjectTeachers: imageMap.commonSubjectTeachers.map((url, idx) => url || `https://via.placeholder.com/150?text=Common+Teacher+${idx + 1}`),
//           subjectTeachers8to10: imageMap.subjectTeachers8to10.map((url, idx) => url || `https://via.placeholder.com/150?text=Subject+Teacher+${idx + 8}`),
//         });

//         setFacultyData({
//           nurseryTeachers: nurseryDoc.exists() ? nurseryDoc.data().teachers : Array(3).fill({ name: 'Nursery Teacher', role: 'Nursery' }),
//           classTeachers: classDoc.exists() ? classDoc.data().teachers : Array(10).fill({ name: 'Class Teacher', role: 'Class Teacher' }),
//           commonSubjectTeachers: commonDoc.exists() ? commonDoc.data().teachers : [],
//           subjectTeachers8to10: subjectDoc.exists() ? subjectDoc.data().teachers : [],
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="container my-5 text-center"><h3>Loading faculty details...</h3></div>;

//   return (
//     <div className="container my-5">

//       <section className="my-5 text-center">
//         <p className="lead">
//           Meet our dedicated team of teachers at Mahatma Vidya Mandir & Somnag Prashala, committed to shaping the future of our students.
//         </p>
//       </section>

//       {/* Nursery Teachers */}
//       <h2>Nursery Teachers</h2>
//       <div className="row mb-5" data-aos="zoom-in">
//         {facultyImages.nurseryTeachers.map((img, idx) => (
//           <div className="col-md-4 mb-3" key={idx}>
//             <div className="card text-center">
//               <img src={img} alt="Nursery Teacher" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: 120, height: 120, objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{facultyData.nurseryTeachers[idx]?.name}</h5>
//                 <p className="card-text">{facultyData.nurseryTeachers[idx]?.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Class Teachers */}
//       <h2>Class Teachers (1st to 10th Standard)</h2>
//       <div className="row mb-5" data-aos="zoom-in">
//         {facultyImages.classTeachers.map((img, idx) => (
//           <div className="col-md-3 mb-3" key={idx}>
//             <div className="card text-center">
//               <img src={img} alt="Class Teacher" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: 120, height: 120, objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{facultyData.classTeachers[idx]?.name}</h5>
//                 <p className="card-text">{facultyData.classTeachers[idx]?.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Common Subject Teachers */}
//       <h2>Subject Teachers (1st to 7th)</h2>
//       <div className="row mb-5" data-aos="zoom-in">
//         {facultyData.commonSubjectTeachers.map((teacher, idx) => (
//           <div className="col-md-3 mb-3" key={idx}>
//             <div className="card text-center">
//               <img
//                 src={facultyImages.commonSubjectTeachers[idx] || `https://via.placeholder.com/150?text=${teacher.role}`}
//                 alt={teacher.role}
//                 className="card-img-top rounded-circle mx-auto mt-3"
//                 style={{ width: 120, height: 120, objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{teacher.name}</h5>
//                 <p className="card-text">{teacher.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>


//       <h2>Subject Teachers (8th to 10th)</h2>
//       <div className="row mb-5" data-aos="zoom-in">
//         {facultyData.subjectTeachers8to10.map((teacher, idx) => (
//           <div className="col-md-3 mb-3" key={idx}>
//             <div className="card text-center">
//               <img
//                 src={facultyImages.subjectTeachers8to10[idx] || `https://via.placeholder.com/150?text=${teacher.role}`}
//                 alt={teacher.role}
//                 className="card-img-top rounded-circle mx-auto mt-3"
//                 style={{ width: 120, height: 120, objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{teacher.name}</h5>
//                 <p className="card-text">{teacher.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>


//     </div>
//   );
// };

// export default Faculty;






import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseFirestore'; // Firestore configuration
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faculty = () => {
  const [facultyData, setFacultyData] = useState({
    nurseryTeachers: [],
    commonSubjectTeachers: [],
    subjectTeachers8to10: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Helper to fetch each teachers subcollection
        const getTeachers = async (collectionName) => {
          const snapshot = await getDocs(collection(db, 'FacultyNames', collectionName, 'teachers'));
          return snapshot.docs.map(doc => doc.data());
        };

        const [nursery, common, subject810] = await Promise.all([
          getTeachers('nurseryTeachers'),
          getTeachers('commonSubjectTeachers'),
          getTeachers('subjectTeachers8to10'),
        ]);

        setFacultyData({
          nurseryTeachers: nursery,
          commonSubjectTeachers: common,
          subjectTeachers8to10: subject810,
        });
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Return teacher's imagePath from Firestore or a placeholder
  const getImageForTeacher = (teacher, fallbackText = 'Teacher') => {
    return teacher.imagePath || `https://via.placeholder.com/150?text=${encodeURIComponent(fallbackText)}`;
  };

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h3>Loading faculty details...</h3>
      </div>
    );
  }

  return (
    <div className="container my-5">

      <section className="my-5 text-center">
        <p className="lead">
          Meet our dedicated team of teachers at Mahatma Vidya Mandir & Somnag Prashala, committed to shaping the future of our students.
        </p>
      </section>

      {/* Sections */}
      {[
        { title: 'Nursery Teachers', teachers: facultyData.nurseryTeachers },
        { title: 'Subject Teachers (1st to 7th)', teachers: facultyData.commonSubjectTeachers },
        { title: 'Subject Teachers (8th to 10th)', teachers: facultyData.subjectTeachers8to10 },
      ].map((section, secIdx) => (
        <div key={secIdx} className="mb-5" data-aos="zoom-in">
          <h2 className="mb-4">{section.title}</h2>
          <div className="row">
            {(section.teachers.length > 0 ? section.teachers : [{ name: 'Coming Soon', role: '', imagePath: '' }]).map((teacher, idx) => (
              <div className="col-md-3 mb-3" key={idx}>
                <div className="card text-center">
                  <img
                    src={getImageForTeacher(teacher, teacher.role || teacher.name)}
                    alt={teacher.name}
                    className="card-img-top rounded-circle mx-auto mt-3"
                    style={{ width: 120, height: 120, objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{teacher.name}</h5>
                    <p className="card-text">{teacher.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;

