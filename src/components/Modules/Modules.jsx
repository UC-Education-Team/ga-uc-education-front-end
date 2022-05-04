import React from "react";
import styles from "./Module.module.css";
import ModuleCard from "../ModuleCard/ModuleCard";

const Modules = ({modules}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columnmodules}>
          <p>Core Modules</p>
          {modules.map(module => {
          return <p>{module.name}</p>
          <ModuleCard
          modules={module}
          />
        })}
        </div>

        <div className={styles.columnlessons}>Core modules > Lessons</div>

        <div className={styles.columnlearn}>Learn about</div>
      </div>
    </>
  );
};

export default Modules;
