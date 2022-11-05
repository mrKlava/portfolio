import React from "react"
import "./card.scss"

function Card({ children, terTitle, terSubtitle, terText }) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-inner">
          {(terTitle || terSubtitle || terText) ? <CardTerminal obj={{terTitle, terSubtitle, terText}} /> : null}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card;

function CardTerminal({obj}) {
  return (
    <div className="card-terminal">
      <div className="card-terminal_controls">

        <svg className='terminal-btn --close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
        <svg className='terminal-btn --minima' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
      </div>
      <div className="card-terminal_title">
        <span className="terminal-line">root@user-kali:</span> ~$ {obj.terTitle}
      </div>
      <div className="card-terminal_subtitle">
        {obj.terSubtitle} <br /> ...
      </div>
      <div className="card-terminal_text">{obj.terText}</div>
      <div className="card-terminal_end">
        <span className="terminal-line">root@user-kali:</span> ~$ |
      </div>
    </div>
  )
}
