import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Card, Button, Row, Col, Image, Container, Spinner } from "react-bootstrap";
import PhotoUploadWidget from "../../app/common/imageUpload/PhotoUploadWidget";
import { Photo, Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";

interface Props {
    profile: Profile
}

const ProfilePhotos = observer(({ profile }: Props) => {
    const { profileStore: { isCurrentUser, uploadPhoto, uploading, setMainPhoto, loading, deletePhoto } } = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    const [target, setTarget] = useState('');

    function handlePhotoUpload(file: Blob) {
        uploadPhoto(file).then(() => setAddPhotoMode(false));
    }

    function handleSetMain(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        setMainPhoto(photo);
    }

    function handleDeletePhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        deletePhoto(photo);
    }

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2>Photos</h2>
                    {isCurrentUser && (
                        <Button variant="outline-primary" onClick={() => setAddPhotoMode(!addPhotoMode)}>
                            {addPhotoMode ? 'Cancel' : 'Add Photo'}
                        </Button>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {addPhotoMode ? (
                        <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
                    ) : (
                        <Row>
                            {profile.photos?.map(photo => (
                                <Col key={photo.id} xs={6} sm={4} md={3} lg={2} className="mb-3">
                                    <Card>
                                        <Image src={photo.url} fluid />
                                        {isCurrentUser && (
                                            <Card.Body>
                                                <Button
                                                    variant="success"
                                                    name={'main' + photo.id}
                                                    onClick={e => handleSetMain(photo, e)}
                                                    disabled={photo.isMain}
                                                >
                                                    {loading && target === 'main' + photo.id ? (
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        />
                                                    ) : 'Main'}
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    name={photo.id}
                                                    onClick={(e) => handleDeletePhoto(photo, e)}
                                                    disabled={photo.isMain}
                                                >
                                                    {loading && photo.id === target ? (
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <i className="bi bi-trash"></i>
                                                    )}
                                                </Button>
                                            </Card.Body>
                                        )}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
});

export default ProfilePhotos;
