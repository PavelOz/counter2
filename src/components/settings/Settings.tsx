import { useEffect, useState } from "react";
import { Button } from "../Button";
import { SettingsInput } from "../SettingsInput";

type SettingsPropsType = {
    className: string;
    startValue: number;
    maxValue: number;
    setStartValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    // Assuming you might later add setMaxValue for completeness
}

export const Settings = (props: SettingsPropsType) => {
    const [localStartValue, setLocalStartValue] = useState(props.startValue)
    const [localMaxValue, setLocalMaxValue] = useState(props.maxValue)
 
    let errorText = undefined
    if (localMaxValue <= localStartValue)     {
        errorText = 'MaxValue cannot be less than or equal to StartValue'
    }
    
    return (
        <div className={props.className}>
            <div className="settings">
                <SettingsInput title='MAX value' className="input" value={localMaxValue} onChange={setLocalMaxValue} errorText = {errorText}/>
                <SettingsInput title='START value' className="input" value={localStartValue} onChange={setLocalStartValue} errorText = {errorText}/>
                <Button title="SET" className="button" onClick={() => {
                     props.setStartValue(localStartValue);
                     props.setMaxValue(localMaxValue)}}/>
            </div>
        </div>
    );
}