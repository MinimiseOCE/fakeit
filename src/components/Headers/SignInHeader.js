import icon from "../assets/icons/icon.png";
import userIcon from "../assets/icons/userIcon.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import downIcon from "../assets/icons/downIcon.svg";
import infoIcon from "../assets/icons/infoIcon.svg";
import loginIcon from "../assets/icons/loginIcon.svg";
import { useState } from "react";

import SignupPopup from "../Popups/SignupPopup";
import SigninPopup from "../Popups/SigninPopup";
import { Link } from "react-router-dom";

function SignInHeader(props) {
  const [isShown, setIsShown] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const signUp = (event) => {
    setIsSignup((current) => !current);
    if (isSignin === true) {
      setIsSignin(false);
    }
  };
  const signIn = (event) => {
    setIsSignin((current) => !current);
    if (isSignup === true) {
      setIsSignup(false);
      setIsShown(false);
    }
    setIsShown(false);
  };
  return (
    <div className="flex gap-2 justify-around items-center w-screen h-14 border-b-2 border-solid shadow-lg bg-navy md:justify-between border-offwhite">
      <Link
        to="/"
        className="flex gap-1 items-center ml-5 hover:cursor-pointer"
      >
        <img src={icon} alt="Logo" className="w-9"></img>
        <h1 className="hidden text-xl text-offwhite font-title md:block">
          fakeit
        </h1>
      </Link>
      <form className="flex items-center h-8 rounded-md border-2 border-opacity-90 border-solid border-offwhite hover:border-opacity-100 md:pr-64 active:border-opacity-100">
        <img className="h-10 opacity-80" src={searchIcon} alt="Search"></img>
        <input
          className="w-16 bg-navy text-offwhite placeholder:text-offwhite placeholder:text-opacity-80 focus:border-offwhite"
          placeholder="Search"
        ></input>
      </form>
      <div className="flex gap-8 items-center mr-8">
        <button
          className="hidden p-1 pr-8 pl-8 rounded-full border-2 md:block text-offwhite border-offwhite hover:bg-offwhite hover:bg-opacity-10"
          onClick={signIn}
        >
          Log In
        </button>
        <button
          className="hidden p-1 pr-8 pl-8 rounded-full md:block text-navy bg-offwhite hover:bg-opacity-90"
          onClick={signUp}
        >
          Sign Up
        </button>
        <div
          className="flex items-center pr-2 w-20 h-10 rounded-lg hover:cursor-pointer hover:border-solid hover:border-2 hover:border-offwhite hover:border-opacity-20"
          onClick={handleClick}
        >
          <img src={userIcon} alt="Profile" className="h-12 invert"></img>
          <img src={downIcon} alt="Profile" className="h-5"></img>
        </div>
      </div>
      {isShown && <Dropdown signIn={signIn} />}
      {isSignin && (
        <SigninPopup
          signIn={signIn}
          signUp={signUp}
          setLoginEmail={props.setLoginEmail}
          setLoginPassword={props.setLoginPassword}
          login={props.login}
        />
      )}
      {isSignup && (
        <SignupPopup
          signUp={signUp}
          setRegisterEmail={props.setRegisterEmail}
          setRegisterPassword={props.setRegisterPassword}
          createUser={props.createUser}
        />
      )}
    </div>
  );
}

function Dropdown(props) {
  return (
    <div className="flex absolute right-4 top-16 flex-col justify-start items-center border-2 border-solid shadow-lg bg-navy border-offwhite text-offwhite">
      <div className="flex items-center pl-4 mt-4 w-48 h-12 hover:cursor-pointer hover:bg-brown hover:bg-opacity-10">
        <img className="w-12 h-12 invert" alt="profile" src={infoIcon}></img>
        <h2>About Fakeit</h2>
      </div>
      <div
        className="flex items-center pl-4 mt-4 mb-4 w-48 h-12 hover:cursor-pointer hover:bg-brown hover:bg-opacity-10"
        onClick={props.signIn}
      >
        <img className="w-12 h-12 invert" alt="profile" src={loginIcon}></img>
        <h2>Sign In</h2>
      </div>
    </div>
  );
}

export default SignInHeader;
