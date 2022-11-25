import AddedServices from "../components/AddedServices";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import HowItWorks from "../components/HowItWorks";
import Deals from "../components/Deals";

const Index = ({ addToCart, productItems, CartItem }) => {
  return (
    <div>
      <div className="bg-[#F6F7F9]">
        <Hero />
      </div>
      <Section1 />
      <Deals />
      <HowItWorks />
      <FeaturedProduct addToCart={addToCart} productItems={productItems} />
      <Feature />
      <AddedServices />
      <Footer />
    </div>
  );
};

export default Index;
