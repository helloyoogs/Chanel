import React from "react";

interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
  isBottomLine?: boolean;
  isMarker?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  children,
  isBottomLine = true,
  isMarker = true,
  className = "",
}: SectionTitleProps) => {
  return (
    <div
      className={`flex justify-between items-center ${
        isBottomLine ? "border-b border-gray_200 pb-[0.563rem]" : ""
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        {isMarker && <div className="bg-primary w-1 h-4" />}
        {/* 250818 System Information 팝업 추가 및 분리 */}
        <div className="font-LGSMHATB text-[1rem]">{title}</div>
      </div>
      {children}
    </div>
  );
};

export default SectionTitle;
