// import React from "react";

// const styles = {
//   background: {
//     background: "#4F4557",
//   },
// };

// function Footer() {
//   return (
//     <>
//       <footer>
//         <div style={styles.background}>
//           <h2>Get in Touch</h2>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";

const styles = {
  background: {
    background: "#4F4557",
  },
};

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" variant="light" style={styles.background}>
      <Container className="justify-content-center">
        <MDBBtn
          floating
          rippleColor="dark"
          color="link"
          className="text-dark m-1"
          role="button"
          href="https://github.com/joshua-wade7"
          target="_blank"
          rel="noreferrer"
        >
          <MDBIcon
            fab
            icon="github"
            size="3x"
            className="hover-shadow"
            color="light"
          />
        </MDBBtn>
        <MDBBtn
          floating
          rippleColor="dark"
          color="link"
          className="text-dark m-1"
          role="button"
          href="https://linkedin.com/in/jwn777"
          target="_blank"
          rel="noreferrer"
        >
          <MDBIcon
            fab
            icon="linkedin"
            size="3x"
            className="hover-shadow"
            color="light"
          />
        </MDBBtn>
        {/* <MDBIcon
          fab
          icon="github"
          size="3x"
          href="https://github.com/joshua-wade7"
          target="_blank"
          rel="noreferrer"
        /> */}
        {/* <Navbar.Brand href="#" target="_blank" rel="noreferrer">
          linkedIn
        </Navbar.Brand>
        <Navbar.Brand
          href="https://github.com/joshua-wade7"
          target="_blank"
          rel="noreferrer"
          >
          GitHub
        </Navbar.Brand>
        <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
