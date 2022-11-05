import React from 'react'
import { Card } from "./components"
import { Button, Title } from "./ui"

function App() {
  let text = "Praesent lorem ligula, ultrices nec enim rutrum, dictum porttitor lorem. Sed a nunc faucibus, pharetra neque vel, congue ipsum. Quisque mollis ex nisl, in efficitur quam lacinia ac. Phasellus dapibus hendrerit est non viverra. Sed tincidunt pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec viverra justo. Duis a efficitur nulla. Nam venenatis egestas tortor, ut tempus risus dapibus eu. Nunc non aliquam massa."

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
      </div>
    </div>
  )
}

export default App
