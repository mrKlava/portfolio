import React from "react"
import { SvgTerminalClose, SvgTerminalMinimize } from "../../assets/svg";
import "./card.scss"

function Card({ children, className, terTitle, terSubtitle, terTitleSec, terText }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-container">
        <div className="card-inner">
          {(terTitle || terSubtitle || terTitleSec || terText) ? <CardTerminal obj={{terTitle, terSubtitle, terTitleSec, terText}} /> : null}
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
        <SvgTerminalClose className='terminal-btn --close' />
        <SvgTerminalMinimize className='terminal-btn --minimize' />
      </div>
      <div className="card-terminal_title">
        <span className="terminal-line">root@user-kali:</span> ~$ {obj.terTitle}
      </div>
      <div className="card-terminal_subtitle">
        {obj.terSubtitle} <br /> ...
      </div>
      <div className="card-terminal_title">
        <span className="terminal-line">root@user-kali:</span> ~$ {obj.terTitleSec}
      </div>
      <div className="card-terminal_text">{obj.terText}</div>
      <div className="card-terminal_end">
        <span className="terminal-line">root@user-kali:</span> ~$ |
      </div>
    </div>
  )
}
