import MainBanner from "@/app/containers/main/MainBanner";
import Header from "@/app/components/organisms/Header";

export default function MainPage() {
  return (
    <div className={"page"}>
      <Header />
      <main className={"flex-1"}>
        <MainBanner />
      </main>
      <footer>footer 영역</footer>
    </div>
  );
}
