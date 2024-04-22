import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-sm">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12 ">
          <img src={logo} alt="logo" className="w-12 h-12" />
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            

            <li>
              <Link to="/accueil" className="hover:text-[#2563eb]/75 transition-all duration-600">Accueil</Link>
            </li>
            <li>
              <Link to="/candidat" className="hover:text-[#2563eb]/75 transition-all duration-600">Candidats</Link>
                </li>
               
                <li>
              <Link to="/monitoring" className="hover:text-[#2563eb]/75 transition-all duration-600">Monitoring</Link>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
              <Link to="/" className="rounded-md bg-[#2563eb]/80 px-5 py-2.5 text-sm font-medium text-[#fff] shadow-md hover:bg-[#2563eb]/95 hover:text-[#fff] transition-all duration-600">Deconnexion </Link>

        </div>
      </div>
    </div>
  </div>
</header>
  );
}

export default Header;
