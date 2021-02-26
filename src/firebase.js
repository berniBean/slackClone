import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDqRp48Fi-2I2QgTXn9Xs-eB6jHe-5sMgE",
    authDomain: "slack-clone-a43ad.firebaseapp.com",
    projectId: "slack-clone-a43ad",
    storageBucket: "slack-clone-a43ad.appspot.com",
    messagingSenderId: "677599239386",
    appId: "1:677599239386:web:2a4bbbc5f24726cbb9d9e3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider}
export default db;

