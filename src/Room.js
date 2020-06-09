import React, { useState } from 'react';

function App() {
  // const state = useState(true);
  let [isLit, setLit] = useState(false);
  let [age, setAge] = useState(23);
  // console.log("State = ",state)
  return (
    <div>
      This Room is {isLit ? "lit" : "dark"}
      <br />
        Age : {age}
      <br />
      <button onClick={() => {
        console.log("Light Button Clicked");
        setLit(!isLit)
      }}>Toggle Light</button>
      <br />
      <button onClick={() => {
        console.log("Age Button Clicked");
        setAge(++age)
      }}>Increase Age</button>
    </div>
  );
}

export default App;
