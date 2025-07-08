import React from "react";
import { useParams } from "react-router";
import ProductDetailCard from "../../components/cards/ProductDetailCard";
import ProdDetailsInfo from "../../components/ProdDetailsInfo";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div className="w-full">
        <ProductDetailCard />
      </div>
      <div>
        <ProdDetailsInfo />
      </div>
    </>
  );
};

export default ProductDetails;
