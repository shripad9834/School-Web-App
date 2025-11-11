// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyB9t66x6WuJXmOvYp3sToXplJXzY2nWVjY",
//   authDomain: "image-server-87d0a.firebaseapp.com",
//   projectId: "image-server-87d0a",
//   storageBucket: "image-server-87d0a.appspot.com", // important for storage
//   messagingSenderId: "25658743975",
//   appId: "G-4MENNS75YN"
// };

// const app = initializeApp(firebaseConfig);

// const storage = getStorage(app);
// const db = getFirestore(app);

// export { storage, db };



// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyB9t66x6WuJXmOvYp3sToXplJXzY2nWVjY',
//   authDomain: 'image-server-87d0a.firebaseapp.com',
//   projectId: 'image-server-87d0a',
//   storageBucket: 'image-server-87d0a.appspot.com',
//   messagingSenderId: '25658743975',
//   appId: 'G-4MENNS75YN'
// };

// const app = initializeApp(firebaseConfig);

// const storage = getStorage(app);
// const db = getFirestore(app);

// export { storage, db };

















// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
//import { getFirestore } from 'firebase/firestore';

const firebaseConfig1 = {
  apiKey: 'AIzaSyB9t66x6WuJXmOvYp3sToXplJXzY2nWVjY',
  authDomain: 'image-server-87d0a.firebaseapp.com',
  projectId: 'image-server-87d0a',
  storageBucket: 'image-server-87d0a.appspot.com',
  messagingSenderId: '25658743975',
  appId: '1:25658743975:web:bd8bf6961fb8901a5d0f82',
};

const app1 = initializeApp(firebaseConfig1, 'app1'); // ✅ give this app a *name*
const storage = getStorage(app1);

export { storage };



// src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export { storage };


