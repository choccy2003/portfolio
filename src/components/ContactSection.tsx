import React from 'react'
import "../styles/contactSection.css"
import logo from "../logo.svg"
const ContactSection = () => {
  return (
    <>
    
    <div className='section-container' style={{backgroundColor:"white",cursor:"default",paddingBottom:"60px"}}>
    <div className='container' style={{height:"7vh",backgroundColor:"black",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px",marginBottom:"60px"}}>
        </div>
        <div className='contact-section' style={{display:"grid",gridAutoFlow:"column",justifyContent:"space-around",gridGap:"70px"}}>
        <div className='text-section' style={{fontFamily:"Poppins",width:"750px",fontSize:"55px",fontWeight:"600",lineHeight:"70px"}}>
Want to turn your creative visions into life?
<div style={{fontSize:"18px",opacity:"0.7",fontWeight:"500",marginTop:"20px",lineHeight:"25px"}}>
    Contact me for questions, collaborations, conversation, or just saying hello. Thank you for stopping by here.
</div>

<div className='link-grid' style={{display:"flex",gap:"20px",fontWeight:"500",fontSize:"18px"}}>
                <a href='mailto:pixelplus022@gmail.com'>pixelplus022@gmail.com</a>
                <a href='https://www.instagram.com/pixel_plus_studios/'>Instagram</a>
            </div>

        </div>
        <div>
        <img height={270} width={300} src={logo}/>
        </div>
        </div>
    </div>
    </>
  )
}

export default ContactSection
