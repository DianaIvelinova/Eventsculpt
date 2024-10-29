import { ChangeEvent, useEffect, useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {v4 as uuid} from 'uuid';

export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const {createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    })

    useEffect(() => {
        if(id) loadActivity(id).then(activity => setActivity(activity!));
      }, [id, loadActivity])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    if(loadingInitial || !activity) return <LoadingComponent content="Loading activity..."/>;

    return (
      <>
        <Card>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group controlId="formTitle" className="mb-3">
                    <Form.Control type="text" placeholder="Title"  value={activity.title} onChange={handleInputChange} name='title'/>
                </Form.Group>

                <Form.Group controlId="formDescription" className="mb-3">
                    <Form.Control as="textarea" placeholder="Description" rows={3} value={activity.description} onChange={handleInputChange} name='description'/>
                </Form.Group>

                <Form.Group controlId="formCategory" className="mb-3">
                    <Form.Control type="text" placeholder="Category" value={activity.category} onChange={handleInputChange} name='category'/>
                </Form.Group>

                <Form.Group controlId="formDate" className="mb-3">
                    <Form.Control type="date" placeholder="Date" value={activity.date} onChange={handleInputChange} name='date'/>
                </Form.Group>

                <Form.Group controlId="formCity" className="mb-3">
                    <Form.Control type="text" placeholder="City" value={activity.city} onChange={handleInputChange} name='city'/>
                </Form.Group>

                <Form.Group controlId="formVenue" className="mb-3">
                    <Form.Control type="text" placeholder="Venue" value={activity.venue} onChange={handleInputChange} name='venue'/>
                </Form.Group>

                <div className="d-flex justify-content-end m-4">
                    <Link to='/activities'>
                      <Button variant="secondary" content="Cancel"> Cancel </Button>
                    </Link>                    
                    <Button variant="success" type="submit">
                        {loading ? (
                            <>
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                <span className="ms-2">Submitting...</span>
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </div>
            </Form>
        </Card>
      </>
    );
});