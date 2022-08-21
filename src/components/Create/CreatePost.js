import React, { useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [body, setBody] = useState("");
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getOptions();
  }, []);

  // Generate List of Subreddits to Pick Between
  async function getOptions() {
    const getList = await getDocs(collection(db, "subs"));
    let newArr = [];
    getList.forEach((doc) => {
      newArr.push(doc.id);
    });
    setOptions(newArr);
    setSub(newArr[0]);
  }
  // Set Post Data
  const postData = {
    title: title,
    bodyText: body,
    dateMade: Date.now(),
    postedOn: new Date(),
    author: props.user.displayName,
    subreddit: sub,
  };

  const makePost = async () => {
    try {
      await setDoc(
        doc(db, "posts", title.replace(/\s/g, "-") + postData.dateMade),
        postData
      );
      props.hide();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 z-10 w-screen h-screen">
      <div className="flex sticky justify-center items-center w-screen h-screen backdrop-blur-md backdrop-brightness-50">
        <div className="flex z-20 flex-col justify-between w-64 h-3/6 border-2 border-solid md:w-1/4 md:h-3/4 bg-navy border-offwhite">
          <div className="flex overflow-scroll flex-col gap-4 p-4 md:gap-8">
            <div className="border-b-2 border-solid border-offwhite">
              <h2 className="text-lg md:text-2xl text-offwhite">
                Create a Post
              </h2>
            </div>
            <div>
              <h2 className="text-lg md:text-xl text-offwhite">Title</h2>
              <input
                className="w-full rounded-lg border-2 border-solid md:h-8 text-offwhite bg-navy border-offwhite"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h2 className="text-lg md:text-xl text-offwhite">Text</h2>
              <textarea
                type="text"
                className="overflow-scroll w-full h-24 rounded-lg border-2 border-solid md:h-48 text-offwhite bg-navy border-offwhite"
                onChange={(event) => {
                  setBody(event.target.value);
                }}
              ></textarea>
            </div>
            <div>
              <h2 className="text-lg md:text-xl text-offwhite">Subreddit</h2>
              <select
                id="list"
                className="overflow-scroll w-full rounded-lg border-2 border-solid md:h-8 text-offwhite bg-navy border-offwhite"
                onChange={(event) => {
                  setSub(event.target.value);
                }}
              >
                {options.map((option) => (
                  <React.Fragment key={option}>
                    <option>{option}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-around items-center w-full h-1/6 md:h-1/6 bg-light-blue">
            <button
              className="p-1 pr-4 pl-4 h-10 text-sm rounded-full md:h-16 md:pr-14 md:pl-14 md:text-lg text-navy bg-offwhite hover:bg-opacity-90"
              onClick={props.hide}
            >
              Cancel
            </button>
            <button
              className="p-1 pr-4 pl-4 h-10 text-sm rounded-full border-2 md:h-16 md:pr-14 md:pl-14 md:text-lg text-offwhite border-offwhite hover:bg-offwhite hover:bg-opacity-10"
              onClick={() => makePost()}
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
