import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import {format} from 'date-fns';
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
  return (
    <>
      <Card className="mb-3">
        {activity.isCancelled &&
            <CardSubtitle> Cancelled </CardSubtitle>
        }
        <CardBody>
            <Row>
                <Col xs={2}>
                    <img
                        src={activity.host?.image || '/user.svg'}
                        style={{ marginBottom: 5, width: '50px' }}
                    />
                </Col>
                <Col>
                    <CardTitle as={Link} to={`/activities/${activity.id}`} className="text-primary">
                        {activity.title}
                    </CardTitle>
                    <Card.Subtitle className="text-muted">
                        Hosted by <Link to={`/profiles/${activity.hostUsername}`}> {activity.host?.displayName} </Link>
                    </Card.Subtitle>
                    {activity.isHost && (
                        <CardText>
                            <i> You are hosting this activity! </i>
                        </CardText>
                    )}
                    {activity.isGoing && !activity.isHost && (
                        <CardText>
                            <i> You are going to this activity! </i>
                        </CardText>
                    )}
                </Col>
            </Row>
        </CardBody>

        <CardBody className="border-top">
            <CardText>
                <i className="bi bi-clock"></i> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                <i className="bi bi-geo-alt"></i> {activity.venue}
            </CardText>
        </CardBody>

        <CardBody className="border-top">
            <ActivityListItemAttendee attendees={activity.attendees!}/>
        </CardBody>

        <CardBody className="border-top">
            <CardText>{activity.description}</CardText>
            <Link to={`/activities/${activity.id}`}>
            <Button>
                View
            </Button>
            </Link>
        </CardBody>
    </Card>
    </>
  );
}