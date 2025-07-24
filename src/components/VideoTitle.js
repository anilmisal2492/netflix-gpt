import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="py-24">
      <div className="p-3">
        <h1 className="text-3xl my-6 ">{title}</h1>
        <p className="w-6/12">{description}</p>
      </div>
      <div className="p-3 flex gap-3">
        <button className="bg-slate-300 hover:bg-slate-500 p-3 w-24 rounded-lg">Play</button>
        <button className="bg-slate-300 hover:bg-slate-500 p-3 w-24 rounded-lg">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
