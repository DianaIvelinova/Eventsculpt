import { Badge, Button, Card, Spinner } from "react-bootstrap";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function ActivityList() {
  const [target, setTarget] = useState('');
  const {activityStore} = useStore();
  const {deleteActivity, activitiesByDate, loading} = activityStore;

  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <div>
      {activitiesByDate.map((activity) => (
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
              <Link to={`/activities/${activity.id}`}>
                <Button variant="dark" className="float-right"> View </Button>
              </Link>
              <Button
                name={activity.id}
                onClick={(e) => handleActivityDelete(e, activity.id)}
                variant="danger"
                className="float-right"
                disabled={loading && target === activity.id}
              >
                {loading && target === activity.id ? (
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
})
