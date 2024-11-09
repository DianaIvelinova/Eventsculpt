import { Formik, Form } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Row, Col } from "react-bootstrap";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import MyTextAreaInput from "../../app/common/form/MyTextAreaInput";

interface Props {
    setEditMode: (editMode: boolean) => void;
}

const ProfileEditForm: React.FC<Props> = observer(({ setEditMode }) => {
    const { profileStore: { profile, updateProfile } } = useStore();

    return (
        <Formik
            initialValues={{
                displayName: profile?.displayName || '',
                bio: profile?.bio || ''
            }}
            onSubmit={values => {
                updateProfile(values).then(() => {
                    setEditMode(false);
                });
            }}
            validationSchema={Yup.object({
                displayName: Yup.string().required('Display name is required')
            })}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <Form>
                    <Row className="mb-3">
                        <Col>
                            <MyTextInput 
                                placeholder='Display Name'
                                name='displayName' 
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <MyTextAreaInput 
                                rows={3} 
                                placeholder='Add your bio' 
                                name='bio' 
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <Button
                                variant="dark"
                                type='submit'
                                disabled={!isValid || !dirty || isSubmitting}
                            >
                                {isSubmitting ? 'Updating...' : 'Update Profile'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
});

export default ProfileEditForm;
