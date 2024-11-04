import React, { SyntheticEvent } from 'react';
import { observer } from "mobx-react-lite";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
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
        profile.following ? updateFollowing(username, false) : updateFollowing(username, true);
    }

    return (
        <div className="d-flex">
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="follow-tooltip">{profile.following ? 'Unfollow' : 'Follow'}</Tooltip>}
            >
                <Button
                    onClick={(e) => handleFollow(e, profile.username)}
                    disabled={loading}
                    variant={profile.following ? 'outline-danger' : 'outline-success'}
                    className="flex-fill"
                >
                    {profile.following ? 'Unfollow' : 'Follow'}
                </Button>
            </OverlayTrigger>
            <Button
                variant="primary"
                className="flex-fill ml-2"
                disabled
            >
                {profile.following ? 'Following' : 'Not Following'}
            </Button>
        </div>
    );
});
