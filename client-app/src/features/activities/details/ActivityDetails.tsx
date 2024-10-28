import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm}: Props) {
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
                    <Button onClick={cancelSelectActivity} variant="secondary" content="Cancel"> Cancel </Button>
                  </ButtonGroup>
                </Card.Body>
            </Card.Body>
        </Card>
    </>
  );
}
