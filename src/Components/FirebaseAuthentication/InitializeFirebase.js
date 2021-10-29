// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.Config";

//initialize firebase
const InitializeFirebase = () => {
  initializeApp(firebaseConfig);
  // const analytics = getAnalytics(initializeApp(firebaseConfig));
};
export default InitializeFirebase;
