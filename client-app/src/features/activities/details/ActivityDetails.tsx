import { Col, Container, Row } from "react-bootstrap";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import ActivityItemPlaceholder from "../../../app/layout/ActivityItemPlaceholder";

export default observer(function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
    return () => clearSelectedActivity();
  }, [id, loadActivity, clearSelectedActivity]);

  if(loadingInitial || !activity) return <ActivityItemPlaceholder />;

  return (
    <>
        <Container>
            <Row>
                <Col xs={12} sm={9} md={8} className="d-flex flex-column flex-md-row mobileActivityDetails">
                  <ActivityDetailedHeader activity={activity}/>
                  <ActivityDetailedSidebar activity={activity} />
                </Col>
                <Col xs={12} sm={3} md={6}>
                  <ActivityDetailedInfo activity={activity}/>
                  <ActivityDetailedChat activityId={activity.id} />
                </Col>
            </Row>
        </Container>
    </>
  );
})
