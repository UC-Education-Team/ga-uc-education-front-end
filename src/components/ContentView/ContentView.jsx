import Question from '../Modules/Vector.png'
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card, ProgressBar, Carousel } from "react-bootstrap";
import art from './image 3.png' 

const ContentView = ({modules, progressBarFun, ControlledCarousel, lessonSelect, lessonSelection, lessons, moduleSelect}) => {

    const selectedLesson = lessons.filter((lesson) => lesson._id === lessonSelect)
    console.log(`selected Lesson: ${selectedLesson}`)
    

    return (
        <>
            <div className="ModuleView">
                <div className="ModuleContainer">
                <div className="columnmodules">
                    <div className="Help"> <img src={Question} alt="" /> <button className="HelpButton">Feedback</button></div>
                    <div><p>Lesson</p></div>

                    <div className="modulerow">

                    <ModuleCard
                    modules={selectedLesson[0]}
                    handleSelect={lessonSelection}
                    moduleSelect={moduleSelect}
                    />
    
                  </div>
                </div>

                <div className="LessonWindow"><ControlledCarousel /></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor amet suspendisse nisi vulputate mauris ut.</p>

                </div>
                <div style={{width:'20vw', marginRight:'none'}}>
                <Card className="ProgressCard" style={{width:'30vw', marginRight:'none'}}>
                    <h1 style={{ fontSize: '1.3rem', textAlign: 'center', marginTop: '15px' }}>Unlock Communities</h1>
                    <h2 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '4vh', marginTop: '15px' }}>Trivia Facts!</h2>
                    <p style={{display:'flex', fontSize:'20px',}}> Do you know, Unlocking Communities has made a positive impact in over 130,000 peoples lives since 2018? <img src={art} alt="" /> </p>
                </Card>
                </div>
            </div>
        </>
    )
}

export default ContentView
