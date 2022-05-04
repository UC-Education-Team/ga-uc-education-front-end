import styles from './ModuleCard.module.css'

import React from 'react'

const ModuleCard = (props) => {
  return (
    <>
      <div className={styles.modulecard}>
        <p>{console.log('yo', props)}</p>
        <p>yo</p>
      </div>
    </>
  )
}

export default ModuleCard