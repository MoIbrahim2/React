import CoursesSection from "../components/CoursesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroCarousel from "../components/Hero"

function Home() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <CoursesSection />
      <Footer />
    </div>
  )
}

export default Home