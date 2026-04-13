"use client";

import FadeUp from "./FadeUp";

const contactItems = [
  {
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    label: "Phone",
    value: "+XXX XXX XXX",
    href: "tel:+XXXXXXXXX",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#F0EBE2",
        padding: "128px 48px 160px",
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
              <p className="font-ui label" style={{ marginBottom: "20px" }}>
                Contact
              </p>
              <p
                className="font-ui"
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#A39D95",
                  letterSpacing: "0.03em",
                  lineHeight: 1.8,
                  maxWidth: "200px",
                }}
              >
                Engaged in a limited number of strategic collaborations and introductions.
              </p>
            </div>
          </FadeUp>

          {/* Right */}
          <div>
            <FadeUp delay={0.15}>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  color: "#1C1A17",
                  lineHeight: 1.2,
                  marginBottom: "56px",
                  maxWidth: "480px",
                }}
              >
                For serious inquiries, collaborations, or introductions.
              </h2>
            </FadeUp>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {contactItems.map((item, i) => (
                <FadeUp key={i} delay={0.2 + i * 0.08}>
                  <a
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      padding: "24px 0",
                      borderBottom: "1px solid #DDD5C8",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const label = e.currentTarget.querySelector(".contact-label") as HTMLElement;
                      const value = e.currentTarget.querySelector(".contact-value") as HTMLElement;
                      if (label) label.style.color = "#1C1A17";
                      if (value) value.style.color = "#1C1A17";
                    }}
                    onMouseLeave={(e) => {
                      const label = e.currentTarget.querySelector(".contact-label") as HTMLElement;
                      const value = e.currentTarget.querySelector(".contact-value") as HTMLElement;
                      if (label) label.style.color = "#A39D95";
                      if (value) value.style.color = "#7A7268";
                    }}
                  >
                    <span
                      className="contact-label font-ui"
                      style={{
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#A39D95",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="contact-value font-ui"
                      style={{
                        fontSize: "15px",
                        fontWeight: 300,
                        color: "#7A7268",
                        letterSpacing: "0.03em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.value}
                    </span>
                  </a>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.5}>
              <p
                className="font-ui"
                style={{
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#A39D95",
                  letterSpacing: "0.05em",
                  lineHeight: 1.8,
                  marginTop: "40px",
                }}
              >
                Please reach out directly.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
