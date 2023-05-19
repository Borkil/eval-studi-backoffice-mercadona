import InputNumber from "@/components/general/form/InputNumber.jsx";
import InputDate from "@/components/general/form/InputDate.jsx";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";
import { useRouter } from "next/router.js";
import { useProduct } from "@/swr/product/useProduct.js";

export default function EditDealProduct() {
  const router = useRouter();
  const { product, session } = useProduct(router.query.id);
  const [flash, setFlash] = useState([]);
  const [dealPrice, setDealPrice] = useState();

  const calculDealPrice = (price, percent) => {
    setDealPrice(reducePrice(price, percent));
  };

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
    <section>
      <h1>Mettre un produit en promotion</h1>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputDate name="finishDealAt" required={true}>
          Date de fin de la promotion
        </InputDate>
        <InputNumber
          name="percentage"
          onChange={(event) => {
            calculDealPrice(product.price, event.target.value);
          }}
          required={true}
        >
          Pourcentage de réduction
        </InputNumber>
        <InputNumber
          name="priceDeal"
          readOnly={true}
          value={dealPrice}
          step={"0,01"}
        >
          Nouveau prix
        </InputNumber>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function reducePrice(price, percent) {
  return Math.round(price * (1 - percent / 100) * 100) / 100;
}
