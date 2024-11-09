import { observer } from 'mobx-react-lite';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { Profile } from '../../app/models/profile';
import FollowButton from './FollowButton';

interface Props {
    profile: Profile
}

export default observer(function ProfileHeader({ profile }: Props) {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col xs="auto">
                                <Image 
                                    roundedCircle 
                                    src={profile.image || '/user.svg'} 
                                    width={80} 
                                    height={80} 
                                />
                            </Col>
                            <Col>
                                <Card.Title as="h1" className="d-flex align-items-center">
                                    <div className='me-2'> {profile.displayName} </div>
                                    <FollowButton profile={profile} />
                                </Card.Title>
                                <div className="mt-2 d-flex">
                                    <div className="me-2"> {profile.followersCount} Followers </div>
                                    <div> {profile.followingCount} Following </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
});
