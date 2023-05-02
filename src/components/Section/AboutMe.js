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
    document.title = "About Me";
  }, []);
  return (
    <div style={styles.bodyBackground}>
      <Container>
        <Row className="align-items-center">
          <Col className="p-5">
            <h2 style={styles.align}>About Me</h2>
            <p style={styles.aboutMe}>
              Hello! I'm Josh, an aspiring Web Developer with managerial
              experience throughout the last decade. Working in a team and
              problem solving is not only something I have years of experience
              in, it is something I thoroughly enjoy doing. In April 2023, I
              completed a 12-week coding bootcamp through Denver University
              where I learned the MERN stack. Tackling everyday issues is a joy
              for me, especially within the codebase, and it is something that I
              continually look to grow and develop. I love to learn and look
              forward to furthering my knowledge every day; I am excited to join
              a team that I can come along side and help knock all of their
              projects (and bugs) out of the park!
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
              <li>SQL / Sequelize</li>
              <li>JQuery</li>
              <li>Git Workflow</li>
            </ul>
            <br></br>
            <h2>Skills I have worked with and am continuing to grow in</h2>
            <ul style={styles.ul}>
              <li>React</li>
              <li>GraphQL</li>
              <li>MongoDB / Mongoose</li>
              <li>BootStrap</li>
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
