import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Tab, Card, Spinner, Nav, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserActivity } from '../../app/models/profile';
import { format } from 'date-fns';
import { useStore } from "../../app/stores/store";

const panes = [
    { eventKey: 'future', title: 'Future Events' },
    { eventKey: 'past', title: 'Past Events' },
    { eventKey: 'hosting', title: 'Hosting' }
];

export default observer(function ProfileActivities() {
    const { profileStore } = useStore();
    const {
        loadUserActivities,
        profile,
        loadingActivities,
        userActivities
    } = profileStore;

    useEffect(() => {
        if (profile) {
            loadUserActivities(profile.username);
        }
    }, [loadUserActivities, profile]);

    const handleSelect = (eventKey: string | null) => {
        if (eventKey) {
            loadUserActivities(profile!.username, eventKey);
        }
    };

    return (
        <Tab.Container defaultActiveKey="future" onSelect={handleSelect}>
            <Card className="mb-3">
                <Card.Body>
                    <h2>Activities</h2>
                    <Nav variant="tabs" className="mb-3">
                        {panes.map(pane => (
                            <Nav.Item key={pane.eventKey}>
                                <Nav.Link eventKey={pane.eventKey}>
                                    {pane.title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Tab.Content>
                        {panes.map(pane => (
                            <Tab.Pane eventKey={pane.eventKey} key={pane.eventKey}>
                                {loadingActivities ? (
                                    <Spinner animation="border" />
                                ) : (
                                    <CardGroup>
                                        {userActivities.map((activity: UserActivity) => (
                                            <Card as={Link} to={`/activities/${activity.id}`} key={activity.id} style={{ width: '18rem', margin: '0.5rem', border: '1px solid #80808030'}}>
                                                <Card.Img
                                                    variant="top"
                                                    src={`/categoryImages/${activity.category}.jpg`}
                                                    style={{ minHeight: 100, objectFit: 'cover' }}
                                                />
                                                <Card.Body>
                                                    <Card.Title className="text-center">{activity.title}</Card.Title>
                                                    <div className="text-center">
                                                        <div>{format(new Date(activity.date), 'do LLL')}</div>
                                                        <div>{format(new Date(activity.date), 'h:mm a')}</div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </CardGroup>
                                )}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
});