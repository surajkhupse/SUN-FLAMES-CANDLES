export default function Header() {
  return (
  <header className="flex items-center justify-between border-b border-[#f3e7ed] px-4 md:px-10 py-3 text-black">
      {/* Left: logo + site name */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 text-black">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold font-display text-black">Aura</h2>
      </div>

      {/* Center: primary nav (visible on md+) */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-black">Collections</a>
        <a href="#" className="text-sm font-medium text-black">About Us</a>
        <a href="#" className="text-sm font-medium text-black">Contact</a>
      </div>

      {/* Right: color text in black (visible on md+) */}
      <div className="hidden md:flex flex-col items-end gap-0">
        <span className="text-sm font-semibold text-black">Sun & Flames Candles</span>
        <span className="text-xs text-gray-600">Where sun meets flame</span>
      </div>

      {/* Mobile menu button (visible on small screens) */}
      <button className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 text-black">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
