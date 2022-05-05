import styles from './ModuleCard.module.css'

import React from 'react'

const ModuleCard = ({modules, handleSelect, moduleSelect}) => {
  return (
    <>
      <div className={moduleSelect === modules._id ? styles.modulecardselect : styles.modulecard} onClick={handleSelect} id={modules._id}>
        <p>{modules.name}</p>
        <p>{modules.number}</p>
      </div>
    </>
  )
}

export default ModuleCard