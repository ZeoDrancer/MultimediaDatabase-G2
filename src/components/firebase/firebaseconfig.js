// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlAYnxoLl8qg1Vhg-isW-_g0jBuHuAqXg",
  authDomain: "multimediadatabase-remind.firebaseapp.com",
  projectId: "multimediadatabase-remind",
  storageBucket: "multimediadatabase-remind.appspot.com",
  messagingSenderId: "632493315046",
  appId: "1:632493315046:web:81f2d7730bf0dee4567c27",
  measurementId: "G-0BKE4YCWLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);