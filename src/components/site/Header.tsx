import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

const linkClass =
  "text-xs uppercase tracking-[0.25em] transition-colors hover:text-primary";

export function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 py-6${solid ? " bg-secondary" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-secondary-foreground">
        <Link to="/" className="font-display text-2xl tracking-wide" onClick={() => setOpen(false)}>
          ABS Wedding Planner
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass}
              activeProps={{ className: `${linkClass} text-primary` }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-primary px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Plan Your Event
          </Link>
        </nav>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true" width="24" height="24">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-4 border-t border-secondary-foreground/10 bg-secondary px-6 py-6 text-secondary-foreground md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass}
              activeProps={{ className: `${linkClass} text-primary` }}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-primary px-5 py-2.5 text-center text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Plan Your Event
          </Link>
        </nav>
      )}
    </header>
  );
}
