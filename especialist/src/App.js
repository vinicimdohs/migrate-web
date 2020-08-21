import React from "react";
import Login from "./components/Login";
import Description from "./components/Description";

function App() {
  const {box} = styles;
  return (
    <div>
      <h1 class="center">Especialist</h1>
      <div style={box}>
        <Login />        
      </div>
      <div style={box}>
        <Description />
      </div>
    </div>
  );
}

const styles = {
  box: {
    width: '50%',
    display: 'inline-block',
    float: 'left'
  }
}

export default App;