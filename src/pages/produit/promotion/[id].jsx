import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import { useRouter } from "next/router.js";
import { useProduct } from "@/swr/product/useProduct.js";
import SectionHeaderNoButton from "@/components/general/section/SectionHeaderNoButton.jsx";
import SectionLayout from "@/components/general/section/SectionLayout.jsx";
import FormAddDeal from "@/components/general/form/FormAddDeal.jsx";

export default function EditDealProduct() {
  const router = useRouter();
  const { product, session } = useProduct(router.query.id);
  const [flash, setFlash] = useState([]);
  

  const addFlash = (message) => {
    setFlash([message]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      label: product.label,
      description: product.description,
      price: product.price,
      category: product.category,
      finishDealAt: event.target.finishDealAt.value,
      percentage: parseInt(event.target.percentage.value),
      priceDeal: parseFloat(event.target.priceDeal.value),
      isDeal: true,
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
    const error = await response.json();
    if (response.ok) {
      addFlash(
        <SuccessFlashMessage key="i">
          Le produit a été mis en promotion
        </SuccessFlashMessage>
      );
    } else {
      addFlash(
        <DangerFlashMessage key="i">
          Il y a un probleme pour la mise en promotion du produit
        </DangerFlashMessage>
      );
      console.log(error);
    }
  };

  return (
    <SectionLayout>
      <SectionHeaderNoButton title={'Ajouter un promotion sur un produit'}/>
      {flash}
      <FormAddDeal onSubmit={handleSubmit} product={product}/>
    </SectionLayout>
  );
}
