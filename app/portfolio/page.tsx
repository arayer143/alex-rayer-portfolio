import AboutPage from "@/components/About/about-page";
import Footer from "@/components/footer";

import Navbar from "@/components/navbar";
import PortfolioPage from "@/components/Portfolio Page/portfolio-page";

export default function Home() {
    return (
  
      <div className="flex flex-col min-h-screen">
  
<Navbar />
  
      
    <main className="flex-3">
  
          <section className="w-full bg-gray-100 dark:bg-gray-800">

<PortfolioPage />
      
         <Footer />
          </section>
  
  
       
  
  
  
  
  
  
  
  
      </main>
  
  
    </div>
  )
  }