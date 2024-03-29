import Image from "next/image";
import { Inter, Sora } from "next/font/google";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TradeMutualUtilitySection from "@/components/sections/TradeMutualUtility";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/Footer";
import Appbar from "@/components/Appbar";
import FixedScrollBar from "@/components/FixedScrollBar";
import HeroSectionMobile from "@/components/sections/HeroSectionMobile";
import FundSection from "@/components/sections/FundSection";
import Head from "next/head";
const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#1d1b29]" style={sora.style} id="body-container">
      <Head>
        <title>TradeMutual</title>
        <meta
          name="description"
          content="Discover the Benefits of Crypto Trading with TradeMutual"/>
      </Head>
      <Appbar />
      <FixedScrollBar />
      <HeroSection />
      <HeroSectionMobile />
      <FundSection />
      <HowItWorks />
      <TradeMutualUtilitySection />
      <FAQSection />
      <Footer />
    </div>
  );
}
