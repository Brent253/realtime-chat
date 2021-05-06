import firebase from "firebase";
import firestore from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyz_VZkxmPCF_imoEwjMBZ9YC7sUYAkao",
  authDomain: "realtime-chat-d3256.firebaseapp.com",
  projectId: "realtime-chat-d3256",
  storageBucket: "realtime-chat-d3256.appspot.com",
  messagingSenderId: "760831224696",
  appId: "1:760831224696:web:cc2ea168bf0168b624368d",
  measurementId: "G-KNDDKHR9RM",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();

export default firebaseApp.firestore();
