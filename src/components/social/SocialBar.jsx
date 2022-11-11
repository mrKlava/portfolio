import React from "react";
import "./socialbar.scss";

function SocialBar({ list }) {
  return (
    <div className="social">
      <div className="social-container">
        <ul className="social-list">
          {list.map((item, index) => {
            return <SocialItem key={index} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SocialBar;

function SocialItem({ item }) {
  return (
    <li className="social-list_item">
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.svg}
      </a>
    </li>
  );
}
