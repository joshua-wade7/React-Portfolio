import { React, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import portfolioPic from "../../images/portfolio_pic.jpg";

const styles = {
  img: {
    // width: "20%",
    // marginLeft: "40%",
    // border: "5 solid gray",
    // margin: "5px",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // boxShadow: "5px 5px #F4EEE0",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    marginTop: "5%",
    marginBottom: "5%",
  },

  section: {
    margin: "20px",
  },
  bodyBackground: {
    background: "linear-gradient(#393646, #4F4557)",
  },
  background: {
    marginTop: "5%",
  },
  text: {
    color: "#F4EEE0",
  },
  aboutMe: {
    color: "#F4EEE0",
    marginTop: "1%",
    fontSize: "1.10rem",
  },
  align: {
    color: "#F4EEE0",
  },
  ul: {
    fontSize: "1.10rem",
  },
};

function AboutMe() {
  useEffect(() => {
    document.title = "AboutMe";
  }, []);
  return (
    <div style={styles.bodyBackground}>
      <Container>
        <Row className="align-items-center">
          <Col className="p-5">
            <h2 style={styles.align}>About Me</h2>
            <p style={styles.aboutMe}>
              Aspiring Web Developer with years of managerial and problem
              solving experience over numerous jobs. I recently completed a 12
              week long coding bootcamp through Denver University. Tackling
              everyday issues is a joy for me, especially within the codebase,
              and it is something that I continuoly look to grow and develop
              everyday. I am very excited to continue to learn all things coding
              and to join a team that I can come along side and help knock their
              projects out of the park!
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column">
        <Row className="align-items-center ms-4">
          <Col lg={7} md={4} style={styles.text}>
            <h2>Skills I have and am working to be fluent in</h2>
            <ul style={styles.ul}>
              <li>JavaScript</li>
              <li>Express</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>
            <br></br>
            <h2>Skills I have worked with and am continuing to learn</h2>
            <ul style={styles.ul}>
              <li>React</li>
              <li>GraphQL</li>
              <li>MySQL</li>
            </ul>
          </Col>
          <Col lg={5} md={8} className="p-3">
            <Image
              rounded
              src={portfolioPic}
              style={styles.img}
              className="hover-shadow"
              alt="Joshua Nelson Headshot"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
