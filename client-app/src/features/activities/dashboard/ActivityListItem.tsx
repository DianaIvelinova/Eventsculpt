import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  return (
    <Card className="mb-4 shadow-sm rounded-lg overflow-hidden">
      {activity.isCancelled && (
        <CardSubtitle className="bg-danger text-white py-1 p-4 text-center">
          Cancelled
        </CardSubtitle>
      )}

      <CardBody className="p-4">
        <Row className="align-items-center">
          <Col xs={3} md={2}>
            <img
              src={activity.host?.image || '/user.svg'}
              alt="Host"
              className="rounded-circle border border-2"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
          </Col>

          <Col>
            <CardTitle as={Link} to={`/activities/${activity.id}`} className="fw-bold" style={{ color: "#5B3B8C", fontSize: "1.2rem" }}>
              {activity.title}
            </CardTitle>
            <CardSubtitle className="text-muted mb-2">
              Hosted by{" "}
              <Link to={`/profiles/${activity.hostUsername}`} style={{ textDecoration: 'none', color: '#5B3B8C' }}>
                {activity.host?.displayName}
              </Link>
            </CardSubtitle>

            {activity.isHost && (
              <CardText>
                <i className="bi bi-person-check"> You are hosting this activity!</i>
              </CardText>
            )}
            {activity.isGoing && !activity.isHost && (
              <CardText>
                <i className="bi bi-check-circle"> You are going to this activity!</i>
              </CardText>
            )}
          </Col>
        </Row>
      </CardBody>

      <CardBody className="bg-light p-3">
        <CardText className="text-muted">
          <i className="bi bi-clock" style={{ marginRight: 5 }}></i>
          {format(activity.date!, 'dd MMM yyyy h:mm aa')}
        </CardText>
        <CardText className="text-muted">
          <i className="bi bi-geo-alt" style={{ marginRight: 5 }}></i>
          {activity.venue}
        </CardText>
      </CardBody>

      <CardBody className="border-top">
        <ActivityListItemAttendee attendees={activity.attendees!} />
      </CardBody>

      <CardBody className="p-4">
        <CardText className="text-muted">{activity.description}</CardText>
        <Link to={`/activities/${activity.id}`}>
          <Button variant="dark" className="w-100"> View Details </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
