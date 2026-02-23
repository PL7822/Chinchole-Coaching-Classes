import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/coaching", label: "Coaching Classes" },
  { to: "/abhyasika", label: "Shri Abhyasika" },
  { to: "/results", label: "Results" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleCallClick = (e) => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault();
      window.open(
        "https://wa.me/919922823403?text=Hello%20I%20want%20to%20enquire%20about%20admissions",
        "_blank"
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo3.png"
            alt="Chinchole Coaching Classes Logo"
            className="h-12 w-12 object-contain"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-gray-900">
              Chinchole Coaching Classes
            </span>
            <span className="text-xs text-gray-500">
              & Shri Abhyasika – Palam
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-gray-200 text-black"
                  : "text-gray-700 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Call Button */}
          <a
            href="tel:+919922823403"
            onClick={handleCallClick}
            className="ml-3 flex items-center gap-1.5 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-secondary-700 hover:scale-105"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-gray-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium ${
                location.pathname === l.to
                  ? "bg-gray-200 text-black"
                  : "text-gray-700"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="tel:+919922823403"
            onClick={handleCallClick}
            className="mx-4 mb-4 mt-2 flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;