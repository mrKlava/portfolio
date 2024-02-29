import { useRef } from 'react'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useTranslation } from 'react-i18next'

import { ModalWindow, Navbar } from "../../components"
import { AboutSection, ContactsSection, DesignsSection, JourneySection, WorksSection } from '../../sections'


// init gsap and scroll triger
gsap.registerPlugin(useGSAP, ScrollTrigger);

function MainPage() {
  const { t } = useTranslation();

  // create ref
  const journeyRef = useRef(null)
  const worksRef = useRef(null)

  const tl = gsap.timeline()

  useGSAP(() => {
    const journeyCards = gsap.utils.toArray(".journey-content_item");
    journeyCards.forEach((journeyCard) => {
      tl.from(journeyCard, {
        duration: 3,
        x: 100,
        scale: .7,
        opacity: 0,

        scrollTrigger: {
          trigger: journeyCard,
          animation: journeyCard,
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
    });
    const worksCards = gsap.utils.toArray(".works-content_item");
    worksCards.forEach((worksCard) => {
      tl.from(worksCard, {
        duration: 3,
        y: 100,
        scale: .5,
        opacity: 0,

        scrollTrigger: {
          trigger: worksCard,
          animation: worksCard,
          start: 'top 90%',
          end: 'top 70%',
          scrub: true,
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
    });


  }, journeyRef)

  return (
    <main className="App">
      <Navbar data={ t('data.navbar') } />
      <AboutSection data={ t('data.about') } />
      <JourneySection data={ t('data.journey') } ref={journeyRef} />
      <DesignsSection data={ t('data.designs') } />
      <WorksSection data={ t('data.works') } ref={worksRef} />
      <ContactsSection data={ t('data.contacts') } />
      <ModalWindow />
    </main>
  )
}

export default MainPage