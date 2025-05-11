import React, { Component } from "react";

class Footer extends Component {
  render() {
    const footerStyle = {
      backgroundColor: "#222",
      color: "white",
      textAlign: "center",
      padding: "5px",
      position: "relative",
      bottom: 0,
      width: "100%",
    };

    return (
      <footer style={footerStyle}>
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
