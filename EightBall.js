// EightBall.js
import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setMsg(msg);
    setColor(color);
  };

  return (
    <div className="EightBall" style={{ backgroundColor: color }} onClick={handleClick}>
      <p>{msg}</p>
    </div>
  );
};

export default EightBall;