import React from "react";
import styles from "./Module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card } from "react-bootstrap";

const Modules = ({ modules, handleSelect, moduleSelect }) => {
  return (
    <>
      <div className='container'>
        <div className='columnmodules'>
            <p>Core Modules</p>
          <div className='modulerow'>
            {modules.map((module) => {
              return (
                  <ModuleCard modules={module} handleSelect={handleSelect} moduleSelect={moduleSelect} id={`${module.name}-key}`}/>
              );
            })}
          </div>
        </div>

        <div className='columlessons'>Core modules {'>'} Lessons</div>

        <div className='columnlearn'>Learn about</div>
      </div>
      <div>
        <Card className="ProgressCard">
        <h1>hello</h1>
        </Card>
        </div>
    </>
  );
};

export default Modules;
