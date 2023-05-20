import NavBrand from "./NavBrand.jsx"
import NavItem from "./NavItem.jsx"

export default function(){
  return(
    <nav>
      <ul className="flex items-center">
        <NavBrand>MERCADONA</NavBrand>
        <NavItem href={"/"}>Accueil</NavItem>
        <NavItem href={"/produit"}>Produit</NavItem>
        <NavItem href={"/categorie"}>Catégorie</NavItem>
        <NavItem href={"/utilisateur"}>Utilisateur</NavItem>
      </ul>
    </nav>
  )
}