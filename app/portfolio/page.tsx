import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PortfolioPage from "@/components/Portfolio Page/portfolio-page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PortfolioPage />
      </main>
      <Footer />
    </div>
  )
}

