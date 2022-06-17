import React from "react";
import ReactDOM from "react-dom";
import Test from './test';
import './PersonalizeStyles.css'
function App() {

  return (
    <div className="App">
     <Test/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
