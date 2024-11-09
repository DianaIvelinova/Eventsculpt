import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, Container, Image } from 'react-bootstrap';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage() {

    const {userStore, modalStore} = useStore();

    return (
        <div className="masthead text-center bg-dark text-white py-5">
            <Container>
                <Image src='/cocktail.png' alt='logo' width={150} className="" />
                <h1 className="display-4">Eventsculpt</h1>
                    {userStore.isLoggedIn ? (
                        <>
                            <h5 className='mb-3'>{`Welcome back, ${userStore.user?.displayName}!`}</h5>
                            <Link to='/activities'>
                                <Button size="lg" variant="outline-light"> Go to activities! </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Button onClick={() => modalStore.openModal(<LoginForm />)} className='me-3' size="lg" variant="light"> Login </Button>
                            <Button onClick={() => modalStore.openModal(<RegisterForm />)} size="lg" variant="outline-light"> Register </Button>
                        </> 
                    )}                  
            </Container>
        </div>
    );
});
