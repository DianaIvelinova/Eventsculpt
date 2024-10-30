import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, Container, Card, Image } from 'react-bootstrap';

export default observer(function HomePage() {

    return (
        <div className="masthead text-center bg-dark text-white py-5">
            <Container>
                <Card className="bg-transparent border-0 text-center">
                    <Card.Body>
                        <Image src='/cocktail.png' alt='logo' width="150" className="mb-3" />
                        <h1 className="display-4">Eventsculpt</h1>
                                <Link to='/activities'>
                                    <Button size="lg" variant="outline-light"> Go to activities! </Button>
                                </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
});
