import React, {useRef, useState} from "react";

const AutoCompleteInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [autoCompletionLocations, setAutoCompletionLocations] = useState<Array<string>>([]);
    const [canSendRequest, setCanSendRequest] = useState<boolean>(true);

    const locationsTable = autoCompletionLocations.map((item: any) => <option>{item.description}</option>)

    const getAutoComplete = async () => {
        if (canSendRequest) {
            setCanSendRequest(false);
            const res = await fetch(`http://localhost:8080/autocomplete?input=${inputRef?.current?.value}`)
            const data = await res.json();
            setAutoCompletionLocations(data.predictions);
            console.log(autoCompletionLocations)
            setTimeout(async () => {
                setCanSendRequest(true);
            }, 500);
        }
    }

    return (
        <>
                <input ref={inputRef} id={"autocomplete"} placeholder={'location...'} onChange={getAutoComplete}/>
                {
                    autoCompletionLocations.length > 0 && <select value={'oi'}>
                        {locationsTable}
                    </select>
                }
            <select>
                <option>OI</option>
            </select>

        </>
    )
}

export default AutoCompleteInput;