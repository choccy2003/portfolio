import React, {  useEffect, useRef, useState } from 'react'
import { ImVolumeMedium,ImVolumeMute2 } from "react-icons/im";

import "../styles/videoplayer.css"
const VideoPlayerPortrait = (props) => {
  const [videoDuration,updateVideoDuration]=useState(0)
  const [videoProgressBar,updateVideoProgressBar]=useState(0)
  const [videoReplay,updateVideoReplay]=useState(false)
  const [isMuted,setIsMuted]= useState(false)
  const video=useRef();
  const videoControls=useRef();


useEffect(()=>{
const videoLoader=()=>{
  updateVideoDuration(video.current.currentTime)
  
}
video.current.addEventListener('loadedmetadata',videoLoader)


},[])

const [resource,setResource]=useState('')
useEffect(()=>{
setResource(`https://chocotv-backend.onrender.com/users/video/${props.id}.mp4`);
if (video.current) {
  video.current.load();
  updateVideoProgressBar(0)
  updateVideoReplay(false)
}
},[props.videoId])
  return (
    <>
      <div style={{position:"relative",width:`270px`,height:"480px"}}>
        <video loop ref={video} id='video' style={{width:`270px`,borderRadius:"10px",height:`480px`,boxShadow:"0 0 15px black"}} onMouseLeave={()=>{
          video.current.pause()
        }} onMouseOver={()=>{video.current.play()}} src={resource} key={resource?resource:0} playsInline >
        
        </video>
        <div ref={videoControls} style={{}}>
        
        
          <div style={{position:"relative",bottom:"35px",color:"whitesmoke",display:"flex",pointerEvents:"none"}}>
            <div  style={{marginLeft:"auto",marginRight:"15px"}}>
{isMuted?(<ImVolumeMute2 style={{pointerEvents:"auto"}} onClick={()=>{
          video.current.muted=false;setIsMuted(false)
        }} fontSize={"22px"} />):(<ImVolumeMedium style={{pointerEvents:"auto"}} onClick={()=>{
          video.current.muted=true;setIsMuted(true)
        }} fontSize={"22px"} />)}
            </div>
        
        
        
        </div>
        </div>
       
    </div>
  
    </>
    
  )
}

export default VideoPlayerPortrait