import { useState } from "react";
import { Button } from "../Button";
import { SettingsInput } from "../SettingsInput";

type SettingsPropsType = {
  className: string;
  startValue: number;
  maxValue: number;
  setStartValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  setIsSettingsFocused:(value: boolean) => void
  // Assuming you might later add setMaxValue for completeness
};

export const Settings = (props: SettingsPropsType) => {
  const [localStartValue, setLocalStartValue] = useState(props.startValue);
  const [localMaxValue, setLocalMaxValue] = useState(props.maxValue);

  let startValueErrorText = [];
  let maxValueErrorText = [];
  let setButtonDisabled = false
  // Check for MaxValue errors
  if (localMaxValue <= localStartValue) {
    maxValueErrorText.push("MaxValue must be greater than StartValue. ");
  }
  if (localMaxValue < 0) {
    maxValueErrorText.push("MaxValue cannot be negative. ");
  }

  console.log('maxValueErrorText:   ', maxValueErrorText)

  // Check for StartValue errors
  if (localStartValue >= localMaxValue) {
    startValueErrorText.push("StartValue must be less than MaxValue. ");
  }
  if (localStartValue < 0) {
    startValueErrorText.push("StartValue cannot be negative. ");
  }

if (maxValueErrorText.length>0 || startValueErrorText.length>0) {
    setButtonDisabled=true
}

  const settingsData = [
    {
      title: "MAX value",
      className: "input",
      value: localMaxValue,
      onChange: setLocalMaxValue,
      errorText: maxValueErrorText,
    },

    {
      title: "START value",
      className: "input",
      value: localStartValue,
      onChange: setLocalStartValue,
      errorText: startValueErrorText,
     },
  ];



  return (
    <div className={props.className}>
      <div className="settings">
        {settingsData.map((settingsElement) => (
          <SettingsInput
            title={settingsElement.title}
            className={settingsElement.className}
            value={settingsElement.value}
            onChange={settingsElement.onChange}
            errorText={settingsElement.errorText}
            setIsSettingsFocused={props.setIsSettingsFocused}
          />
        ))}
        {/* <SettingsInput title='MAX value' className="input" value={localMaxValue} onChange={setLocalMaxValue} errorText = {errorText}/>
                <SettingsInput title='START value' className="input" value={localStartValue} onChange={setLocalStartValue} errorText = {errorText}/> */}
        <Button
          title="SET"
          className="button"
          onClick={() => {
            props.setStartValue(localStartValue);
            props.setMaxValue(localMaxValue);
          }}
          disabled={setButtonDisabled}
        />
      </div>
    </div>
  );
};
