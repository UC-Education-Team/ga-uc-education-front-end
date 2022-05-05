import React from "react";
import { useState } from "react";
import styles from "./Module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card, ProgressBar, Carousel } from "react-bootstrap";
import Question from './Vector.png'

const Modules = ({ modules, handleSelect, moduleSelect, lessons }) => {
  const progressBarFun = (now) =>{
    if(now <40){
      return <ProgressBar variant="danger" now={now} animated className="progressbar" /> 
    } else if (now <70){
      return <ProgressBar variant="warning" now={now} className="progressbar" /> 
    } else if (now <100){
      return <ProgressBar variant="success" now={now} className="progressbar" /> 
    }
  }
  function ControlledCarousel() {
    const [index, setIndex] = useState(1);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={""} prevIcon={""} nextLabel={""}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://media.giphy.com/media/fsnF17BpCvjmE9SMTh/giphy.gif?text=First slide&bg=373940"
            alt="First slide"
            width={100}
            height={500}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://media.giphy.com/media/5xtDarwd6J9RErfp5aU/giphy.gif?text=Second slide&bg=282c34"
            alt="Second slide"
            width={100}
            height={500}
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  carouselimg"
            src="https://media.giphy.com/media/Kf0cxquEm64pu0IuCw/giphy.gif?text=Third slide&bg=20232a"
            alt="Third slide"
            width={100}
            height={500}
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <>
    <div className="ModuleView">
      <div className="ModuleContainer">
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

        {moduleSelect !== "" ?
          <>
          <div className="columlessons"> Core modules {">"} Lessons</div>
          {lessons === [] ?
              <div className="modulerow">
                {lessons.map((lesson) => {
                  return (
                    <ModuleCard
                      modules={lesson}
                      handleSelect={handleSelect}
                      moduleSelect={moduleSelect}
                      id={`${lesson.name}-key}`}
                    />
                  )
                })}
              </div>
          : null }
  
          <div className="columnlearn">Learn about</div>
          </>
        : null }
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
