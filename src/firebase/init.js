import firebase from 'firebase';
import firestore from 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyALWqq0FzvZnWtrvZB55QrCPWxdu6STNc0",
    authDomain: "real-time-chat-90ef8.firebaseapp.com",
    databaseURL: "https://real-time-chat-90ef8.firebaseio.com",
    projectId: "real-time-chat-90ef8",
    storageBucket: "real-time-chat-90ef8.appspot.com",
    messagingSenderId: "768566829669",
    appId: "1:768566829669:web:4011354ac0235f6b7fdc8c",
    measurementId: "G-G7JZRLY421"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.analytics();

  export default firebaseApp.firestore();