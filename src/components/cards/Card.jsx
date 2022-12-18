import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SvgTerminalClose, SvgTerminalMinimize } from "../../assets/svg";
import { handleModal } from "../../store/reducers/ActionCreators";
import "./card.scss";

function Card({
  children,
  className,
  terTitle,
  terSubtitle,
  terTitleSec,
  terText,
}) {
  return (
    <div className={className ? `card ${className}` : "card"}>
      <div className="card-container">
        <div className="card-inner">
          {terTitle || terSubtitle || terTitleSec || terText ? (
            <CardTerminal
              obj={{ terTitle, terSubtitle, terTitleSec, terText }}
            />
          ) : null}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;

function CardTerminal({ obj }) {
  const [blinking, setBlinking] = useState(false)
  
  const dispatch = useDispatch()
  const closeGui = () => dispatch(handleModal())



  useEffect( () => {
      const blinking = () => setBlinking(!blinking)
      const interval = setInterval( blinking, 600)
    return( () => {
      clearInterval(interval)
    })
  }, [blinking])

  return (
    <div className="card-terminal">
      <div className="card-terminal_controls">
        <SvgTerminalClose onClick={closeGui} className="terminal-btn --close" />
        <SvgTerminalMinimize className="terminal-btn --minimize" />
      </div>
      <div className="card-terminal_title">
        <span className="terminal-line">root@user-kali:</span> ~$ {obj.terTitle}
      </div>
      <div className="card-terminal_subtitle">
        {obj.terSubtitle} <br /> ...
      </div>
      {obj.terTitleSec && (
        <div className="card-terminal_title">
          <span className="terminal-line">root@user-kali:</span> ~${" "}
          {obj.terTitleSec}
        </div>
      )}
      <div className="card-terminal_text">{obj.terText}</div>
      <div className="card-terminal_end">
        <span className="terminal-line">root@user-kali:</span> ~$ <span className={blinking ? 'visible' : 'visible-not'}>|</span>
      </div>
    </div>
  );
}
