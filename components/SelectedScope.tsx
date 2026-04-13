"use client";

import FadeUp from "./FadeUp";

const scopeItems = [
  "Financial oversight across multi-entity and cross-jurisdictional structures",
  "Strategic involvement in venture incubation and capital deployment",
  "Advisory on legal, compliance, and transaction structuring",
  "Investor positioning and capital strategy support",
  "Integration of traditional finance with digital asset ecosystems",
];

export default function SelectedScope() {
  return (
    <section
      id="scope"
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
            <div>
              <p className="font-ui label" style={{ marginBottom: "16px" }}>
                Selected Scope
              </p>
              <p
                className="font-ui"
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#A39D95",
                  letterSpacing: "0.05em",
                  lineHeight: 1.7,
                  maxWidth: "200px",
                }}
              >
                Areas of strategic focus and operational expertise.
              </p>
            </div>
          </FadeUp>

          {/* Right — scope list */}
          <div>
            {scopeItems.map((item, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.08}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "28px",
                    paddingBottom: "32px",
                    marginBottom: "32px",
                    borderBottom: i < scopeItems.length - 1 ? "1px solid #DDD5C8" : "none",
                  }}
                >
                  {/* Number */}
                  <span
                    className="font-heading"
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#B8975A",
                      letterSpacing: "0.1em",
                      minWidth: "32px",
                      paddingTop: "3px",
                    }}
                  >
                    0{i + 1}
                  </span>

                  {/* Text */}
                  <p
                    className="font-ui"
                    style={{
                      fontSize: "17px",
                      fontWeight: 300,
                      color: "#1C1A17",
                      lineHeight: 1.6,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item}
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
