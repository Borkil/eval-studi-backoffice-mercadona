import InputText from "./InputText.jsx";
import InputFloat from "./InputFloat.jsx";
import InputList from "./InputList.jsx";
import SubmitButton from "../button/SubmitButton.jsx";
import FormLayout from "./FormLayout.jsx";

export default function FormAddProduct({ onSubmit, categoryList, product }) {
  return (
    <FormLayout>
      <form onSubmit={onSubmit}>
        <InputText name="label">Label du produit</InputText>
        <InputText name="description">Description du produit</InputText>
        <InputFloat name="price">Prix</InputFloat>
        <InputList name="category" list={categoryList}>
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
