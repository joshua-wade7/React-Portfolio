import { projects } from "../../Data/ProjectsData";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const styles = {
  bodyBackground: {
    background: "linear-gradient(#393646, #4F4557)",
  },
  headerText: {
    color: "#F4EEE0",
  },
  cardBody: {
    background: "#F4EEE0",
  },
};

function ProjectsTest() {
  useEffect(() => {
    document.title = "Projects Test";
  }, []);
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
              {projects.map(
                ({ image, title, description, repo, technologies }) => (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={image} />

                      <Card.Body style={styles.cardBody}>
                        <Card.Title>{title}</Card.Title>

                        <Card.Text>
                          <strong>Description:</strong> {description} <br />
                          <strong>Technologies:</strong>
                          {technologies}
                        </Card.Text>
                        <Link to={repo} target="_blank" rel="noreferrer">
                          <Button variant="outline-dark" className="col-12">
                            Take A Look!
                          </Button>{" "}
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsTest;
