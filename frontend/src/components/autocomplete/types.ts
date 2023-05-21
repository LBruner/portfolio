import {Dispatch, SetStateAction} from "react";

export interface AutoCompleteProps{
    setCurrentInput: Dispatch<SetStateAction<string>>
}

export interface AutoCompleteSelectProps{
    setLocationSelected:  Dispatch<SetStateAction<string>>
    currentInput: string
    locationSelected: string
}