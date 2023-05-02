import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import portfolioPic from "../../images/portfolio_pic.jpg";

const styles = {
  img: {
    width: "20%",
    marginLeft: "40%",
    border: "5 solid gray",
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "5px 5px #4b697d",
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
    marginTop: "5%",
    marginLeft: "3%",
  },
  align: {
    textAlign: "Center",
    color: "#F4EEE0",
    marginBottom: "5%",
  },
  img: {
    marginTop: "5%",
  },
};

function AboutMe() {
  return (
    <div style={styles.bodyBackground}>
      <Container>
        <div className="vh-100" style={styles.bodyBackground}>
          <section
            className="container position-absolute top-50 start-50 translate-middle"
            style={styles.background}
          >
            <h1 style={styles.align}>A LITTLE BIT ABOUT ME</h1>

            <img
              src={portfolioPic}
              class="rounded mx-auto d-block h-25 w-25 float-end"
              alt="Photo of Developer"
              style={styles.img}
            ></img>

            <div className="d-flex flex-column justify-content-end">
              <br></br>
              <p className="justify-content-start w-50" style={styles.aboutMe}>
                Aspiring Web Developer with years of managerial and problem
                solving experience over numerous jobs. Tackling everyday issues
                is a joy and it is something that I continuoly look to grow and
                develop everyday. Allow me to help your company take the next
                step it needs in this ever-growing digital world.
              </p>
            </div>
            <Container>
              <Row className="d-flex">
                <Col style={styles.text} className="mt-5">
                  <h2>Skills I have and am working to be fluent in</h2>
                  <ul>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col style={styles.text} className="mt-5 ms-2">
                  <h2>Skills I have worked with and am continuing to learn</h2>
                  <ul>
                    <li>React</li>
                    <li>GraphQL</li>
                    <li>MySQL</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;
