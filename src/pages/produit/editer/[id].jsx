import InputText from "@/components/general/form/InputText.jsx";
import InputFloat from "@/components/general/form/InputFloat.jsx";
import InputList from "@/components/general/form/InputList.jsx";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/firebase.config.js";
import Image from "next/image.js";
import { useRouter } from "next/router.js";
import { useProduct } from "@/swr/product/useProduct.js";
import { useCategories } from "@/swr/category/useCategories.js";

export default function EditProduct() {
  // Récuperation de l'image
  const app = initializeApp(firebaseConfig);
  const storage = getStorage();
  const router = useRouter();
  
  
  //State
  const { product, session } = useProduct(router.query.id);
  const { categories } = useCategories();
  const [url, setUrl] = useState();
  const [flash, setFlash] = useState([]);

  if(!product || !categories)return <div>Loading</div>

   //telechargement de l'image 
  const image = [];

    if(product.image){
      getDownloadURL(
        ref(storage, `${process.env.NEXT_PUBLIC_FIREBASE_PATH}${product.image}`)
      ).then((url) => {
        setUrl(url);
      });
    }else {
      image.push(<p>Le produit n a pas d image, enregistrer en une.</p>);
    }

  if (url) {
    image.push(
      <Image
        src={url}
        width={100}
        height={100}
        alt="product pictures"
        key="image1"
        priority
      />
    );
  }
  
  // Gestion des messages Flash
  const addFlash = (message) => {
    setFlash([message]);
  };

  // submit le formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const storageRef = ref(
      storage,
      `${process.env.NEXT_PUBLIC_FIREBASE_PATH}${file.name}`
    );

    const data = {
      label: event.target.label.value,
      description: event.target.description.value,
      price: parseFloat(event.target.price.value),
      image: file.name,
      category: { label: event.target.category.value },
      isDeal: false,
      isArchive: false,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_URL_API + "/product/" + product.id;

    const options = {
      method: "PUT",
      body: JSONdata,
      headers: {
        Authorization: `Bearer ${session.user.token} `,
      },
    };

    const response = await fetch(endpoint, options);
    if (response.ok) {
      uploadBytes(storageRef, file).then((snapshot) => {
        addFlash(
          <SuccessFlashMessage key="i">
            Le produit a été mis a jour avec succes !
          </SuccessFlashMessage>
        );
      });
    } else {
      addFlash(
        <DangerFlashMessage key="i">
          Il y a un probleme pour la mise à jour du produit
        </DangerFlashMessage>
      );
    }
  };

  // Creation de la liste de categorie pour l'input list du formulaire
  const categoryList = [];
  categories.forEach((element) => categoryList.push(element.label));

  return (
    <section>
      <h1>Ajouter un nouveau produit</h1>
      {flash}
      {image}
      <form onSubmit={handleSubmit}>
        <InputText name="label" value={product.label}>
          Label du produit
        </InputText>
        <InputText name="description" value={product.description}>
          Description du produit
        </InputText>
        <InputFloat name="price" value={product.price}>
          Prix
        </InputFloat>
        <InputList
          name="category"
          list={categoryList}
          value={product.category.label}
        >
          Choisir une catégorie
        </InputList>

        <input type="file" name="image" id="inputImage" />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}