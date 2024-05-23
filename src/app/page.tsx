import Footer from "@/components/pages/main/Footer";
import Header from "@/components/pages/main/Header";
import Main from "@/components/pages/main/Main";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full h-screen relative">
        {/* <Image
        src="/bg.jpg"
        alt="bacground"
        width={1980}
        height={1080}
        className="absolute top-0 left-0 w-full h-screen z-[-1]"
      /> */}
        <Main />
        <Footer />
      </main>
    </>
  );
}
