import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBoQiVJ65Lrv_-deCm1bAxJ1-KA7sFsyMU",
    authDomain: "playground-e2cd3.firebaseapp.com",
    projectId: "playground-e2cd3",
    storageBucket: "playground-e2cd3.appspot.com",
    messagingSenderId: "713386247803",
    appId: "1:713386247803:web:4d9f024c83d6e4b86f04de"
  };

// init firebase to connect to the system
firebase.initializeApp(firebaseConfig) 

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp function 
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }