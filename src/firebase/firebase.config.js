import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDd6KlaQBv4wFG0iANFucn8t6CZgd2UxP4",
  authDomain: "mere-exercise-tracker.firebaseapp.com",
  projectId: "mere-exercise-tracker",
  storageBucket: "mere-exercise-tracker.appspot.com",
  messagingSenderId: "711558751115",
  appId: "1:711558751115:web:274f4dc3704624b79b058e",
  measurementId: "G-HTFQ1LF0GE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
