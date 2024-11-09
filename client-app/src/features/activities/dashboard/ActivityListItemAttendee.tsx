import { Image, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { Profile } from '../../../app/models/profile';
import { Link } from 'react-router-dom';
import ProfileCard from '../../profiles/ProfileCard';
import { useState } from 'react';

interface Props {
    attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({ attendees }: Props) {
    const [showOverlay, setShowOverlay] = useState<string | null>(null);

    const handleEnter = (username: string) => {
        setShowOverlay(username);
    };

    const handleExit = () => {
        setShowOverlay(null);
    };
    
    const renderTooltip = (attendee: Profile) => (
        <Tooltip id="profile-tooltip">
            <ProfileCard profile={attendee} />
        </Tooltip>
    );

    return (
        <ListGroup horizontal>
            {attendees.map(attendee => (
                <ListGroup.Item 
                    as={Link}  
                    className='border-0 p-2' 
                    to={`/profiles/${attendee.username}`} 
                    key={attendee.username} 
                    onMouseEnter={() => handleEnter(attendee.username)}
                    onMouseLeave={handleExit}
                    >            
                    <OverlayTrigger
                        placement="top"
                        overlay={renderTooltip(attendee)}
                        show={showOverlay === attendee.username}
                    >
                        <Image
                            width={30}
                            height={30}
                            fluid
                            style={{boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                                border: attendee.following ? '5px solid #5B3B8C' : 'none'}}
                            roundedCircle
                            src={attendee.image || `/user.svg`}
                            className="activity-attendee-img"
                        />
                    </OverlayTrigger>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});
