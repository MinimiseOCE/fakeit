import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import SignInHeader from "./Headers/SignInHeader";
import { auth } from "../firebase";
import Header from "./Headers/Header"



function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [headerType, switchHeader] = useState(false);

  const [user, setUser] = useState({})

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

    });

    if (!user) {
      switchHeader(false)
    }
    if (user) {
      switchHeader(true)
    }



  }, [user])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }
  const logout = async () => {
    await signOut(auth)
  }




  return (
    <div className="App">
      {!headerType && (<SignInHeader setRegisterEmail={setRegisterEmail} setRegisterPassword={setRegisterPassword} setLoginEmail={setLoginEmail} setLoginPassword={setLoginPassword}
        createUser={register} login={login} />)}
      {headerType && (<Header user={user} logout={logout} />)}
    </div>
  );
}

export default App;
