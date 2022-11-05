import React from "react"
import { SvgEmail, SvgGithub, SvgLinkedin, SvgPhone } from "../../assets/svg";
import './socialbar.scss'

function SocialBar() {
    const objSocial = [
        { svg: <SvgGithub />, link: 'https://github.com/mrKlava' },
        { svg: <SvgLinkedin />, link: 'https://www.linkedin.com/in/artursklava/' },
        { svg: <SvgEmail />, link: 'placeholder@gmail.com' }, 
        { svg: <SvgPhone />, link: '+33132423242' }
    ]

  return (
    <div className="social">
      <div className="social-container">
        <ul className="social-list">
            { objSocial.map( (item, index) => {
                return <SocialItem key={index} item={item} />
            } ) }
        </ul>
      </div>
    </div>
  )
}

export default SocialBar;

function SocialItem({item}) {

  return (
    <li className="social-list_item">
      <a href={item.link} target="_blank">
        {item.svg}
      </a>
    </li>
  )
}
