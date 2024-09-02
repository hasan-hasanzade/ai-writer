import Image from "next/image";
import styles from "./page.module.scss";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import Advantages from "@/components/Advantages/Advantages";
import FAQ from "@/components/FAQ/FAQ";
import SiteMap from "@/components/SiteMap/SiteMap";
import AdditionalLinks from "@/components/AdditionalLinks/AdditionalLinks";
import About from "@/components/About/About";

export default function Home() {
  return (
    <>
      <HeroBlock />
      <AdditionalLinks />
      <About />
      <Advantages />
      <FAQ />
      <SiteMap />
    </>
  );
}
