import React, { useEffect, useState } from "react";
import HeroSlide from "../components/HeroSlide";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import imgb1 from "../assets/ProductImg/imgb1.jpg";
import "../firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { Button } from "@mui/material";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const productsPerPage = 4;
  const { products, loading, hasMore, loadMoreProducts, totalCount } =
    useProducts(productsPerPage);

  return (
    <div>
      <NavBar />
      <HeroSlide />
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            img={product.images ? product.images[0] : imgb1}
            name={product.name}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
      {loading && <div>Loading...</div>}
      {hasMore && !loading && (
        <Button onClick={loadMoreProducts} className="see-more-btn">
          See More
        </Button>
      )}
    </div>
  );
}
