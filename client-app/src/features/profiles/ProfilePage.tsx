import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import { useStore } from "../../app/stores/store";
import ProfileContent from "./ProfileContent";

export default observer( function ProfilePage() {
    const { username } = useParams<{username:string}>();
    const { profileStore } = useStore();
    const { loadingProfile, loadProfile, profile, setActiveTab } = profileStore;

    useEffect(() => {
        if (username) loadProfile(username);
        return () => {
            setActiveTab(0);
        };
    }, [loadProfile, username, setActiveTab]);

    if (loadingProfile) return (
        <Container className="text-center mt-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading profile...</span>
            </Spinner>
        </Container>
    );

    if (!profile) return (
        <Container className="mt-5">
            <Alert variant="danger">Problem loading profile</Alert>
        </Container>
    );

    return (
        <Container>
            <Row>
                <Col>
                    <ProfileHeader profile={profile} />
                    <ProfileContent profile={profile} />
                </Col>
            </Row>
        </Container>
    );
});
