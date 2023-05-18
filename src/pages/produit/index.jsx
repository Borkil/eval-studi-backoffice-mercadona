import ListData from "@/components/general/ListData.jsx";
import Link from "next/link.js";
import { useState } from "react";

export default function Produit({ products }) {
  const [filter, setFilter] = useState("all");

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
      <main>
        <section>
          <div className="flex justify-between">
            <h2 className="font-bold text-3xl">Gestion des produits</h2>
            <Link
              href="/produit/ajouter"
              className="bg-green-600 text-white text-sm rounded self-center px-3 py-1"
            >
              Ajouter
            </Link>
          </div>
          <div>
            <button onClick={() => setFilter("all")}>Tous</button>
            <button onClick={() => setFilter("sale")}>En vente</button>
            <button onClick={() => setFilter("deal")}>Promo</button>
            <button onClick={() => setFilter("archive")}>Archive</button>
          </div>
          <ListData products={listProducts} />
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_API + "/product");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
