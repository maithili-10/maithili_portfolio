import "./WorkCardStyles.css"
import pro1 from '../images/projectmgmt.jpeg';
import { Button, InputNumber, Image } from 'antd';
import React,{useState} from 'react'
import { NavLink,useParams } from "react-router-dom";

const WorkCard = (props) => {
  const [visible, setVisible] = useState(false);
  const {id}=useParams();
  return (
  
         <div className="project-container">
            <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                  <p> {props.text}</p>
                  <div className="pro-btns">
                    <NavLink onClick={() => setVisible(true)} className="btn">View</NavLink>
                    <NavLink  className="btn">Source</NavLink>
                  </div>
                 
                </div>
            </div>
         </div>
   
  )
}

export default WorkCard