type InputPropsType = {
  className?: string;
  title?: String;
  value: number;
  onChange: (value: number) => void;
  errorText?: string | undefined;
};

export const SettingsInput = ({
  className,
  title,
  value,
  onChange,
  errorText,
}: InputPropsType) => {
  return (
    <>
      <div className={className}>
        <label>{title}</label>
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
        />
      </div>
      {errorText ? <div className="error">{errorText}</div> : undefined}
    </>
  );
};
