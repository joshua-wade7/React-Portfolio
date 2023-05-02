import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
  Navbar: {
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

function Bar() {
  return (
    <Navbar expand="lg" style={styles.Navbar}>
      <Container>
        <Link to="/aboutme" style={styles.navName}>
          JOSHUA NELSON
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/projects" style={styles.navText}>
              Projects
            </Link>
            <Link className="nav-link" to="/aboutme" style={styles.navText}>
              About Me
            </Link>
            <Link className="nav-link" to="/resume" style={styles.navText}>
              Resume
            </Link>
            {/* <Link className="nav-link" to="">
              Contact Me
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// function Bar() {
//   return (
//     <>
//       <Nav
//         className="justify-content-center m-auto"
//         activeKey="/home"
//         style={styles.NavBar}
//       >
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <div className="container mt-3">
//             <Link to="/aboutme" className="p-4" style={styles.navName}>
//               JOSHUA NELSON
//             </Link>
//           </div>
//           {/* <Nav.Item className="p-4">
//           <Link to="/contactme" className="nav-link" style={styles.navText}>
//             Contact Me
//           </Link>
//         </Nav.Item> */}
//           <Nav.Item className="p-4">
//             <Link to="/projects" className="nav-link" style={styles.navText}>
//               Projects
//             </Link>
//           </Nav.Item>
//           <Nav.Item className="p-4">
//             <Link to="/aboutme" className="nav-link" style={styles.navText}>
//               About Me
//             </Link>
//           </Nav.Item>
//           <Nav.Item className="p-4">
//             <Link to="/resume" className="nav-link" style={styles.navText}>
//               Resume
//             </Link>
//           </Nav.Item>
//           {/* <Nav.Item className="p-4">
//           <Link to="disabled" disabled>
//             Disabled
//           </Link>
//         </Nav.Item> */}
//         </Navbar.Collapse>
//       </Nav>
//     </>
//   );
// }

export default Bar;
