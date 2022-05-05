import styles from './ModuleCard.module.css'
import React from 'react'
import Book from './bxs_book-alt.png'

const ModuleCard = ({modules, handleSelect, moduleSelect}) => {
  return (
    <>
      <div className={moduleSelect === modules._id ? styles.modulecardselect : styles.modulecard} onClick={handleSelect} id={modules._id}>
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