import BestSeller from "../components/BestSeller";
import FlashDeals from "../components/FlashDeals";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import TopSellers from "../components/TopSellers";

const Home = ({productItems}) => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <TopSellers/> */}
      <FlashDeals/>
      <BestSeller/>
      {/* <FlashDeals productItems={productItems} /> */}
      {/* <Product /> */}
    </div>
  );
};

export default Home;
