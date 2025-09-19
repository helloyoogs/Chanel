import { useRef, useState } from "react";

interface DatePickerProps {
  id?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  size?: "md" | "lg";
  defaultValue?: string;
}

export default function DatePicker({
  id,
  label,
  className,
  disabled,
  size = "lg",
  defaultValue = "",
}: DatePickerProps) {
  const [value, setValue] = useState<string>(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.showPicker?.();
      inputRef.current?.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setValue(date);
  };

  const formattedDate = value ? value.split("-").reverse().join("/") : "";

  return (
    <div
      className={`date_picker ${size} ${className} ${
        disabled ? "date_picker_disabled" : ""
      } ${formattedDate ? "" : "dd_mm_yyyy"}`}
      onClick={handleClick}
    >
      {formattedDate ? formattedDate : "DD/MM/YYYY"}
      <input
        type="date"
        id={id ? id : label}
        disabled={disabled}
        ref={inputRef}
        value={value}
        onChange={handleChange}
        className={"date_picker_input"}
      />
      <div className={"date_picker_ic_calendar"}></div>
      {label && (
        <label htmlFor={label} className="sr-only">
          {label}
        </label>
      )}
    </div>
  );
}
