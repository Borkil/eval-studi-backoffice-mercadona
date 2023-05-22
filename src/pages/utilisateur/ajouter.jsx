import { useSession } from "next-auth/react";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import SectionLayout from "@/components/general/section/SectionLayout.jsx";
import SectionHeaderNoButton from "@/components/general/section/SectionHeaderNoButton.jsx";
import FormUser from "@/components/general/form/FormUser.jsx";



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
    <SectionLayout>
      <SectionHeaderNoButton title={'Ajouter un utilisateur'}/>
      {flash}
      <FormUser onSubmit={handleSubmit} />
    </SectionLayout>
  )
}