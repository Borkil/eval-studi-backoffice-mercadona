import ListData from "@/components/general/ListData.jsx";
import Link from "next/link.js";

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

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_API + "/product");
  const products =  await res.json();
   return {
    props: {
      products,
    }
   }
}