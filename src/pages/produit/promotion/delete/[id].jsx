import { useRouter } from "next/navigation";

export default function DeleteDeal({ product }) {
  const router = useRouter();

  const handleSubmit = async () => {

    const data = {
      label: product.label,
      description : product.description,
      price: product.price,
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
    };

    const response = await fetch(endpoint, options);

    if(response.ok){
      router.push('/produit')
    }
  };

  handleSubmit()
}


export async function getServerSideProps({ params }) {
  const res1 = await fetch(process.env.NEXT_PUBLIC_URL_API + "/product/" + params.id);
  const product = await res1.json();
  return {
    props: {
      product,
    },
  };
}
