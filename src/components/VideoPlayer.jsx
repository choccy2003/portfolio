import React, {  useEffect, useRef, useState } from 'react'
import { ImVolumeMedium,ImVolumeMute2 } from "react-icons/im";

import "../styles/videoplayer.css"
const VideoPlayer = (props) => {
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
setResource(`http://192.168.137.1:3001/videos/65d3665727189425cceb2531.mp4`);
if (video.current) {
  video.current.load();
  updateVideoProgressBar(0)
  updateVideoReplay(false)
}
},[props.videoId])
  return (
    <>
      <div style={{position:"relative",width:`360px`,height:"max-content"}}>
        <video loop ref={video} id='video' style={{width:`360px`,borderRadius:"10px"}} onMouseLeave={()=>{
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

export default VideoPlayer