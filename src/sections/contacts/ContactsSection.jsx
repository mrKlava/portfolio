import { Title } from "../../ui"
import { Card, SocialBar } from "../../components"

import './contacts.scss'


function ContactsSection({ data }) {
  return (
    <footer id='contacts' className="contacts">
      <div className="container">
        <div className="section-container">
          <div className="contact-container">
            <Title className="--contact" type='card' text={data.title} />
            <Card terTitle={data.card.title} terSubtitle={data.card.subtitle} />
            <SocialBar list={data.info} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactsSection