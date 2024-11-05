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
        <Card as={Link} to={`/profiles/${profile.username}`} className="text-center">
            <Card.Img variant="top" src={profile.image || '/assets/user.png'} />
            <Card.Body>
                <Card.Title>{profile.displayName}</Card.Title>
                <Card.Text>
                    {truncate(profile.bio)}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div>
                    <i className="fas fa-user" /> {profile.followersCount} Followers
                </div>
            </Card.Footer>
            <FollowButton profile={profile} />
        </Card>
    );
});
