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
            <Card className="text-center text-white activityDetailedSidebar">
                <Card.Header className='bg-dark' as="h5">
                    {attendees.length} {attendees.length === 1 ? 'Person' : 'People'}
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex flex-column align-items-center">
                        {attendees.map((attendee) => (
                            <div key={attendee.username} className='mb-2' style={{ position: 'relative' }}>
                                {attendee.username === host?.username && (
                                    <Badge
                                        bg="dark"
                                        text="light"
                                        style={{ position: 'absolute', top: '0', right: '0' }}
                                    >
                                        Host
                                    </Badge>
                                )}
                                <Image src={attendee.image || "/user.svg"} roundedCircle width="50" height="50" className="mt-3" />
                                <div>
                                    <h5 className="mb-0">
                                        <Link to={`/profiles/${attendee.username}`} className='navLinkPurple'>
                                            {attendee.displayName}
                                        </Link>
                                    </h5>
                                    {attendee.following && (
                                        <small className="text-dark fw-semibold">Following</small>
                                    )}
                                </div>
                            </div>
                        ))}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
});
