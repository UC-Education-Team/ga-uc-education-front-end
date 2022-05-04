import React from "react";
import styles from "./Module.module.css";
import ModuleCard from "../ModuleCard/ModuleCard";

const Modules = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columnmodules}>
          <p>Core Modules</p>
          <ModuleCard />
        </div>

        <div className={styles.columnlessons}>Core modules > Lessons</div>

        <div className={styles.columnlearn}>Learn about</div>
      </div>
    </>
  );
};

export default Modules;
