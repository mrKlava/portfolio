import { SvgEmail, SvgGithub, SvgLinkedin, SvgPhone } from "../../assets/svg/index"

import "./socialbar.scss"


const svgs = [SvgLinkedin, SvgGithub, SvgEmail, SvgPhone]


function SocialBar({ list }) {

  return (
    <div className="social">
      <div className="social-container">
        <ul className="social-list">
          {list.map((item, index) => {
            return <SocialItem key={index} item={item} Icon={svgs[index]} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default SocialBar;


function SocialItem({ item, Icon }) {
  return (
    <li className="social-list_item">
      <a href={item.link} target="_blank" rel="noreferrer">
        <Icon />
      </a>
    </li>
  )
}