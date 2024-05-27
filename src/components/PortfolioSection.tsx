import React, { useRef, useState } from 'react'
import "../styles/portfolioSection.css"
import VideoPlayer from './VideoPlayer'
import VideoPlayerPortrait from './VideoPlayerPortrait'
const PortfolioSection = () => {
    const imageData=[
        {
            id:"d1"
        },
        {
            id:"d2"
        },
        {
            id:"d3"
        },
        {
            id:"d4"
        },
        {
            id:"d5"
        },
        {
            id:"d6"
        }
        ,
        {
            id:"d7"
        }
        ,
        {
            id:"d8"
        }

    ]
    const portraitVideoData = [
        {
            id:1
        },
        {
            id:2
        },
        {
            id:3
        },
        {
            id:6
        },
        {
            id:7
        }
        
        
    ]
    const videoData = [
        {
            id:5
        },
        {id:8},
        {
            id:9
        }
    ]
    const [videosBtnActive,setVideosBtnActive]=useState(true)
    const [gfxBtnActive,setGfxBtnActive]=useState(false)
    const GFXBtnRef = useRef<HTMLDivElement>(null)
    const VideosBtnRef = useRef<HTMLDivElement>(null)
    const SelectorRef = useRef<HTMLDivElement>(null)
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
    <div style={{backgroundColor:"white",paddingBottom:"10px"}}>
        <div style={{height:"7vh",backgroundColor:"black",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px"}}>
        </div>
        <div className='section-grid' style={{display:"flex",alignItems:"center"}}>
<div className='portfolio-section-title' style={{margin:"30px 5%",fontSize:"40px",fontWeight:"600",fontFamily:"Poppins",height:"fit-content"}}>Featured Projects
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
        {videosBtnActive&&(<div style={{overflowX:"hidden"}} className='toggle-animation'>
         <div style={{fontSize:"30px",fontWeight:"600",fontFamily:"Poppins",width:"fit-content",margin:"auto",padding:"20px 0px"}}>
            Short Videos
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,270px)",justifyContent:"space-evenly",margin:"0%"}}>
            {portraitVideoData.map((data,i)=>{
return (<div style={{padding:"15px 0px"}}>

        <VideoPlayerPortrait id={data.id}/>
        </div>
        )
            })}
        
       
        
        </div>
         <div style={{fontSize:"30px",fontWeight:"600",fontFamily:"Poppins",width:"fit-content",margin:"auto",padding:"60px 0px 30px 0px"}}>
            Long Videos
        </div>
        <div className='video-grid-2' style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,460px)",justifyContent:"space-evenly"}}>
            {videoData.map((data,i)=>{
return (
        <VideoPlayer id={data.id}/>
        )
            })}
        
       
        </div> 
           
        </div>)}
        {gfxBtnActive&&(<div className='toggle-animation' style={{minHeight:"100vh"}}>
        <div style={{fontSize:"30px",fontWeight:"600",fontFamily:"Poppins",width:"fit-content",margin:"auto",padding:"20px 0px"}}>Graphic Designs</div>
        <div className='video-grid-2' style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,390px)",justifyContent:"space-evenly"}}> 
            {imageData.map((data,i)=>{
return (
        <div>
            <img className='gfx-images' style={{boxShadow:"0 0 3px black",borderRadius:"20px",margin:"20px 0px"}} width={380} src={`https://chocotv-backend.onrender.com/images/${data.id}.jpg`}/>
            </div>
        )
            })}
        
       
        </div> 
            </div>)}
        
        
        
    </div>
  )
}

export default PortfolioSection