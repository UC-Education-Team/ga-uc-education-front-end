import Modules from "../../components/Modules/Modules.jsx"


import React from 'react'

const ModulesView = ({modules, moduleSelect, handleSelect}) => {
  return (
    <>
    <Modules modules={modules} handleSelect={handleSelect} moduleSelect={moduleSelect} />
    </>
  )
}

export default ModulesView
