import React from 'react'
import { imgAbout } from '../../assets/images'
import { Card } from '../../components'
import { Title } from '../../ui'

import './about.scss'


function AboutSection() {

  const data = {
    title: 'about me',
    image: imgAbout,
    card: {
      title: 'whoami',
      titleSec: 'sudo ./about -r',
      subtitle: 'mr Arturs KLAVA - Web developer',
      text: "I will try to be short and straight. I am a really motivated person who is not afraid of challenges and the unknown. I believe that a human is capable of doing everything that he has planned and key for this is - WILL & ACTION. I am interested in developing myself as a high standard specialist in the IT industry. I started my journey from learning basic web developer tools such as HTML5, CSS3 and JS. Have passed courses: JetBrains - \"Frontend Developer\", freeCodeCamp.org - \"JavaScript Algorithms and Data Structures\". \n At this point I am deeply learning JS, React, and started with Redux and TS. Have experience with: HTML5, CSS3 (Less, Sass Bootstrap, Tailwind...), JS (JQuery, VUE, React...), Figma, Git, MongoDB. \n Feel free to contact me for more information according to my skills and experience."
    }
  }

  return (
    <section id='about' className='about'>
        <div className="container">
          <div className="section-container">
            <Title text={data.title}/>
            <div className="about-content">
              <div className="about-content_item">
                <div className="about-image">
                  <img src={data.image} alt="" />
                </div>
              </div>
              <div className="about-content_item">
                <Card 
                  terTitle={data.card.title} 
                  terSubtitle={data.card.subtitle}
                  terTitleSec={data.card.titleSec}
                  terText={data.card.text} 
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection