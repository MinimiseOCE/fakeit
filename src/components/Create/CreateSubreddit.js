import React, { useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function CreateSubreddit(props) {
  const [subredditName, setSubredditName] = useState("");
  const [errorText, setError] = useState("");
  const makeSubreddit = async () => {
    const docRef = doc(db, "subs", subData.subName);
    const docSnap = await getDoc(docRef);

    try {
      if (!docSnap.exists()) {
        await setDoc(doc(db, "subs", subData.subName), subData);
        setError("");
        props.handleClick();
      } else {
        setError("Name already taken");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const subData = {
    subName: subredditName,
    dateMade: new Date(),
    author: props.username,
  };

  return (
    <div className="absolute top-0 w-screen h-screen -z-10">
      <div className="flex sticky justify-center items-center w-screen h-screen">
        <div className="flex flex-col justify-between w-64 h-80 border-2 border-solid md:w-1/4 md:h-3/4 bg-navy border-offwhite">
          <div className="flex flex-col gap-4 p-4 md:gap-8">
            <div className="border-b-2 border-solid border-offwhite">
              <h2 className="text-lg md:text-2xl text-offwhite">
                Create a Community
              </h2>
            </div>
            <div>
              <h2 className="text-lg md:text-xl text-offwhite">
                Community Name
              </h2>
              <p className="text-sm md:text-lg text-light-blue">
                Community names cannot be changed
              </p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <p className="text-offwhite md:text-lg">r/</p>
              <input
                className="rounded-lg border-2 border-solid md:h-8 text-offwhite bg-navy md:w-96 border-offwhite"
                onChange={(event) => {
                  setSubredditName(event.target.value);
                }}
              ></input>
            </div>
            <p className="text-red">{errorText}</p>
          </div>
          <div className="flex justify-around items-center w-full h-1/6 md:h-1/6 bg-light-blue">
            <button
              className="p-1 pr-4 pl-4 h-10 text-sm rounded-full md:h-16 md:pr-14 md:pl-14 md:text-lg text-navy bg-offwhite hover:bg-opacity-90"
              onClick={props.handleClick}
            >
              Cancel
            </button>
            <button
              className="p-1 pr-4 pl-4 h-10 text-sm rounded-full border-2 md:h-16 md:pr-14 md:pl-14 md:text-lg text-offwhite border-offwhite hover:bg-offwhite hover:bg-opacity-10"
              onClick={() => makeSubreddit()}
            >
              Create Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
