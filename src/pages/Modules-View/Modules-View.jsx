import Modules from "../../components/Modules/Modules.jsx"

import React from 'react'

const ModulesView = ({modules}) => {
  return (
    <>
    <Modules />
    <p>{console.log('module-view', modules)}</p>
    </>
  )
}

export default ModulesView
