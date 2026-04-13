"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1C1A17",
        padding: "40px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          className="font-heading"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "0.18em",
            color: "#5A5450",
          }}
        >
          T H
        </span>

        <p
          className="font-ui"
          style={{
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#3A3835",
          }}
        >
          Tarek Hassoun&nbsp;&nbsp;·&nbsp;&nbsp;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
