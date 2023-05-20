import Link from "next/link.js";

export default function NavItem({ children, href }) {
  return (
    <li className="ms-2 hover:text-green-600 ">
      <Link href={href}>{children}</Link>
    </li>
  );
}
