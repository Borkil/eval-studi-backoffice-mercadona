export default function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-green-600 mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
    >
      {children}
    </button>
  );
}
