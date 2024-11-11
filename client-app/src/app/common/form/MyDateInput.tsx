import { useField } from "formik";
import { Form } from "react-bootstrap";
import DatePicker, { DatePickerProps } from "react-datepicker";
interface MyDateInputProps {
  name: string;
  placeholderText: string;
  showTimeSelect?: boolean;
  timeCaption?: string;
  dateFormat?: string;
  props?: Partial<DatePickerProps>;
}

export default function MyDateInput({ name, ...props }: MyDateInputProps) {
  const [field, meta, helpers] = useField(name);

  return (
    <Form.Group className="mb-3">
      <DatePicker
        {...field}
        {...props}
        selected={field.value ? new Date(field.value) : null}
        onChange={(date: Date | null) => helpers.setValue(date)}
        className="form-control"
      />
      {meta.touched && meta.error ? (
        <Form.Text className="text-danger">{meta.error}</Form.Text>
      ) : null}
    </Form.Group>
  );
}
