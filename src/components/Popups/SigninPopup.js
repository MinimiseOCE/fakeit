import React from "react";
import bg from "../assets/images/signUp.jpg";

export default function SigninPopup(props) {
  return (
    <div className="absolute top-0 w-screen h-screen -z-10">
      <div className="flex sticky justify-center items-center w-screen h-screen">
        <div className="flex z-10 gap-2 items-start w-4/6 rounded-lg border-2 border-solid md:w-2/6 bg-offwhite border-navy">
          <img
            src={bg}
            alt="scenery"
            className="hidden w-1/3 h-full border-2 border-solid md:block border-r-light-blue"
          ></img>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 ml-6 md:ml-0">
              <input
                className="pl-4 mt-4 w-32 h-10 rounded-lg border-2 border-solid shadow-lg bg-light-purple md:w-64 border-navy placeholder:text-offwhite placeholder:opacity-80"
                placeholder="Email"
                onChange={(event) => {
                  props.setLoginEmail(event.target.value);
                }}
              ></input>
              <input
                className="pl-4 w-32 h-10 rounded-lg border-2 border-solid shadow-lg bg-light-purple md:w-64 border-navy placeholder:text-offwhite placeholder:opacity-80"
                placeholder="Password"
                type="password"
                onChange={(event) => {
                  props.setLoginPassword(event.target.value);
                }}
              ></input>
              <button
                className="h-10 rounded-full border-2 border-solid shadow-lg bg-navy border-x-light-blue text-offwhite"
                onClick={() => {
                  props.login();
                  props.signIn();
                }}
              >
                Log in!
              </button>
              <p
                onClick={props.signUp}
                className="mb-2 text-center underline cursor-pointer text-light-blue"
              >
                Sign up?
              </p>
            </div>
          </div>
          <button
            className="mt-4 mr-4 w-4 h-4 text-xs rounded-full shadow-lg bg-navy text-offwhite md:text-sm md:h-8 md:w-8"
            onClick={props.signIn}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
