import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZMMQsw76FTf3GrFauO6ypJVglA-OhzGY",
  authDomain: "proyecto-react-a1373.firebaseapp.com",
  projectId: "proyecto-react-a1373",
  storageBucket: "proyecto-react-a1373.appspot.com",
  messagingSenderId: "637591879882",
  appId: "1:637591879882:web:11540f189b63bdfa8f3433"
};


const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)

