import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAkTTnpK7EZWiW6xLKZeldVylv2bkXG3cg",
    authDomain: "procrastination-40ea9.firebaseapp.com",
    databaseURL: "https://procrastination-40ea9-default-rtdb.firebaseio.com",
    projectId: "procrastination-40ea9",
    storageBucket: "procrastination-40ea9.appspot.com",
    messagingSenderId: "991274331897",
    appId: "1:991274331897:web:a25c754b8d1a923a7bfc28"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase.database()