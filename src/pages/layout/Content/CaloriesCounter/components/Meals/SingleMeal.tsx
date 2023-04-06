import React, { FC, useState } from "react";
import { ReactComponent as AddMealIcon } from "../../../../../../styles/images/add_icon.svg";
import { ReactComponent as DropdownIcon } from "../../../../../../styles/images/dropdownIcon.svg";
import ReactDOM from "react-dom";
import AddMealForm from "./AddMealForm";

interface Props {
    mealName: string;
}

const SingleMeal: FC<Props> = (props) => {
    const { mealName } = props;
    const [mealExpanded, setMealExpanded] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const onSubmit = () => {};

    const expandMealHandler = () => {
        setMealExpanded((prevVal) => !prevVal);
    };

    const showModalFormHandler = () => {
        setModalVisible((prevVal) => !prevVal);
    };

    const closeModalHandler = () => {
        setModalVisible(false);
    };

    return (
        <>
            {modalVisible &&
                ReactDOM.createPortal(
                    <AddMealForm
                        onSubmit={onSubmit}
                        onClose={closeModalHandler}
                    />,
                    document.getElementById("modal") as HTMLDivElement
                )}
            <div className="single-meal-wrapper">
                <div className="meal-name-dropdown">
                    <h5>{mealName}</h5>
                    <DropdownIcon
                        onClick={expandMealHandler}
                        className={`${mealExpanded ? "svg-active" : ""}`}
                    />
                </div>
                <AddMealIcon onClick={showModalFormHandler} />
            </div>
        </>
    );
};

export default SingleMeal;
