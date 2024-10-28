import { Spinner } from "react-bootstrap";

interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent ({inverted = true, content = 'Loading...'}: Props) {
    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: inverted ? 'rgba(0,0,0,0.6)' : 'transparent',
                color: inverted ? 'white' : 'black'
            }}
        >
            <Spinner animation="border" role="status" variant={inverted ? 'light' : 'dark'} />
            <span style={{ marginLeft: '10px' }}>{content}</span>
        </div>
    )
}