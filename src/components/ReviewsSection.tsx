import React from 'react'
import StarRatings from 'react-star-ratings'
import "../styles/portfolioSection.css"
const ReviewsSection = () => {
  return (
   <>
   <div style={{height:"7vh",backgroundColor:"white",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px"}}>
        </div>
        <div style={{paddingBottom:"50px"}}>
           <div className='review-section-title' style={{paddingTop:"4%",color:"white",fontWeight:"600",fontFamily:"Poppins",fontSize:"40px",width:"fit-content",margin:"auto"}}>
    What people think about us
    </div> 
    <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"40px",flexWrap:"wrap"}}>
    <div className='review-card' style={{border:"1px solid black",backgroundColor:"white",height:"220px",borderRadius:"15px",width:"400px",minWidth:"400px",margin:"20px"}}>
    <div className='review-content' style={{textAlign:"center",opacity:"0.8",padding:"47px 25px"}}>
    <span style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"18px"}}>"</span> I highly recommend Naman for anyone in need of top-notch video editing. Fantastic job<span style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"18px"}}>"</span>
    </div>
    <div style={{width:"fit-content",margin:"auto"}}>
    <StarRatings starDimension='26px' starSpacing='2px' rating={4.5} starRatedColor='orange' starEmptyColor='#F4F4F4'/>
 
    </div>
    <div style={{textAlign:"center",opacity:"0.8",padding:"10px 0px"}}>
        ~ Omnus Unmo
    </div>
    </div>
    <div className='review-card' style={{border:"1px solid black",backgroundColor:"white",height:"220px",borderRadius:"15px",width:"400px",minWidth:"400px",margin:"20px"}}>
    <div style={{textAlign:"center",opacity:"0.8",padding:"15px 25px"}}>
    <span style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"18px"}}>"</span> Perfect! I needed a video edited in a very short time frame. Naman was very responsive, communication was great, product was exactly what i wanted, delivered very fast, Highly recommend <span style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"18px"}}>"</span>
    </div>
    <div style={{width:"fit-content",margin:"auto"}}>
    <StarRatings starDimension='26px' starSpacing='2px' rating={5} starRatedColor='orange'/>
 
    </div>
    <div style={{textAlign:"center",opacity:"0.8",padding:"10px 0px"}}>
        ~ Andrew
    </div>
    </div>
    
    <div className='review-card' style={{border:"1px solid black",backgroundColor:"white",height:"220px",borderRadius:"15px",width:"400px",minWidth:"400px",margin:"20px"}}>
    <div style={{textAlign:"center",opacity:"0.8",padding:"15px 25px"}}>
    <span style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"18px"}}>"</span> I recently had the pleasure of working with Naman, and I cannot recommend them highly enough. Their exceptional skills and professionalism made a significant impact on my project, and I am thrilled with the results. <span style={{fontFamily:"Poppins",fontWeight:"600",fontSize:"18px"}}>"</span>
    </div>
    <div style={{width:"fit-content",margin:"auto"}}>
    <StarRatings starDimension='26px' starSpacing='2px' rating={4} starRatedColor='orange' starEmptyColor='#F4F4F4'/>
 
    </div>
    <div style={{textAlign:"center",opacity:"0.8",padding:"10px 0px"}}>
        ~ Taha Shabbir
    </div>
    </div>
    </div>
        </div>
    
   </>
  )
}

export default ReviewsSection