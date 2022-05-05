import React from "react";
import { useState } from "react";
import styles from "./Module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card, ProgressBar, Carousel } from "react-bootstrap";
import Question from './Vector.png'
import ContentOne from './content_screen1 .png'
import ContentTwo from './content_screen2 .png'
import ContentThree from './content_screen3 .png'
import ContentFour from './content_screen4 .png'
import ContentView from "../ContentView/ContentView";

const Modules = ({ modules, handleSelect, moduleSelect, lessons, quizzes, lessonSelect, lessonSelection }) => {
  console.log(`lessonSelect: ${lessonSelect}`)
  const progressBarFun = (now) => {
    if (now < 40) {
      return <ProgressBar variant="danger" now={now} animated className="progressbar" />
    } else if (now < 70) {
      return <ProgressBar variant="warning" now={now} className="progressbar" />
    } else if (now < 100) {
      return <ProgressBar variant="success" now={now} className="progressbar" />
    }
  }
  function ControlledCarousel() {
    const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    console.log('Lessons ', lessons)
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={""} prevIcon={""} nextLabel={""}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={ContentOne}
            alt="First slide"
            width={100}
            height={500}

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={ContentTwo}
            alt="Second slide"
            width={100}
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  carouselimg"
            src={ContentThree}
            alt="Third slide"
            width={100}
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  carouselimg"
            src={ContentFour}
            alt="Third slide"
            width={100}
            height={500}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <>
      {lessonSelect === "" ? 
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
                <div className="columlessons"> Lessons</div>
                <button>
                  <Link
                    to="/create-quiz"
                    state={moduleSelect}>
                    Create A Quiz
                  </Link>
                </button>
                <button>
                  <Link
                    to="/create-lesson">
                    Create A Lesson
                  </Link>
                </button>
                {lessons && lessons.length ?
                  <div className="modulerow">
                    {lessons.map((lesson) => {
                      return (
                        <ModuleCard
                          modules={lesson}
                          handleSelect={lessonSelection}
                          moduleSelect={moduleSelect}
                          id={`${lesson.name}-key}`}
                        />
                      )
                    })}
                  </div>
                  : <p id="noLesson">This module does not have any lessons</p>}

                <div className="columnlearn">Quizzes</div>
                {quizzes === [] ?
                  <div className="modulerow">
                    {quizzes.map((quiz) => {
                      return (
                        <ModuleCard
                          modules={quiz}
                          handleSelect={handleSelect}
                          moduleSelect={moduleSelect}
                          id={`${quiz.name}-key}`}
                        />
                      )
                    })}
                  </div>
                  : <p id="noLesson">This module does not have any quizzes</p>}
              </>
              : null}
          </div>
          <div>
            <Card className="ProgressCard">
              <h1 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '4vh', marginTop: '15px' }}>Learning Progress</h1>
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
        : <ContentView modules={modules} progressBarFun={progressBarFun} ControlledCarousel={ControlledCarousel} handleSelect={lessonSelection} lessons={lessons} lessonSelect={lessonSelect}/> }
    </>
  );
};

export default Modules;