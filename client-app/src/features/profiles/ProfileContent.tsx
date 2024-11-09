import { observer } from 'mobx-react-lite';
import { Tab, Nav } from 'react-bootstrap';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import ProfileFollowings from './ProfileFollowings';
import ProfilePhotos from './ProfilePhotos';
import ProfileAbout from './ProfileAbout';
import ProfileActivities from './ProfileActivities';

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({ profile }: Props) {
    const { profileStore } = useStore();

    const panes = [
        { 
            eventKey: 'about', 
            title: 'About', 
            content: <ProfileAbout /> 
        },
        { 
            eventKey: 'photos', 
            title: 'Photos', 
            content: <ProfilePhotos profile={profile} /> 
        },
        { 
            eventKey: 'events', 
            title: 'Events', 
            content: <ProfileActivities /> 
        },
        { 
            eventKey: 'followers', 
            title: 'Followers', 
            content: <ProfileFollowings /> 
        },
        { 
            eventKey: 'following', 
            title: 'Following', 
            content: <ProfileFollowings /> 
        },
    ];

    return (
        <>
            <Tab.Container 
                defaultActiveKey={panes[0].eventKey}
                onSelect={(eventKey) => profileStore.setActiveTab(panes.findIndex(pane => pane.eventKey === eventKey))}
            >
                <Nav variant="pills"  className="mb-3 flex-column profile-content fw-semibold rounded-1 border">
                    {panes.map(pane => (
                        <Nav.Item key={pane.eventKey}>
                            <Nav.Link eventKey={pane.eventKey}>{pane.title}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Tab.Content>
                    {panes.map(pane => (
                        <Tab.Pane eventKey={pane.eventKey} key={pane.eventKey}>
                            {pane.content}
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </Tab.Container>
        </>
    );
});