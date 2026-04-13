"use client";

import FadeUp from "./FadeUp";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        backgroundColor: "#F4EFE6",
        padding: "160px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <FadeUp>
          <p className="font-ui label" style={{ marginBottom: "56px" }}>
            Philosophy
          </p>
        </FadeUp>

        {/* Main quote */}
        <FadeUp delay={0.15}>
          <blockquote
            className="font-heading"
            style={{
              fontSize: "clamp(40px, 5.5vw, 78px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "#1C1A17",
              marginBottom: "48px",
            }}
          >
            Clarity over noise.
            <br />
            Structure over chaos.
          </blockquote>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div
            style={{
              width: "1px",
              height: "48px",
              backgroundColor: "#DDD5C8",
              margin: "0 auto 48px",
            }}
          />
        </FadeUp>

        <FadeUp delay={0.35}>
          <p
            className="font-heading"
            style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 300,
              color: "#7A7268",
              letterSpacing: "0.02em",
              lineHeight: 1.5,
            }}
          >
            Precision in decisions.
            <br />
            Discipline in execution.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
