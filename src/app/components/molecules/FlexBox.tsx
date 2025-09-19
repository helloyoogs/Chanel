"use client";
import React from "react";

interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function FlexBox({
  children,
  className = "",
  ...rest
}: FlexBoxProps) {
  return (
    <div className={`FlexBox ${className}`} {...rest}>
      {children}
    </div>
  );
}
