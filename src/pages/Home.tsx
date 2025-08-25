import FeaturesSection from "@/modules/FeaturesSection"
import HeroSection from "@/modules/HeroSection"
import FAQSection from "@/modules/home/FAQSection"
import PricingSection from "@/modules/home/PricingSection"
import TransactionsSection from "@/modules/TransactionsSection"

const Home = () => {
  return (
    <div className="container mx-auto px-5">
      <HeroSection/>
      <TransactionsSection/>
      <FeaturesSection/>
      <PricingSection/>
      <FAQSection/>
    </div>
  )
}

export default Home
