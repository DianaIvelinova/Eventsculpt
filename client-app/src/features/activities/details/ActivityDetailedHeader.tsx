import { observer } from 'mobx-react-lite';
import { Button, Card, Image } from 'react-bootstrap';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';

const activityImageStyle = {
    filter: 'brightness(30%)'
};

interface Props {
    activity: Activity
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {

    return (
        <Card className="mb-3">
            <div className='imgContainer'>
                <Image src={`/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />
                <div className='activityImgText'>
                    <h1 className="display-4">{activity.title}</h1>
                    <p>{format(activity.date!, 'dd MMM yyyy')}</p>
                    <p>Hosted by <strong>Bob</strong></p>
                </div>
            </div>
            <Card.Body>
                <Button variant="secondary" className="me-2">Join Activity</Button>
                <Button variant="danger" className="me-2">Cancel attendance</Button>
                <Link to={`/manage/${activity.id}`}>
                    <Button variant="dark" className="float-end">Manage Event</Button>
                </Link>
            </Card.Body>
        </Card>
    )
})