import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="border-b border-[#f3e7ed] py-3">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left: logo + site name */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src={logo}
              alt="Sun & Flames Candles"
              className="rounded-full w-full h-full object-cover"
            />
          </div>

          <h2 className="text-xl font-extrabold text-[#ceb08e]">
            Sun & Flames Candles
          </h2>
        </div>

        {/* Center: primary nav (visible on md+) */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "Collections", path: "/collections" },
            { name: "About Us", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-icon text-white shadow-sm"
                    : "text-black hover:text-[#ceb08e]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 text-black">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
