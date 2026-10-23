export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-ink": "var(--accent-ink)",
        "accent-soft": "var(--accent-soft)",
        danger: "var(--danger)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      fontSize: {
        hero: ["clamp(2.75rem, 1.6rem + 5vw, 5.25rem)", { lineHeight: "1.02" }],
        h2: ["clamp(1.95rem, 1.6rem + 1.7vw, 2.75rem)", { lineHeight: "1.1" }],
        h3: ["clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)", { lineHeight: "1.25" }],
        lead: ["clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)", { lineHeight: "1.6" }],
      },
      borderRadius: {
        DEFAULT: "10px",
        sm: "6px",
      },
      maxWidth: {
        container: "1200px",
        measure: "62ch",
      },
      transitionDuration: {
        press: "var(--dur-press)",
        state: "var(--dur-state)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
    },
  },
  plugins: [],
};
