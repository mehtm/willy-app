import   firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAPkTD06WN3-KAo3qTgNJMjPD5GJS7KOjQ",
  authDomain: "willy-app-b3ae8.firebaseapp.com",
  projectId: "willy-app-b3ae8",
  storageBucket: "willy-app-b3ae8.appspot.com",
  messagingSenderId: "227592350616",
  appId: "1:227592350616:web:3858c715dd30b2d1da99ed"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
