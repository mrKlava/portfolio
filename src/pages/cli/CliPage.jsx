import React from 'react'
import { Button } from '../../ui'

function CliPage() {
  const handleClick = () => window.location.href = '/'
  
  return (
    <main>
      <Button onClick={handleClick}> Go back</Button>
    </main>
  )
}

export default CliPage