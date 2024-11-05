import { SyntheticEvent } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Spinner } from "react-bootstrap";
import { useStore } from '../../app/stores/store';
import { Profile } from '../../app/models/profile';

interface Props {
    profile: Profile;
}

export default observer(function FollowButton({ profile }: Props) {
    const { profileStore, userStore } = useStore();
    const { updateFollowing, loading } = profileStore;

    if (userStore.user?.username === profile.username) return null;

    function handleFollow(e: SyntheticEvent, username: string) {
        e.preventDefault();
        if(profile.following) {
            updateFollowing(username, false)
        } else {
            updateFollowing(username, true);
        }
    }

    return (
        <div style={{ width: '100%' }}>
            {!loading && (
                <Button
                    variant={profile.following ? 'success' : 'outline-success'}
                    onClick={(e) => handleFollow(e, profile.username)}
                    style={{ width: '100%' }}
                >
                    {profile.following ? 'Following' : 'Not Following'}
                </Button>
            )}

            {loading && (
                <Button
                    disabled
                    variant={profile.following ? 'danger' : 'primary'}
                    style={{ width: '100%' }}
                >
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    {profile.following ? ' Unfollowing' : ' Following'}
                </Button>
            )}
        </div>
    );
});
