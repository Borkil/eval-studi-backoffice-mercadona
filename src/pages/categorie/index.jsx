import CategoryList from "@/components/category/CategoryList.jsx";
import Link from "next/link.js";

export default function index({ categories }) {
  console.log(categories);
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl">Gestion des catégories</h2>
        <Link
          href="/categorie/ajouter"
          className="bg-green-600 text-white text-sm rounded self-center px-3 py-1"
        >
          Ajouter
        </Link>
      </div>
      <CategoryList categories={categories} />
    </section>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_API + "/category");
  const categories = await res.json();

  return {
    props: {
      categories: categories,
    },
  };
}
