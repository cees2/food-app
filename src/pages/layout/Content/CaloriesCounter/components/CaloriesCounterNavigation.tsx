import React, { FC } from "react";
import { parseHeaderDate } from "../../../../Common/DateParser";
import { ReactComponent as LeftArrow } from "../../../../../styles/images/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../../../../styles/images/right_arrow.svg";

interface Props {
  caloriesDate: Date;
}

const CaloriesCounterNavigation: FC<Props> = (props) => {
  return (
    <div className="calories-navigation">
      <LeftArrow style={{ width: "30px" }} />
      <h3>{parseHeaderDate(props.caloriesDate)}</h3>
      <RightArrow style={{ width: "30px" }} />
    </div>
  );
};

export default CaloriesCounterNavigation;
