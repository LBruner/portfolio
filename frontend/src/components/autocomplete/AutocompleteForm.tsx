import React, {FormEvent, useState} from "react";
import AutoCompleteInput from "./AutoCompleteInput";
import AutoCompleteSelect from "./AutoCompleteSelect";

const AutocompleteForm: React.FC = _ => {
    const [currentInput, setCurrentInput] = useState<string>('');
    const [locationSelected, setLocationSelected] = useState<string>('');

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();

        const forecast = await fetch(`http://localhost:8080/weather`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({locationSelected}),
        })

        console.log(await forecast.json())
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <AutoCompleteInput setCurrentInput={setCurrentInput}/>
            <AutoCompleteSelect setLocationSelected={setLocationSelected} locationSelected={locationSelected} currentInput={currentInput}/>
        </form>
    )
}

export default AutocompleteForm;