import InputText from "./InputText.jsx";
import InputFloat from "./InputFloat.jsx";
import InputList from "./InputList.jsx";
import SubmitButton from "../button/SubmitButton.jsx";
import FormLayout from "./FormLayout.jsx";

export default function FormEditProduct({ onSubmit, categoryList, product }) {
  return (
    <FormLayout>
      <form onSubmit={onSubmit}>
        <InputText name="label" value={product.label}>Label du produit</InputText>
        <InputText name="description" value={product.description}>Description du produit</InputText>
        <InputFloat name="price" value={product.price}>Prix</InputFloat>
        <InputList name="category" value={product.category.label} list={categoryList}>
          Choisir une catégorie
        </InputList>
        <div>
          <input type="file" name="image" id="imageFile" />
        </div>
        <SubmitButton>Valider les modification</SubmitButton>
      </form>
    </FormLayout>
  );
}
