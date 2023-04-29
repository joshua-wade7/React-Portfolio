import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const styles = {
  NavBar: {
    // backgroundColor: "#cccccc",
    background: "#4F4557",
  },
  navText: {
    textDecoration: "none",
    color: "#F4EEE0",
    fontSize: "1.25rem",
    paddingLeft: "2rem",
  },
  navName: {
    textDecoration: "none",
    color: "#F4EEE0",
    fontSize: "2.5rem",
  },
};

function Navbar() {
  return (
    <>
      <Nav
        className="justify-content-center m-auto"
        activeKey="/home"
        style={styles.NavBar}
      >
        <div className="container mt-3">
          <Link to="/aboutme" className="p-4" style={styles.navName}>
            JOSHUA NELSON
          </Link>
        </div>
        <Nav.Item className="p-4">
          <Link to="/projects" className="nav-link" style={styles.navText}>
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item className="p-4">
          <Link to="/contactme" className="nav-link" style={styles.navText}>
            Contact Me
          </Link>
        </Nav.Item>
        <Nav.Item className="p-4 me-5">
          <Link to="/resume" className="nav-link" style={styles.navText}>
            Resume
          </Link>
        </Nav.Item>
        {/* <Nav.Item className="p-4">
          <Link to="disabled" disabled>
            Disabled
          </Link>
        </Nav.Item> */}
      </Nav>
    </>
  );
}

export default Navbar;
