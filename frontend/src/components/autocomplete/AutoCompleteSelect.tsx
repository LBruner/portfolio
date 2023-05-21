import React, {useEffect, useState} from "react";
import {AutoCompleteSelectProps} from "./types";

const AutoCompleteSelect: React.FC<AutoCompleteSelectProps> = ({currentInput, setLocationSelected}) => {
    const [autoCompletionLocations, setAutoCompletionLocations] = useState<Array<string>>([]);
    const [canSendRequest, setCanSendRequest] = useState<boolean>(true);

    useEffect(() =>{
        getAutoComplete();
    }, [currentInput])

    const getAutoComplete = async () => {
        if (canSendRequest) {
            setCanSendRequest(false);
            const res = await fetch(`http://localhost:8080/autocomplete?input=${currentInput}`)
            const data = await res.json();
            setAutoCompletionLocations(data.predictions);
            setTimeout(async () => {
                setCanSendRequest(true);
            }, 500);
            setLocationSelected(data.predictions[0].description);
        }
    }

    const onChangeHandler = (e: any) => {
        setLocationSelected(e.target.value);
    }

    return (
        <div>
            <select onChange={onChangeHandler}>
                {autoCompletionLocations.map((item: any, index) => (
                    <option key={index}>{item.description}</option>
                ))}
            </select>
        </div>
    )
}

export default AutoCompleteSelect;