import { useRouter } from 'next/router';
import { useProduct } from "@/swr/product/useProduct.js";
import { useEffect, useState } from 'react';


export default function DeleteDeal() {
  const router = useRouter();
  const {product, session } = useProduct(router.query.id)
  const [response, setResponse] = useState(false)
  useEffect(()=> {
    if(response){
      router.push('/produit')
    }
  })

  const handleSubmit = async () => {
    const data = {
      label: product.label,
      description : product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      finishDealAt: null,
      percentage: null,
      priceDeal: null,
      isDeal: false,
      isArchive: false
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_URL_API + "/product/" + product.id;

    const options = {
      method: "PUT",
      body: JSONdata,
      headers: {
        Authorization : `Bearer ${session.user.token} `
      }
    };

    const response = await fetch(endpoint, options);
    if(response.ok){
      setResponse(true)
    }
  };
  
  if(product){
    handleSubmit()
  }else{return null}
}

