export default function InputText({ children, name, value, required }) {
  return (
    <div className="flex flex-col mb-4">
      <label
        className="text-sm font-medium leading-6 text-gray-900"
        htmlFor={name}
      >
        {children}
      </label>
      <input
        className="w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        type="text"
        id={name}
        name={name}
        defaultValue={value}
        required={required ? required : false}
      />
    </div>
  );
}
