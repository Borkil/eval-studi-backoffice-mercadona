import InputText from "@/components/general/form/InputText.jsx";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import { useRouter } from "next/router.js";
import { useUser } from "@/swr/user/useUser.js";


export default function EditUser() {
  const router = useRouter()
  const { user, session } = useUser(router.query.id)
  const [flash, setFlash] = useState([])

  if (!user) return <div>Loading...</div>
  
  const addFlash = (message) => {
    setFlash([message]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      roles: [event.target.roles.value],
    };

    console.log(data);

    const JSONdata = JSON.stringify(data);
    const endpoint = process.env.NEXT_PUBLIC_URL_API + "/user/" + user.id;

    const options = {
      method: "PUT",
      body: JSONdata,
      headers: {
        Authorization: `Bearer ${session.user.token} `,
      },
    };

    const response = await fetch(endpoint, options);
    if (response.ok) {
      addFlash(
        <SuccessFlashMessage key="i">
          L utilisateur a été mis à jour !
        </SuccessFlashMessage>
      );
    } else {
      addFlash(
        <DangerFlashMessage key="i">
          Il y a un probleme pour la mise à jour de l utilisateur
        </DangerFlashMessage>
      );
    }
  };

  return (
    <section>
      <h2>Editer un utilisateur</h2>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputText name="email" value={user.email} required={true}>
          Email
        </InputText>
        <InputText name="password" required={true}>
          Mot de passe
        </InputText>
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

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
