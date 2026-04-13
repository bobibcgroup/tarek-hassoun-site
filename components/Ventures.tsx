"use client";

import FadeUp from "./FadeUp";

const ventures = [
  {
    role: "Chief Financial Officer",
    company: "Attention",
    tag: "Current Role",
    description:
      "Driving financial clarity, governance, and execution across a diversified platform operating at the intersection of media, capital, and incubation.",
  },
  {
    role: "Founder",
    company: "Praxis",
    tag: "Venture",
    description:
      "Building an AI-driven platform redefining how individuals make style decisions — focused on speed, clarity, and personal identity expression.",
  },
];

export default function Ventures() {
  return (
    <section
      id="ventures"
      style={{
        backgroundColor: "#F0EBE2",
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

        <div className="section-inner">
          {/* Left */}
          <FadeUp delay={0.1}>
            <p className="font-ui label">Ventures & Current Roles</p>
          </FadeUp>

          {/* Right */}
          <div className="card-grid-2">
            {ventures.map((venture, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.12}>
                <div
                  style={{
                    backgroundColor: "#F4EFE6",
                    padding: "44px 40px",
                    position: "relative",
                    height: "100%",
                  }}
                >
                  {/* Tag */}
                  <span
                    className="font-ui label"
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.3em",
                      color: "#B8975A",
                      display: "block",
                      marginBottom: "32px",
                    }}
                  >
                    {venture.tag}
                  </span>

                  {/* Role */}
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "32px",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                      color: "#1C1A17",
                      marginBottom: "8px",
                    }}
                  >
                    {venture.role}
                  </h3>

                  {/* Company */}
                  <p
                    className="font-ui"
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#A39D95",
                      marginBottom: "28px",
                    }}
                  >
                    {venture.company}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      backgroundColor: "#DDD5C8",
                      marginBottom: "28px",
                    }}
                  />

                  {/* Description */}
                  <p
                    className="font-ui"
                    style={{
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "#7A7268",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {venture.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
