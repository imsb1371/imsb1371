import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
const socialLinks = [{
  name: "Email",
  handle: "imsb1371@gmail.com",
  href: "mailto:imsb1371@gmail.com",
  description: "Best for research collaborations and speaking invitations.",
  icon: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.75", children: [
    /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "m2 7 10 7 10-7" })
  ] })
}, {
  name: "LinkedIn",
  handle: "linkedin.com/in/imsb1371",
  href: "https://www.linkedin.com/in/imsb1371/",
  description: "Professional updates and networking.",
  icon: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: [
    /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
    /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
  ] })
}, {
  name: "GitHub",
  handle: "github.com/",
  href: "https://github.com/",
  description: "Open-source projects and code.",
  icon: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) })
}, {
  name: "Google Scholar",
  handle: "scholar.google.com",
  href: "https://scholar.google.com/citations?hl=en&user=ZF3RfMsAAAAJ",
  description: "Full list of publications and citation metrics.",
  icon: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" }) })
}, {
  name: "ResearchGate",
  handle: "researchgate.net/profile/Mohammad-Barkhordari-2",
  href: "https://www.researchgate.net/profile/Mohammad-Barkhordari-2",
  description: "Research profile and paper access.",
  icon: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.56 12.56 0 0 0-.198.847 14.2 14.2 0 0 0-.086 1.226c-.012.496-.016.916-.01 1.26.005.344.007.63.007.857 0 .356-.1.642-.298.858-.2.216-.497.325-.89.325h-.44v.952h.44c.394 0 .69.11.89.325.197.216.297.5.297.858v4.08c0 .358-.1.64-.297.845-.2.206-.496.307-.89.307h-.44V15h3.79v-1.017h-.44c-.396 0-.693-.1-.89-.307-.2-.204-.297-.487-.297-.845V8.75h1.73v-1.06h-1.73V5.32c0-.357.052-.638.153-.843.102-.206.246-.31.435-.31.19 0 .337.103.44.307.1.204.152.486.152.845v.437h1.72v-.437c0-.73-.186-1.3-.556-1.712-.37-.41-.87-.617-1.5-.617zm-5.09 0L7.48 7.4 5.75 0H0v15h5.61V7.5l1.85 7.5H9.3l1.85-7.5V15H16.5V0z" }) })
}, {
  name: "Twitter / X",
  handle: "@msbarkhordari",
  href: "https://twitter.com/msbarkhordari",
  description: "Research commentary and conference updates.",
  icon: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
}];
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return /* @__PURE__ */ jsx("div", { style: {
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      textAlign: "center",
      maxWidth: "400px"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        width: "64px",
        height: "64px",
        background: "rgba(13,148,136,0.1)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1.25rem",
        color: "#0D9488"
      }, children: /* @__PURE__ */ jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }) }),
      /* @__PURE__ */ jsx("h2", { style: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.75rem",
        color: "#0F172A",
        marginBottom: "0.75rem"
      }, children: "Message Sent!" }),
      /* @__PURE__ */ jsx("p", { style: {
        color: "#475569",
        marginBottom: "1.75rem",
        lineHeight: 1.7
      }, children: "Thanks for reaching out. I'll get back to you within a few business days." }),
      /* @__PURE__ */ jsx("button", { onClick: () => setSubmitted(false), style: {
        background: "#0F172A",
        color: "#fff",
        padding: "0.7rem 1.75rem",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "0.9rem",
        transition: "background 0.2s"
      }, onMouseOver: (e) => e.currentTarget.style.background = "#1E293B", onMouseOut: (e) => e.currentTarget.style.background = "#0F172A", children: "Send Another Message" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { style: {
    backgroundColor: "#F8FAFC",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsxs("section", { style: {
      background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      color: "#F8FAFC",
      padding: "4rem 1.5rem 3.5rem",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 80% 30%, rgba(13,148,136,0.08) 0%, transparent 50%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          color: "#0D9488",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "0.5rem"
        }, children: "Get In Touch" }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          margin: "0 0 1rem",
          lineHeight: 1.2
        }, children: "Contact" }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "#94A3B8",
          fontSize: "1.05rem",
          maxWidth: "540px",
          lineHeight: 1.7,
          margin: 0
        }, children: "Interested in collaboration, discussing research, or inviting me to speak? I'd love to hear from you." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "4rem 1.5rem"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "start"
    }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.5rem",
          color: "#0F172A",
          marginBottom: "1.5rem",
          fontWeight: 600
        }, children: "Send a Message" }),
        /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          fetch("/contact.html", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
          }).then(() => setSubmitted(true));
        }, style: {
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem"
        }, children: [
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
          /* @__PURE__ */ jsx("p", { hidden: true, children: /* @__PURE__ */ jsxs("label", { children: [
            "Don't fill this out: ",
            /* @__PURE__ */ jsx("input", { name: "bot-field" })
          ] }) }),
          [{
            id: "name",
            label: "Name",
            type: "text",
            placeholder: "Your full name"
          }, {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "your@email.com"
          }, {
            id: "affiliation",
            label: "Affiliation (optional)",
            type: "text",
            placeholder: "University / Company"
          }].map(({
            id,
            label,
            type,
            placeholder
          }) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: id, style: {
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#334155",
              marginBottom: "0.4rem"
            }, children: label }),
            /* @__PURE__ */ jsx("input", { type, id, name: id, required: !label.includes("optional"), placeholder, style: {
              width: "100%",
              padding: "0.7rem 1rem",
              border: "1.5px solid #E2E8F0",
              borderRadius: "8px",
              fontSize: "0.9rem",
              color: "#0F172A",
              background: "#fff",
              outline: "none",
              transition: "border-color 0.2s",
              boxSizing: "border-box"
            }, onFocus: (e) => e.target.style.borderColor = "#0D9488", onBlur: (e) => e.target.style.borderColor = "#E2E8F0" })
          ] }, id)),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "subject", style: {
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#334155",
              marginBottom: "0.4rem"
            }, children: "Subject" }),
            /* @__PURE__ */ jsxs("select", { id: "subject", name: "subject", style: {
              width: "100%",
              padding: "0.7rem 1rem",
              border: "1.5px solid #E2E8F0",
              borderRadius: "8px",
              fontSize: "0.9rem",
              color: "#0F172A",
              background: "#fff",
              outline: "none",
              transition: "border-color 0.2s",
              boxSizing: "border-box"
            }, onFocus: (e) => e.target.style.borderColor = "#0D9488", onBlur: (e) => e.target.style.borderColor = "#E2E8F0", children: [
              /* @__PURE__ */ jsx("option", { children: "Research Collaboration" }),
              /* @__PURE__ */ jsx("option", { children: "Speaking Invitation" }),
              /* @__PURE__ */ jsx("option", { children: "PhD / Postdoc Inquiry" }),
              /* @__PURE__ */ jsx("option", { children: "Media / Press" }),
              /* @__PURE__ */ jsx("option", { children: "Other" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", style: {
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#334155",
              marginBottom: "0.4rem"
            }, children: "Message" }),
            /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", required: true, rows: 6, placeholder: "Your message...", style: {
              width: "100%",
              padding: "0.7rem 1rem",
              border: "1.5px solid #E2E8F0",
              borderRadius: "8px",
              fontSize: "0.9rem",
              color: "#0F172A",
              background: "#fff",
              outline: "none",
              resize: "vertical",
              transition: "border-color 0.2s",
              boxSizing: "border-box",
              fontFamily: "inherit"
            }, onFocus: (e) => e.target.style.borderColor = "#0D9488", onBlur: (e) => e.target.style.borderColor = "#E2E8F0" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", style: {
            background: "#0D9488",
            color: "#fff",
            padding: "0.8rem 1.75rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.95rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "background 0.2s, transform 0.2s",
            alignSelf: "flex-start"
          }, onMouseOver: (e) => {
            e.currentTarget.style.background = "#0F766E";
            e.currentTarget.style.transform = "translateY(-1px)";
          }, onMouseOut: (e) => {
            e.currentTarget.style.background = "#0D9488";
            e.currentTarget.style.transform = "translateY(0)";
          }, children: [
            /* @__PURE__ */ jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
              /* @__PURE__ */ jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
              /* @__PURE__ */ jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
            ] }),
            "Send Message"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.5rem",
          color: "#0F172A",
          marginBottom: "1.5rem",
          fontWeight: 600
        }, children: "Find Me Online" }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "0.875rem"
        }, children: socialLinks.map(({
          name,
          handle,
          href,
          description,
          icon
        }) => /* @__PURE__ */ jsxs("a", { href, target: href.startsWith("mailto") ? void 0 : "_blank", rel: "noopener noreferrer", style: {
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          padding: "1.1rem 1.25rem",
          background: "#fff",
          border: "1.5px solid #E2E8F0",
          borderRadius: "10px",
          textDecoration: "none",
          transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s"
        }, onMouseOver: (e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#0D9488";
          el.style.boxShadow = "0 4px 14px rgba(13,148,136,0.1)";
          el.style.transform = "translateX(3px)";
        }, onMouseOut: (e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#E2E8F0";
          el.style.boxShadow = "none";
          el.style.transform = "translateX(0)";
        }, children: [
          /* @__PURE__ */ jsx("div", { style: {
            color: "#0D9488",
            marginTop: "2px",
            flexShrink: 0
          }, children: icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: {
              fontWeight: 600,
              color: "#0F172A",
              fontSize: "0.9rem",
              marginBottom: "0.15rem"
            }, children: name }),
            /* @__PURE__ */ jsx("div", { style: {
              color: "#0D9488",
              fontSize: "0.8rem",
              marginBottom: "0.25rem"
            }, children: handle }),
            /* @__PURE__ */ jsx("div", { style: {
              color: "#94A3B8",
              fontSize: "0.8rem"
            }, children: description })
          ] })
        ] }, name)) }),
        /* @__PURE__ */ jsxs("div", { style: {
          marginTop: "2rem",
          padding: "1.25rem",
          background: "rgba(13,148,136,0.05)",
          border: "1px solid rgba(13,148,136,0.15)",
          borderRadius: "10px"
        }, children: [
          /* @__PURE__ */ jsx("h4", { style: {
            color: "#0D9488",
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "0.75rem"
          }, children: "Office" }),
          /* @__PURE__ */ jsxs("p", { style: {
            color: "#334155",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            margin: 0
          }, children: [
            "Personal Lab, Room 8",
            /* @__PURE__ */ jsx("br", {}),
            "Azadi Street",
            /* @__PURE__ */ jsx("br", {}),
            "Tehran, Iran",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { style: {
              color: "#94A3B8",
              fontSize: "0.8rem"
            }, children: "Response time: 2–4 business days" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contact as component
};
