import { jsxs, jsx } from "react/jsx-runtime";
import { a as allProjects } from "./allProjects-BqfpJEwp.js";
import { marked } from "marked";
import { useState } from "react";
const allTags = ["All", "Computer Vision", "Environmental Engineering", "Machine Learning", "Structural Engineering"];
function Research() {
  const [activeTag, setActiveTag] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);
  const filtered = activeTag === "All" ? allProjects : allProjects.filter((p) => p.tags.some((t) => t.toLowerCase().includes(activeTag.toLowerCase())));
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
        backgroundImage: "radial-gradient(circle at 30% 60%, rgba(13,148,136,0.09) 0%, transparent 55%)",
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
        }, children: "Portfolio" }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          margin: "0 0 1rem",
          lineHeight: 1.2
        }, children: "Research & Projects" }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "#94A3B8",
          fontSize: "1.05rem",
          maxWidth: "560px",
          lineHeight: 1.7,
          margin: 0
        }, children: "Open-source tools, published systems, and ongoing explorations at the intersection of human-computer interaction and machine learning." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "3.5rem 1.5rem"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        gap: "0.6rem",
        flexWrap: "wrap",
        marginBottom: "2.5rem"
      }, children: allTags.map((tag) => /* @__PURE__ */ jsx("button", { onClick: () => setActiveTag(tag), style: {
        padding: "0.45rem 1rem",
        borderRadius: "999px",
        border: "1.5px solid",
        borderColor: activeTag === tag ? "#0D9488" : "#E2E8F0",
        background: activeTag === tag ? "#0D9488" : "#fff",
        color: activeTag === tag ? "#fff" : "#475569",
        fontSize: "0.85rem",
        fontWeight: activeTag === tag ? 600 : 500,
        cursor: "pointer",
        transition: "all 0.2s"
      }, onMouseOver: (e) => {
        if (activeTag !== tag) {
          e.currentTarget.style.borderColor = "#0D9488";
          e.currentTarget.style.color = "#0D9488";
        }
      }, onMouseOut: (e) => {
        if (activeTag !== tag) {
          e.currentTarget.style.borderColor = "#E2E8F0";
          e.currentTarget.style.color = "#475569";
        }
      }, children: tag }, tag)) }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem"
      }, children: filtered.map((project, i) => {
        const isExpanded = expandedProject === project._meta.path;
        return /* @__PURE__ */ jsxs("div", { style: {
          background: "#fff",
          borderRadius: "14px",
          border: "1px solid",
          borderColor: isExpanded ? "#0D9488" : "#E2E8F0",
          overflow: "hidden",
          transition: "border-color 0.25s, box-shadow 0.25s",
          boxShadow: isExpanded ? "0 8px 32px rgba(13,148,136,0.12)" : "none",
          display: "flex",
          flexDirection: "column"
        }, children: [
          /* @__PURE__ */ jsx("div", { style: {
            height: "4px",
            background: `hsl(${i * 60 % 360}, 65%, 45%)`,
            opacity: 0.7
          } }),
          /* @__PURE__ */ jsxs("div", { style: {
            padding: "1.75rem",
            flex: 1,
            display: "flex",
            flexDirection: "column"
          }, children: [
            /* @__PURE__ */ jsx("div", { style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1rem"
            }, children: /* @__PURE__ */ jsx("h3", { style: {
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.35,
              margin: 0
            }, children: project.title }) }),
            /* @__PURE__ */ jsx("p", { style: {
              color: "#475569",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              flex: 1,
              marginBottom: "1.25rem"
            }, children: project.description }),
            /* @__PURE__ */ jsx("div", { style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.25rem"
            }, children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", { style: {
              background: "rgba(13,148,136,0.08)",
              color: "#0D9488",
              padding: "0.2rem 0.6rem",
              borderRadius: "999px",
              fontSize: "0.72rem",
              fontWeight: 600
            }, children: tag }, tag)) }),
            /* @__PURE__ */ jsxs("div", { style: {
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              flexWrap: "wrap"
            }, children: [
              project.github && /* @__PURE__ */ jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "#475569",
                fontSize: "0.8rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s"
              }, onMouseOver: (e) => e.currentTarget.style.color = "#0F172A", onMouseOut: (e) => e.currentTarget.style.color = "#475569", children: [
                /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }),
                "GitHub"
              ] }),
              project.liveUrl && /* @__PURE__ */ jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "#0D9488",
                fontSize: "0.8rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s"
              }, onMouseOver: (e) => e.currentTarget.style.color = "#0F766E", onMouseOut: (e) => e.currentTarget.style.color = "#0D9488", children: [
                /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                  /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                  /* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
                  /* @__PURE__ */ jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
                ] }),
                "Link"
              ] }),
              project.content && /* @__PURE__ */ jsx("button", { onClick: () => setExpandedProject(isExpanded ? null : project._meta.path), style: {
                marginLeft: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                color: "#94A3B8",
                fontSize: "0.8rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "color 0.2s"
              }, onMouseOver: (e) => e.currentTarget.style.color = "#0D9488", onMouseOut: (e) => e.currentTarget.style.color = "#94A3B8", children: isExpanded ? "Show less ↑" : "Details ↓" })
            ] }),
            isExpanded && project.content && /* @__PURE__ */ jsx("div", { className: "prose", style: {
              marginTop: "1.25rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid #F1F5F9"
            }, dangerouslySetInnerHTML: {
              __html: marked(project.content)
            } })
          ] })
        ] }, project._meta.path);
      }) }),
      filtered.length === 0 && /* @__PURE__ */ jsx("div", { style: {
        textAlign: "center",
        padding: "4rem",
        color: "#94A3B8"
      }, children: /* @__PURE__ */ jsxs("p", { style: {
        fontSize: "1rem"
      }, children: [
        'No projects found for "',
        activeTag,
        '"'
      ] }) })
    ] })
  ] });
}
export {
  Research as component
};
