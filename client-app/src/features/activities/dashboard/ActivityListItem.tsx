import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
  return (
    <>
      <Card className="mb-3">
        <Card.Body>
            <Row>
                <Col xs={2}>
                    <img
                        src={'/user.svg'}
                        style={{ marginBottom: 5, width: '50px' }}
                    />
                </Col>
                <Col>
                    <Card.Title as={Link} to={`/activities/${activity.id}`} className="text-primary">
                        {activity.title}
                    </Card.Title>
                    <Card.Subtitle className="text-muted">
                        Hosted by bob {activity.title}
                    </Card.Subtitle>
                </Col>
            </Row>
        </Card.Body>

        {/* Date and Venue Segment */}
        <Card.Body className="border-top">
            <Card.Text>
                <i className="bi bi-clock"></i> {activity.date}
                <i className="bi bi-geo-alt"></i> {activity.venue}
            </Card.Text>
        </Card.Body>

        {/* Attendees Segment */}
        <Card.Body className="border-top">
            attendeees go here
        </Card.Body>

        {/* Description and View Button Segment */}
        <Card.Body className="border-top">
            <Card.Text>{activity.description}</Card.Text>
            <Link to={`/activities/${activity.id}`}>
            <Button>
                View
            </Button>
            </Link>
        </Card.Body>
    </Card>
    </>
  );
}