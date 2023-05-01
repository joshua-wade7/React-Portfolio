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
  // heading: {
  //   textAlign: "center",
  //   fontSize: "3rem",
  //   color: "",
  // },
  section: {
    margin: "20px",
  },
  bodyBackground: {
    background: "linear-gradient(#393646, #4F4557)",
  },
  text: {
    color: "#F4EEE0",
  },
};

function AboutMe() {
  return (
    <>
      {/* <Container className="vh-100" style={styles.bodyBackground}> */}
      <div className="vh-100" style={styles.bodyBackground}>
        <section className="container position-absolute top-50 start-50 translate-middle">
          {/* <h2 style={styles.heading}>About Me</h2> */}
          <img
            src={portfolioPic}
            class="rounded mx-auto d-block h-25 w-25 float-end"
            alt="Photo of Developer"
          ></img>
          {/* <img id="img-0" src={profilePic} alt="Photo of Developer" /> */}
          <div className="d-flex flex-row justify-content-start">
            <p className="justify-content-start w-50" style={styles.text}>
              Aspiring Web Developer with years of managerial and problem
              solving experience over numerous jobs. Tackling everyday issues is
              a joy and it is something that I continuoly look to grow and
              develop everyday. Allow me to help your company take the next step
              it needs in this ever-growing digital world.
            </p>
          </div>
          <Container>
            <Row className="d-flex">
              <Col style={styles.text} className="mt-5">
                <h2>Skills</h2>
                <ul>
                  <li>JavaScript</li>
                  <li>GraphQL</li>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>Node</li>
                  <li>MySQL</li>
                </ul>
              </Col>
              <Col style={styles.text} className="mt-5">
                <h2>Learning</h2>
                <ul>
                  <li>React</li>
                  <li></li>
                </ul>
              </Col>
            </Row>
          </Container>
          {/* <div className="d-flex flex-row justify-content-center">
          <div className="card mt-4 w-50">
          <div className="card-body" style={styles.cardBody}>
          Aspiring young Web Developer with years of managerial and problem
          solving experience over numerous jobs. Tackling everyday issues is
              a joy and it is something that I continuoly look to grow and
              develop everyday. Allow me to help your company take the next step
              it needs in this ever-growing digital world.
            </div>
            </div>
          </div> */}
          {/* <p>
          Aspiring young Web Developer with years of managerial and problem
          solving experience over numerous jobs. Tackling everyday issues is a
          joy and it is something that I continuoly look to grow and develop
          everyday. Allow me to help your company take the next step it needs in
          this ever-growing digital world.
        </p> */}
        </section>
      </div>
      {/* </Container> */}
    </>
  );
}

export default AboutMe;
