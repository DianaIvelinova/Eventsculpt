import { Row, Col, Spinner, Card } from 'react-bootstrap';
import ProfileCard from './ProfileCard';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function ProfileFollowings() {
    const { profileStore } = useStore();
    const { profile, followings, loadingFollowings, activeTab } = profileStore;

    return (
        <Card className='p-2'>
            {loadingFollowings ? (
                <Spinner animation="border" />
            ) : (
                <>
                    <Row className="mb-3">
                        <Col>
                            <h2>
                                {activeTab === 3
                                    ? `People following ${profile?.displayName}`
                                    : `People ${profile?.displayName} is following`}
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        {followings.map((profile) => {
                            return (
                                <Col xs={6} md={4} lg={3} key={profile.username} className="mb-3">
                                    <ProfileCard profile={profile} />
                                </Col>
                            );
                        })}
                    </Row>
                </>
            )}
        </Card>
    );
});
