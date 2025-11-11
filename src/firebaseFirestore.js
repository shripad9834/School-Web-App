// // firebaseStorage.js
// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/firestore';

// // ⚙️ Your Firebase Storage project configuration here
// const firebaseFirestoreConfig = {
//   apiKey: 'AIzaSyCqqICmiYdmRAQkY7yyAjtFZywXXCUn6ww',
//   authDomain: 'restaurants-b1462.firebaseapp.com',
//   projectId: 'restaurants-b1462',
//   storageBucket: 'restaurants-b1462.firebasestorage.app',
//   messagingSenderId: '714590225373',
//   appId: '1:714590225373:web:17a80a9a01bf043dc96c34',
// };

// const firestoreApp = initializeApp(firebaseFirestoreConfig, 'firestoreApp');
// const firestore = getStorage(firestoreApp);

// export { firestore };











// src/firebaseFirestore.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig2 = {
  apiKey: 'AIzaSyCqqICmiYdmRAQkY7yyAjtFZywXXCUn6ww',
  authDomain: 'restaurants-b1462.firebaseapp.com  ',
  projectId: 'restaurants-b1462',
  storageBucket: 'restaurants-b1462.firebasestorage.app',
  messagingSenderId: '714590225373',
  appId: '1:714590225373:web:17a80a9a01bf043dc96c34',
};

const app2 = initializeApp(firebaseConfig2, 'app2'); // ✅ give this a DIFFERENT name
const db = getFirestore(app2);

export { db };



// src/firebaseFirestore.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };


