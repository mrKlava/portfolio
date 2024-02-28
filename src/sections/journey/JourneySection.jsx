import React, { forwardRef } from "react"

import { Card, InfoBar } from "../../components"
import { Button, Title } from "../../ui"

import "./journey.scss";



const JourneySection = forwardRef(function JourneySection({ data }, ref) {
  return (
    <section id="journey" className="journey" ref={ref}>
      <div className="container">
        <div className="section-container">
          <Title text={data.title} />
          <div className="journey-content">
            {data.cards.map((item, index) => {
              return (
                <JourneyCard
                  className="journey-content_item"
                  key={index}
                  item={item}
                  number={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
})

export default JourneySection;

function JourneyCard({ className, item, number }) {
  const isOdd = number % 2 !== 0 ? "odd" : "";

  return (
    <Card className={`${className} ${isOdd}`}>
      <Title className="journey-card_title" text={item.title} type="card" />
      <div className="journey-card_subtitle">{item.subtitle}</div>
      <div className="journey-card_description">
        {item.description} <br />
        ...
      </div>
      <InfoBar className="journey-card_info" list={item.infobar} />
      <Button link={item.link} type="tertiary">find out more</Button>
    </Card>
  );
}
