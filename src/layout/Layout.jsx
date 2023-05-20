import Header from "@/components/general/Header.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}