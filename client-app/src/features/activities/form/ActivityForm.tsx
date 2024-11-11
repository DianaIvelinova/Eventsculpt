import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ActivityFormValues } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {v4 as uuid} from 'uuid';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextAreaInput from "../../../app/common/form/MyTextAreaInput";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const {createActivity, updateActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
        title: Yup.string().required('the activity title is required'),
        description: Yup.string().required('the activity description is required'),
        category: Yup.string().required(),
        date: Yup.string().required('Date is required'),
        venue: Yup.string().required(),
        city: Yup.string().required(),
    })

    useEffect(() => {
        if(id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)));
      }, [id, loadActivity])

    function handleFormSubmit(activity: ActivityFormValues) {
        if (!activity.id) {
            const newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity).then(() => navigate(`/activities/${newActivity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    if(loadingInitial || !activity) return <LoadingComponent content="Loading activity..."/>;

    return (
      <>
        <Card className="p-5">
            <Card.Header>Activity details</Card.Header>
            <Formik validationSchema={validationSchema} enableReinitialize initialValues={activity} onSubmit={values =>  handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty}) => (
                    <Form onSubmit={handleSubmit} autoComplete="off">                       
                        <MyTextInput type="text" placeholder="Title" name='title'/>
                        
                        <MyTextAreaInput rows={3} placeholder="Description" name='description'/>
        
                        <MySelectInput options={categoryOptions} placeholder="Category" name='category'/>
        
                        <MyDateInput placeholderText='Date' name='date' showTimeSelect timeCaption="time" dateFormat='MMMM d, yyyy h:mm aa' />

                        <Card.Header>Location details</Card.Header>
        
                        <MyTextInput type="text" placeholder="City" name='city'/>
        
                        <MyTextInput type="text" placeholder="Venue" name='venue'/>
        
                        <div className="d-flex justify-content-end m-4">
                            <Link to='/activities'>
                                <Button className="m-2" variant="danger" content="Cancel"> Cancel </Button>
                            </Link>                    
                            <Button disabled={ isSubmitting || !dirty || !isValid } className="m-2" variant="dark" type="submit">
                                {isSubmitting ? (
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
                )}
            </Formik> 
        </Card>
      </>
    );
});