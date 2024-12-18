import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Container, Row, Col } from "react-bootstrap";
import MyTextInput from "../../app/common/form/MyTextInput"; 
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import ValidationError from "../errors/ValidationError";

export default observer(function RegisterForm() {
    const { userStore } = useStore();
    
    return (
        <Container>
            <Formik
                initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
                onSubmit={(values, { setErrors }) =>
                    userStore.register(values).catch(error => setErrors({ error }))
                }
                validationSchema={Yup.object({
                    displayName: Yup.string().required('Display name is required'),
                    username: Yup.string().required('Username is required'),
                    email: Yup.string().email('Invalid email').required('Email is required'),
                    password: Yup.string().required('Password is required')
                        .min(6, 'Password must be at least 6 characters')
                        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                        .matches(/\d/, 'Password must contain at least one number')
                })}
            >
                {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                    <Form className='error' onSubmit={handleSubmit} autoComplete='off'>
                        <h2 className='text-center'>Sign up to Reactivities</h2>
                        <Row>
                            <Col>
                                <MyTextInput placeholder="Display Name" name='displayName' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MyTextInput placeholder="Username" name='username' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MyTextInput placeholder="Email" name='email' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MyTextInput placeholder="Password" name='password' type='password' />
                            </Col>
                        </Row>
                        <ErrorMessage name='error' render={() => 
                            <ValidationError errors={errors.error as unknown as string[]} />} />
                        <Button
                            disabled={!isValid || !dirty || isSubmitting} 
                            variant='dark' 
                            type="submit" 
                            className="mt-3"
                        >
                            {isSubmitting ? 'Registering...' : 'Register'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
});
