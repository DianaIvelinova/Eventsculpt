import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Tab, Row, Col, Card, Spinner, Nav, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserActivity } from '../../app/models/profile';
import { format } from 'date-fns';
import { useStore } from "../../app/stores/store";

const panes = [
    { eventKey: 'future', title: 'Future Events' },
    { eventKey: 'past', title: 'Past Events' },
    { eventKey: 'hosting', title: 'Hosting' }
];

const ProfileActivities: React.FC = observer(() => {
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
            <Row>
                <Col>
                    <h2>Activities</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Nav variant="tabs">
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
                                            <Card as={Link} to={`/activities/${activity.id}`} key={activity.id} style={{ width: '18rem', margin: '1rem' }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={`/categoryImages/${activity.category}.jpg`}
                                                    style={{ minHeight: 100, objectFit: 'cover' }}
                                                />
                                                <Card.Body>
                                                    <Card.Title className="text-center">{activity.title}</Card.Title>
                                                    <Card.Text className="text-center">
                                                        <div>{format(new Date(activity.date), 'do LLL')}</div>
                                                        <div>{format(new Date(activity.date), 'h:mm a')}</div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </CardGroup>
                                )}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
});

export default ProfileActivities;
