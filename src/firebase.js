import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBmg9Dn2a-9IPatKcc5XVK6FRZxeAy_Nxo",
    authDomain: "slack-clone-ab0e8.firebaseapp.com",
    projectId: "slack-clone-ab0e8",
    storageBucket: "slack-clone-ab0e8.appspot.com",
    messagingSenderId: "81635607284",
    appId: "1:81635607284:web:906ef5a7130e9e1e8254a1",
    measurementId: "G-PEGN98Y8HJ"
  };

  {/*connected to database */}
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  {/* authentication */}
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth , provider};
  export default db;
