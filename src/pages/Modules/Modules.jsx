import React from "react";
import styles from "./Modules.module.css";

const Modules = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columnmodules}>Core Modules</div>

        <div className={styles.columnlessons}>Core modules > Lessons</div>

        <div className={styles.columnlearn}>Learn about</div>
      </div>
    </>
  );
};

export default Modules;
