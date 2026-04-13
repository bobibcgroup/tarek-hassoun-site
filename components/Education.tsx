"use client";

import FadeUp from "./FadeUp";

export default function Education() {
  return (
    <section
      id="education"
      style={{
        backgroundColor: "#F4EFE6",
        padding: "128px 48px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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

        <div className="section-inner" style={{ alignItems: "center" }}>
          {/* Left */}
          <FadeUp delay={0.1}>
            <p className="font-ui label">Education</p>
          </FadeUp>

          {/* Right */}
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "48px" }}>
              <div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "#1C1A17",
                    marginBottom: "8px",
                  }}
                >
                  Master of Business Administration
                </h3>

                <p
                  className="font-ui"
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#A39D95",
                    marginBottom: "16px",
                  }}
                >
                  MBA
                </p>

                <p
                  className="font-ui"
                  style={{
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#7A7268",
                    letterSpacing: "0.05em",
                  }}
                >
                  Lebanese American University
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
