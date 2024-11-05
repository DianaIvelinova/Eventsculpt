import { Col, Container, Row } from "react-bootstrap";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
    return () => clearSelectedActivity();
  }, [id, loadActivity, clearSelectedActivity]);

  if(loadingInitial || !activity) return <LoadingComponent />;

  return (
    <>
        <Container>
            <Row>
                <Col className="d-flex" md={10}>
                  <ActivityDetailedHeader activity={activity}/>
                  <ActivityDetailedSidebar activity={activity} />
                </Col>
                <Col md={6}>
                  <ActivityDetailedInfo activity={activity}/>
                  <ActivityDetailedChat activityId={activity.id} />
                </Col>
            </Row>
        </Container>
    </>
  );
})
