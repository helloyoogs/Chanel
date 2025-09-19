import { ChangeEvent } from "react";

interface CheckBoxProps {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  hiddenLabel?: boolean;
}
export default function CheckBox({
  defaultChecked,
  checked,
  label,
  onChange,
  disabled,
  className = "",
  hiddenLabel,
}: CheckBoxProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange ? onChange(e.target.checked) : !checked;
  };

  return (
    <div className={`check_box_wrap ${className}`}>
      <input
        defaultChecked={defaultChecked}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        id={label}
        aria-label={hiddenLabel ? label : undefined}
      />
      {hiddenLabel ? null : <label htmlFor={label}>{label}</label>}
    </div>
  );
}
