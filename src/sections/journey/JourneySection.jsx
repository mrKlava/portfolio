import React from "react";
import { Card, InfoBar } from "../../components";
import { Button, Title } from "../../ui";

import "./journey.scss";

function JourneySection() {
  const data = {
    title: "my it journey",
    cards: [
      {
        title: "la fabrique du numerique paloise",
        subtitle: "Intégrateur Développeur Web - Studing",
        description:
          "L’Intégrateur développeur web développe ou fait évoluer des applications orientées web, ou web mobile ou les deux à la fois, en respectant les normes et standards reconnus par",
        infobar: ["2022-2024", "Diploma bac +2", "Web development"],
        link: "#",
      },
      {
        title: "Harvard University - edx online",
        subtitle: " Introduction to Computer Science - Online Course",
        description:
          "L’Intégrateur développeur web développe ou fait évoluer des applications orientées web, ou web mobile ou les deux à la fois, en respectant les normes et standards reconnus par",
        infobar: ["2022-2023", "Certificate", "Computer science"],
        link: "#",
      },
      {
        title: "freeCodeCamp.org",
        subtitle: "JavaScript Algorithms and Data Structures - Online Course",
        description:
          "L’Intégrateur développeur web développe ou fait évoluer des applications orientées web, ou web mobile ou les deux à la fois, en respectant les normes et standards reconnus par",
        infobar: ["2022", "Certificate", "JavaScript"],
        link: "#",
      },
      {
        title: "jetbrains academy",
        subtitle: "Frontend Core - Online Course",
        description:
          "L’Intégrateur développeur web développe ou fait évoluer des applications orientées web, ou web mobile ou les deux à la fois, en respectant les normes et standards reconnus par",
        infobar: ["2022", "Certificate", "Frontend Web development"],
        link: "#",
      },
      {
        title: "ecenta baltic labs",
        subtitle: "SAP Consultant (Frontend UI/UX Web developer) - Work",
        description:
          "L’Intégrateur développeur web développe ou fait évoluer des applications orientées web, ou web mobile ou les deux à la fois, en respectant les normes et standards reconnus par",
        infobar: ["2021", "References", "Frontend Web development"],
        link: "#",
      },
      {
        title: "first steps ...",
        subtitle: "Udemy, Youtube, Modern Javascript - Self learning",
        description:
          "L’Intégrateur développeur web développe ou fait évoluer des applications orientées web, ou web mobile ou les deux à la fois, en respectant les normes et standards reconnus par",
        infobar: ["2020", "N/A", "Basics of Frontend Web development"],
        link: "#",
      },
    ],
  };

  return (
    <section id='journey' className="journey">
      <div className="container">
        <div className="section-container">
          <Title text={data.title} />
          <div className="journey-content">
            { 
                data.cards.map( (item, index) => {
                    return <JourneyCard className='journey-content_item' key={index} item={item} number={index} />
                }) 
            }

          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;


function JourneyCard({className, item, number}) {
    const isOdd = (number % 2 !== 0) ? 'odd' : ''

    return (
        <Card className={`${className} ${isOdd}`}>
            <Title className="journey-card_title" text={item.title} type='card'/>
            <div className="journey-card_subtitle">{item.subtitle}</div>
            <div className="journey-card_description">{item.description} <br/>...</div>
            <InfoBar className='journey-card_info' list={item.infobar}/>
            <Button type='tertiary'>find out more</Button>
        </Card>
    )
}