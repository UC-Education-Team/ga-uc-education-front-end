import styles from './ModuleCard.module.css'

import React from 'react'

const ModuleCard = ({modules}) => {
  return (
    <>
      <div className={styles.modulecard}>
        <p>{console.log('yo', modules)}</p>
        <p>{modules}</p>
      </div>
    </>
  )
}

export default ModuleCard