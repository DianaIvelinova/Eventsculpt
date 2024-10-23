import { useEffect, useState } from 'react';
import './App.css'
import LocalBarIcon from '@mui/icons-material/LocalBar';
import axios from 'axios';
import { List, ListItem } from '@mui/material';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  },[])

  return (
    <>
      <h1>
        <LocalBarIcon/>
        Eventsculpt</h1>
        <List>
          {activities.map((activity: any) => (
            <ListItem key={activity.id}>
              {activity.title}
            </ListItem>
          ))}
        </List>
    </>
  )
}

export default App
