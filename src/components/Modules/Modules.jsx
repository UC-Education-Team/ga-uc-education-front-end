import React from "react";
import styles from "./Module.css";
import { Link } from "react-router-dom";
import ModuleCard from "../ModuleCard/ModuleCard";
import { Card } from "react-bootstrap";

const Modules = ({ modules }) => {
  return (
    <>
      <div className='container'>
        <div className='columnmodules'>
            <p>Core Modules</p>
          <div className='modulerow'>
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

        <div className='columnlessons'>Core modules Lessons</div>

        <div className='columnlearn'>Learn about</div>
      </div>
      <div>
        <Card className="ProgressCard">
        <h1>hello</h1>
        </Card>
        </div>
    </>
  );
};

export default Modules;
