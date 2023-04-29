import React from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const styles = {
  bodyBackground: {
    background: "linear-gradient(#393646, #4F4557)",
  },
  textColor: {
    color: "#F4EEE0",
  },
};

function Resume() {
  useEffect(() => {
    document.title = "Resume";
  }, []);
  return (
    <div style={styles.bodyBackground}>
      <Container>
        <Row className="d-flex">
          <Col style={styles.textColor}>
            <h1 className="mt-4">Joshua Nelson</h1>
            <h2>Full-Stack Web Developer</h2>
          </Col>
          <Col className="">
            {/* resume link currently not working - look at later! */}
            <a href="./React-Portfolio/Files/JoshuaResume.pdf" download>
              <Button variant="dark" className="mt-2">
                Download PDF
              </Button>
            </a>
          </Col>
        </Row>

        <Row>
          <h2 className="py-4" style={styles.textColor}>
            Education
          </h2>
          <Col style={styles.textColor}>
            <h3>
              Certificate of Completion, University of Denver - Denver, CO
            </h3>
            <p>Jan 2023 - April 2023</p>
            <ul>
              <li>MERN Full-Stack Web Development</li>
            </ul>
          </Col>
          <Col style={styles.textColor}>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>React (learning)</li>
              <li>Bootstrap</li>
              <li>MySQL</li>
            </ul>
          </Col>
          <Row style={styles.textColor}>
            <Col lg={5}>
              <h3>
                Associate In Arts, State College of Florida - Bradenton, FL
              </h3>
              <p>Aug 2010 - December 2012</p>
              <ul>
                <li>General AA</li>
              </ul>
            </Col>
          </Row>
        </Row>
        <Row style={styles.textColor}>
          <h2 className="py-4">Experience</h2>
          <Col className="p-4">
            <h3>Production Manager</h3>
            <h4>PlayWilder Toys LLC, Colorado Springs CO</h4>
            <p>Sept 2020 - Jan 2023</p>
            <h4>Responsibilities</h4>
            <ul>
              <li>Led production team in manufacturing of all orders</li>
              <li>Hired and trained new employees</li>
              <li>
                Developed current employees to grow and take on greater
                responsibilities
              </li>
              <li>
                Helped to increase efficiency through the creation and
                implementation of Standard Operating Procedures (SOP’s)
              </li>
            </ul>
            {/* <h4>Accomplishments</h4>
              <ul>
                <li>Introduced New Method for Auditing the Draw</li>
              </ul> */}
          </Col>
          <Col className="p-4">
            <h3>Route Manager</h3>
            <h4>InterState Batteries, Sarasota FL</h4>
            <p>July 2018 - Jan 2020</p>
            <h4>Responsibilities</h4>
            <ul>
              <li>
                Managed and provided exceptional customer service to over 100
                accounts
              </li>
              <li>
                Aided each account in the warranty of batteries and helping
                customers understand the process
              </li>
              <li>Stocked accounts with every battery sold since last visit</li>
              {/* <li>
                  Demonstrated discipline in restocking route truck every
                  evening to setup the following day with all necessary
                  batteries and accessories
                </li> */}
            </ul>
            {/* <h4>Accomplishments</h4>
              <ul>
                <li>Recognized by Clients for exemplary Customer Service</li>
                <li>Promoted in 6 Months</li>
              </ul> */}
          </Col>
          <Col className="p-4">
            <h3>Publics Coordinator | Event Services Staff</h3>
            <h4>Glenn Eyrie Conference Center, Colorado Springs CO</h4>
            <p>Aug 2012 - June 2018</p>
            <h4>Responsibilities</h4>
            <ul>
              <li>
                Demonstrated ability to lead multiple teams comprised of 3-4
                individuals in detailed housekeeping and customer service
              </li>
              <li>
                Communicated all applicable details of the day’s work to the
                Manager and supervisory team to best setup the following day for
                success
              </li>
              <li>
                Cross-trained all housekeepers in the maintenance and cleaning
                of the 7 lodges on property
              </li>
              <li>
                Coordinated with event planners to help meet group needs and
                make final tweaks in room arrangements and meeting room setups
              </li>
            </ul>
            {/* <h4>Accomplishments</h4>
              <ul>
                <li>Promoted in 6 Months</li>
              </ul> */}
          </Col>
          {/* <Col className="p-5">
              <h3>Front Desk Agent, Marriott Hotel - Denver, CO</h3>
              <p>May 2019 - Aug 2019</p>
              <h4>Responsibilities</h4>
              <ul>
                <li>Handled Customer Request and Interactions</li>
                <li>Performed Daily Audits on Guest Rooms and Vacancy </li>
              </ul>
              <h4>Accomplishments</h4>
              <ul>
                <li>Recognized by Clients for exemplary Customer Service</li>
              </ul>
            </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
