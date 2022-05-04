import Modules from "../../components/Modules/Modules.jsx"
import ModuleCard from '../../components/ModuleCard/ModuleCard.jsx'

import React from 'react'

const ModulesView = ({modules}) => {
  return (
    <>
    <Modules modules={modules} />
    {/* <ModuleCard modules={modules} /> */}
    </>
  )
}

export default ModulesView
