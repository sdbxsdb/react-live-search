import React from "react";
import "./Hello.css";

class Hello extends React.Component {
  render() {
    return (
      <div className="Hello">
        <h1>hello</h1>
        <p>this is slow</p>
      </div>
    );
  }
}

export default Hello;
