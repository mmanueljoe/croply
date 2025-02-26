import About from "../components/About/About"
import AsBuyer from "../components/AsBuyer/AsBuyer"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import WhyChoose from "../components/WhyChoose/WhyChoose"


const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <WhyChoose />
        <AsBuyer />
    </>
  )
}

export default Home