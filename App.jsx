import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

// App Component – pura layout ka main container
const App = () => {

  // Agar aapko state chahiye ho future me, to useState yaha already import hai
  // (Abhi koi state use nahi ki gayi hai)

  return (
    <>
      {/* Sidebar Component – left side navigation */}
      <Sidebar/>

      {/* Main Component – main content area */}
      <Main/>  
    </>
  )
}

export default App
