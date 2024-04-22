import vote from "../assets/vote.jpg"
import StepThree from "../components/StepThree"

export default function Authenification() {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src={vote}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Bienvenue sur la plateforme de gestion des Parrainages
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Pour des elections inclusives et transparentes, une organisation sans faille est necessaire afin de respecter la souveraiente du peuple Senegalais.
              </p>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
        
              <StepThree />

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-3 sm:col-span-6">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Mot de Passe </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="col-sapn-3 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Se Connecter
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>)
}
