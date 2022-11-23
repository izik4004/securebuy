import AddedServices from "../components/AddedServices";
import BestSeller from "../components/BestSeller";
import Feature from "../components/Feature";
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
      <FlashDeals/>
      <BestSeller/>
      <Feature/>
      <AddedServices/>
    </div>
  );
};

export default Home;
