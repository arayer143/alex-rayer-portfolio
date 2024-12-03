

import Footer from "@/components/footer";
import HeroSection from "@/components/Home Page/hero-section";
import AboutMe from "@/components/Home Page/about-me";
import PortfolioSection from "@/components/Home Page/portfolio-section";
import Navbar from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";



export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Navbar />

    
  <main className="flex-3">

        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <HeroSection />
          <AboutMe />
          <PortfolioSection />
          <ContactSection />

          <Footer />
       
        </section>


     








    </main>


  </div>
)
}