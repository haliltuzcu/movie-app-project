import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDELLXzqT6xX_GmKMg1KXmUgefBc4i6YPw",
    authDomain: "movie-app-12a1c.firebaseapp.com",
    projectId: "movie-app-12a1c",
    storageBucket: "movie-app-12a1c.appspot.com",
    messagingSenderId: "1042807157727",
    appId: "1:1042807157727:web:0625171a2b9458096c0a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
