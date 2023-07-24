import Discount from "./components/banners/Discount";
import DoubleBanner from "./components/banners/DoubleBanner";
import SaleBanner from "./components/banners/SaleBanner";
import Categories from "./components/categories/Categories";
import Hero from "./components/hero/Hero";
import NewsMarqueeSlider from "./components/NewsMarqueeSlider";
import SaleProsuctsSlider from "./components/sliders/SaleProsuctsSlider";
import PopularProsuctsSlider from "./components/sliders/PopularProsuctsSlider";
import Footer from "./components/footer/Footer";


export default function Home() {
  
  return (
    <>
      <Hero />
      <Categories />
      <Discount />
      <SaleProsuctsSlider />
      <NewsMarqueeSlider />
      <DoubleBanner />
      <SaleBanner />
      <PopularProsuctsSlider />
      <Footer />
    </>
  )
}
