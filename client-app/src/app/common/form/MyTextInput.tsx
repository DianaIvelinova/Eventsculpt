import { useField } from "formik";
import { Form } from "react-bootstrap";

interface Props {
    placeholder: string;
    name: string;
    label?: string;
    type?: string;
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <Form.Group className="mb-3" controlId={props.name}>
            {props.label && <Form.Label>{props.label}</Form.Label>}
            <Form.Control 
                {...field} 
                {...props} 
                isInvalid={meta.touched && !!meta.error}
            />
            {meta.touched && meta.error ? (
                <Form.Label className="text-danger"> {meta.error} </Form.Label>
            ) : null}
        </Form.Group>
    );
}
