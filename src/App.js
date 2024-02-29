import "./App.css";
// import ReactDOM from "react-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [element, setElement] = useState(null);
  function display() {
    const newElement = React.createElement(
      "div",
      { id: "inputs" },
      React.createElement("input", { id: "name", type: "text" ,placeholder: "NAME"}),
      React.createElement("input", { id: "number", type: "number" , placeholder: "NUMBER"})
    );

    setElement(newElement);
  }

  return (
    <div>
      <div className="navbar">
        <h1>Phone Directory</h1>
      </div>

      <button class='btn btn-default' onClick={display}>ADD</button>
      <div id="root">{element}</div>
    </div>
  );
}

export default App;
