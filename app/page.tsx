export const dynamic = 'force-dynamic'

import Discount from "./components/banners/Discount";
import DoubleBanner from "./components/banners/DoubleBanner";
import SaleBanner from "./components/banners/SaleBanner";
import Categories from "./components/categories/Categories";
import Hero from "./components/hero/Hero";
import NewsMarqueeSlider from "./components/NewsMarqueeSlider";
import SaleProsuctsSlider from "./components/sliders/SaleProsuctsSlider";
import PopularProsuctsSlider from "./components/sliders/PopularProsuctsSlider";
import getPopularProducts from "./actions/sliders/getPopularProducts";
import getSaleProducts from "./actions/sliders/getSaleProducts";
import getCurrentUser from "./actions/getCurrentUser";


export default async function Home() {
  const currentUser = await getCurrentUser()
  const popularProducts = await getPopularProducts()
  const saleProducts = await getSaleProducts()
  
  return (
    <>
      <Hero />
      {/* @ts-ignore */}
      <Categories products={popularProducts}/>
      <Discount />
      {/* @ts-ignore */}
      <SaleProsuctsSlider currentUser={currentUser} saleProducts={saleProducts} />
      <NewsMarqueeSlider />
      <DoubleBanner />
      <SaleBanner />
      {/* @ts-ignore */}
      <PopularProsuctsSlider currentUser={currentUser} popularProducts={popularProducts} />
    </>
  )
}
