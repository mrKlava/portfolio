import React from 'react'
import { Card, SocialBar, StackBar, InfoBar } from "./components"
import { SvgEmail, SvgGithub, SvgLinkedin, SvgPhone } from "./assets/svg"
import { Button, Title } from "./ui"
import { AboutSection, JourneySection } from './sections'

function App() {
  let text = "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa."

  const arrSocial = [
    { svg: <SvgGithub />, link: 'https://github.com/mrKlava' },
    { svg: <SvgLinkedin />, link: 'https://www.linkedin.com/in/artursklava/' },
    { svg: <SvgEmail />, link: 'placeholder@gmail.com' }, 
    { svg: <SvgPhone />, link: '+33132423242' }
  ]

  const arrInfo = ['2022-2024', 'Diploma +2', 'Web development']

  const arrStack = ['HTML', 'CSS', 'Sass', 'React']

  return (
    <div className="App">
      <AboutSection />
      <JourneySection />
    </div>
  )
}

export default App
