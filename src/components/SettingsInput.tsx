type InputPropsType = {
  className?: string;
  title?: String;
  value: number;
  onChange: (value: number) => void;
  errorText: string[];
  setIsSettingsFocused: (value:boolean)=>void
};

export const SettingsInput = ({
  className,
  title,
  value,
  onChange,
  errorText,
  setIsSettingsFocused
}: InputPropsType) => {
  return (
    <>
      <div className={className}>
        <label>{title}</label>
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          onFocus={()=>setIsSettingsFocused(true)}
          onBlur={()=>setIsSettingsFocused(false)}
        />
      </div>
      {errorText.map(errorEl=>(
        <div className="error">{errorEl}</div>
      )
      )}
    </>
  );
};
