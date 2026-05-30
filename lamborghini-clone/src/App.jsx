import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Models from "./components/Models"
import Cursor from "./components/Cursor"
import Performance from "./components/Performance"
import Gallery from "./components/Gallery"
import Loader from "./components/Loader"
import Parallax from "./components/Parallax"
import Stats from "./components/Stats"
import ParticlesBackground from "./components/ParticlesBackground"
import Cinematic from "./components/Cinematic"
import Footer from "./components/Footer"
import RevealSection from "./components/RevealSection"
import Pinned from "./components/Pinned"
import Marquee from "./components/Marquee"

const App = () => {
  return (
    <>
    <Loader />
    <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>
    <ParticlesBackground />
    <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>
      <Cursor />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Navbar />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Hero />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Intro />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Marquee />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Models />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Performance />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Gallery />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Parallax />
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Stats />  
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Cinematic /> 
      <div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

<RevealSection />
<div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

<Pinned />
<div className="h-[200px] bg-gradient-to-b from-black to-transparent"></div>

      <Footer />
    </>
  )
}

export default App