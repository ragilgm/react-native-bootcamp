import firebase from 'firebase'
import "firebase/firestore"

const app = firebase.initializeApp({
   apiKey: "AIzaSyDTiTKbKBPL5RPE7-O-ajkVnkwE3ynnrrk",
   authDomain: "crud-react-native-46508.firebaseapp.com",
   projectId: "crud-react-native-46508",
   storageBucket: "crud-react-native-46508.appspot.com",
   messagingSenderId: "755030541525",
   appId: "1:755030541525:web:b2fae387d66c185b6c0e5c",
   measurementId: "G-FGX3PFTWTB"
})

const db = firebase.firestore(app)

const Firebase = firebase;

export const KontakRef = db.collection("Kontak")
export const UserRef = db.collection("Users")

