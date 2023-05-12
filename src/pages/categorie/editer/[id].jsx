import InputText from "@/components/general/form/InputText.jsx";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";

export default function EditCategory({ category }) {
  const [flash, setFlash] = useState([]);

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
    <section>
      <h1>Mettre a jour la catégorie</h1>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputText name="label" value={category.label} required={true}>
          Label de la catégorie
        </InputText>
        <input type="submit" value="Ajouter" />
      </form>
    </section>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_API + "/category/" + params.id);
  const category = await res.json();
  return {
    props: {
      category,
    },
  };
}
