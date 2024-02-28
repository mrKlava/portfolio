import React from "react";
import Slider from "react-slick";

import { Card } from "../../components";
import { Button, Title } from "../../ui";

// import { Slider } from "react-slick"

import "./designs.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DesignsSection({ data }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,

    autoplaySpeed: 2000,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section id="designs" className="designs">
      <div className="container">

        <div className="section-container">

          <div className="designs-header">
            <div className="designs-header_item">
              <Card
                terTitle={data.card.title}
                terSubtitle={data.card.subtitle}
              />
            </div>
            <div className="designs-header_item">
              <Title text={data.title} />
            </div>
          </div>
        </div>
      </div>

      <div className="designs-content">
        <Slider {...settings}>
          {data.cards.map((item, index) => {
            return (
              <DesignsCard
                key={index}
                item={item}
                className={"designs-content_item"}
              />
            );
          })}
        </Slider>
      </div>


    </section>
  );
}

export default DesignsSection;

function DesignsCard({ className, item }) {
  return (
    <div className={className}>
      <Card>

        <div className="image-container scrollable">
          <div className="overlay"></div>
          <img src={item.img} alt="" />
        </div>

        <div className="designs-card_info">
          <Title text={item.title} type="card" />
          <div className="designs-card_description">{item.description}</div>
          <Button link={item.link} type="tertiary">See design</Button>
        </div>
      </Card>
    </div>
  );
}







// import React from "react";
// import { Card } from "../../components";
// import { Button, Title } from "../../ui";

// import "./designs.scss";

// function DesignsSection({ data }) {
//   return (
//     <section id="designs" className="designs">
//       <div className="container">
//         <div className="section-container">
//           <div className="designs-header">
//             <div className="designs-header_item">
//               <Card
//                 terTitle={data.card.title}
//                 terSubtitle={data.card.subtitle}
//               />
//             </div>
//             <div className="designs-header_item">
//               <Title text={data.title} />
//             </div>
//           </div>
//           <div className="designs-content">
//             {data.cards.map((item, index) => {
//               return (
//                 <DesignsCard
//                   key={index}
//                   item={item}
//                   className={"designs-content_item"}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default DesignsSection;

// function DesignsCard({ className, item }) {
//   return (
//     <div className={className}>
//       <div className="section-container">
//         <div className="image-container scrollable">
//           <div className="overlay"></div>
//           <img src={item.img} alt="" />
//         </div>

//         <div className="designs-card_info">
//           <Title text={item.title} type="card" />
//           <div className="designs-card_description">{item.description}</div>
//           <Button link={item.link}>See design</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
