import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Feature from "./components/Feature"


function App() {

  return (
    <div className="App font-sans">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default App
