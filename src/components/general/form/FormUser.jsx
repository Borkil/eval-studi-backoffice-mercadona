import SubmitButton from "../button/SubmitButton.jsx";
import FormLayout from "./FormLayout.jsx";
import InputText from "./InputText.jsx";

export default function FormUser({onSubmit, user}){
  const email = user? user.email : null
  return(
    <FormLayout>
      <form onSubmit={onSubmit}>
        <InputText name="email" value={email}>Email</InputText>
        <InputText name="password">Mot de passe</InputText>
        <fieldset>
          <legend>Choisir un role</legend>
        </fieldset>
        <div>
          <input type="radio" id="user" name="roles" value="ROLE_USER" />
          <label htmlFor="user">Simple utilisateur</label>
        </div>
        <div>
          <input type="radio" id="admin" name="roles" value="ROLE_ADMIN" />
          <label htmlFor="admin">Administrateur</label>
        </div>

        <SubmitButton>Valider</SubmitButton>
      </form>
    </FormLayout>
  )
}