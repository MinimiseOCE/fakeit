import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import SignInHeader from "./Headers/SignInHeader";
import Header from "./Headers/Header";
import MakeUsername from "./Popups/MakeUsername";
import CreatePost from "./Create/CreatePost";
import imageIcon from "./assets/icons/imageIcon.svg";
import linkIcon from "./assets/icons/linkIcon.svg";
import { Route, Routes } from "react-router-dom";
import TextPostSnip from "./Community/TextPostSnip";
import TextPost from "./Community/TextPost";
import { UserContext } from "../contexts/UserContext";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [hideCreatePost, sethideCreatePost] = useState(false);
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const getList = await getDocs(collection(db, "posts"));
    let newArr = [];
    getList.forEach((post) => {
      newArr.push(post.data());
    });
    setPosts(newArr);
  }

  const hideCreate = (event) => {
    sethideCreatePost((current) => !current);
  };

  const [headerType, switchHeader] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    if (!user) {
      switchHeader(false);
    }
    if (user) {
      switchHeader(true);
    }
    getPosts();
  }, [user]);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      updateProfile(auth.currentUser, {
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/fakeit-d9bac.appspot.com/o/pfp%2Fplaceholder.jpg?alt=media&token=59c7b297-0be1-4ecb-9ca4-ad7aa8fb2842",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const makeUsername = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: displayName });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      {!headerType && (
        <SignInHeader
          setRegisterEmail={setRegisterEmail}
          setRegisterPassword={setRegisterPassword}
          setLoginEmail={setLoginEmail}
          setLoginPassword={setLoginPassword}
          createUser={register}
          login={login}
        />
      )}
      {headerType && <Header user={user} logout={logout} />}
      {user && !user?.displayName && (
        <MakeUsername
          setDisplayName={setDisplayName}
          makeUsername={makeUsername}
        />
      )}
      {hideCreatePost && <CreatePost user={user} hide={hideCreate} />}
      <UserContext.Provider value={user}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col gap-1 items-center mt-4 w-screen -z-10">
                {headerType && (
                  <AddPost pic={user?.photoURL} hideCreate={hideCreate} />
                )}
                {posts.map((post) => (
                  <React.Fragment key={post.id}>
                    <TextPostSnip post={post} />{" "}
                  </React.Fragment>
                ))}
              </div>
            }
          />
          {posts.map((post) => (
            <Route
              path={`/r/${post.subreddit}/${post.dateMade}`}
              key={post.id}
              element={<TextPost post={post} />}
            />
          ))}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

function AddPost(props) {
  return (
    <div className="flex gap-2 items-center p-2 w-screen rounded-md border-2 border-opacity-90 border-solid md:w-1/4 border-offwhite bg-navy">
      <img src={props.pic} className="w-8 h-8 rounded-lg"></img>
      <input
        className="w-96 h-10 rounded-md border-2 border-opacity-90 border-solid bg-navy md:w-96 border-offwhite hover:border-opacity-100 active:border-opacity-100 text-offwhite placeholder:text-offwhite placeholder:text-opacity-80 placeholder:text-sm md:placeholder:text-base focus:border-offwhite hover:cursor-pointer"
        placeholder="  Create Post"
        onClick={props.hideCreate}
      ></input>
      <img
        src={imageIcon}
        className="w-10 h-10 rounded-md hover:cursor-pointer hover:bg-light-blue"
      ></img>
      <img
        src={linkIcon}
        className="w-10 h-10 rounded-md hover:cursor-pointer hover:bg-light-blue"
      ></img>
    </div>
  );
}
