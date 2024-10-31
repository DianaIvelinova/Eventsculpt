import { observer } from 'mobx-react-lite';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { Activity } from '../../../app/models/activity';
import {format} from 'date-fns';
interface Props {
    activity: Activity
}

export default observer(function ActivityDetailedInfo({ activity }: Props) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Row className="align-items-center">
                    <Col xs={1} className="text-center">
                        <Image height={25} width={25} src='/info.svg'/>
                    </Col>
                    <Col>
                        <Card.Text>{activity.description}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="align-items-center">
                    <Col xs={1} className="text-center">
                        <Image height={25} width={25} src='/date.svg'/>
                    </Col>
                    <Col>
                        <Card.Text>{format(activity.date!, 'dd MMM yyyy h:mm aa')}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="align-items-center">
                    <Col xs={1} className="text-center">
                        <Image height={25} width={25} src='/location.svg'/>
                    </Col>
                    <Col>
                        <Card.Text>{activity.venue}, {activity.city}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
})
