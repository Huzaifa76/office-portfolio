import React from 'react'
import { Videourls } from "./Videourls";

const Videosidebar = ({LoadVideo}) => {
    return (
        <>
        <div className='video_sidebar'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <h3 className='text-white text-center'>Play Videos</h3>
                        <div className="buttons">
                        {Videourls.map((val, index) => {
                             console.log(val)
                    return(

                        <button onClick={() => LoadVideo(val.url, val.poster)} className='btn btn-primary'>{val.btn}</button>
                    ) 
                     })}
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Videosidebar
