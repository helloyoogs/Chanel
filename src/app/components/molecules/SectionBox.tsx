import React from "react";

interface SectionBoxProps {
  className?: string;
  children: React.ReactNode;
}

export default function SectionBox({
  className = "",
  children,
}: SectionBoxProps) {
  return <div className={"cSectionBox " + className}>{children}</div>;
}
