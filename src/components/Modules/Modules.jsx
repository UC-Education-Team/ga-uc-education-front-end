import React from "react";
import styles from "./Module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card, ProgressBar } from "react-bootstrap";

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
          <h1 style={{fontSize:'1.3rem', textAlign:'center', margin:'auto', marginBottom:'5vh'}}>Learning Progress</h1>
          {modules.map((module) => {
            const now = Math.floor(Math.random() * 100)
            return (
              <div className="ProgressItem">
                <h1 className="progressname">{module.name}</h1>
                <div className="ProgressAndLabel">{progressBarFun(now)}  <p className="ProgressLabel"> {now}%</p></div>
               
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
