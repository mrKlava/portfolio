import React from "react";
import { imgFelicaPhoto, imgGoodBoy, imgJetbrains, imgMotivator, imgMrCoffee } from "../../assets/images";
import { Card } from "../../components";
import { Button, Title } from "../../ui";

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
        img: imgJetbrains,
        title: "Jetbrains project",
        link: "#",
      },
      {
        img: imgGoodBoy,
        title: "Project Good-Boy",
        link: "#",
      },
      {
        img: imgFelicaPhoto,
        title: "Felica Photographe",
        link: "#",
      },
      {
        img: imgMrCoffee,
        title: "Mr Coffee",
        link: "#",
      },
      {
        img: imgMotivator,
        title: "Motivator",
        link: "#",
      },
    ],
  };

  return (
    <section id='designs' className="designs">
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
  return (
    <div className={className}>
      <div className="section-container">

        <div className="image-container">
          <div className="overlay"></div>
          <img src={item.img} alt="" />
        </div>

        <div className="designs-card_info">
          <Title text={item.title} type="card" />
          <div className="designs-card_description">
            description
          </div>
          <Button>See design</Button>
        </div>

      </div>
    </div>
  )
}
