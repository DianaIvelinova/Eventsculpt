import { useEffect, useState } from 'react';
import { Button, Row, Col, Card, Spinner, ButtonGroup } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import PhotoUploadWidgetDropzone from './PhotoWidgetDropzone';
import PhotoWidgetCropper from './PhotoWidgetCropper';

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

const PhotoUploadWidget = observer(({ loading, uploadPhoto }: Props) => {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: object & {preview?: string}) => URL.revokeObjectURL(file.preview!));
        };
    }, [files]);

    return (
        <Row className="mb-3">
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Step 1 - Add Photo</Card.Title>
                        <PhotoUploadWidgetDropzone setFiles={setFiles} />
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Step 2 - Resize Image</Card.Title>
                        {files && files.length > 0 && (
                            <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                        )}
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Step 3 - Preview & Upload</Card.Title>
                        <div className="img-preview mb-2" style={{ minHeight: 200, overflow: 'hidden' }} />
                        {files && files.length > 0 && (
                            <ButtonGroup className="d-flex justify-content-between">
                                <Button 
                                    onClick={onCrop} 
                                    variant="dark" 
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                            {' Uploading...'}
                                        </>
                                    ) : (
                                        'Upload'
                                    )}
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => setFiles([])} 
                                    disabled={loading}
                                >
                                    Cancel
                                </Button>
                            </ButtonGroup>
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
});

export default PhotoUploadWidget;
