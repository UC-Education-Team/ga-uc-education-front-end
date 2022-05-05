import Question from '../Modules/Vector.png'
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card, ProgressBar, Carousel } from "react-bootstrap";

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
        </>
    )
}

export default ContentView
