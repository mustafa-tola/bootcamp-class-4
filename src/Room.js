import React, { useState } from 'react';
import './Room.css'

function App() {
  let [isLit, setLit] = useState(false);
  let [temp,setTemp] = useState(72)
  return (
    <div className={"room " + (isLit ? 'lit':'dark')}>
      This Room is {isLit ? "lit" : "dark"}
      <br />
        Temperature : {temp}
      <br />
      {/* <button onClick={() => setLit(!isLit)}>Toggle Light</button>
      <br />
      <button onClick={() => {
        console.log("Age Button Clicked");
        setAge(++age)
      }}>Increase Age</button> */}
      <button onClick={() => isLit ? "": setLit(!isLit)}>Light ON</button>
      <button onClick={() => isLit ? setLit(!isLit): ""}>Light OFF</button>
      <br />
      <button onClick={() => setTemp(++temp)}>Increase Temperature</button>
      <button onClick={() => setTemp(--temp)}>Decrease Temperature</button>
    </div>
  );
}

export default App;
