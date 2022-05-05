import React from "react";
import styles from "./Module.module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";

const Modules = ({ modules, handleSelect, moduleSelect }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columnmodules}>
            <p>Core Modules</p>
          <div className={styles.modulerow}>
            {modules.map((module) => {
              return (
                  <ModuleCard modules={module} handleSelect={handleSelect} moduleSelect={moduleSelect} id={`${module.name}-key}`}/>
              );
            })}
          </div>
        </div>

        <div className={styles.columnlessons}>Core modules {'>'} Lessons</div>

        <div className={styles.columnlearn}>Learn about</div>
      </div>
    </>
  );
};

export default Modules;
