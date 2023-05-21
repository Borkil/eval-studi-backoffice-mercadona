import ListData from "@/components/general/ListData.jsx";
import { useProducts } from "@/swr/product/useProducts.js";
import { useState } from "react";
import { SectionHeader } from "@/components/general/section/SectionHeader.jsx";
import SectionLayout from "@/components/general/section/SectionLayout.jsx";
import FilterButton from "@/components/general/button/FilterButton.jsx";


export default function Produit() {
  const { products } = useProducts();
  const [filter, setFilter] = useState("all");
 

  if (!products) return <div>Loading..!</div>;

  const listProducts = [];
  products.forEach((product) => {
    if (filter === "all") {
      listProducts.push(product);
    } else if (filter === "deal" && product.isDeal) {
      listProducts.push(product);
    } else if (filter === "archive" && product.isArchive) {
      listProducts.push(product);
    } else if (
      filter === "sale" &&
      product.isDeal === false &&
      product.isArchive === false
    ) {
      listProducts.push(product);
    }
  });

  return (
    <>
      <SectionLayout>
        <SectionHeader title={'Gestion des produits'} href={"/produit/ajouter"} />
        <div className="my-4 ">
          <FilterButton onClick={() => setFilter("all")}>Tous</FilterButton>
          <FilterButton onClick={() => setFilter("sale")}>En vente</FilterButton>
          <FilterButton onClick={() => setFilter("deal")}>Promo</FilterButton>
          <FilterButton onClick={() => setFilter("archive")}>Archive</FilterButton>
        </div>
        <ListData products={listProducts} />
      </SectionLayout>
    </>
  );
}
