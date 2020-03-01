import React, { Component } from "react";
import Typed from "typed.js";

export default class TypedOutput extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 40
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div
        style={{
          width: "400px",
          backgroundColor: "#4c5156",
          padding: `15px 420px 15px 20px`,
          borderRadius: "0.4rem",
          borderLeft: "0.4rem solid #00bfaa",
          fontWeight: "bold",
          fontSize: "18px"
        }}
        className="wrap"
      >
        <div className="type-wrap">
          <span
            style={{ whiteSpace: "pre", color: "white" }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}
