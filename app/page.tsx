import Discount from "./components/banners/Discount";
import Categories from "./components/categories/Categories";
import Hero from "./components/hero/Hero";
import NewsMarqueeSlider from "./components/NewsMarqueeSlider";
import ProductSlider from "./components/products/ProductSlider";


export default function Home() {
  
  return (
    <>
      <Hero />
      <Categories />
      <Discount />
      <ProductSlider />
      <NewsMarqueeSlider />
    </>
  )
}
