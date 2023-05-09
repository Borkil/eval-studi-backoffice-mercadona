import InputText from "@/components/general/form/InputText.jsx";
import InputFloat from "@/components/general/form/InputFloat.jsx";
import InputList from "@/components/general/form/InputList.jsx";
import { useRouter } from 'next/navigation';

export async function getStaticProps() {
  const res = await fetch('http://api-mercadona.test/api/category');
  const categories =  await res.json();
   return {
    props: {
      categories,
    }
   }
}


export default function ajouter({categories}) {
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      label: event.target.label.value,
      description: event.target.description.value,
      price: parseFloat(event.target.price.value),
      category: {label: event.target.category.value},
      isDeal: false,
      isArchive: false,
    };
    const JSONdata = JSON.stringify(data);
    console.log(data, JSONdata);
    
    const endpoint = "http://api-mercadona.test/api/product";
    
    const options = {
      method: "POST",
      body: JSONdata,
    };
    
    const response = await fetch(endpoint, options);
    if(response.ok){
      router.push('/produit')
    }
    
  };

  const categoryList = []
  categories.forEach((element) => categoryList.push(element.label))

  return (
    <section>
      <h1>Ajouter un nouveau produit</h1>
      <form onSubmit={handleSubmit}>
        <InputText name="label">Label du produit</InputText>
        <InputText name="description">Description du produit</InputText>
        <InputFloat name="price">Prix</InputFloat>
        <InputList name='category' list={categoryList} >Choisir une catégorie</InputList>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
