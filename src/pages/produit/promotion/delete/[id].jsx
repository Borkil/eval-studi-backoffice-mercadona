import { useRouter } from "next/navigation";

export default function Editer({ product }) {
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