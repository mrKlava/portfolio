import React from "react";
import { Card, StackBar } from "../../components";
import { Button, Title } from "../../ui";

import "./works.scss";

function WorksSection({ data }) {
  return (
    <section id="works" className="works">
      <div className="container">
        <div className="section-container">
          <div className="works-header">
            <div className="works-header_item">
              <Card
                terTitle={data.card.title}
                terSubtitle={data.card.subtitle}
              />
            </div>
            <div className="works-header_item">
              <Title text={data.title} />
            </div>
          </div>
          <div className="works-content">
            {data.cards.map((item, index) => {
              return (
                <WorksCard
                  key={index}
                  item={item}
                  className={"works-content_item"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksSection;

function WorksCard({ className, item }) {
  return (
    <Card className={className}>
      <Title className="works-card_title" text={item.title} type="card" />
      <div className="works-card_subtitle">{item.subtitle}</div>
      <div className="works-card_description">
        {item.description} <br />
        ...
      </div>
      <StackBar className="works-card_info" list={item.info} />
      <Button link={item.link}>open</Button>
    </Card>
  );
}
