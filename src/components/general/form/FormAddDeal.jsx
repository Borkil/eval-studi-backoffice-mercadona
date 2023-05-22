import { useState } from "react";
import FormLayout from "./FormLayout.jsx";
import InputDate from "./InputDate.jsx";
import InputNumber from "./InputNumber.jsx";
import SubmitButton from "../button/SubmitButton.jsx";



export default function FormAddDeal({onSubmit, product}){
  const [dealPrice, setDealPrice] = useState();

  const calculDealPrice = (price, percent) => {
    setDealPrice(reducePrice(price, percent));
  };
  return(
    <FormLayout>
      <form onSubmit={onSubmit}>
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
        <SubmitButton>Mettre en promo</SubmitButton>
      </form>
    </FormLayout>
  )
}


function reducePrice(price, percent) {
  return Math.round(price * (1 - percent / 100) * 100) / 100;
}
