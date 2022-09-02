import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
  return(
    <div label="about">
      <h2 id={'question'}>What are react hooks?</h2>
      <h4 id={'answer'}>React hooks are special function which allow functions to access state and other features react offors. </h4>
      <h2 id={'question'}>What are some different types of react hooks?</h2>
      <h4 id={'answer'}>The three basic react hooks are useState, useEffect, and useContext. Some more advanced examples are useReducer, useCallback, and useMemo.</h4>
    </div>
  )
}

export default About;