import { Card, Button, Spinner, Placeholder } from "react-bootstrap";

export default function ActivityListItemPlaceholder() {
  return (
    <div style={{ marginTop: 25 }}>
      <Card className="mb-3">
        <Card.Body>
          <Placeholder as="div" animation="wave">
            <div
              style={{
                width: "80%",
                height: "20px",
                backgroundColor: "#e0e0e0",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                width: "60%",
                height: "20px",
                backgroundColor: "#e0e0e0",
                marginBottom: "8px",
              }}
            />
          </Placeholder>
          <div
            style={{ width: "40%", height: "15px", backgroundColor: "#e0e0e0" }}
          />
        </Card.Body>
        <Card.Body>
          <Placeholder as="div" animation="wave">
            <div
              style={{
                width: "50%",
                height: "15px",
                backgroundColor: "#e0e0e0",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                width: "30%",
                height: "15px",
                backgroundColor: "#e0e0e0",
              }}
            />
          </Placeholder>
        </Card.Body>
        <Card.Body>
          <div style={{ height: "70px", backgroundColor: "#f0f0f0" }} />
        </Card.Body>

        <Card.Body>
          <Button disabled variant="primary">
            <Spinner animation="border" size="sm" /> View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
