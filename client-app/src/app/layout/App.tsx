import { useEffect } from 'react';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if(activityStore.loadingInitial) return <LoadingComponent content='Loading...'/>

  return (
    <>
      <NavBar />
      <Container style={{marginTop: 70}}>
        <ActivityDashboard />
      </Container>
    </>
  );
};

export default observer(App);
