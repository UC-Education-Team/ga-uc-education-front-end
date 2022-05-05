import Modules from "../../components/Modules/Modules.jsx"


import React from 'react'

const ModulesView = ({modules, moduleSelect, handleSelect, lessons, quizzes}) => {
  return (
    <>
    <Modules modules={modules} handleSelect={handleSelect} moduleSelect={moduleSelect} lessons={lessons} quizzes={quizzes}/>
    </>
  )
}

export default ModulesView
