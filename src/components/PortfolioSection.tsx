import React, { useRef, useState } from 'react'
import "../styles/portfolioSection.css"
import VideoPlayer from './VideoPlayer'
const PortfolioSection = () => {
    const [videosBtnActive,setVideosBtnActive]=useState(true)
    const [gfxBtnActive,setGfxBtnActive]=useState(false)
    const GFXBtnRef = useRef<HTMLDivElement>(null)
    const VideosBtnRef = useRef<HTMLDivElement>(null)
    const SelectorRef = useRef<HTMLDivElement>(null)
    console.log(videosBtnActive,gfxBtnActive)
    const triggerGFXSelect=()=>{
        if(GFXBtnRef.current!=null && SelectorRef.current!=null && VideosBtnRef.current!=null){
            SelectorRef.current.classList.remove('videos-selected')
            GFXBtnRef.current.classList.add('gfx-font-change')
            GFXBtnRef.current.style.color="white"
            SelectorRef.current.classList.add('gfx-selected')
            VideosBtnRef.current.classList.add('gfx-font-change-reverse')
            VideosBtnRef.current.style.color="black"
            GFXBtnRef.current.classList.remove('gfx-font-change-reverse')
           
        }
        setGfxBtnActive(true)
        setVideosBtnActive(false)
    }
    const triggerVideosSelect=()=>{
        if(GFXBtnRef.current!=null && SelectorRef.current!=null && VideosBtnRef.current!=null){
            SelectorRef.current.classList.remove('gfx-selected')
            SelectorRef.current.classList.add('videos-selected')
            GFXBtnRef.current.classList.add('gfx-font-change-reverse')
            VideosBtnRef.current.classList.remove('gfx-font-change-reverse')
            VideosBtnRef.current.classList.add('gfx-font-change')
            GFXBtnRef.current.style.color="black"
            VideosBtnRef.current.style.color="white"
            GFXBtnRef.current.classList.remove('gfx-font-change')
         
            
        }
        setGfxBtnActive(false)
        setVideosBtnActive(true)
        
    }
  return (
    <div style={{height:"100vh",backgroundColor:"white"}}>
        <div style={{height:"7vh",backgroundColor:"black",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px"}}>
        </div>
        <div className='section-grid' style={{display:"flex",alignItems:"center"}}>
<div className='portfolio-section-title' style={{margin:"30px 5%",fontSize:"40px",fontWeight:"600",fontFamily:"Poppins"}}>Featured Projects
        </div>
        <div className='toggle-btn' style={{marginTop:"41px",marginRight:"5%",marginLeft:"auto"}}>
            <div className='project-btn-grid'>
            <div ref={VideosBtnRef} onClick={()=>{if(!videosBtnActive){triggerVideosSelect()}}} className='videos-btn' >Videos</div>
            <div ref={GFXBtnRef} onClick={()=>{if(!gfxBtnActive){triggerGFXSelect()}}} >GFX</div>
        </div>
        <div ref={SelectorRef} className='project-btn-selector'>

        </div>
        </div>
        
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,360px)",justifyContent:"space-evenly",margin:"0 2%"}}>
        <div style={{ aspectRatio: "16 / 9" }}>
        <VideoPlayer/>
        </div>
        <div style={{ aspectRatio: "16 / 9" }}>
        <VideoPlayer/>
        </div>
        <div style={{ aspectRatio: "16 / 9" }}>
        <VideoPlayer/>
        </div>
        <div style={{ aspectRatio: "16 / 9" }}>
        <VideoPlayer/>
        </div>
        </div>
        
        
        
        
    </div>
  )
}

export default PortfolioSection