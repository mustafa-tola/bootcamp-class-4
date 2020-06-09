import React, { useState } from 'react';
import './Room.css'

function App() {
  let [isLit, setLit] = useState(false);
  let [age, setAge] = useState(23);
  return (
    <div className={"room " + (isLit ? 'lit':'dark')}>
      This Room is {isLit ? "lit" : "dark"}
      <br />
        Age : {age}
      <br />
      <button onClick={() => setLit(!isLit)}>Toggle Light</button>
      <br />
      <button onClick={() => {
        console.log("Age Button Clicked");
        setAge(++age)
      }}>Increase Age</button>
    </div>
  );
}

export default App;
