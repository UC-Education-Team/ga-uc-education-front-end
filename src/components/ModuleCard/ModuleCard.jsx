import styles from './ModuleCard.module.css'
import React from 'react'
import Book from './bxs_book-alt.png'

const ModuleCard = ({modules}) => {
  return (
    <>
      <div className={styles.modulecard}>
        <div className={styles.cardInfo}><p>{modules.name}</p>
       </div>
       <div className={styles.imageDiv}>
       <img src={Book} alt="Book"/>
       </div>
      </div>
      
    </>
  )
}

export default ModuleCard