export default function FormLayout({ children }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-92 px-4 py-9">
        {children}
      </div>
    </div>
  );
}
