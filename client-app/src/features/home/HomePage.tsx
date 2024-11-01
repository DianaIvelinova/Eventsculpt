import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, Container, Card, Image } from 'react-bootstrap';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage() {

    const {userStore, modalStore} = useStore();

    return (
        <div className="masthead text-center bg-dark text-white py-5">
            <Container>
                <Card className="bg-transparent border-0 text-center">
                    <Card.Body>
                        <Image src='/cocktail.png' alt='logo' width="150" className="mb-3" />
                        <h1 className="display-4">Eventsculpt</h1>
                            {userStore.isLoggedIn ? (
                                <>
                                    <Card.Header>{`Welcome back ${userStore.user?.displayName}`}</Card.Header>
                                    <Link to='/activities'>
                                        <Button size="lg" variant="outline-light"> Go to activities! </Button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Button onClick={() => modalStore.openModal(<LoginForm />)} size="lg" variant="outline-light"> Login! </Button>
                                    <Button onClick={() => modalStore.openModal(<RegisterForm />)} size="lg" variant="outline-light"> Register! </Button>
                                </> 
                            )}                  
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
});
