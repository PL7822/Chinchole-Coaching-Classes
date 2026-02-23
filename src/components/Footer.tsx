import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
      <div>
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo3.png"
            alt="Chinchole Coaching Classes Logo"
            className="h-12 w-12 object-contain"
          />

          <div className="mb-3 font-heading text-lg font-bold text-secondary">
            <span className="mb-3 font-heading text-lg font-bold text-secondary">
              Chinchole Coaching Classes
            </span>
            {/* <span className="text-xs text-gray-500">
              & Shri Abhyasika – Palam
            </span> */}
            {/* <br /> */}
          </div>
        </Link>
        {/* <h3 className="mb-3 font-heading text-lg font-bold text-secondary">
          Chinchole Coaching Classes
        </h3> */}
        <p className="text-sm leading-relaxed text-primary-foreground/70">
        <br />
          Empowering students from 6th to 10th standard with quality education and
          a focused study environment at Palam.
        </p>
      </div>

      <div>
        <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
          Quick Links
        </h4>
        <ul className="space-y-2 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/coaching", label: "Coaching Classes" },
            { to: "/abhyasika", label: "Shri Abhyasika" },
            { to: "/results", label: "Results" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-primary-foreground/70 transition-colors hover:text-secondary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
          Contact Info
        </h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
            Palam, Maharashtra
          </li>
          <li className="flex items-center gap-2">
            <Phone size={16} className="shrink-0 text-secondary" />
            +91 9922823403
          </li>
          <li className="flex items-center gap-2">
            <Mail size={16} className="shrink-0 text-secondary" />
            info@chincholecoaching.com
          </li>
          <li className="flex items-center gap-2">
            <Clock size={16} className="shrink-0 text-secondary" />
            Abhyasika: 6 AM – 10 PM
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Chinchole Coaching Classes & Shri Abhyasika. All rights reserved.
    </div>
  </footer>
);

export default Footer;
