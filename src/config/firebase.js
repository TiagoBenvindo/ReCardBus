import * as firebase from 'firebase';

import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC8fi_edisadr4N5GPdDuCBl7-scN9TqXc",
  authDomain: "recardbus-63414.firebaseapp.com",
  projectId: "recardbus-63414",
  storageBucket: "recardbus-63414.appspot.com",
  messagingSenderId: "48157042708",
  appId: "1:48157042708:web:43178bda5055b493529f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;