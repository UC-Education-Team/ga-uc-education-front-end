import styles from './ModuleCard.module.css'

import React from 'react'

const ModuleCard = ({modules}) => {
  return (
    <>
      <div className={styles.modulecard}>
        <p>{modules.name}</p>
        <p>{modules.number}</p>
      </div>
    </>
  )
}

export default ModuleCard