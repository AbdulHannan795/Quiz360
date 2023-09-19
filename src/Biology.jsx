import React from "react";
import Quiz from "./Quiz";
import biologyData from "./biologyData";
import { NavLink } from "react-router-dom";

const Biology = () => {
  return (
    <>
      <div className="App">
        <h4>Biology</h4>
        <Quiz quizQuestions={biologyData} />
        <div className="button-container">
          <NavLink to="/" className="go-back-button">
            Go Back
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Biology;
