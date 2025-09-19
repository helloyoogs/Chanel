import MainBanner from "@/app/containers/main/MainBanner";
import Header from "@/app/components/organisms/Header";
import Footer from "@/app/components/organisms/Footer";

export default function MainPage() {
  return (
    <div className={"page"}>
      <Header />
      <main className={"flex-1 w-full flex flex-col items-center"}>
        <MainBanner />
      </main>
      <Footer />
    </div>
  );
}
