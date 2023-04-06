import React, { FC, useEffect, useRef } from "react";
import { ReactComponent as CloseModalSVG } from "../../../../../../styles/images/close_button.svg";
import FormDirty from "../../../../../Common/Form/FormDirty";
import FormTextInput from "../../../../../Common/Form/FormTextInput";
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";

interface BackdropProps {
    onClose: () => void;
    children: JSX.Element;
}

interface MealForm {
    onClose: () => void;
    onSubmit: () => void;
}

const Backdrop: FC<BackdropProps> = (props) => {
    return (
        <div className="modal-backdrop" onClick={props.onClose}>
            {props.children}
        </div>
    );
};

const AddMealForm: FC<MealForm> = (props) => {
    const ref = useRef();
    const form = useForm();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = form;

    const { onClose: closeModal } = props;

    const onSubmit = handleSubmit((data: any) => {
        console.log(data);
    });

    return (
        <Backdrop onClose={closeModal}>
            <Modal className="add-meal-wrapper">
                <Modal.Header className="add-meal-modal-nav">
                    <Modal.Title>Add new meal</Modal.Title>
                    <CloseModalSVG
                        onClick={closeModal}
                        className={"col-md-2"}
                    />
                </Modal.Header>
                <Modal.Body className="modal-content">
                    <FormDirty onSubmit={onSubmit}>
                        <FormTextInput
                            name="mealName"
                            register={register}
                            label="Meal name"
                            errors={errors}
                            options={{
                                required: "Meal name is required",
                            }}
                        />
                        <FormTextInput
                            name="amount"
                            register={register}
                            label="amount"
                            errors={errors}
                            options={{
                                required: "Meal must have an amount",
                            }}
                        />
                    </FormDirty>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light">Add</Button>
                    <Button variant="light">Cancel</Button>
                </Modal.Footer>
            </Modal>
        </Backdrop>
    );
};

export default AddMealForm;
