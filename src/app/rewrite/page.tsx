import React from 'react'
import styles from './rewrite.module.scss'
import Advantages from '@/components/Advantages/Advantages';
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Reviews from "@/components/Reviews/Reviews";
import FAQ from '@/components/FAQ/FAQ';
import SiteMap from '@/components/SiteMap/SiteMap';
import Humanizer from '@/components/Humanizer/Humanizer';
const page = () => {
  return (
    <>
      <Humanizer />
      <Advantages />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <SiteMap />
    </>
  )
}

export default page
