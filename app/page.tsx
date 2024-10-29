
import ContactForm from "@/components/Contact/contactform";
import Footer from "@/components/Footer/footer";
import HeroSection from "@/components/Hero/hero-section";
import AboutMe from "@/components/Home Page/about-me";
import PortfolioSection from "@/components/Home Page/portfolio-section";
import Navbar from "@/components/Navbar/navbar";



export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Navbar />

    
  <main className="flex-3">

        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <HeroSection />
          <AboutMe />
          <PortfolioSection />
          <ContactForm />

          <Footer />
       
        </section>


     








    </main>


  </div>
)
}