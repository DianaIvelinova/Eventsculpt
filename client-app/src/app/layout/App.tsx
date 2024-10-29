import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{marginTop: 70}}>
            <Outlet />
          </Container>
      </>
      )}
    </>
  );
};

export default observer(App);
