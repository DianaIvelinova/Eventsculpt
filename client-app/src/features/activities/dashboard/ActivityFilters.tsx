import { Card, ListGroup, Container, Image } from 'react-bootstrap';
import Calendar from 'react-calendar'; // Make sure to install react-calendar
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

export default function ActivityFilters() {
    return (
        <Container style={{ width: '100%', marginTop: '25px' }}>
            {/* Filters Header */}
            <Card className="mb-3">
                <Card.Header className="d-flex align-items-center bg-teal text-white">
                    <Image src='/filter.svg' width={25} height={25} className="me-2" /> Filters
                </Card.Header>
                
                {/* Filters List */}
                <ListGroup variant="flush">
                    <ListGroup.Item
                        action

                    >
                        All Activities
                    </ListGroup.Item>
                    <ListGroup.Item
                        action

                    >
                        I'm going
                    </ListGroup.Item>
                    <ListGroup.Item
                        action

                    >
                        I'm hosting
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <Calendar />
        </Container>
    );
}
