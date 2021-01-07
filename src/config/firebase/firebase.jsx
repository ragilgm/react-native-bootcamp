import firebase from 'firebase'
import app from 'firebase/app'
import "firebase/firestore"

const config = {
   apiKey: "AIzaSyCwxWnkqBia4Y4C3Zlrm-seidSB9dUrLFM",
   authDomain: "test-2-4bca3.firebaseapp.com",
   projectId: "test-2-4bca3",
   storageBucket: "test-2-4bca3.appspot.com",
   messagingSenderId: "48272315596",
   appId: "1:48272315596:web:11770fd148e5f691619e69"
}

class FIrebaseDb { 
   constructor(props) { 
      this.fireDb = app.initializeApp(config).firestore();
      this.auth = app.auth()
   }


   createfirebaseUser = obj => this.auth.createUserWithEmailAndPassword(obj.email, obj.password)

   signInFirebaseUser = obj => this.auth.signInWithEmailAndPassword(obj.email, obj.password)

   logOutFirebaseUser = () => this.auth.signOut()

}

export default new FIrebaseDb();



