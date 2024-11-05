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
                <Row className="align-items-center">
                    <Col>
                        <h4>{`About ${profile?.displayName}`}</h4>
                    </Col>
                    {isCurrentUser && (
                        <Col xs="auto">
                            <Button
                                variant="outline-primary"
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
                            <span style={{ whiteSpace: 'pre-wrap' }}>{profile?.bio}</span>
                        )}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
});

export default ProfileAbout;
