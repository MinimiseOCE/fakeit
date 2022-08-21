import icon from "../assets/icons/icon.png";
import userIcon from "../assets/icons/userIcon.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import infoIcon from "../assets/icons/infoIcon.svg";
import createIcon from "../assets/icons/createIcon.svg";
import logoutIcon from "../assets/icons/logoutIcon.svg";
import { useState } from "react";
import CreateSubreddit from "../Create/CreateSubreddit";

function Header(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const hidePopup = (event) => {
    setShowPopup((current) => !current);
  };

  const hideCreateSubreddit = (event) => {
    setShowCreate((current) => !current);
  };

  return (
    <div className="flex justify-between items-center h-14 border-b-2 border-solid shadow-lg mw-screen bg-navy border-offwhite">
      <div className="flex gap-1 items-center ml-5 hover:cursor-pointer">
        <img src={icon} alt="Logo" className="h-9"></img>
        <h1 className="hidden text-2xl text-offwhite font-title md:block">
          fakeit
        </h1>
      </div>
      <form className="flex items-center h-8 rounded-md border-2 border-opacity-90 border-solid border-offwhite md:pr-64 hover:border-opacity-100 active:border-opacity-100">
        <img
          className="h-10 opacity-80 md:16"
          src={searchIcon}
          alt="Search"
        ></img>
        <input
          className="w-16 h-6 bg-navy md:w-64 text-offwhite placeholder:text-offwhite placeholder:text-opacity-80 placeholder:text-xs md:placeholder:text-sm focus:border-offwhite"
          placeholder="Search Fakeit"
        ></input>
      </form>
      <div
        className="flex gap-1 items-center p-1 mr-1 md:mr-8 hover:cursor-pointer hover:border-2 hover:border-solid hover:border-offwhite"
        onClick={hidePopup}
      >
        <img
          src={props.user?.photoURL}
          alt="profile pic"
          className="w-8 h-8 rounded-lg"
        ></img>
        <div className="text-offwhite">{props.user?.displayName}</div>
      </div>
      {showPopup && (
        <Dropdown
          logout={props.logout}
          handleClick={hidePopup}
          hideCreateSubreddit={hideCreateSubreddit}
        />
      )}
      {showCreate && (
        <CreateSubreddit
          hide={hideCreateSubreddit}
          username={props.user.displayName}
        />
      )}
    </div>
  );
}

function Dropdown(props) {
  return (
    <div className="flex absolute right-4 top-16 flex-col justify-start items-center border-2 border-solid shadow-lg bg-navy border-offwhite text-offwhite">
      <div className="flex items-center pl-4 mt-4 w-48 h-12 hover:cursor-pointer hover:bg-brown hover:bg-opacity-10">
        <img className="w-12 h-12 invert" alt="profile" src={userIcon}></img>
        <h2>Profile</h2>
      </div>
      <div className="flex items-center pl-4 mt-4 w-48 h-12 hover:cursor-pointer hover:bg-brown hover:bg-opacity-10">
        <img className="w-12 h-12 invert" alt="profile" src={infoIcon}></img>
        <h2>About Fakeit</h2>
      </div>
      <div
        className="flex items-center pl-4 mt-4 w-48 h-12 hover:cursor-pointer hover:bg-brown hover:bg-opacity-10"
        onClick={() => {
          props.hideCreateSubreddit();
          props.handleClick();
        }}
      >
        <img className="w-12 h-12 invert" alt="profile" src={createIcon}></img>
        <h2>Create A Community</h2>
      </div>
      <div
        onClick={() => {
          props.logout();
          props.handleClick();
        }}
        className="flex items-center pl-4 mt-4 mb-4 w-48 h-12 hover:cursor-pointer hover:bg-brown hover:bg-opacity-10"
      >
        <img className="w-12 h-12 invert" alt="profile" src={logoutIcon}></img>
        <h2>Log Out</h2>
      </div>
    </div>
  );
}

export default Header;
