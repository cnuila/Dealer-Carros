import firebase from "firebase/app"
import "firebase/analytics"
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDWqiXNaADIbmr9CfZ06gXSj08L7bnZR8E",
    authDomain: "santos-motors.firebaseapp.com",
    databaseURL: "https://santos-motors.firebaseio.com",
    projectId: "santos-motors",
    storageBucket: "santos-motors.appspot.com",
    messagingSenderId: "244268806752",
    appId: "1:244268806752:web:a393ffa155f8f26d7f4905",
    measurementId: "G-Z22VLM1R1K"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = fb.firestore();
export const storage = fb.storage();
export const a = fb.auth();
//export const fb;#texto:before{