import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from '../components/sections/AboutMe'
import Footer from '../components/sections/Footer'
import Introduction from '../components/sections/Introduction'
import Poster from '../components/sections/Poster'
import Projects from '../components/sections/Projects'

function App() {

	  
  return (
	<div className="app">
	<Navbar />
	<Introduction />
	<AboutMe />
	<Projects />
	<Poster></Poster>
	<Footer />
</div>
  )
}

export default App