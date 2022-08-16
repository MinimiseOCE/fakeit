import Header from "./Headers/SignInHeader";
import SignInHeader from "./Headers/SignInHeader"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


firebase.initializeApp({

  apiKey: "AIzaSyC1-AFb1xByzO4N4HKt5MIdMjs1BrKivno",

  authDomain: "fakeit-d9bac.firebaseapp.com",

  projectId: "fakeit-d9bac",

  storageBucket: "fakeit-d9bac.appspot.com",

  messagingSenderId: "642696077907",

  appId: "1:642696077907:web:8ab7a5f3e681a686bc5ca6"

});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <SignInHeader />
    </div>
  );
}

export default App;
