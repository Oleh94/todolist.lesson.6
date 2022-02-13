import React, {ChangeEvent} from "react";

type CheckboxPropsType = {
    changeTaskStatus: (checked : boolean)=> void
    checked : boolean
}



const Checkbox = (props : CheckboxPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(newIsDoneValue);
    }
    return (
        <input type="checkbox" onChange={onChangeHandler} checked={props.checked}/>
    );
};

export default Checkbox;