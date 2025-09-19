"use client";

import { selectBoxDummyData } from "@/app/constants/global.constants";
import { ReactNode, useEffect, useState } from "react";
import { isNull } from "@/app/utils/utils";
import FlexBox from "@/app/components/molecules/FlexBox";

interface SelectBoxProps {
  size?: "md" | "lg";
  id: string;
  className?: string;
  list?: { title: string; value: number }[];
}

export default function SelectBox({
  size = "md",
  id,
  className = "",
  list = undefined,
}: SelectBoxProps) {
  const [selectList, setSelectList] =
    useState<{ title: string; value: number }[]>();

  useEffect(() => {
    setSelectList(isNull(list) ? selectBoxDummyData : list);
  }, [list]);

  return (
    <select className={`select ${size} ${className}`} id={id}>
      {selectList?.map((item, index) => (
        <option key={index}>{item.title}</option>
      ))}
    </select>
  );
}
