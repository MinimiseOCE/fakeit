import React, { useEffect } from "react";
import { useState } from "react";
import upvoteIcon from "../assets/icons/upvoteIcon.svg";
import downvoteIcon from "../assets/icons/downvoteIcon.svg";
import copyIcon from "../assets/icons/copyIcon.svg";
import commentIcon from "../assets/icons/commentIcon.svg";

export default function TextPostSnip(props) {
  const d = props.post.postedOn;
  const c = new Date();
  const x = c.getTime();
  const mins = (x / 1000 - d.seconds) / 60;
  const [timeSince, setTimeSince] = useState("");
  const [bodyLength, setBodyLength] = useState("");

  useEffect(() => {
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    if (x === 0) {
      setBodyLength("24");
    } else if (x === 1) {
      setBodyLength("36");
    } else if (x === 2) {
      setBodyLength("48");
    } else {
      setBodyLength("60");
    }

    if (mins > 1440) {
      setTimeSince((mins / 60 / 24).toFixed(0) + " days ago.");
    } else if (mins > 60) {
      setTimeSince((mins / 60).toFixed(0) + " hours ago.");
    } else {
      setTimeSince(mins.toFixed(0) + " minutes ago.");
    }
  }, []);

  return (
    <div
      className={`flex w-screen rounded-lg border-2 border-opacity-90 border-solid h-${bodyLength} hover:cursor-pointer hover:brightness-110 hover:border-opacity-100 md:w-1/4 border-offwhite bg-navy`}
    >
      <div className="flex flex-col flex-shrink-0 justify-start items-center pt-1 w-8 h-full overflow-clip rounded-l-lg bg-light-blue">
        <img
          className="flex-shrink-0 h-5 rounded hover:invert hover:bg-navy"
          src={upvoteIcon}
        ></img>
        <p className="text-offwhite">1</p>
        <img
          className="flex-shrink-0 h-5 rounded hover:invert hover:bg-navy"
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
            {props.post.title}
            <br></br>
          </h2>
          <p className="text-sm text-opacity-40 text-offwhite">
            {props.post.bodyText}...
          </p>
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
  );
}
