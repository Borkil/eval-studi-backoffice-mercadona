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
      <main>
        <section>
          <div className="flex justify-between">
            <h2 className="font-bold text-3xl">Gestion des produits</h2>
            <Link href='/produit/ajouter' className="bg-green-600 text-white text-sm rounded self-center px-3 py-1">Ajouter</Link>
          </div>
          <ListData allData={products}/>
        </section>
      </main>
    </>
  );
}
