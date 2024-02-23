import Image from "next/image";
import Navbar from "./components/Navbar";
import OurSolution from "./components/OurSolution";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <div className="bg-black w-full h-[4687px] relative">
      {/* <Navbar /> */}
      <LandingPage />

      <OurSolution />
      <div className="bg-primaryM absolute w-[579px] h-[579px] top-[350px] -left-72 blur-2xl opacity-25 overflow-hidden rounded-full"></div>
      <div className="bg-primaryM absolute w-[579px] h-[579px] bottom-10  right-0 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    </div>
  );
}
