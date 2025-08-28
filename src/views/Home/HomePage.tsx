

import HeroImage from './components/HeroImage'
import HeroSlider from './components/Slider'
import LegacySection from './components/LegacySection'
import BusinessesSection from './components/BusinessSection'
import MediaSection from './components/MediaSection'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <HeroImage />
      <LegacySection />
      <BusinessesSection />
      <MediaSection />
    </>
  )
}

export default Home
