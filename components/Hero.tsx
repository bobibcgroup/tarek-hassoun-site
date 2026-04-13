"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-layout">
      {/* Left — content */}
      <div className="hero-content">
        <div style={{ maxWidth: "560px" }}>
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-ui label"
            style={{ marginBottom: "28px" }}
          >
            Founder&nbsp;&nbsp;•&nbsp;&nbsp;CFO&nbsp;&nbsp;•&nbsp;&nbsp;Strategist
          </motion.p>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            style={{
              width: "64px",
              height: "1px",
              backgroundColor: "#DDD5C8",
              marginBottom: "36px",
              transformOrigin: "left",
            }}
          />

          {/* Name */}
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading"
              style={{
                fontSize: "clamp(72px, 8.5vw, 124px)",
                fontWeight: 300,
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                color: "#1C1A17",
                marginBottom: "36px",
              }}
            >
              Tarek
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>Hassoun</span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: "easeOut" }}
            className="font-ui"
            style={{
              fontSize: "15px",
              fontWeight: 300,
              color: "#7A7268",
              lineHeight: 1.7,
              letterSpacing: "0.03em",
              marginBottom: "52px",
              maxWidth: "380px",
            }}
          >
            Structuring companies, capital, and outcomes at scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
            style={{ display: "flex", alignItems: "center", gap: "36px" }}
          >
            <a href="#experience" className="btn-primary font-ui">
              View Background
            </a>
            <a href="#contact" className="btn-ghost font-ui">
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right — portrait */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
        className="hero-portrait"
      >
        {/* Portrait image */}
        <Image
          src="/tarek.jpg"
          alt="Tarek Hassoun"
          fill
          priority
          quality={95}
          style={{
            objectFit: "cover",
            objectPosition: "center 15%",
          }}
          sizes="42vw"
        />

        {/* Left blend */}
        <div
          style={{
            position: "absolute",
            inset: "0 auto 0 0",
            width: "120px",
            background: "linear-gradient(to right, #F4EFE6, transparent)",
            zIndex: 2,
          }}
        />

        {/* Bottom blend */}
        <div
          style={{
            position: "absolute",
            inset: "auto 0 0 0",
            height: "100px",
            background: "linear-gradient(to top, #F4EFE6 20%, transparent)",
            zIndex: 2,
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "72px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            backgroundColor: "#DDD5C8",
          }}
        />
        <span
          className="font-ui label"
          style={{ fontSize: "8px", letterSpacing: "0.3em" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
