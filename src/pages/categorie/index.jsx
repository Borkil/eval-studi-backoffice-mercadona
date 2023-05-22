import CategoryList from "@/components/category/CategoryList.jsx";
import SectionLayout from "@/components/general/section/SectionLayout.jsx";
import { SectionHeader } from "@/components/general/section/SectionHeader.jsx";
import { useCategories } from "@/swr/category/useCategories.js";

export default function Index() {
  const {categories} = useCategories()
  
  if (!categories) return <div>Loading..!</div>

  return (
    <SectionLayout>
      <SectionHeader title={'Gestion des catégories'} href={'/categorie/ajouter'}/>
      <CategoryList categories={categories} />
    </SectionLayout>
  );
}