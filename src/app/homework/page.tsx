import React from 'react'
import HeroBlock from '@/components/HeroBlock/HeroBlock';
import Advantages from '@/components/Advantages/Advantages';
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Reviews from "@/components/Reviews/Reviews";
import FAQ from '@/components/FAQ/FAQ';
import SiteMap from '@/components/SiteMap/SiteMap';

const page = () => {
  return (
    <>
      <HeroBlock isFocused={true} isUploaded={true} isSearched={true}/>
      <Advantages />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <SiteMap />
    </>
  )
}

export default page

