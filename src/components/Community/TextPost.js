import React, { useEffect } from "react";
import { useState } from "react";
import upvoteIcon from "../assets/icons/upvoteIcon.svg";
import downvoteIcon from "../assets/icons/downvoteIcon.svg";
import copyIcon from "../assets/icons/copyIcon.svg";
import commentIcon from "../assets/icons/commentIcon.svg";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import Comment from "./Comment";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function TextPost(props) {
  const [body, setBody] = useState("");
  const user = useContext(UserContext);
  const d = props.post.postedOn;
  const c = new Date();
  const x = c.getTime();
  const mins = (x / 1000 - d.seconds) / 60;
  const [timeSince, setTimeSince] = useState("");
  const [comments, setComments] = useState([]);

  async function getComments() {
    const getList = await getDocs(collection(db, "comments"));
    let newArr = [];
    getList.forEach((comment) => {
      newArr.push(comment.data());
    });
    setComments(newArr);
  }

  // Set Comment Data
  const commentData = {
    post: `${props.post.subreddit}/${props.post.dateMade}`,
    bodyText: body,
    dateMade: Date.now(),
    postedOn: new Date(),
    author: user.displayName,
    pfp: user.photoURL,
    subreddit: props.post.subreddit,
    replyto: `${props.post.subreddit}/${props.post.dateMade}`,
  };

  const makeComment = async () => {
    try {
      if (commentData.bodyText.length > 0) {
        await addDoc(collection(db, "comments"), commentData);
        window.location.reload();
      } else console.log("Cannot post empty comments");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (mins > 1440) {
      setTimeSince((mins / 60 / 24).toFixed(0) + " days ago.");
    } else if (mins > 60) {
      setTimeSince((mins / 60).toFixed(0) + " hours ago.");
    } else {
      setTimeSince(mins.toFixed(0) + " minutes ago.");
    }

    getComments();
  }, []);

  return (
    <div className="flex flex-col items-center mt-4 w-screen">
      <div
        className={`flex flex-col w-full rounded-lg border-2 border-opacity-100 border-solid md:w-1/3 border-offwhite bg-navy`}
      >
        <div className={`flex w-full`}>
          <div
            className={`flex flex-col flex-shrink-0 justify-start items-center pt-1 w-8 h-full overflow-clip rounded-l-lg`}
          >
            <img
              className="flex-shrink-0 h-5 rounded hover:invert hover:bg-navy hover:cursor-pointer"
              src={upvoteIcon}
            ></img>
            <p className="text-offwhite">1</p>
            <img
              className="flex-shrink-0 h-5 rounded hover:invert hover:bg-navy hover:cursor-pointer"
              src={downvoteIcon}
            ></img>
          </div>
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex overflow-hidden flex-col justify-start p-2 pl-4 h-full bg-gradient-to-b from-[#19192c] to-navy">
              <p className="text-sm text-offwhite">
                r/{props.post.subreddit + " "}
                <span className="text-xs text-light-blue">
                  posted by {props.post.author} {timeSince}
                </span>
              </p>
              <h2 className="text-lg text-offwhite">
                <b>{props.post.title}</b>
                <br></br>
              </h2>
              <p className="text-sm text-offwhite">{props.post.bodyText}...</p>
            </div>
            <div className="flex gap-4 pl-4 w-full h-8 shrink-0">
              <div className="flex items-center text-xs rounded text-offwhite hover:bg-light-blue">
                <img src={commentIcon} className="h-8"></img>
                <p>0 Comments</p>
              </div>
              <div className="flex items-center text-xs rounded text-offwhite hover:bg-light-blue">
                <img src={copyIcon} className="h-8"></img>
                <p>Copy Link</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 w-full">
          <h2 className="text-offwhite">
            Comment as <i>{user.displayName}</i>
          </h2>
          <div className="flex flex-col justify-center w-full rounded border-2 border-solid border-offwhite">
            <textarea
              type="text"
              className="overflow-scroll w-5/6 h-12 rounded-lg md:h-24 text-offwhite bg-navy"
              onChange={(event) => {
                setBody(event.target.value);
              }}
            ></textarea>
            <div className="flex justify-end items-center w-full h-10 bg-light-blue">
              <button
                className="pr-2 pl-2 mr-8 h-8 rounded-full text-navy bg-offwhite hover:brightness-110"
                onClick={() => makeComment()}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
        <h2 className="ml-4 text-offwhite">Comments</h2>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
}
