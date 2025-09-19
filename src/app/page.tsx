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
      <div className={"w-[1280px] max-w-[calc(100%-2rem)] mt-[100px]"}>
        {pages.map((pageItem, pageIndex) => {
          const { text, color } = getStatusInfo(pageItem.status);

          return (
            <Link
              href={pageItem.path}
              key={pageIndex}
              className={`page_item ${color}`}
            >
              <div
                className={`page_status 
                ${
                  pageItem.status === 1
                    ? "bg-pink-600"
                    : pageItem.status === 2
                    ? "bg-yellow-600"
                    : "bg-green-600"
                }
    `}
              >
                {getStatusInfo(pageItem.status).text}
              </div>
              {pageItem.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
