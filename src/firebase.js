import * as firebase from "firebase/app"
import "firebase/analytics"
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseSantosConfig = {
    apiKey: "AIzaSyDbnJ8EU3TFnjChkKjQWK3m9TsdBG1y60k",
    authDomain: "santos-motors-group-app.firebaseapp.com",
    databaseURL: "https://santos-motors-group-app.firebaseio.com",
    projectId: "santos-motors-group-app",
    storageBucket: "santos-motors-group-app.appspot.com",
    messagingSenderId: "1080816278380",
    appId: "1:1080816278380:web:dc5b837f07028aa8703149",
    measurementId: "G-DKK2EP3Y2G"
};

var firebaseDevelopersConfig = {
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
const fb = firebase.initializeApp(firebaseSantosConfig);
firebase.analytics();

export default fb;
export const db = fb.firestore();
export const firestore = firebase.firestore;
export const storage = fb.storage();
export const auth = fb.auth();
export const a = firebase.auth;