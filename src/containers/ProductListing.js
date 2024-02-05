import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     dispatch(setProducts(response.data));
    //   } catch (err) {
    //     console.log("Error ", err);
    //   }
    // };

    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("Products ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
