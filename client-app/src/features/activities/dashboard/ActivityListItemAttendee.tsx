import { Image, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { Profile } from '../../../app/models/profile';
import { Link } from 'react-router-dom';
import ProfileCard from '../../profiles/ProfileCard';

interface Props {
    attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({ attendees }: Props) {
    const styles = {
        borderColor: 'red',
        borderWidth: 3 
    };

    const renderTooltip = (attendee: Profile) => (
        <Tooltip id="profile-tooltip">
            <ProfileCard profile={attendee} />
        </Tooltip>
    );

    return (
        <ListGroup horizontal>
            {attendees.map(attendee => (
                <ListGroup.Item as={Link} to={`/profiles/${attendee.username}`} key={attendee.username}>
                    <OverlayTrigger
                        placement="top"
                        overlay={renderTooltip(attendee)}
                    >
                        <Image
                            width={30}
                            height={30}
                            fluid
                            style={attendee.following ? styles : undefined}
                            roundedCircle
                            src={attendee.image || `/user.svg`}
                        />
                    </OverlayTrigger>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});
