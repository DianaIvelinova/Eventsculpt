import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default observer(function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if(id) loadActivity(id);
  }, [id, loadActivity])

  if(loadingInitial || !activity) return <LoadingComponent />;

  return (
    <>
        <Card className="mt-4">
            <Card.Img variant="top" src={`/categoryImages/${activity.category}.jpg`}/>
            <Card.Body>
                <Card.Title> {activity.title} </Card.Title>
                <Card.Text>
                  <span>{activity.date}</span>
                </Card.Text>
                <Card.Text>
                  {activity.description}                
                </Card.Text>
                <Card.Body>
                  <ButtonGroup>
                    <Link to={`/manage/${activity.id}`}>
                      <Button variant="primary" content="Edit"> Edit </Button>
                    </Link>
                    <Link to='/activities'>
                      <Button variant="secondary" content="Cancel"> Cancel </Button>
                    </Link>
                  </ButtonGroup>
                </Card.Body>
            </Card.Body>
        </Card>
    </>
  );
})
