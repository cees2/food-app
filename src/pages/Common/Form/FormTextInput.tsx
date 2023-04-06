import React from "react";
import { Form } from "react-bootstrap";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers";
import { UseFormRegister } from "react-hook-form";

interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
    register?: UseFormRegister<any>;
    options?: Record<string, any>;
    errors?: any;
    help?: string;
}

const FormTextInput: BsPrefixRefForwardingComponent<"input", Props> = (
    props
) => {
    const {
        label,
        placeholder,
        type,
        name,
        register,
        options,
        errors,
        help,
        ...controlProps
    } = props;

    const renderError = () => {
        if(errors[name]) return errors[name].message
        return "Field filled in incorrectly"
    }

    return (
        <Form.Group controlId={name}>
            {label && <Form.Label>{label}</Form.Label>}
            {register !== undefined ? (
                <Form.Control
                    {...register(name, options ? options : undefined)}
                    type={type && "text"}
                    placeholder={placeholder && ""}
                    {...controlProps}
                    isInvalid={!!errors.length}
                />
            ) : (
                <Form.Control
                    type={type && "text"}
                    placeholder={placeholder && ""}
                    {...controlProps}
                    isInvalid={!!errors.length}
                />
            )}
            {help && <Form.Text className="text-muted">{help}</Form.Text>}
            {label && <Form.Label>{label}</Form.Label>}
            {Object.keys(errors).length && <Form.Text>{renderError()}</Form.Text>}
        </Form.Group>
    );
};

export default FormTextInput;
