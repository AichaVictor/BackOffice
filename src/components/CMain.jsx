import { Link } from "react-router-dom";
import NouveauCandidat from "../Pages/NouveauCandidat";

function CMain() {
  return (
    <div>
      <div className="flex items-center ml-10 mt-10 gap-5">
        <div className="space-y-4">
          <details
            className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <span className="size-6 rounded-full text-center text-[10px]/6 font-bold bg-blue-600 text-white">
                o
              </span>
              <h1 className="text-[20px] font-bold ">
                Ajouter un Nouveau Candidat
              </h1>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Certaines des informations du candidat sont obligatoires . Dautres ne le sont pas
            </p>
            <Link to="nouveau" element={<NouveauCandidat/>} className="mt-5 ml-3 w-32 flex items-center justify-center shrink-0 rounded-md border border-white-600 text-white px-12 py-3 text-sm font-medium bg-blue-600 transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ">
              Nouveau
            </Link>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <span className="size-6 rounded-full text-center text-[10px]/6 font-bold bg-blue-600 text-white">
                o
              </span>
              <h1 className="text-[20px] font-bold ">Listes des Candidats</h1>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Liste des candidats autorises pour le parrainage
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default CMain;
