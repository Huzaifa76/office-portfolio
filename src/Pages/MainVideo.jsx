/** @format */

import React,{useState} from "react";
import Videosidebar from "../videocomponents/Videosidebar";
import "../videocomponents/video.css";
const MainVideo = () => {
    const [video,setvideo] =  React.useState(null)

    const [poster, setPoster] = useState(null)


    const LoadVideo = (url,poster) => {
        setvideo(url)
        setPoster(poster)
    }

  return (
    <>
      <div className="Main_videos">
        <div className="row">
          <div className="col-md-3">
            <Videosidebar LoadVideo={LoadVideo} />
          </div>
          <div className="col-md-6 col-10 mx-auto">
              <div className="url">
              <h3 className="text-black text-center">See Tutorials</h3>
              <video poster={poster} src={video} width="100%" height="400px" controls="controls"  />
              
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MainVideo;
