import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBuePA2JZxe3zk6eyXYsu9EuumxGCYO5gY",
    authDomain: "facebook-clone-99e80.firebaseapp.com",
    projectId: "facebook-clone-99e80",
    storageBucket: "facebook-clone-99e80.appspot.com",
    messagingSenderId: "307836128833",
    appId: "1:307836128833:web:ca8133e47fd3f9f04cc0c0",
    measurementId: "G-FXZ8Y30D2Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;