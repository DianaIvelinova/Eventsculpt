import React, { useState } from 'react';
import { useStore } from "../../app/stores/store";
import { Button, Row, Col, Card } from "react-bootstrap";
import ProfileEditForm from "./ProfileEditForm";
import { observer } from 'mobx-react-lite';

const ProfileAbout: React.FC = observer(() => {
    const { profileStore } = useStore();
    const { isCurrentUser, profile } = profileStore;
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <Card className="mb-3">
            <Card.Body>
                <Row className="align-items-center mb-2">
                    <Col>
                        <h4>{`About ${profile?.displayName}`}</h4>
                    </Col>
                    {isCurrentUser && (
                        <Col xs="auto">
                            <Button
                                variant="dark"
                                onClick={() => setEditMode(prev => !prev)}
                            >
                                {editMode ? 'Cancel' : 'Edit Profile'}
                            </Button>
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col>
                        {editMode ? (
                            <ProfileEditForm setEditMode={setEditMode} />
                        ) : (
                            <div style={{ whiteSpace: 'pre-wrap' }}>{!profile?.bio ? <div>No added description ...</div> : profile?.bio}</div>
                        )}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
});

export default ProfileAbout;
