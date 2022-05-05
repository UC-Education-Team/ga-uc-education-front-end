import React from "react";
import styles from "./Module.module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";

const Modules = ({ modules }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columnmodules}>
            <p>Core Modules</p>
          <div className={styles.modulerow}>
            {modules.map((module) => {
              return (
                <Link
                  to="/"
                  key={module._id}
                  style={{ textDecoration: "none" }}
                  state={{ module }}
                >
                  <ModuleCard modules={module} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.columnlessons}>Core modules > Lessons</div>

        <div className={styles.columnlearn}>Learn about</div>
      </div>
    </>
  );
};

export default Modules;
