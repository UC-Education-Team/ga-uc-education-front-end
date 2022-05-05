import React from "react";
import styles from "./Module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card, ProgressBar } from "react-bootstrap";
import Question from './Vector.png'

const Modules = ({ modules, handleSelect, moduleSelect }) => {
  const progressBarFun = (now) =>{
    if(now <40){
      return <ProgressBar variant="danger" now={now} animated className="progressbar" /> 
    } else if (now <60){
      return <ProgressBar variant="warning" now={now} className="progressbar" /> 
    } else if (now <100){
      return <ProgressBar variant="success" now={now} className="progressbar" /> 
    }
  }
  return (
    <>
    <div className="ModuleView">
      <div className="container">
        <div className="columnmodules">
          <div className="Help"> <img src={Question} alt="" /> <button className="HelpButton">Feedback</button></div>
          <div><p>Core Modules</p></div>
          
          <div className="modulerow">
            {modules.map((module) => {
              return (
                <ModuleCard
                  modules={module}
                  handleSelect={handleSelect}
                  moduleSelect={moduleSelect}
                  id={`${module.name}-key}`}
                />
              );
            })}
          </div>
        </div>

        <div className="columlessons"> Core modules {">"} Lessons</div>

        <div className="columnlearn">Learn about</div>
      </div>
      <div>
        <Card className="ProgressCard">
          <h1 style={{fontSize:'1.3rem', textAlign:'center', marginBottom:'4vh' , marginTop:'15px'}}>Learning Progress</h1>
          {modules.map((module) => {
            const now = Math.floor(Math.random() * 100)
            return (
              <div className="ProgressItem">
                <h1 className="progressname">{module.name}</h1>
                <div className="ProgressAndLabel">{progressBarFun(module.number)}  <p className="ProgressLabel"> {module.number}%</p></div>
               
                <hr />
              </div>
            );
          })}
        </Card>
      </div>
      </div>
    </>
  );
};

export default Modules;
