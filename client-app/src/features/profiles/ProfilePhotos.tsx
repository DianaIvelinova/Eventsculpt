import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Card, Button, Row, Col, Image, Spinner, ButtonGroup } from "react-bootstrap";
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
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Photos</Card.Title>
                {isCurrentUser && (
                    <Button 
                        variant="dark" 
                        onClick={() => setAddPhotoMode(!addPhotoMode)}
                        className="mb-3"
                    >
                        {addPhotoMode ? 'Cancel' : 'Add Photo'}
                    </Button>
                )}
                {addPhotoMode ? (
                    <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
                ) : (
                    <Row className="flex-grow-1">
                        {profile.photos?.map(photo => (
                            <Col key={photo.id} xs={6} sm={5} md={6} lg={3} className="mb-3">
                                <Card>
                                    <Image src={photo.url} fluid />
                                    {isCurrentUser && (
                                        <Card.Body>
                                            <ButtonGroup className="d-flex">
                                            <Button
                                                variant="dark"
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
                                                    <Image height={20} width={20} src="/del.svg" />
                                                )}
                                            </Button>
                                            </ButtonGroup>

                                        </Card.Body>
                                    )}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Card.Body>
        </Card>
    );
});

export default ProfilePhotos;
