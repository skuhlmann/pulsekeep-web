"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-mist/80 dark:bg-slate-dark/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex gap-3 font-mono text-xl font-bold text-slate-dark dark:text-mist hover:text-teal dark:hover:text-teal transition-colors"
          >
            <Image
              alt="pulskeep logo"
              src="/pulsekeep_icon.png"
              width={30}
              height={30}
            />{" "}
            Pulsekeep
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-slate-dark dark:text-mist hover:text-teal dark:hover:text-teal transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="font-mono text-sm px-4 py-2 rounded-lg bg-teal text-mist hover:bg-teal-electric transition-colors"
            >
              Schedule a Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-dark dark:text-mist hover:bg-slate/10 dark:hover:bg-slate/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-mist dark:bg-slate-dark z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xl text-slate-dark dark:text-mist hover:text-teal dark:hover:text-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="font-mono text-xl px-6 py-3 rounded-lg bg-teal text-mist hover:bg-teal-electric transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
