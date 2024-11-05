import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Col, Image, Row } from 'react-bootstrap';

interface Props {
    setFiles: (files: any) => void;
}

export default function PhotoUploadWidgetDropzone({ setFiles }: Props) {
    const textAlignCenter: React.CSSProperties = { textAlign: 'center' };

    const dzStyles = {
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        padding: '30px',
        ...textAlignCenter,
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    };

    const dzActive = {
        borderColor: 'green',
    };

    const onDrop = useCallback((acceptedFiles: object[]) => {
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file),
        })));
    }, [setFiles]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}>
            <input {...getInputProps()} />
            <Row>
                <Col>
                    <Image height={50} width={50} src="/upload.svg" />
                    <h5>Drop image here</h5>
                </Col>
            </Row>
        </div>
    );
}
