import ListData from "@/components/general/ListData.jsx";
import Link from "next/link.js";

export async function getStaticProps() {
  const res = await fetch('http://api-mercadona.test/api/product');
  const products =  await res.json();
   return {
    props: {
      products,
    }
   }
}

export default function produit({products}) {

  return (
    <>
      <header>
        <h1 className="text-center text-3xl text-green-600 font-bold py-5">
          MERCADONA
        </h1>
      </header>
      <main>
        <section className="container max-w-5xl">
          <div className="flex justify-between">
            <h2 className="font-bold text-3xl">Gestion des produits</h2>
            <a href='#' className="bg-green-600 text-white text-sm rounded self-center px-3 py-1">Ajouter</a>
          </div>
          <ListData allData={products}/>
        </section>
      </main>
    </>
  );
}
