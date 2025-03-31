import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-screen h-screen py-8 px-10 gap-20 sm:gap-24 md:gap-28 bg-mainBg flex flex-col items-center justify-start">
      <Navbar />
      <Hero />
    </main>
  );
}
