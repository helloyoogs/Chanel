"use client";

import { headerMenu } from "@/app/constants/global.constants";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      {headerMenu.map((headerMenu, headerMenuIndex) => {
        return (
          <Link
            href={headerMenu.path}
            key={headerMenuIndex}
            className={`page_item`}
          >
            {headerMenu.name}
          </Link>
        );
      })}
    </header>
  );
}
