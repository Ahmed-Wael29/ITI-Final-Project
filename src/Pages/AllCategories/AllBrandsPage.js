import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Utility/Pagination";

const AllBrandsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <div className="admin-content-text-products mt-3">All Brands</div>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrandsPage;
