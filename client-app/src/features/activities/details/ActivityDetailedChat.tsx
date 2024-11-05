import { observer } from 'mobx-react-lite';
import { Card, Image, Spinner } from 'react-bootstrap';
import { useStore } from '../../../app/stores/store';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';

interface Props {
    activityId: string;
}

export default observer(function ActivityDetailedChat({ activityId }: Props) {
    const { commentStore } = useStore();

    useEffect(() => {
        if (activityId) {
            commentStore.createHubConnection(activityId);
        }
        return () => {
            commentStore.clearComments();
        }
    }, [commentStore, activityId]);
    
    return (
        <>
            <Card className="text-center text-black bg-white" style={{ border: 'none' }}>
                <Card.Header as="h5">Chat about this event</Card.Header>
            </Card>
            <Card>
                <Formik onSubmit={(values, {resetForm}) => 
                            commentStore.addComment(values).then(() => resetForm())}
                            initialValues={{body: ''}}
                            validationSchema={Yup.object({
                                body: Yup.string().required()
                            })}
                            >
                            {({isSubmitting, isValid, handleSubmit}) => 
                                <Form className="mt-4">
                                    <Field name='body'>
                                        {(props: FieldProps) => (
                                            <div style={{position: 'relative'}}>
                                                {isSubmitting &&
                                                    <div className="mt-3">
                                                        <Spinner animation="border" /> Please wait...
                                                    </div>}   
                                                <textarea placeholder='Enter your comment and press enter to submit'
                                                rows={2}
                                                {...props.field}
                                                onKeyDown={e => {
                                                    if (e.key === 'Enter' && e.shiftKey) {
                                                        return;
                                                    }
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        if (isValid) {
                                                            handleSubmit();
                                                        }
                                                    }  
                                                }} 
                                                />                                                                         
                                            </div>
                                        )}
                                    </Field>                               
                                </Form>
                            }
                </Formik>
                <Card.Body>
                {commentStore.comments.map(comment => (
                    <div key={comment.id } className="d-flex mb-3">
                    <Image src={comment.image || "/cute.png"} roundedCircle width="40" height="40" className="me-3" />
                    <div>
                        <Link to={`profiles/${comment.username}`}><strong>{comment.displayName}</strong></Link>
                        <div className="text-muted small"> {formatDistanceToNow(comment.createdAt)} ago</div>
                        <div style={{whiteSpace: 'pre-wrap'}}> {comment.body} </div>
                    </div>
                </div>
                ))} 
                </Card.Body>
            </Card>
        </>
    );
});
