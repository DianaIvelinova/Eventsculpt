import { useField } from "formik";
import Select from "react-select";

interface Props {
    placeholder: string;
    name: string;
    options: { label: string; value: string }[];
    label?: string;
}

export default function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);

    return (
        <div className="mb-3">
            {props.label && <label>{props.label}</label>}
            <Select
                options={props.options}
                value={props.options.find(option => option.value === field.value) || null}
                onChange={(selectedOption) => helpers.setValue(selectedOption ? selectedOption.value : null)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
                isClearable
            />
            {meta.touched && meta.error ? (
                <label color="red" className="text-danger">{meta.error}</label>
            ) : null}
        </div>
    );
}
