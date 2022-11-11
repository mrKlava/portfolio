import React from 'react'
import { Navbar } from "./components"
import { AboutSection, ContactsSection, DesignsSection, JourneySection, WorksSection } from './sections'

import { data } from './assets/data/dataEN'

function App() {

  return (
    <div className="App">
      <Navbar data={data.navbar} />
      <AboutSection data={data.about} />
      <JourneySection data={data.journey} />
      <DesignsSection data={data.designs} />
      <WorksSection data={data.works} />
      <ContactsSection data={data.contacts} />
    </div>
  )
}

export default App
