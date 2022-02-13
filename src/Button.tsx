import React from "react";
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    filter? : FilterValuesType
    name : string
    callback: ()=> void
}


export const Button = (props : ButtonPropsType) => {
    const onClickHandler =() =>{
        props.callback();
    }

    return (
        <button className={props.filter === props.name ? "active-filter" : ""}
                onClick={onClickHandler}>{props.name}
        </button>
    );
}