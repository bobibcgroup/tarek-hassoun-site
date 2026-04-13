"use client";

import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{
        backgroundColor: "#F4EFE6",
      }}
    >
      {/* Thin top rule */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <FadeUp>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#DDD5C8",
              marginBottom: "96px",
            }}
          />
        </FadeUp>

        <div className="section-inner">
          {/* Left label */}
          <FadeUp delay={0.1}>
            <p
              className="font-ui label"
              style={{ paddingTop: "6px" }}
            >
              About
            </p>
          </FadeUp>

          {/* Right content */}
          <div>
            <FadeUp delay={0.2}>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(36px, 4vw, 54px)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: "#1C1A17",
                  marginBottom: "48px",
                  maxWidth: "680px",
                }}
              >
                Finance leader and strategic operator working at the intersection of capital, structure, and execution.
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  maxWidth: "640px",
                }}
              >
                <p
                  className="font-ui"
                  style={{
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#7A7268",
                    letterSpacing: "0.02em",
                  }}
                >
                  With a background spanning multi-entity environments and cross-border operations, he focuses on building clarity within complex systems — aligning financial discipline with long-term business vision.
                </p>

                <p
                  className="font-ui"
                  style={{
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#7A7268",
                    letterSpacing: "0.02em",
                  }}
                >
                  His work extends beyond traditional finance, integrating strategic decision-making, legal coordination, and operational oversight to support high-growth ventures and evolving business models.
                </p>

                <p
                  className="font-ui"
                  style={{
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#7A7268",
                    letterSpacing: "0.02em",
                  }}
                >
                  Tarek operates with a founder mindset — prioritizing precision, accountability, and long-term value creation.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
