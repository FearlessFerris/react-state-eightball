// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import EightBall from './EightBall';
import './App.css';

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
];

const App = () => {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
