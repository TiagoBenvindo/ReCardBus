import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCMOuihwQueQVGuWnc6-LOj9fknrHUTh7o",
  authDomain: "recardbus-afbc6.firebaseapp.com",
  projectId: "recardbus-afbc6",
  storageBucket: "recardbus-afbc6.appspot.com",
  messagingSenderId: "734503175977",
  appId: "1:734503175977:web:0d5ffcefa26eb0a22ad938"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;