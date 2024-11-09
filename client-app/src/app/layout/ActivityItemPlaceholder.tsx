import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default function ActivityItemPlaceholder() {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex" md={10}>
            <Card className="mb-3 me-3">
              <div className="imgContainer">
                <div
                  className="skeleton-image"
                  style={{
                    backgroundColor: "#e0e0e0",
                    width: "800px",
                    height: "350px",
                  }}
                ></div>
              </div>
              <Card.Body>
                <div
                  className="skeleton-button"
                  style={{
                    backgroundColor: "#e0e0e0",
                    width: "150px",
                    height: "40px",
                  }}
                ></div>
              </Card.Body>
            </Card>
            <Card
              className="text-center text-black bg-teal mb-3"
              style={{
                border: "none",
                backgroundColor: "#e0e0e0",
                width: "200px",
                height: "450px",
              }}
            >
              <Card.Header as="h5">
                <div
                  className="skeleton-text"
                  style={{
                    backgroundColor: "#e0e0e0",
                    width: "80%",
                    height: "20px",
                  }}
                ></div>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <div
                    className="skeleton-image"
                    style={{
                      backgroundColor: "#e0e0e0",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div className="ms-3">
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "70%",
                        height: "20px",
                      }}
                    ></div>
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "50%",
                        height: "15px",
                        marginTop: "5px",
                      }}
                    ></div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={1} className="text-center">
                    <div
                      className="skeleton-image"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </Col>
                  <Col>
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "80%",
                        height: "20px",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={1} className="text-center">
                    <div
                      className="skeleton-image"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </Col>
                  <Col>
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "60%",
                        height: "20px",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={1} className="text-center">
                    <div
                      className="skeleton-image"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </Col>
                  <Col>
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "70%",
                        height: "20px",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={1} className="text-center"></Col>
                  <Col>
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "80%",
                        height: "20px",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={1} className="text-center"></Col>
                  <Col>
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "60%",
                        height: "20px",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={1} className="text-center"></Col>
                  <Col>
                    <div
                      className="skeleton-text"
                      style={{
                        backgroundColor: "#e0e0e0",
                        width: "70%",
                        height: "20px",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
