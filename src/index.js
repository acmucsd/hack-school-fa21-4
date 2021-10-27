import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter'

ReactDOM.render(
  <div>
    <ClassCounter incrementLabel="Increment" decrementLabel="Decrement" />
    <ClassCounter incrementLabel="Increment" decrementLabel="Decrement" />
    <FunctionalCounter incrementLabel="Increment" decrementLabel="Decrement" />
    <FunctionalCounter incrementLabel="Increment" decrementLabel="Decrement" />
  </div>,
  document.getElementById('root')
);
