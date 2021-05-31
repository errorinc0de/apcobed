import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"
import * as geofirestore from 'geofirestore';

const app = firebase.initializeApp({
  apiKey: "#YOUR_API_KEY_HERE",
  authDomain: "hackon-covidsol.firebaseapp.com",
  projectId: "hackon-covidsol",
  storageBucket: "hackon-covidsol.appspot.com",
  messagingSenderId: "#YOUR_MESSAGE_SENDING_KEY",
  appId: "#YOUR_APP_ID",
  measurementId: "#YOUR_MEASUREMENT_ID"
})

export const auth = app.auth()
export const db = firebase.firestore();
export var provider = new firebase.auth.GoogleAuthProvider();
export const firebasevalue = firebase.firestore.FieldValue;
export const storageRef = firebase.storage().ref();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()
export const GeoFirestore = geofirestore.initializeApp(db);
export const geoRef = firebase.firestore
export default app
