import { Card } from "../../components"
import { Title } from "../../ui"

import "./about.scss"


function AboutSection({ data }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-container">
          <Title text={data.title} />
          <div className="about-content">
            <div className="about-content_item">
              <div className="about-image">
                <img src={data.img} alt="" />
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
