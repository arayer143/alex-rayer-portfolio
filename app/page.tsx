
import HeroSection from "@/components/Hero/hero-section";
import Navbar from "@/components/Navbar/navbar";



export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Navbar />

    
  <main className="flex-3">

        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <HeroSection />
  
        </section>


     
      <section className="w-full">
    

      </section>







    </main>


  </div>
)
}