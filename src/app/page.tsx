import Image from "next/image";
import styles from "./page.module.scss";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import Advantages from "@/components/Advantages/Advantages";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Reviews from "@/components/Reviews/Reviews";
import FAQ from "@/components/FAQ/FAQ";
import SiteMap from "@/components/SiteMap/SiteMap";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBlock />
      <Advantages />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <SiteMap />
    </main>
  );
}
