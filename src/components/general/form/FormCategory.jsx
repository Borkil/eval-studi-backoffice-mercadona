import SubmitButton from "../button/SubmitButton.jsx";
import FormLayout from "./FormLayout.jsx";
import InputText from "./InputText.jsx";

export default function FormCategory({onSubmit, category}){
  return(
    <FormLayout>
      <form onSubmit={onSubmit}>
        <InputText name="label" value={category}>Label de la catégorie</InputText>
        <SubmitButton>Valider</SubmitButton>
      </form>
    </FormLayout>
  )
}