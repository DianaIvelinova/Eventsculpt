import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

  if(!activity) return <LoadingComponent />;

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
                    <Button onClick={() => openForm(activity.id)} variant="primary" content="Edit"> Edit </Button>
                    <Button onClick={cancelSelectedActivity} variant="secondary" content="Cancel"> Cancel </Button>
                  </ButtonGroup>
                </Card.Body>
            </Card.Body>
        </Card>
    </>
  );
}
