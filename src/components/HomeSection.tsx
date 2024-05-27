import React, { RefObject, useEffect, useState } from 'react'

import { MdEmail } from "react-icons/md";
import "../styles/navbar.css"
import "../styles/homeSection.css"
interface Props{
    portfolioSectionRef:RefObject<HTMLElement>;
    contactSectionRef:RefObject<HTMLElement>;
    
}
const HomeSection:React.FC<Props> = (props) => {

    const handleScrollToPortfolio = () => {
        if (props.portfolioSectionRef.current) {
          props.portfolioSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handleScrollToContact = () => {

        if (props.contactSectionRef.current) {
          props.contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div style={{backgroundColor:"white",paddingTop:`70px`,borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px",position:"relative",bottom:"60px"}}>
    <div className='home-section' style={{paddingBottom:"40px"}}>
        <div className='text' style={{width:"fit-content",margin:"auto",paddingTop:"3%",opacity:"0.7"}}>
    Hi 👋, I am Naman founder of Pixel Plus
        </div>
        <div className='heading' style={{width:"fit-content",margin:"auto",paddingTop:"1%",fontSize:"60px",fontWeight:"700",fontFamily:"sans-serif"}}>
            Video Editor and
        </div>
        <div className='heading' style={{width:"fit-content",margin:"auto",paddingTop:"0%",fontSize:"60px",fontWeight:"700",fontFamily:"sans-serif"}}>
         Gfx Artist
        </div>
        <div  className='text' style={{width:"340px",margin:"auto",paddingTop:"1%",opacity:"0.7",textAlign:"center"}}>
    We are a team focused on turning your creative visions into reality!
        </div>
        
        <div className='btn-grid' style={{display:"flex", justifyContent:"space-evenly",margin:"auto",padding:"2% 0",width:"400px"}}>
            <div className='project-btn' onClick={handleScrollToPortfolio}><span className='extra-text'>Check my</span> <span style={{fontWeight:"700"}}>Projects🚀</span></div>
            <div onClick={handleScrollToContact} className='contact-btn'>
            <div  style={{position:"relative",top:"3px",display:"inline-block"}}><MdEmail/></div> <span style={{fontWeight:500}}>Email me</span> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeSection