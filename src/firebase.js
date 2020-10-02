import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAre8Cwfz72UxCxs2r557SO8ML19SlhwNI",
    authDomain: "developer-nick.firebaseapp.com",
    databaseURL: "https://developer-nick.firebaseio.com",
    projectId: "developer-nick",
    storageBucket: "developer-nick.appspot.com",
    messagingSenderId: "759174530766",
    appId: "1:759174530766:web:074b18f000c9d209f8729f",
    measurementId: "G-Q8HWGT96LG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {db};

export default firebase;