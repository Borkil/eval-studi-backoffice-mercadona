import { signIn } from "next-auth/react";
import InputPassword from "../general/form/InputPassword.jsx";
import InputEmail from "../general/form/InputEmail.jsx";

export default function LoginForm() {
  const handleSubmit = async (e) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      username: e.target.username.value,
      password: e.target.password.value,
      redirect: true,
      callbackUrl: "/produit",
    });
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-96 bg-slate-50 rounded-xl shadow-md mt-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-green-600 text-xl font-bold text-center">
            MERCADONA _ BACKOFFICE
          </h1>
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            Connexion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <InputEmail name={'username'} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                </label>
              </div>
              <div className="mt-2">
                <InputPassword name={'password'}/>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// <form method="post" action="/api/auth/callback/credentials">
