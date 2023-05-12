import InputText from "@/components/general/form/InputText.jsx";
import InputFloat from "@/components/general/form/InputFloat.jsx";
import InputList from "@/components/general/form/InputList.jsx";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";

export default function EditProduct({product, categories}) {
  const router = useRouter()

  const [flash, setFlash] = useState([])

  const addFlash = (message) => {
    setFlash([message])
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      label: event.target.label.value,
      description: event.target.description.value,
      price: parseFloat(event.target.price.value),
      category: {label: event.target.category.value},
      isDeal: false,
      isArchive: false,
    };
    const JSONdata = JSON.stringify(data);
    console.log(data, JSONdata);
    
    const endpoint = `http://api-mercadona.test/api/product/${product.id}`;
    
    const options = {
      method: "PUT",
      body: JSONdata,
    };
    
    const response = await fetch(endpoint, options);
    if(response.ok){
      addFlash(<SuccessFlashMessage key='i'>Le produit a été mis à jour avec succes !</SuccessFlashMessage>)
    }else{
      addFlash(<DangerFlashMessage key='i'>Il y a un probleme pour la mise à jour du produit</DangerFlashMessage>)
    }
    
  };

  const categoryList = []
  categories.forEach((element) => categoryList.push(element.label))

  return (
    <section>
      <h1>Ajouter un nouveau produit</h1>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputText name="label" value={product.label}>Label du produit</InputText>
        <InputText name="description" value={product.description}>Description du produit</InputText>
        <InputFloat name="price" value={product.price}>Prix</InputFloat>
        <InputList name='category' list={categoryList} value={product.category.label}>Choisir une catégorie</InputList>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export async function getServerSideProps({params}) {
  const res1 = await fetch(`http://api-mercadona.test/api/product/${params.id}`);
  const res2 = await fetch(`http://api-mercadona.test/api/category`);
  const product = await res1.json()
  const categories = await res2.json()
   return {
    props: {
      product,
      categories
    }
   }
}

