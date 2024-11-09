import { Card } from 'react-bootstrap';
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import FollowButton from './FollowButton';
interface Props {
    profile: Profile;
}

export default observer(function ProfileCard({ profile }: Props) {
    function truncate(str: string | undefined) {
        if (str) {
            return str.length > 40 ? str.substring(0, 37) + '...' : str;
        }
    }

    return (
        <div className='card-wrapper'>
            <Card as={Link} to={`/profiles/${profile.username}`} className="text-center profile-card">
                <Card.Img className='p-2' src={profile.image || '/user.svg'} />
                <Card.Body className='profile-card-body p-0'>
                    <Card.Title className="fw-bold text-decoration-none">{profile.displayName}</Card.Title>
                    <Card.Text>
                        {truncate(profile.bio)}
                    </Card.Text>
                    <Card.Footer className="text-muted">
                        <div className='mb-1'> {profile.followersCount} Followers </div>
                        <FollowButton profile={profile} />
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
});
