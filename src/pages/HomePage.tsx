import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import SkillSection from '../components/SkillSection'
import PortfolioSection from '../components/PortfolioSection'

const HomePage:React.FC = () => {
    const portfolioSectionRef = useRef<HTMLElement>(null)

  return (
    <>
    <div>
  
       <Navbar portfolioSectionRef={portfolioSectionRef} />
        <HomeSection portfolioSectionRef={portfolioSectionRef}/>
       <SkillSection/>
       <section ref={portfolioSectionRef}>
       <PortfolioSection />
       </section>
     
        <div>
        
    </div> 
    </div>
    
    </>

  )
}

export default HomePage