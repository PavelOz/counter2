import { useEffect, useState } from "react";
import { Button } from "./../Button";
type SettingsPropsType = {
  className: string;
  startValue: number;
  maxValue: number;
};

export const Counter = (props: SettingsPropsType) => {

  let initIncreaseDisabled = false;
  let initResetDisabled = true;

  const [resetDisabled, setResetDisabled] = useState(initResetDisabled);
  const [increaseDisabled, setIncreaseDisabled] =
    useState(initIncreaseDisabled);
  const [displayValue, setDisplayValue] = useState(props.startValue);

  useEffect(() => {
    // Update displayValue when startValue changes
    setDisplayValue(props.startValue);
    // You may also want to adjust the logic for enabling/disabling buttons here
  
  }, [props.startValue]);



  const increase = () => {
    if (displayValue < props.maxValue) {
      setDisplayValue((prevValue) => {
        setResetDisabled(false);
        const updatedValue = prevValue + 1;
        if (updatedValue >= props.maxValue) {
          setIncreaseDisabled(true);
        }
        return updatedValue;
      });
    }
  };
  const reset = () => {
    setDisplayValue(props.startValue);
    setIncreaseDisabled(false);
    setResetDisabled(true);
  };

  return (
    <div className={props.className}>
      <div className="display indicator">{displayValue}</div>
      <div className="display">
        <Button
          onClick={increase}
          className="button"
          title="INCREASE"
          disabled={increaseDisabled}
        />
        <Button
          onClick={reset}
          className="button"
          title="RESET"
          disabled={resetDisabled}
        />
      </div>
    </div>
  );
};
