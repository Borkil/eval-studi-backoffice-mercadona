export default function InputPassword({name}) {
  return (
    <input
      id={name}
      name={name}
      type="password"
      autoComplete="Mot de passe"
      required
      className="w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
    />
  );
}
