import InputNumber from "@/components/general/form/InputNumber.jsx";
import InputDate from "@/components/general/form/InputDate.jsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SuccessFlashMessage from "@/components/general/flash/SuccessFlashMessage.jsx";
import DangerFlashMessage from "@/components/general/flash/DangerFlashMessage.jsx";

export default function Editer({ product }) {
  const router = useRouter();

  const [flash, setFlash] = useState([]);
  const [dealPrice, setDealPrice] = useState()

  const calculDealPrice = (price, percent) => {
    setDealPrice(reducePrice(price, percent))
  }

  const addFlash = (message) => {
    setFlash([message]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      label: product.label,
      description : product.description,
      price: product.price,
      finishDealAt: event.target.finishDealAt.value,
      percentage: parseInt(event.target.percentage.value),
      priceDeal: parseFloat(event.target.priceDeal.value),
      isDeal: true,
      isArchive: false
    };
    const JSONdata = JSON.stringify(data);
    console.log(data, JSONdata);

    const endpoint = `http://api-mercadona.test/api/product/${product.id}`;

    const options = {
      method: "PUT",
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const error = await response.json()
    if(response.ok){
      addFlash(<SuccessFlashMessage key='i'>Le produit a été mis en promotion</SuccessFlashMessage>)
    }else{
      addFlash(<DangerFlashMessage key='i'>Il y a un probleme pour la mise en promotion du produit</DangerFlashMessage>)
      console.log(error)
    }
  };

  return (
    <section>
      <h1>Mettre un produit en promotion</h1>
      {flash}
      <form onSubmit={handleSubmit}>
        <InputDate name='finishDealAt' required={true} >Date de fin de la promotion</InputDate>
        <InputNumber name="percentage" onChange={(event) => {calculDealPrice(product.price, event.target.value)}} required={true}>Pourcentage de réduction</InputNumber>
        <InputNumber name="priceDeal" readOnly={true} value={dealPrice} step={'0,01'}>Nouveau prix</InputNumber>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}


export async function getStaticProps({ params }) {
  const { id } = params;
  const res1 = await fetch(`http://api-mercadona.test/api/product/${id}`);
  const product = await res1.json();
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://api-mercadona.test/api/product");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

function reducePrice(price, percent){
  return Math.round((price  * (1 - (percent / 100)))*100) /100
}