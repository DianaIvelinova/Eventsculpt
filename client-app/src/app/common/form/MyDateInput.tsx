import { useField } from "formik";
import { Form } from "react-bootstrap";
import DatePicker, { DatePickerProps } from 'react-datepicker';

export default function MyDateInput(props: Partial<DatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);

    return (
        <Form.Group className="mb-3">
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(value) => helpers.setValue(value)}
                className="form-control"
            />
            {meta.touched && meta.error ? (
                <Form.Label className="w-100 text-danger"> {meta.error} </Form.Label>
            ) : null}
        </Form.Group>
    );
}
