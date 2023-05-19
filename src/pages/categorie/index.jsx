import CategoryList from "@/components/category/CategoryList.jsx";
import Link from "next/link.js";
import { useCategories } from "@/swr/category/useCategories.js";

export default function Index() {
  const {categories} = useCategories()
  
  if (!categories) return <div>Loading..!</div>

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