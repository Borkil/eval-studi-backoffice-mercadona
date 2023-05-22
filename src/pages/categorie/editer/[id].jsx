import { useState } from "react";
import { useSession } from "next-auth/react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import { useRouter } from "next/router.js";
import { useCategory } from "@/swr/category/useCategory.js";
import SectionHeaderNoButton from "@/components/general/section/SectionHeaderNoButton.jsx";
import SectionLayout from "@/components/general/section/SectionLayout.jsx";
import FormCategory from "@/components/general/form/FormCategory.jsx";

export default function EditCategory() {
  const router = useRouter();
  const {category} = useCategory(router.query.id)
  const [flash, setFlash] = useState([]);
  const { data: session, status } = useSession()

  if(!category) return <div>Loading...!</div>
  
  const addFlash = (message) => {
    setFlash([message]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      label: event.target.label.value,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_URL_API + "/category/" + category.id;

    const options = {
      method: "PUT",
      body: JSONdata,
      headers: {
        Authorization : `Bearer ${session.user.token} `
      }
    };

    const response = await fetch(endpoint, options);
    if (response.ok) {
      addFlash(
        <SuccessFlashMessage key="i">
          La categorie a été mise à jour avec succes !
        </SuccessFlashMessage>
      );
    } else {
      addFlash(
        <DangerFlashMessage key="i">
          Il y a un probleme pour la mise à jour de la catégorie
        </DangerFlashMessage>
      );
    }
  };

  return (
    <SectionLayout>
      <SectionHeaderNoButton title={'Modifier une categorie'}/>
      {flash}
      <FormCategory onSubmit={handleSubmit} category={category.label}/>
    </SectionLayout>
  );
}
