import React from 'react'
import { SvgEmail, SvgGithub, SvgLinkedin, SvgPhone } from '../../assets/svg'
import { Title } from "../../ui"
import { Card, SocialBar } from "../../components"

import './contact.scss'

function ContactSection() {
  const data = {
    title: "Want to contact me?",
    card: {
      title: "sudo ./contact -w",
      subtitle: "You have some questions or blalbla?",
    },
    social: [
      {svg: <SvgLinkedin />, type: "link", link: "#"},
      {svg: <SvgGithub />, type: "link", link: "#"},
      {svg: <SvgEmail />, type: "email", link: "#"},
      {svg: <SvgPhone />, type: "number", link: "#"},
    ]
  }

  return (
    <footer id='contacts' className="contact">
      <div className="container">
        <div className="section-container">
          <div className="contact-container">
            <Title className="--contact" type='card' text={data.title}/>
            <Card terTitle={data.card.title} terSubtitle={data.card.subtitle}/>
            <SocialBar list={data.social} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactSection