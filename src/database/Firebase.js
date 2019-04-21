import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAI9xRDrfGqf5_ZWoD4V4jtpjuEyK5hXTc",
    authDomain: "utf-forum-db.firebaseapp.com",
    databaseURL: "https://utf-forum-db.firebaseio.com",
    projectId: "utf-forum-db",
    storageBucket: "utf-forum-db.appspot.com",
    messagingSenderId: "173638972594"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();

export const postsRef = databaseRef.child("posts")