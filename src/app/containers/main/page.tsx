import MainBanner from "@/app/containers/main/MainBanner";

export default function Main() {
  return (
    <div className={"page"}>
      <header>header 영역</header>
      <main className={"flex-1"}>
        <MainBanner />
      </main>
      <footer>footer 영역</footer>
    </div>
  );
}
