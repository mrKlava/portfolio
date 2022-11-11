import React from "react";
import "./title.scss";

function Title({ className, text, type = "section" }) {
  return type === "card" ? (
    <div className={className ? `title-container --card ${className} ` : "title-container --card"}>
      <div className="title-inner">
        <h4 className="title --blue --card">{text}</h4>
        <h4 className="title --pink --card">{text}</h4>
        <h4 className="title --white">{text}</h4>
      </div>
    </div>
  ) : (
    <div className={className ? `title-container ${className}` : "title-container"}>
      <div className="title-inner">
        <h2 className="title --pink">{text}</h2>
        <h2 className="title --blue">{text}</h2>
        <h2 className="title --white">{text}</h2>
      </div>
    </div>
  );
}

export default Title;
