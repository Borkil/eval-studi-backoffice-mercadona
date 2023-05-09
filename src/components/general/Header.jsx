import Link from "next/link.js";
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/">
              <h1 className="text-3xl text-green-600 font-bold">
                MERCADONA
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/produit">Produit</Link>
          </li>
          <li>
            <Link href="/categorie">Categorie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
