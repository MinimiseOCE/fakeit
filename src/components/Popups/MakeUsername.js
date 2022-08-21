import React from "react";

export default function MakeUsername(props) {
  return (
    <div className="absolute top-0 z-10 w-screen h-screen">
      <div className="flex sticky justify-center items-center w-screen h-screen backdrop-blur-md backdrop-brightness-50">
        <div className="flex z-10 gap-2 justify-around items-center w-4/6 h-3/6 rounded-lg border-2 border-solid md:w-1/6 md:h-2/6 bg-offwhite border-navy">
          <div className="flex flex-col gap-4 justify-between items-center">
            <input
              className="pl-4 mt-4 w-48 h-10 rounded-lg border-2 border-solid shadow-lg bg-light-purple md:w-64 border-navy placeholder:text-offwhite placeholder:opacity-80"
              placeholder="Username"
              onChange={(event) => {
                props.setDisplayName(event.target.value);
              }}
            ></input>
            <button
              className="w-48 h-10 rounded-full border-2 border-solid shadow-lg bg-navy border-x-light-blue text-offwhite md:w-64"
              onClick={props.makeUsername}
            >
              Create Username
            </button>
            <p className="mb-2 text-center text-navy">
              Select a cool username (⌐■_■){" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
