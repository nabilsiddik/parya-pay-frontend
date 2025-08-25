import HeroSection from "@/modules/HeroSection"
import PricingSection from "@/modules/home/PricingSection"
import TransactionsSection from "@/modules/TransactionsSection"

const Home = () => {
  return (
    <div className="container mx-auto px-5">
      <HeroSection/>
      <TransactionsSection/>
      <PricingSection/>
    </div>
  )
}

export default Home
