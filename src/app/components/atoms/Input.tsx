"use client";

import { isNull } from "@/app/utils/utils";
import FlexBox from "@/app/components/molecules/FlexBox";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  unit?: string;
  inputSize?: string;
}

export default function Input({
  className,
  unit,
  inputSize = "md",
  ...rest
}: InputProps) {
  return (
    <FlexBox
      className={`input_box ${inputSize}  ${
        rest.disabled ? "disabled" : ""
      } ${className}`}
    >
      <input className={"input"} {...rest} />
      {!isNull(unit) && unit}
    </FlexBox>
  );
}
