import React from "react"
import { Card, StackBar } from "../../components"
import { Button, Title } from "../../ui"

import './works.scss'

function WorksSection() {
    const data = {
        title: "my works",
        terminal: {
          title: "sudo ./projects -r",
          subtitle: "Here are some my projects made using different stacks",
        },
        cards: [
          {
            title: "Mongo",
            subtitle: "Web page",
            description: "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa.",
            info: ["HTML", "SCC", "JavaScript", "jQuery"],
            link: "#"
          },
          {
            title: "ActiveBox",
            subtitle: "Web page",
            description: "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa.",
            info: ["HTML", "SCC", "JavaScript", "jQuery"],
            link: "#"
          },
          {
            title: "Felica Photographe",
            subtitle: "Web page",
            description: "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa.",
            info: ["HTML", "Sass", "JavaScript", "React", "i18n"],
            link: "#"
          },
          {
            title: "Outdoor",
            subtitle: "Web page",
            description: "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa.",
            info: ["HTML", "Sass", "JavaScript"],
            link: "#"
          },
          {
            title: "Jetbrains Project",
            subtitle: "Web page",
            description: "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa.",
            info: ["HTML", "SCC", "JavaScript", "React"],
            link: "#"
          },
          {
            title: "Motivator",
            subtitle: "Web page",
            description: "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa.",
            info: ["HTML", "Sass", "JavaScript", "React", "i18n", "Redux", "React Router", "MongoDB"],
            link: "#"
          },
          {
            title: "Hangman",
            subtitle: "Web game",
            description: "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa.",
            info: ["HTML", "SCC", "JavaScript"],
            link: "#"
          },
        ],
      }
      
  return (
    <section id="works" className="works">
      <div className="container">
        <div className="section-container">
          <div className="works-header">
            <div className="works-header_item">
              <Card
                terTitle={data.terminal.title}
                terSubtitle={data.terminal.subtitle}
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
              )
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
            <Title className="works-card_title" text={item.title} type='card'/>
            <div className="works-card_subtitle">{item.subtitle}</div>
            <div className="works-card_description">{item.description} <br/>...</div>
            <StackBar className='works-card_info' list={item.info}/>
            <Button>open</Button>
        </Card>
    )
}
  