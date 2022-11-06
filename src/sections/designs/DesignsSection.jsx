import React from "react";
import { Card } from "../../components";
import { Title } from "../../ui";

import "./designs.scss";

function DesignsSection() {
  const data = {
    title: "my designs",
    terminal: {
      title: "sudo ./figma_projects -r",
      subtitle: "Here are some figma designs made by me",
    },
    cards: [
      {
        img: "",
        title: "",
        link: "#",
      },
      {
        img: "",
        title: "",
        link: "#",
      },
      {
        img: "",
        title: "",
        link: "#",
      },
      {
        img: "",
        title: "",
        link: "#",
      },
      {
        img: "",
        title: "",
        link: "#",
      },
    ],
  };

  return (
    <section className="designs">
      <div className="container">
        <div className="section-container">
          <div className="designs-header">
            <div className="designs-header_item">
              <Card
                terTitle={data.terminal.title}
                terSubtitle={data.terminal.subtitle}
              />
            </div>
            <div className="designs-header_item">
              <Title text={data.title} />
            </div>
          </div>
          <div className="designs-content">
            {data.cards.map((item, index) => {
              return (
                <DesignsCard
                  key={index}
                  item={item}
                  className={"designs-content_item"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignsSection;

function DesignsCard({ className, item }) {
  return <Card className={className}></Card>;
}
