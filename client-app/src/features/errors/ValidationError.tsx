import { Alert } from "react-bootstrap";

interface Props {
    errors: string[];
}

export default function ValidationError({ errors }: Props) {
    return (
        <Alert variant="danger">
            {errors && (
                <ul>
                    {errors.map((err: string, i) => (
                        <li key={i}>{err}</li>
                    ))}
                </ul>
            )}
        </Alert>
    );
}
