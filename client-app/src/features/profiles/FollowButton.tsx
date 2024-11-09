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
        <>
            {!loading && (
                <Button
                    variant={profile.following ? 'dark' : 'outline-secondary'}
                    onClick={(e) => handleFollow(e, profile.username)}
                >
                    {profile.following ? 'Following' : 'Not Following'}
                </Button>
            )}

            {loading && (
                <Button
                    disabled
                    variant={profile.following ? 'dark' : 'secondary'}
                >
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    {profile.following ? ' Unfollowing' : ' Following'}
                </Button>
            )}
        </>
    );
});
