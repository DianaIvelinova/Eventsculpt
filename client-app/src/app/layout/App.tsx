import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
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
