import { observer } from 'mobx-react-lite';
import { Button, Card, Image, Spinner } from 'react-bootstrap';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';
import { useStore } from '../../../app/stores/store';

const activityImageStyle = {
    filter: 'brightness(30%)'
};

interface Props {
    activity: Activity
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {
    const { activityStore: { updateAttendance, loading, cancelActivityToggle} } = useStore();

    return (
        <Card className="mb-3 me-3">
            <div className='imgContainer'>
                {activity.isCancelled && 
                    <Card.Text style={{position: 'absolute', zIndex: 1000, left: -14, top: 40 }}> Cancelled </Card.Text>
                }
                <Image src={`/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />
                <div className='activityImgText'>
                    <h1 className="display-4">{activity.title}</h1>
                    <p>{format(activity.date!, 'dd MMM yyyy')}</p>
                    <p>Hosted by <strong><Link to={`/profiles/${activity.host?.username}`} className='navLinkPurple'>{activity.host?.displayName}</Link></strong></p>
                </div>
            </div>
            <Card.Body>
                {activity.isHost ? (
                    <>
                        <Button disabled={loading} variant={activity.isCancelled ? 'dark' : 'danger'} onClick={cancelActivityToggle}>
                            {loading ? 
                                <Spinner animation="border" size="sm" /> 
                                : (activity.isCancelled ? "Re-activate Event" : "Cancel Event")}  
                        </Button>
                        <Link to={`/manage/${activity.id}`}>
                            <Button disabled={activity.isCancelled} variant="dark" className="float-end">Manage Event</Button>
                        </Link>
                    </>
                ) : activity.isGoing ? (
                    <Button onClick={updateAttendance} disabled={loading} variant='danger'>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Cancel Attendance'}
                    </Button>
                ) : (
                    <Button disabled={activity.isCancelled || loading} onClick={updateAttendance} variant="dark">
                        {loading ? <Spinner animation="border" size="sm" /> : 'Join Activity'}
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
})