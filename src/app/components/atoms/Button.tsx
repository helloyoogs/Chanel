import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "blackLine" | "black" | "primary";
  size?: "md" | "lg";
}

const Button: React.FC<ButtonProps> & { Icon: React.FC<IconProps> } = ({
  children,
  variant = "blackLine",
  size = "md",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`button
      ${variant} ${size} ${rest.className}
      ${rest.disabled ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;

interface IconProps {
  className?: string;
  icon: string;
  buttonHover?: string;
  buttonDisabled?: string;
}

const Icon: React.FC<IconProps> = ({ className = "", icon = "ic_reset" }) => {
  return <div className={`buttonIcon mask-${icon} ${className}`}></div>;
};

Button.Icon = Icon;
