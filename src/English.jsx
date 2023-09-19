import React from "react";
import engData from "./engData";
import Quiz from "./Quiz";
import { NavLink } from "react-router-dom";

const English = () => {
  return (
    <>
      <div className="App">
        <h4>English</h4>
        <Quiz quizQuestions={engData} />
        
        <div className="button-container">
        <NavLink to="/" className="go-back-button">
          Go Back
        </NavLink>
      </div>
        </div>
     
    </>
  );
};

export default English;
