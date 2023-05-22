export default function InputDate({ children, name, required }) {
  return (
    <div className="mb-3 flex flex-col text-sm font-medium leading-6 text-gray-900">
      <label htmlFor={name}>{children}</label>
      <input
        className="w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        type="date"
        name={name}
        id={name}
        required={required}
      />
    </div>
  );
}
