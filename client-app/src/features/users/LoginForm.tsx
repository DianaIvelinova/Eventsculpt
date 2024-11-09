import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Alert, Button, Container } from "react-bootstrap";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
    const { userStore } = useStore();
    
    return (
        <Container>
            <Formik
                initialValues={{ email: '', password: '', error: null }}
                onSubmit={(values, { setErrors }) =>
                    userStore.login(values).catch(() => setErrors({ error: 'Invalid email or password' }))
                }
            >
                {({ handleSubmit, isSubmitting, errors }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <h2 className='text-center'>Login to Eventsculpt</h2>
                        <MyTextInput placeholder="Email" name='email' />
                        <MyTextInput placeholder="Password" name='password' type='password' />
                        <ErrorMessage name='error' render={() => 
                            <Alert variant='danger' style={{ marginBottom: 10 }}>
                                {errors.error}
                            </Alert>
                        } />
                        <Button variant='dark' type="submit" disabled={isSubmitting} >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
});
