"use client";

import { headerMenu } from "@/app/constants/global.constants";
import Link from "next/link";
import Image from "next/image";
import chanel_logo from "@/app/assets/img/chanel_logo.svg";

export default function Header() {
  return (
    <header className={"flex items-center gap-[20px] h-[50px] mx-[60px]"}>
      <Link href={"/containers/main"}>
        <Image
          src={chanel_logo}
          alt={"chanel logo"}
          className={"w-[150px] mr-[20px]"}
        />
      </Link>
      {headerMenu.map((headerMenu, headerMenuIndex) => {
        return (
          <Link
            href={headerMenu.path}
            key={headerMenuIndex}
            className={"text-[#999999] text-[14px]"}
          >
            {headerMenu.name}
          </Link>
        );
      })}
    </header>
  );
}
