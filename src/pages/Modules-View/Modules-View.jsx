import Modules from "../../components/Modules/Modules.jsx"


import React from 'react'

const ModulesView = ({modules, moduleSelect, handleSelect, lessons}) => {
  return (
    <>
    <Modules modules={modules} handleSelect={handleSelect} moduleSelect={moduleSelect} lessons={lessons} />
    </>
  )
}

export default ModulesView
