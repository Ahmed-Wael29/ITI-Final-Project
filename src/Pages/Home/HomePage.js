// rafce => React Arrow Function
import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";



const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider/>
      <HomeCategory />
      <CardProductContainer title={"Best Seller"} btnTitle={"More"} />
      <DiscountSection />
      <CardProductContainer title={"Trending"} btnTitle={"More"} />
      <BrandFeatured title={"Common Brands"} btnTitle={"More Brands"} />
    </div>
  );
};

export default HomePage;
