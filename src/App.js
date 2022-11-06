import React from 'react'
import { Card, SocialBar, StackBar } from "./components"
import { SvgEmail, SvgGithub, SvgLinkedin, SvgPhone } from "./assets/svg"
import { Button, Title } from "./ui"

function App() {
  let text = "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa."

  const objSocial = [
    { svg: <SvgGithub />, link: 'https://github.com/mrKlava' },
    { svg: <SvgLinkedin />, link: 'https://www.linkedin.com/in/artursklava/' },
    { svg: <SvgEmail />, link: 'placeholder@gmail.com' }, 
    { svg: <SvgPhone />, link: '+33132423242' }
  ]

  const arrStack = ['HTML', 'CSS', 'Sass', 'React']

  return (
    <div className="App">
      <div className="container">
        <Title type='card' text='About me'/>
        <Button className="secondary">test</Button>

        <Card terTitle='whoami' terSubtitle='mrKlava' terText={text}>
          <Button>show more</Button>
        </Card>

        <Card>
          {text}
        </Card>

        <SocialBar list={objSocial} />
        <StackBar list={arrStack} />
      </div>
    </div>
  )
}

export default App
