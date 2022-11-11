import React from "react";
import { SvgCertificate, SvgClock, SvgTag } from "../../assets/svg";
import "./infobar.scss";

function InfoBar({ className, list }) {
  const svgArr = [<SvgClock />, <SvgCertificate />, <SvgTag />];
  return (
    <div className={`${className} info`}>
      <div className="info-container">
        <ul className="info-list">
          {list.map((item, index) => {
            return <InfoItem key={index} item={item} svg={svgArr[index]} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default InfoBar;

function InfoItem({ item, svg }) {
  return (
    <li className="info-list_item">
      {svg} <span>{item}</span>
    </li>
  );
}
