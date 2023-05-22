import Link from "next/link.js";
import ActionButton from "../general/button/ActionButton.jsx";

export default function CategoryListItem({ category }) {
  return (
    <div className="flex justify-between p-2 items-center">
      <div className="text-gray-900 text-xl text-bold">
        {category.label}
      </div>
      <ActionButton href={`/categorie/editer/${category.id}`} color={'bg-neutral-300'} >Editer</ActionButton>
    </div>
  );
}
