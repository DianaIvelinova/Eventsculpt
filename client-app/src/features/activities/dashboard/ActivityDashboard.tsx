import { Col, Row } from "react-bootstrap";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;

    return (
        <>
            <Row>
                <Col width="10">
                    <ActivityList />
                </Col>
                <Col width="6">
                    {selectedActivity && !editMode &&
                    <ActivityDetails />}
                    {editMode && 
                    <ActivityForm />}                  
                </Col>
            </Row>
        </>
    )
})