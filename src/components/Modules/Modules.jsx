import React from "react";
import styles from "./Module.module.css";
import ModuleCard from "../ModuleCard/ModuleCard";

const Modules = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columnmodules}>
          <p>Core Modules</p>
          {console.log('props', props.modules)}
          <ModuleCard />
        </div>

        <div className={styles.columnlessons}>Core modules > Lessons</div>

        <div className={styles.columnlearn}>Learn about</div>
      </div>
    </>
  );
};

export default Modules;
