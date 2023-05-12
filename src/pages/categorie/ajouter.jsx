import InputText from "@/components/general/form/InputText.jsx";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";

export default function AddCategory() {
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

    const endpoint = "http://api-mercadona.test/api/category";

    const options = {
      method: "POST",
      body: JSONdata,
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
    <section>
      <h1>Ajouter une nouvelle catégorie</h1>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputText name="label">Label de la catégorie</InputText>
        <input type="submit" value="Ajouter" />
      </form>
    </section>
  );
}
