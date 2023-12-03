// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW-qI-Bz-cjbr5WRhnzmNawIDZlIujTnQ",
  authDomain: "loginapp-d8332.firebaseapp.com",
  projectId: "loginapp-d8332",
  storageBucket: "loginapp-d8332.appspot.com",
  messagingSenderId: "1080308801470",
  appId: "1:1080308801470:web:a059097bbae13bee07a3ef"
};



// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);