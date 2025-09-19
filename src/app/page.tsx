import { pages } from "@/app/constants/global.constants";
import Link from "next/link";

function getStatusInfo(status: number) {
  switch (status) {
    case 1:
      return { text: "Previous", color: "before:bg-pink-600" };
    case 2:
      return { text: "Progress", color: "before:bg-yellow-600" };
    case 3:
      return { text: "End", color: "before:bg-green-600" };
    default:
      return { text: "Unknown", color: "before:bg-gray-400" };
  }
}

export default function Home() {
  return (
    <div className={"bg-[#2d2d2d] h-full flex justify-center"}>
      <p className={"text-white"}>pc만 작업</p>
      <div className={"w-[1280px] max-w-[calc(100%-2rem)] mt-[100px]"}>
        {pages.map((page, pageIndex) => {
          const { color } = getStatusInfo(page.status);

          return (
            <Link
              href={page.path}
              key={pageIndex}
              className={`page_item ${color}`}
            >
              <div
                className={`page_status 
                ${
                  page.status === 1
                    ? "bg-pink-600"
                    : page.status === 2
                    ? "bg-yellow-600"
                    : "bg-green-600"
                }
    `}
              >
                {getStatusInfo(page.status).text}
              </div>
              {page.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
