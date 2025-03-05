import About from "../components/About/About"
import AsBuyer from "../components/AsBuyer/AsBuyer"
import Blog from "../components/Blog/Blog"
import Hero from "../components/Hero/Hero"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import Navbar from "../components/Navbar/Navbar"
import WhyChoose from "../components/WhyChoose/WhyChoose"
import Ready from "../components/ReadyJoin/Ready"
import Footer from "../components/Footer/Footer"


const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <WhyChoose />
        <AsBuyer />
        <HowItWorks />
        <Blog />
        <Ready />
        <Footer />
    </>
  )
}

export default Home