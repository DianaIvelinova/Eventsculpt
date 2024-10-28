import { Badge, Button, Card, Spinner } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";
import { SyntheticEvent, useState } from "react";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({ activities, selectActivity, deleteActivity, submitting }: Props) {
  const [target, setTarget] = useState('');

  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  return (
    <div className="mt-4">
      {activities.map((activity) => (
        <Card key={activity.id} className="mb-3">
          <Card.Body>
            <Card.Title as="a" href="#">
              {activity.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {activity.date}
            </Card.Subtitle>

            <div className="mb-2">
              <div>{activity.description}</div>
              <div>
                {activity.city}, {activity.venue}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <Button onClick={() => selectActivity(activity.id)} variant="dark" className="float-right"> View </Button>
              <Button
                name={activity.id}
                onClick={(e) => handleActivityDelete(e, activity.id)}
                variant="danger"
                className="float-right"
                disabled={submitting && target === activity.id}
              >
                {submitting && target === activity.id ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    <span className="ms-2">Deleting...</span>
                  </>
                ) : (
                  'Delete'
                )}
              </Button>
              <Badge bg="secondary">{activity.category}</Badge>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
