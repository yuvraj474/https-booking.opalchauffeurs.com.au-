
import HomeSlider from '../components/HomeSlider.jsx'
import Trust from '../components/trust.jsx'
import OurFleet from '../components/OurFleet.jsx'
import Aboutdri from '../components/Aboutdri.jsx'
import Offerin from '../components/Offerin.jsx'

const Home = () => {
  return (
    <>
      <section id='HomeSlider'>
        <HomeSlider />
      </section>

      <section id='Trust'>
        <Trust />
      </section>

      <section id='OurFleet'>
        <OurFleet />
      </section>

      <section id="Aboutdri">
        <Aboutdri />
      </section>
      
      <section id="Offerin">
        <Offerin />
      </section>
    </>
  )
}

export default Home
