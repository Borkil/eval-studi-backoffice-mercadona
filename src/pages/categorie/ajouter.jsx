import { useState } from "react";
import { useSession } from "next-auth/react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import SectionHeaderNoButton from "@/components/general/section/SectionHeaderNoButton.jsx";
import SectionLayout from "@/components/general/section/SectionLayout.jsx";
import FormCategory from "@/components/general/form/FormCategory.jsx";


export default function AddCategory() {
  const [flash, setFlash] = useState([]);
  const { data: session, status } = useSession()

  const addFlash = (message) => {
    setFlash([message]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      label: event.target.label.value,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_URL_API + "/category";

    const options = {
      method: "POST",
      body: JSONdata,
      headers: {
        Authorization : `Bearer ${session.user.token} `
      }
    };

    const response = await fetch(endpoint, options);
    if (response.ok) {
      addFlash(
        <SuccessFlashMessage key="i">
          La categorie a été créer avec succes !
        </SuccessFlashMessage>
      );
    } else {
      addFlash(
        <DangerFlashMessage key="i">
          Il y a un probleme pour la creation de la category
        </DangerFlashMessage>
      );
    }
  };

  return (
    <SectionLayout>
      <SectionHeaderNoButton title={'Ajouter une nouvelle catégorie'}/>
      {flash}
      <FormCategory onSubmit={handleSubmit}/>
    </SectionLayout>
  );
}
