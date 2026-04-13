"use client";

import FadeUp from "./FadeUp";

const experiences = [
  {
    role: "Chief Financial Officer",
    company: "Attention",
    period: "Current",
    description:
      "Leading financial strategy, structuring, and operational oversight across a multi-entity ecosystem spanning media, ventures, and capital initiatives. Oversees financial architecture, supports executive decision-making, and aligns operational execution with long-term strategic objectives.",
    type: "primary",
  },
  {
    role: "Early Career",
    company: "Banking & Financial Structuring",
    period: "Foundation",
    description:
      "Built foundational expertise in financial systems, client structuring, and disciplined capital management — forming the basis for later strategic and executive roles.",
    type: "secondary",
  },
];

export default function CareerExperience() {
  return (
    <section
      id="experience"
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

        <div className="section-inner">
          {/* Left */}
          <FadeUp delay={0.1}>
            <p className="font-ui label">Career Experience</p>
          </FadeUp>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experiences.map((exp, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.12}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1px 1fr",
                    gap: "40px",
                    paddingBottom: i < experiences.length - 1 ? "64px" : "0",
                  }}
                >
                  {/* Timeline line */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor:
                          exp.type === "primary" ? "#B8975A" : "#DDD5C8",
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                    />
                    {i < experiences.length - 1 && (
                      <div
                        style={{
                          width: "1px",
                          flex: 1,
                          backgroundColor: "#DDD5C8",
                          marginTop: "12px",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingLeft: "24px" }}>
                    {/* Period tag */}
                    <span
                      className="font-ui label"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.3em",
                        color:
                          exp.type === "primary" ? "#B8975A" : "#A39D95",
                        display: "block",
                        marginBottom: "16px",
                      }}
                    >
                      {exp.period}
                    </span>

                    {/* Role */}
                    <h3
                      className="font-heading"
                      style={{
                        fontSize: "28px",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        color: "#1C1A17",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.role}
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
                        marginBottom: "20px",
                      }}
                    >
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p
                      className="font-ui"
                      style={{
                        fontSize: "15px",
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: "#7A7268",
                        letterSpacing: "0.02em",
                        maxWidth: "520px",
                      }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
