import ActionButton from "./button/ActionButton.jsx";

export default function ActionList({ product }) {
  return (
    <div className="flex items-center">
      {product.isDeal ? (
        <ActionButton href={`/produit/promotion/delete/${product.id}`} color={'bg-orange-300 '}>Remove Deal</ActionButton>
      ) : (
        <ActionButton href={`/produit/promotion/${product.id}`} color={'bg-yellow-300'}>Add Deal</ActionButton>
      )}
      <ActionButton href={`/produit/editer/${product.id}`} color={'bg-neutral-300'}>Editer</ActionButton>
    </div>
  );
}
