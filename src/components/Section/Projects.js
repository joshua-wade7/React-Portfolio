import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import digitalLibrarian from "../../images/digital_librarian.PNG";
import encoded from "../../images/encoded.PNG";
import devLore from "../../images/devLore.PNG";
import socialNetwork from "../../images/social_network_api.PNG";
import tracker from "../../images/employee_tracker.PNG";

import jatePhoto from "../../images/Jate.PNG";

const styles = {
  cardTitle: {
    textDecoration: "none",
    color: "black",
  },
  cardText: {},
  bodyBackground: {
    background: "linear-gradient(#393646, #4F4557)",
  },
  cardBody: {
    background: "#F4EEE0",
  },

  headerText: {
    color: "#F4EEE0",
  },

  img: {
    maxWidth: "75%",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const cardStyle = {
    background: hover ? "boxShadow: 10px 5px 5px #F4EEE0" : null,
  };

  return (
    <div style={styles.bodyBackground}>
      <section>
        <div className="container">
          <div className="row text-center">
            <h2 className="mt-4" style={styles.headerText}>
              Recent Projects:
            </h2>
          </div>
          <div className="d-flex row justify-content-between">
            <Row xs={1} md={2} className="g-4 justify-content-center">
              <Col>
                <Card
                  style={cardStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card.Img variant="top" src={devLore} />

                  <Card.Body style={styles.cardBody}>
                    <Card.Title>Devlore Cafe</Card.Title>

                    <Card.Text>
                      <strong>Description:</strong> A web app that enables the
                      user to be able to create an account to review a
                      prospective restaurants in progress menu. <br />
                      <strong>Technologies:</strong> Handlebars, MySQL,
                      JavaScript, Bootstrap.
                    </Card.Text>
                    <Link
                      to="https://github.com/joshua-wade7/beta-tasters"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline-dark" className="col-12">
                        Take A Look!
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={cardStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card.Img variant="top" src={encoded} />

                  <Card.Body style={styles.cardBody}>
                    <Card.Title>Encoded</Card.Title>

                    <Card.Text>
                      <strong>Description:</strong> Alternative to linkedIn with
                      an emphasis on the tech industry and enabling the user to
                      make deeper connections.
                      <br />
                      <strong>Technologies:</strong> React, Tailwind CSS, Daisy
                      ui, GraphQL, MongoDB
                    </Card.Text>
                    <Link
                      to="https://github.com/therealsweven/magnificent-mustache-men"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline-dark" className="col-12">
                        Take A Look!
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img variant="top" src={digitalLibrarian} />

                  <Card.Body style={styles.cardBody}>
                    <Card.Title>Digital Librarian</Card.Title>

                    <Card.Text>
                      <strong>Description:</strong> Enables users to be able to
                      look up books by author or title and allows them to be
                      able to research information about both. <br />
                      <strong>Technologies:</strong> HTML, CSS, Materialize,
                      JavaScript, JQuery, Google Books API
                    </Card.Text>
                    <Link
                      to="https://github.com/joshua-wade7/book-search"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline-dark" className="col-12">
                        Take A Look!
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={socialNetwork} />

                  <Card.Body style={styles.cardBody}>
                    <Card.Title>Social Network Api</Card.Title>

                    <Card.Text>
                      <strong>Description:</strong> An API that allows users to
                      add, update, and delete friends within a social networking
                      database. <br />
                      <strong>Technologies:</strong> Node, MongoDB, Insomnia,
                      Express
                    </Card.Text>
                    <Link
                      to="https://github.com/joshua-wade7/Social-Network-Api"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline-dark" className="col-12">
                        Take A Look!
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row xs={1} md={2} className="g-4 mb-5">
              <Col>
                <Card>
                  <Card.Img variant="top" src={jatePhoto} />

                  <Card.Body style={styles.cardBody}>
                    <Card.Title>Jate</Card.Title>

                    <Card.Text>
                      <strong>Description:</strong> A web app that enables the
                      user to create notes or code snippets with or without an
                      internet connection. <br />
                      <strong>Technologies: </strong> PWA, Express, HTML
                    </Card.Text>
                    <Link
                      to="https://github.com/joshua-wade7/PWA-Text-Editor"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline-dark" className="col-12">
                        Take A Look!
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={tracker} />

                  <Card.Body style={styles.cardBody}>
                    <Card.Title>Employee Tracker</Card.Title>

                    <Card.Text>
                      <strong>Description:</strong> A back-end application
                      enabling a manager to be able to track their employees
                      based off of department and manager head. <br />
                      <strong>Technologies:</strong> Inquirer, MySQL, Node,
                      JavaScript
                    </Card.Text>
                    <Link
                      to="https://github.com/joshua-wade7/Employee-Tracker"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline-dark" className="col-12">
                        Take A Look!
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
