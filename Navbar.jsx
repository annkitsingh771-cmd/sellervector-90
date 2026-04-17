"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#who-its-for", label: "Who it's for" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-line">
      <nav className="container-page flex items-center justify-between h-16 md:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-[17px] tracking-tight">
          <LogoMark />
          <span>
            Seller<span className="text-brand-700">Vector</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14.5px] text-ink-muted hover:text-brand-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn btn-ghost py-2 px-4 text-sm">
            Login
          </Link>
          <Link href="/login" className="btn btn-primary py-2 px-4 text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] text-ink-soft hover:text-brand-700"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-line">
              <Link href="/login" onClick={() => setOpen(false)} className="btn btn-ghost flex-1 py-2 px-4 text-sm">
                Login
              </Link>
              <Link href="/login" onClick={() => setOpen(false)} className="btn btn-primary flex-1 py-2 px-4 text-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <span className="relative w-8 h-8 rounded-lg bg-ink text-white grid place-items-center overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-600 opacity-90"></span>
      <span className="relative font-bold text-[15px]">S</span>
    </span>
  );
}
