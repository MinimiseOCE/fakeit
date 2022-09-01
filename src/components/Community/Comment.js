import React from "react";
import { useState, useEffect } from "react";
import commentIcon from "../assets/icons/commentIcon.svg";

function Comment(props) {
  const [hideReply, sethideReply] = useState(false);

  const openReply = (event) => {
    sethideReply((current) => !current);
  };
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
    <div className="flex m-4 mb-0 h-full">
      <div className="flex flex-row h-full">
        <img className="w-8 rounded-full" src={props.comment.pfp}></img>
        <div className="w-4 h-full bg-offwhite"></div>
      </div>
      <div className="w-full text-offwhite border-offwhite">
        <h2 className="text-xs opacity-90">
          <b>{props.comment.author} </b> <i> {timeSince}</i>
        </h2>
        <p>{props.comment.bodyText}</p>
        <div
          className="flex justify-center items-center w-24 rounded-lg hover:cursor-pointer hover:bg-opacity-10 hover:bg-brown"
          onClick={openReply}
        >
          <img src={commentIcon} className="h-8"></img>
          <p>Reply</p>
        </div>
        {hideReply && (
          <div className="flex flex-col justify-center w-full rounded border-2 border-solid border-offwhite">
            <textarea
              type="text"
              className="overflow-scroll w-5/6 h-12 rounded-lg md:h-24 text-offwhite bg-navy"
            ></textarea>
            <div className="flex justify-end items-center w-full h-10 bg-light-blue">
              <button className="pr-2 pl-2 mr-8 h-8 rounded-full text-navy bg-offwhite hover:brightness-110">
                Comment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
