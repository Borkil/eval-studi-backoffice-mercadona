import InputText from "@/components/general/form/InputText.jsx";
import InputFloat from "@/components/general/form/InputFloat.jsx";
import InputList from "@/components/general/form/InputList.jsx";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/firebase.config.js";
import { useCategories } from "@/swr/category/useCategories.js";

export default function NewProduct() {
  const { categories, session } =  useCategories();
  const [flash, setFlash] = useState([])
  if(!categories) return <div>Loading</div>
  const app = initializeApp(firebaseConfig);
  const storage = getStorage();


  const addFlash = (message) => {
    setFlash([message])
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0]
    const storageRef = ref(storage, `${process.env.NEXT_PUBLIC_FIREBASE_PATH}${file.name}`);


    const data = {
      label: event.target.label.value,
      description: event.target.description.value,
      price: parseFloat(event.target.price.value),
      image: file.name,
      category: {label: event.target.category.value},
      isDeal: false,
      isArchive: false,
    };

    
    const JSONdata = JSON.stringify(data);
    const endpoint = process.env.NEXT_PUBLIC_URL_API + "/product"


    const options = {
      method: "POST",
      body: JSONdata,
      headers: {
        Authorization : `Bearer ${session.user.token} `
      }
    };
    
    const response = await fetch(endpoint, options);
    if(response.ok){
      uploadBytes(storageRef, file).then((snapshot) => {
        addFlash(<SuccessFlashMessage key='i'>Le produit a été créer avec succes !</SuccessFlashMessage>)
      });
    }else{
      addFlash(<DangerFlashMessage key='i'>Il y a un probleme pour la creation du produit</DangerFlashMessage>)
    }
    
  };

  const categoryList = []
  categories.forEach((element) => categoryList.push(element.label))



  return (
    <section>
      <h1>Ajouter un nouveau produit</h1>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputText name="label">Label du produit</InputText>
        <InputText name="description">Description du produit</InputText>
        <InputFloat name="price">Prix</InputFloat>
        <InputList name='category' list={categoryList} >Choisir une catégorie</InputList>
        <input type="file" name="image" id="imageFile" />
        <button type="submit">Submit</button>
      </form>

    </section>
  );
}


