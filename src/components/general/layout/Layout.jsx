import Header from "@/components/general/Header.jsx";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div className="container">
          <Header/>
          {children}
        </div>
      </div>
    </>
  );
}