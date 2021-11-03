import firebase from 'firebase/compat';



const firebaseConfig = {
  apiKey: "AIzaSyDUidA8XiIZQTOW6o2ar6vE-NFQQjWY_M0",
  authDomain: "weatherdb-3a692.firebaseapp.com",
  projectId: "weatherdb-3a692",
  storageBucket: "weatherdb-3a692.appspot.com",
  messagingSenderId: "962469209237",
  appId: "1:962469209237:web:fb3b3a03c301e27433e79c",
  measurementId: "G-S0N3TWW3LR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;