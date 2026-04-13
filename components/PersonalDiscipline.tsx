"use client";

import FadeUp from "./FadeUp";

const disciplines = [
  {
    name: "Martial Arts",
    qualities: "Discipline, precision, and control",
    note: "The practice of eliminating excess — each movement deliberate, each decision final.",
  },
  {
    name: "Salsa",
    qualities: "Rhythm, timing, and presence",
    note: "The art of reading a partner, a room, a moment — and moving with intention.",
  },
];

export default function PersonalDiscipline() {
  return (
    <section
      id="discipline"
      style={{
        backgroundColor: "#1C1A17",
        padding: "128px 48px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="section-inner">
          {/* Left */}
          <FadeUp delay={0.1}>
            <div>
              <p
                className="font-ui label"
                style={{ color: "#7A7268", marginBottom: "24px" }}
              >
                Personal Discipline
              </p>
              <p
                className="font-ui"
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#5A5450",
                  letterSpacing: "0.05em",
                  lineHeight: 1.8,
                  maxWidth: "220px",
                }}
              >
                Structure and control extend beyond business into personal pursuits.
              </p>
            </div>
          </FadeUp>

          {/* Right */}
          <div className="card-grid-2">
            {disciplines.map((d, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.12}>
                <div
                  style={{
                    padding: "48px 40px",
                    backgroundColor: "#252220",
                    borderTop: "1px solid #333",
                  }}
                >
                  {/* Name */}
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "36px",
                      fontWeight: 300,
                      fontStyle: "italic",
                      letterSpacing: "-0.01em",
                      color: "#F4EFE6",
                      marginBottom: "12px",
                    }}
                  >
                    {d.name}
                  </h3>

                  {/* Qualities */}
                  <p
                    className="font-ui"
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#B8975A",
                      marginBottom: "24px",
                    }}
                  >
                    {d.qualities}
                  </p>

                  <div
                    style={{
                      width: "24px",
                      height: "1px",
                      backgroundColor: "#333",
                      marginBottom: "24px",
                    }}
                  />

                  <p
                    className="font-ui"
                    style={{
                      fontSize: "13px",
                      fontWeight: 300,
                      lineHeight: 1.85,
                      color: "#5A5450",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {d.note}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <FadeUp delay={0.4}>
          <p
            className="font-ui"
            style={{
              fontSize: "13px",
              fontWeight: 300,
              color: "#5A5450",
              letterSpacing: "0.08em",
              lineHeight: 1.8,
              marginTop: "64px",
              borderTop: "1px solid #2A2825",
              paddingTop: "48px",
              maxWidth: "520px",
            }}
          >
            These practices reflect a broader philosophy of balance, focus, and intentional movement.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
