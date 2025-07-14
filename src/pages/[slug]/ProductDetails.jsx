import React from "react";
import { useParams } from "react-router";
import ProductDetailCard from "../../components/cards/ProductDetailCard";
import ProdDetailsInfo from "../../components/ProdDetailsInfo";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const { user, isLoading } = useSelector((state) => state.auth);
  // if (isLoading) return <p>user state is loading...</p>;

  return (
    <>
      <p>user email: {user.email}</p>
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
