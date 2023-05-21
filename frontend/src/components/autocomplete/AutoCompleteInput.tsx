import React from "react";
import {AutoCompleteProps} from "./types";

const AutoCompleteInput: React.FC<AutoCompleteProps> = ({setCurrentInput}) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(event.target.value);
    }

    return (
        <input id={"autocomplete"} placeholder={'location...'} onChange={onChangeHandler}/>
    )
}

export default AutoCompleteInput;