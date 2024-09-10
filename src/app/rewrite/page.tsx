import React from 'react'
import styles from './rewrite.module.scss'
import LaptopIcon from '@public/laptop-avatar.svg'
import CopyIcon from '@public/copy-icon.svg'
import Advantages from '@/components/Advantages/Advantages';
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Reviews from "@/components/Reviews/Reviews";
import FAQ from '@/components/FAQ/FAQ';
import SiteMap from '@/components/SiteMap/SiteMap';
const page = () => {
  return (
    <div className={styles.rewrite}>
      <div className="container">
        <h2 className={styles.title}>Humanizer</h2>
        <div className={styles.subtitle}>Humanize Text</div>
        <div className={styles.body}>
            <div className={styles.human}>
                <div className={styles.humanBody}>
                    <div className={styles.humanText}><textarea className={styles.humanTextArea} placeholder='Enter or paste your text here and click the “Humanize” button'></textarea></div>
                    <div className={styles.humanBar}>
                    <div className={styles.words}>
                        <span>Words</span>
                        <div className={styles.count}>0/200</div>
                    </div>
                    <div className={styles.btn}>
                        <svg className="styles_active__YRO07" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="24" height="24" fill="#000">
                            <path d="M13.5027,9.50272l1.5426-3.85633c.3447-.86185,1.5647-.86186,1.9094,0l1.5426,3.85633l3.8563,1.54258c.8619.3447.8619,1.5647,0,1.9094l-3.8563,1.5426-1.5426,3.8563c-.3447.8619-1.5647.8619-1.9094,0l-1.5426-3.8563-3.85631-1.5426c-.86185-.3447-.86186-1.5647,0-1.9094L13.5027,9.50272Z"></path>
                            <path className="styles_anim_24_sparks-u-6__UjcCy" d="M19.9297,19.9297l.6611-1.6527c.1478-.3693.6706-.3693.8184,0l.6611,1.6527l1.6527.6611c.3693.1478.3693.6706,0,.8184l-1.6527.6611-.6611,1.6527c-.1478.3693-.6706.3693-.8184,0l-.6611-1.6527-1.6527-.6611c-.3693-.1478-.3693-.6706,0-.8184l1.6527-.6611Z" opacity="0"></path>
                            <path className="styles_anim_24_sparks-u-5__gjOBh" d="M9.92974,1.92974l.66106-1.652714c.1478-.369367.6706-.369368.8184-.000001l.6611,1.652715l1.6527.66108c.3693.14775.3693.67061,0,.81836l-1.6527.66108-.6611,1.65271c-.1478.36937-.6706.36937-.8184,0L9.92974,4.07026L8.27703,3.40918c-.36937-.14775-.36937-.67061,0-.81836l1.65271-.66108Z" opacity="0"></path>
                            <path className="styles_anim_24_sparks-u-4__5pxXa" d="M1.92974,11.9297l.66108-1.6527c.14775-.36934.67061-.36934.81836,0l.66108,1.6527l1.65271.6611c.36937.1478.36937.6706,0,.8184l-1.65271.6611-.66108,1.6527c-.14775.3693-.67061.3693-.81836,0l-.66108-1.6527-1.652714-.6611c-.369367-.1478-.369368-.6706-.000001-.8184l1.652715-.6611Z" opacity="0"></path>
                            <path className="styles_anim_24_sparks-u-3__C893_" d="M19.9297,1.92974l.6611-1.652714c.1478-.369367.6706-.369368.8184-.000001l.6611,1.652715l1.6527.66108c.3693.14775.3693.67061,0,.81836l-1.6527.66108-.6611,1.65271c-.1478.36937-.6706.36937-.8184,0l-.6611-1.65271-1.6527-.66108c-.3693-.14775-.3693-.67061,0-.81836l1.6527-.66108Z" opacity="0"></path>
                            <path className="styles_anim_24_sparks-u-2__SQ4bf" d="M6.59082,16.277l-.66108,1.6527-1.65271.6611c-.36937.1478-.36937.6706,0,.8184l1.65271.6611.66108,1.6527c.14775.3693.67061.3693.81836,0l.66108-1.6527l1.65271-.6611c.36933-.1478.36933-.6706,0-.8184l-1.65271-.6611-.66108-1.6527c-.14775-.3693-.67061-.3693-.81836,0Z">
                            </path>
                            <path className="styles_anim_24_sparks-u-1__mNT1E" d="M3.92974,3.92974l.66108-1.65271c.14775-.36937.67061-.36937.81836,0l.66108,1.65271l1.65271.66108c.36937.14775.36937.67061,0,.81836l-1.65271.66108-.66108,1.65271c-.14775.36937-.67061.36937-.81836,0L3.92974,6.07026L2.27703,5.40918c-.36937-.14775-.36937-.67061,0-.81836l1.65271-.66108Z"></path>
                        </svg>
                        <button>Humanize</button>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.ai}>
                <div className={styles.aiBody}>
                    {/* <div className={styles.aiPlaceholder}>
                        <LaptopIcon width={160} height={95}/>
                        <div className={styles.aiTitle}>Let’s get started</div>
                        <div className={styles.aiSubtitle}>Add your text, click <b>Humanize</b>, and your Humanized text will appear here.</div>
                    </div> */}
                    <div className={styles.aiText}>
                        <div className={styles.generatedText}><span>Get a taste of         height: 100px;        height: 100px;        height: 100px;        height: 100px;        height: 100px;        height: 100px;        height: 100px;'s coming in content cres coming in content cres coming in content cres coming in content cres coming in content cres coming in content cres coming in content cres coming in content cres coming in content creation with our AI-powered rewriting tool. This cutting-edge answer redoes your text making sure it's one-of-a-kind and gripping while keeping the original meaning intact. It's great to avoid penalties for copied content and to make your writing easier to read. Our tool brings in a wide range of words and different ways of building sentences. It's perfect for students, people who write blogs, and working pros. It helps you save time and sparks new ideas. Give our AI rewriting tool a shot today and change your writing without breaking a sweat.</span></div>
                        <div className={styles.aiBar}>
                            <div className={styles.words}>
                                <span>Words</span>
                                <div className={styles.count}>0/200</div>
                            </div>
                            <div className={styles.copy}>
                                <CopyIcon width={22} height={22}/>
                                <span>Copy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Advantages />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <SiteMap />
    </div>
  )
}

export default page
