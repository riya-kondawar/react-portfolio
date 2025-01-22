import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import ScrambleText from './components/ScrambleText/ScrambleText'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <hr />
      <ScrambleText />
      <hr />
      <Hero />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </ div>
  )
}

export default App
