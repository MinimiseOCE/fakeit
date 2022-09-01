import React from "react";
import { useState, useEffect } from "react";

function Comment(props) {
  const d = props.comment.postedOn;
  const c = new Date();
  const x = c.getTime();
  const mins = (x / 1000 - d.seconds) / 60;

  const [timeSince, setTimeSince] = useState("");
  useEffect(() => {
    if (mins > 1440) {
      setTimeSince((mins / 60 / 24).toFixed(0) + " days ago.");
    } else if (mins > 60) {
      setTimeSince((mins / 60).toFixed(0) + " hrs ago.");
    } else {
      setTimeSince(mins.toFixed(0) + " mins ago.");
    }
  }, []);
  return (
    <div className="flex items-center m-4 mb-0 h-full">
      <div className="flex flex-row h-full">
        <img className="h-4" src={props.comment.pfp}></img>
        <div className="w-4 h-full bg-offwhite"></div>
      </div>
      <div className="text-offwhite border-offwhite">
        <h2 className="text-xs opacity-90">
          <b>{props.comment.author} </b> <i> {timeSince}</i>
        </h2>
        <p>{props.comment.bodyText}</p>
      </div>
    </div>
  );
}

export default Comment;
