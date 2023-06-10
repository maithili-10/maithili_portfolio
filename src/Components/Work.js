import "./WorkCardStyles.css"


import React from 'react'

import WorkCard from "./WorkCard";
import ProjectCardData from "./ProjectCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
         <div className="project-container">
       {
        ProjectCardData&&ProjectCardData.map((val,index)=>{
            return(
                <WorkCard key={index} imgsrc={val.imgsrc} text={val.text} title={val.title} view={val.view}/>
            )
        })
       }
         </div>
    </div>
  )
}

export default Work;