/** @format */

import React from "react";
import MainVideo from "../Pages/MainVideo";
import { Videourls } from "./Videourls";

const Video = () => {
    console.log(Videourls)
  return (
    <div className="video">
      {Videourls.map((val, index) => {
          console.log(val)
        return <MainVideo
         video={val.url}
         btn={val.btn}
         poster={val.poster} />;
      })}
    </div>
  );
};

export default Video;
