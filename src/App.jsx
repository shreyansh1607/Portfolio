import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
