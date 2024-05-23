import React from 'react'
import "../styles/homeSection.css"

const SkillSection = () => {
    const arr = [1,2,3]
  return (
    <div style={{marginTop:"30px"}}>
        <div className='skill-section-title' style={{width:"fit-content",margin:"auto",paddingTop:"0%",fontSize:"40px",fontWeight:"600",fontFamily:"Poppins",color:"white"}}>
          What can I do for you  
        </div>
        <div className='skill-card-grid' style={{display:"flex",color:"white",margin:"auto",flexWrap:"wrap",gap:"7%",width:"874px",paddingTop:"40px",paddingBottom:"50px"}}>
        <div style={{backgroundColor:"white",color:"black",height:"255px",width:"250px",borderRadius:"20px",cursor:"pointer"}}>
       <div style={{borderRadius:"100%",height:"80px",width:"80px",backgroundColor:"#c4c4c4",margin:"auto",marginTop:"25px"}}>
       <div style={{display:"grid",placeItems:"center",height:"80px",alignItems:"center"}}>
       <svg fill="#FFFF" width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 10 2 L 10 9 L 12 9 L 12 4 L 14 4 L 14 5 L 16 5 L 16 4 L 25 4 L 25 5 L 27 5 L 27 4 L 29 4 L 29 16 L 27 16 L 27 15 L 25 15 L 25 18 L 31 18 L 31 2 L 10 2 z M 14 7 L 14 9 L 16 9 L 16 7 L 14 7 z M 25 7 L 25 9 L 27 9 L 27 7 L 25 7 z M 2 11 L 2 29 L 23 29 L 23 11 L 2 11 z M 25 11 L 25 13 L 27 13 L 27 11 L 25 11 z M 4 13 L 21 13 L 21 22.78125 L 18.40625 20.1875 L 17.6875 19.5 L 14.875 22.3125 L 10.59375 18 L 9.90625 17.28125 L 4 23.1875 L 4 13 z M 15.5 15 C 14.671 15 14 15.671 14 16.5 C 14 17.329 14.671 18 15.5 18 C 16.329 18 17 17.329 17 16.5 C 17 15.671 16.329 15 15.5 15 z M 9.9042969 20.125 L 14.904297 25.125 L 15.59375 24.40625 L 17.6875 22.3125 L 21 25.625 L 21 27 L 4 27 L 4 26.03125 L 9.9042969 20.125 z"/></svg>
       </div>
        </div>
        <div style={{fontSize:"28px",fontWeight:"600",width:"fit-content",margin:"auto",opacity:"0.8",marginTop:"10px"}}>
        Video Editing
       </div>
       <div style={{width:"240px",fontSize:"15px",opacity:"0.6",margin:"auto",marginTop:"10px",textAlign:"center"}}>
       Transform raw footage into polished, captivating videos. Perfect for social media, projects, and etc. 
       </div>
       

    </div>
    <div style={{backgroundColor:"white",color:"black",height:"255px",width:"250px",borderRadius:"20px",cursor:"pointer"}}>
       <div style={{borderRadius:"100%",height:"80px",width:"80px",backgroundColor:"#c4c4c4",margin:"auto",marginTop:"25px"}}>
       <div style={{display:"grid",placeItems:"center",height:"80px",alignItems:"center"}}>
       <svg width="35px" height="35px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.685 1.46c.1-.099.2-.198.2-.298.184-.276.113-.551.023-.905l-.024-.092c-.3-.2-.6-.2-.899-.1-.05.05-.1.075-.15.1-.05.025-.1.05-.15.1L12.19 4.152c-2.598 1.495-4.596 3.688-5.995 6.28 1.499.598 2.798 1.893 3.298 3.488a16.485 16.485 0 006.295-5.98l3.897-6.48zM3.997 20c2.198 0 3.997-1.794 3.997-3.987s-1.799-3.987-3.997-3.987S0 13.82 0 16.013V20h3.997z" fill="#FFFF"/></svg>
       </div>

        </div>
        <div style={{fontSize:"28px",fontWeight:"600",width:"fit-content",margin:"auto",opacity:"0.8",marginTop:"10px"}}>
        GFX Design
       </div>
       <div style={{width:"fit-content",fontSize:"15px",opacity:"0.6",margin:"auto",marginTop:"10px",textAlign:"center"}}>
       Elevate your brand with stunning logos, social media graphics, and marketing materials designed to impress.
       </div>
      
    </div>
    <div style={{backgroundColor:"white",color:"black",height:"255px",width:"250px",borderRadius:"20px",cursor:"pointer"}}>
       <div style={{borderRadius:"100%",height:"80px",width:"80px",backgroundColor:"#c4c4c4",margin:"auto",marginTop:"25px"}}>
       <div style={{display:"grid",placeItems:"center",height:"80px",alignItems:"center"}}>
       <svg fill="#FFFF" width="45px" height="45px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,11H12a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V12A1,1,0,0,0,22,11ZM21,21H13V13h8ZM2,13a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H12a1,1,0,0,1,0,2H3v9A1,1,0,0,1,2,13ZM17,6a1,1,0,0,1,0,2H8v9a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z"/></svg>
       </div>

        </div>
        <div style={{fontSize:"28px",fontWeight:"600",width:"fit-content",margin:"auto",opacity:"0.8",marginTop:"10px"}}>
        2D Animation
       </div>
       <div style={{width:"240px",fontSize:"15px",opacity:"0.6",margin:"auto",marginTop:"10px",textAlign:"center"}}>
       Bring your ideas to life with dynamic animations. Ideal for videos, advertisements, and educational content.
       </div>
    </div>
        </div>
    </div>
  )
}

export default SkillSection