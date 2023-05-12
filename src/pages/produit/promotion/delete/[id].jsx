import { useRouter } from "next/navigation";

export default function DeleteDeal({ product }) {
  const router = useRouter();

  const handleSubmit = async () => {

    const data = {
      label: product.label,
      description : product.description,
      price: product.price,
      finishDealAt: null,
      percentage: null,
      priceDeal: null,
      isDeal: false,
      isArchive: false
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = `http://api-mercadona.test/api/product/${product.id}`;

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
  const res1 = await fetch(`http://api-mercadona.test/api/product/${params.id}`);
  const product = await res1.json();
  return {
    props: {
      product,
    },
  };
}
