import { observer } from 'mobx-react-lite';
import { Card, Row, Col, Image, Badge } from 'react-bootstrap';
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
                                <Card.Title as="h1">{profile.displayName}</Card.Title>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} className="text-center">
                        <Badge pill bg="light" className="me-2"> {profile.followersCount} Followers </Badge>
                        <Badge pill bg="light"> {profile.followingCount} Following </Badge>
                        <div className="mt-3">
                            <FollowButton profile={profile} />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
});