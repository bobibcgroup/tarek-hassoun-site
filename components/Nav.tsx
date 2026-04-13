"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Scope", href: "#scope" },
  { label: "Experience", href: "#experience" },
  { label: "Ventures", href: "#ventures" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        paddingTop: scrolled ? "18px" : "28px",
        paddingBottom: scrolled ? "18px" : "28px",
        borderBottom: scrolled ? "1px solid #DDD5C8" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(244, 239, 230, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.5s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-heading"
          style={{
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            color: "#1C1A17",
            textDecoration: "none",
          }}
        >
          T H
        </a>

        {/* Desktop nav */}
        <div className="nav-links font-ui">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#7A7268",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1C1A17")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#7A7268")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden font-ui"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1C1A17",
            display: "none",
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </motion.nav>
  );
}
