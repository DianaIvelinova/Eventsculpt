import { Card, ListGroup, Badge, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDetailedSidebar() {
    return (
        <>
            <Card className="text-center text-black bg-teal mb-3" style={{ border: 'none' }}>
                <Card.Header as="h5">3 People Going</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-center">
                        <div style={{ position: 'relative' }}>
                            <Image src="/cute.png" roundedCircle width="50" height="50" className="me-3" />
                            <Badge
                                bg="warning"
                                text="dark"
                                style={{ position: 'absolute', top: '0', right: '-10px' }}
                            >
                                Host
                            </Badge>
                        </div>
                        <div>
                            <h5 className="mb-0">
                                <Link to="#">Bob</Link>
                            </h5>
                            <small className="text-warning">Following</small>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                        <Image src="/cute.png" roundedCircle width="50" height="50" className="me-3" />
                        <div>
                            <h5 className="mb-0">
                                <Link to="#">Tom</Link>
                            </h5>
                            <small className="text-warning">Following</small>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                        <Image src="/cute.png" roundedCircle width="50" height="50" className="me-3" />
                        <div>
                            <h5 className="mb-0">
                                <Link to="#">Sally</Link>
                            </h5>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
});
