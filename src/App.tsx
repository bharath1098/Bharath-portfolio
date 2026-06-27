import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PersonalDetails from './components/PersonalDetails'
import Career from './components/Career'
import Family from './components/Family'
import Preferences from './components/Preferences'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ConnectButton from './components/ConnectButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PersonalDetails />
        <Career />
        <Family />
        <Preferences />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ConnectButton />
    </>
  )
}
