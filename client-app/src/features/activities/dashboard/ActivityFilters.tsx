import { observer } from 'mobx-react-lite';
import { Calendar } from 'react-calendar';
import { Card, Nav, Row, Col, Container } from 'react-bootstrap';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityFilters() {
    const { activityStore: { predicate, setPredicate } } = useStore();

    return (
        <Container style={{ marginTop: 25 }}>
            <Card>
                <Card.Header as="h5" className="bg-dark text-white">
                    Filters
                </Card.Header>
                <Card.Body>
                    <Nav variant="pills" className="flex-column border-bottom">
                        <Nav.Link
                            active={predicate.has('all')}
                            onClick={() => setPredicate('all', 'true')}
                        >
                            All Activities
                        </Nav.Link>
                        <Nav.Link
                            active={predicate.has('isGoing')}
                            onClick={() => setPredicate('isGoing', 'true')}
                        >
                            I'm going
                        </Nav.Link>
                        <Nav.Link
                            className='mb-4'
                            active={predicate.has('isHost')}
                            onClick={() => setPredicate('isHost', 'true')}
                        >
                            I'm hosting
                        </Nav.Link>
                    </Nav>

                    <Row className="mt-4">
                        <Col>
                            <Calendar
                                onChange={(date) => setPredicate('startDate', date as Date)}
                                value={predicate.get('startDate') || new Date()}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
});
