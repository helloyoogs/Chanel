import MainBanner from "@/app/containers/main/MainBanner";
import Header from "@/app/components/organisms/Header";
import Footer from "@/app/components/organisms/Footer";
import Image from "next/image";
import { newArrivalsList, youtubeList } from "@/app/containers/main/constants";

export default function MainPage() {
  return (
    <div className={"page"}>
      <Header />
      <main className={"flex-1 w-full flex flex-col items-center"}>
        <MainBanner />
        <div
          className={
            "w-[var(--common_width)] max-w-full flex flex-col gap-[50px] mt-[50px]"
          }
        >
          <div className="flex items-center gap-[50px]">
            {youtubeList.map((item, index) => {
              return (
                <iframe
                  key={index}
                  width={"100%"}
                  height={"400"}
                  src={item}
                ></iframe>
              );
            })}
          </div>
          <p className={"font-bold text-[30px] text-center"}>NEW ARRIVALS</p>
          <div className={"flex items-center gap-[16px]"}>
            {newArrivalsList.map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    "border border-[rgba(0,0,0,0)] hover:border-[#aaaaaa]"
                  }
                >
                  <Image key={index} src={item} alt={"mary janes 1"} />
                </button>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
