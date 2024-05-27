import React, { RefObject, useEffect, useState } from 'react'
import "../styles/navbar.css"
interface Props{
    portfolioSectionRef:RefObject<HTMLElement>;
    reviewSectionRef:RefObject<HTMLElement>;
    contactSectionRef:RefObject<HTMLElement>;
    homeSectionRef:RefObject<HTMLElement>;
    activeSection:String;
    
}

const Navbar:React.FC<Props> = (props) => {

  const [disableObserver,setDisableObserver]=useState(false)
  // useEffect(()=>{
  //   console.log(disableObserver)
  //   if(disableObserver){
  //     if(props.activeSection=="homeSection"){
  //     setHomeActive(true);
  //     setResumeActive(false);
  //     setProjectsActive(false);
  //     setContactActive(false);
  //   }
  //   if(props.activeSection=="contactSection"){
  //     setHomeActive(false);
  //     setResumeActive(false);
  //     setProjectsActive(false);
  //     setContactActive(true);
  //   }
  //   if(props.activeSection=="portfolioSection"){
  //     setHomeActive(false);
  //     setResumeActive(false);
  //     setProjectsActive(true);
  //     setContactActive(false);
  //   }
  //   if(props.activeSection=="reviewSection"){
  //     setHomeActive(false);
  //     setResumeActive(true);
  //     setProjectsActive(false);
  //     setContactActive(false);
  //   }
  //   }
  //   setTimeout(()=>{
  //     setDisableObserver(false)
  //   },1000)

  // },[props.activeSection,disableObserver])
  const [homeActive,setHomeActive]=useState(true)
  const [aboutActive,setAboutActive]=useState(false)
  const [servicesActive,setServicesActive]=useState(false)
  const [resumeActive,setResumeActive]=useState(false)
  const [projectsActive,setProjectsActive]=useState(false)
  const [contactActive,setContactActive]=useState(false)
  
  const handleScrollToPortfolio = () => {
    setDisableObserver(true)
    if (props.portfolioSectionRef.current) {
      props.portfolioSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToReviews = () => {
    setDisableObserver(true)
    if (props.reviewSectionRef.current) {
      props.reviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToContact = () => {
    setDisableObserver(true)
    if (props.contactSectionRef.current) {
      props.contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className='navbar' style={{display:"flex",backgroundColor:"black",margin:"auto",borderRadius:"45px",minHeight:"55px",padding:"0 4%",color:"#858585",alignItems:"center",fontWeight:"600",justifyContent:"space-evenly"}}>
<div onClick={()=>{setHomeActive(true);setAboutActive(false);setServicesActive(false);setContactActive(false);setProjectsActive(false);setResumeActive(false);window.scrollTo({ top: 0, behavior: 'smooth' })}}  className={homeActive?"item-selected":"item"}>
    Home
</div>
<div  onClick={()=>{setHomeActive(false);setAboutActive(false);setServicesActive(false);setContactActive(false);setProjectsActive(false);setResumeActive(true);handleScrollToReviews()}} className={resumeActive?"item-selected":"item"}>
    Reviews
</div>
<div className='title' style={{fontSize:"18px",color:"white",cursor:"pointer"}}>
• &nbsp;Pixel Plus&nbsp; •
</div>

<div  onClick={()=>{setHomeActive(false);setAboutActive(false);setServicesActive(false);setContactActive(false);setProjectsActive(true);setResumeActive(false);handleScrollToPortfolio()}} className={projectsActive?"item-selected":"item"}>
    Portfolio
</div>
<div  onClick={()=>{setHomeActive(false);setAboutActive(false);setServicesActive(false);setContactActive(true);setProjectsActive(false);setResumeActive(false);handleScrollToContact()}} className={contactActive?"item-selected":"item"}>
    Contact
</div>
    </div>
    </>
  )
}

export default Navbar