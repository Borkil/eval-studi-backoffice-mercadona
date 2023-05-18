import InputText from "@/components/general/form/InputText.jsx";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";


export default function AddUser(){
  const { data: session, status } = useSession()
  const [flash, setFlash] = useState([])
  
  
  const addFlash = (message) => {
    setFlash([message])
  }    
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      roles: [event.target.roles.value],
    };

    console.log(data)

    const JSONdata = JSON.stringify(data);
    const endpoint = process.env.NEXT_PUBLIC_URL_API + "/user"

    const options = {
      method: "POST",
      body: JSONdata,
      headers: {
        Authorization : `Bearer ${session.user.token} `
      }
    };
    
    const response = await fetch(endpoint, options);
    if(response.ok){
      addFlash(<SuccessFlashMessage key='i'>L utilisateur a été créé avec success !</SuccessFlashMessage>)
    }else{
      addFlash(<DangerFlashMessage key='i'>Il y a un probleme pour la creation de l utilisateur</DangerFlashMessage>)
    }
    
  };


  return(
    <section>
      <section>
      <h1>Ajouter un utilisateur</h1>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputText name="email">Email</InputText>
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

        <button type="submit">Submit</button>
      </form>

    </section>
    </section>
  )
}