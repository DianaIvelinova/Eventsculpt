import { ChangeEvent, useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}


export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit, submitting }: Props) {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
      <>
        <Card className="mt-4">
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
                    <Button onClick={closeForm} variant="secondary" className="me-2" type="button"> Cancel </Button>
                    <Button variant="success" type="submit" disabled={submitting}>
                        {submitting ? (
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
};