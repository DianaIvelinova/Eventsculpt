import { observer } from 'mobx-react-lite';
import { Card, Form, Button, Image } from 'react-bootstrap';

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Card className="text-center text-black bg-white" style={{ border: 'none' }}>
                <Card.Header as="h5">Chat about this event</Card.Header>
            </Card>
            <Card>
                <Card.Body>
                    <div className="d-flex mb-3">
                        <Image src="/cute.png" roundedCircle width="40" height="40" className="me-3" />
                        <div>
                            <strong>Matt</strong>
                            <div className="text-muted small">Today at 5:42PM</div>
                            <div>How artistic!</div>
                            <Button variant="link" size="sm" className="p-0 text-decoration-none">
                                Reply
                            </Button>
                        </div>
                    </div>

                    <div className="d-flex mb-3">
                        <Image src="/cute.png" roundedCircle width="40" height="40" className="me-3" />
                        <div>
                            <strong>Joe Henderson</strong>
                            <div className="text-muted small">5 days ago</div>
                            <div>Dude, this is awesome. Thanks so much</div>
                            <Button variant="link" size="sm" className="p-0 text-decoration-none">
                                Reply
                            </Button>
                        </div>
                    </div>
                    <Form className="mt-4">
                        <Form.Group controlId="replyText">
                            <Form.Control as="textarea" rows={3} placeholder="Write a reply..." />
                        </Form.Group>
                        <Button variant="dark" className="mt-2">
                            <Image src='/edit.png' width={25} height={30} className="me-1" /> Add Reply
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
});
