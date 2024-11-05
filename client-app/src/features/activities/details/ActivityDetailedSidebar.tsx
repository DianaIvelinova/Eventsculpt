import { Card, ListGroup, Badge, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
}

export default observer(function ActivityDetailedSidebar({ activity: {attendees, host}}: Props) {
    if(!attendees) return null;
    return (
        <>
            <Card className="text-center text-black bg-teal mb-3" style={{ border: 'none' }}>
                <Card.Header as="h5">{attendees.length} {attendees.length === 1 ? 'Person' : 'People'} </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-center">
                        {attendees.map (attendee => (
                            <>
                                <div style={{ position: 'relative' }} key={attendee.username}>
                                 {attendee.username === host?.username &&
                                <Badge
                                    bg="warning"
                                    text="dark"
                                    style={{ position: 'absolute', top: '0', right: '-10px' }}
                                >
                                    Host
                                </Badge>}
                            </div>
                            <Image src={attendee.image || "/cute.png"} roundedCircle width="50" height="50" className="me-3" />
                            <div>
                                <h5 className="mb-0">
                                    <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                                </h5>
                                {attendee.following &&
                                    <small className="text-warning">Following</small>}
                            </div>
                        </>
                        ))}                 
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
});
