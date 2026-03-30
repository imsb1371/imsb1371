import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { a as allBlogs } from "./allBlogs-BfXqkpph.js";
import { a as allProjects } from "./allProjects-BqfpJEwp.js";
const skills = ["Probabilistic Modeling & Uncertainty Quantification", "Machine Learning for Engineering Systems", "Natural Hazard & Earthquake Engineering", "Data-Driven Modeling of Infrastructure Systems", "Environmental Risk & Heavy Metal Prediction", "Python / PyTorch / TensorFlow"];
const publications = [{
  title: "Prediction of zinc, cadmium, and arsenic in european soils using multi-end machine learning models",
  venue: "Journal of Hazardous Materials",
  year: "2025"
}, {
  title: "Structural damage identification using ensemble deep convolutional neural network models",
  venue: "Computer Modeling in Engineering & Sciences",
  award: "Best Paper",
  year: "2022"
}, {
  title: "Response estimation of reinforced concrete shear walls using artificial neural network and simulated annealing algorithm",
  venue: "Structures",
  year: "2021"
}];
function Home() {
  const recentPosts = [...allBlogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 2);
  const featuredProjects = allProjects.slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { style: {
      background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)",
      color: "#F8FAFC",
      padding: "6rem 1.5rem 5rem",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, transparent, #0D9488, transparent)"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(13,148,136,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(13,148,136,0.05) 0%, transparent 40%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "3rem",
        alignItems: "center",
        position: "relative"
      }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "animate-fade-in-up", style: {
            marginBottom: "1rem"
          }, children: /* @__PURE__ */ jsx("span", { style: {
            display: "inline-block",
            background: "rgba(13,148,136,0.15)",
            border: "1px solid rgba(13,148,136,0.3)",
            color: "#0D9488",
            padding: "0.35rem 1rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase"
          }, children: "Postdoctoral researcher working on interpretable machine learning" }) }),
          /* @__PURE__ */ jsx("h1", { className: "animate-fade-in-up animate-delay-100", style: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 1.25rem",
            letterSpacing: "-0.02em"
          }, children: "Dr. Mohammad Sadegh Barkhordari" }),
          /* @__PURE__ */ jsxs("p", { className: "animate-fade-in-up animate-delay-200", style: {
            fontSize: "1.15rem",
            color: "#94A3B8",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2rem"
          }, children: [
            "I design, build, and study data-driven systems that help researchers make sense of complex environmental systems — at the intersection of",
            " ",
            /* @__PURE__ */ jsx("span", { style: {
              color: "#0D9488",
              fontWeight: 500
            }, children: "machine learning" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("span", { style: {
              color: "#0D9488",
              fontWeight: 500
            }, children: "engineering systems" }),
            ", and",
            " ",
            /* @__PURE__ */ jsx("span", { style: {
              color: "#0D9488",
              fontWeight: 500
            }, children: "computational modeling" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "animate-fade-in-up animate-delay-300", style: {
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsx(Link, { to: "/projects", style: {
              display: "inline-block",
              background: "#0D9488",
              color: "#fff",
              padding: "0.75rem 1.75rem",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s"
            }, onMouseOver: (e) => {
              e.currentTarget.style.background = "#0F766E";
              e.currentTarget.style.transform = "translateY(-1px)";
            }, onMouseOut: (e) => {
              e.currentTarget.style.background = "#0D9488";
              e.currentTarget.style.transform = "translateY(0)";
            }, children: "View Research" }),
            /* @__PURE__ */ jsx(Link, { to: "/resume", style: {
              display: "inline-block",
              border: "1.5px solid rgba(248,250,252,0.25)",
              color: "#F8FAFC",
              padding: "0.75rem 1.75rem",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s"
            }, onMouseOver: (e) => {
              e.currentTarget.style.borderColor = "#0D9488";
              e.currentTarget.style.background = "rgba(13,148,136,0.1)";
            }, onMouseOut: (e) => {
              e.currentTarget.style.borderColor = "rgba(248,250,252,0.25)";
              e.currentTarget.style.background = "transparent";
            }, children: "About Me" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "animate-fade-in-up animate-delay-400", style: {
          flexShrink: 0
        }, children: /* @__PURE__ */ jsx("div", { style: {
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid rgba(13,148,136,0.5)",
          boxShadow: "0 0 0 8px rgba(13,148,136,0.1)"
        }, children: /* @__PURE__ */ jsx("img", { src: "/headshot-on-white.jpg", alt: "Dr. Mohammad Sadegh Barkhordari", style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        } }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { style: {
      backgroundColor: "#1E293B",
      padding: "1.5rem"
    }, children: /* @__PURE__ */ jsx("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "1rem",
      textAlign: "center"
    }, children: [{
      value: "20+",
      label: "Publications"
    }, {
      value: "50+",
      label: "Study Participants"
    }, {
      value: "1",
      label: "Best Paper Awards"
    }, {
      value: "5",
      label: "Open-Source Tools"
    }].map(({
      value,
      label
    }) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { style: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "2rem",
        fontWeight: 700,
        color: "#0D9488"
      }, children: value }),
      /* @__PURE__ */ jsx("div", { style: {
        color: "#94A3B8",
        fontSize: "0.8rem",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        marginTop: "0.25rem"
      }, children: label })
    ] }, label)) }) }),
    /* @__PURE__ */ jsx("section", { style: {
      padding: "5rem 1.5rem",
      backgroundColor: "#F8FAFC"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "2.5rem",
        flexWrap: "wrap",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { style: {
            color: "#0D9488",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.5rem"
          }, children: "Featured Work" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#0F172A",
            margin: 0
          }, children: "Research & Projects" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/projects", style: {
          color: "#0D9488",
          fontWeight: 500,
          textDecoration: "none",
          fontSize: "0.9rem",
          display: "flex",
          alignItems: "center",
          gap: "0.25rem"
        }, children: "View all research →" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1.5rem"
      }, children: featuredProjects.map((project, i) => /* @__PURE__ */ jsxs("div", { style: {
        background: "#fff",
        borderRadius: "12px",
        padding: "1.75rem",
        border: "1px solid #E2E8F0",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        cursor: "default"
      }, onMouseOver: (e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(15,23,42,0.1)";
        el.style.borderColor = "#0D9488";
      }, onMouseOut: (e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "#E2E8F0";
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          width: "36px",
          height: "36px",
          background: "rgba(13,148,136,0.1)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          color: "#0D9488",
          fontSize: "1.1rem",
          fontWeight: 700
        }, children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("h3", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#0F172A",
          marginBottom: "0.75rem",
          lineHeight: 1.35
        }, children: project.title }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "#475569",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          marginBottom: "1.25rem"
        }, children: project.description }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem"
        }, children: project.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsx("span", { style: {
          background: "#F1F5F9",
          color: "#475569",
          padding: "0.2rem 0.65rem",
          borderRadius: "999px",
          fontSize: "0.75rem",
          fontWeight: 500
        }, children: tag }, tag)) })
      ] }, project._meta.path)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: {
      padding: "5rem 1.5rem",
      backgroundColor: "#fff"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsx("p", { style: {
        color: "#0D9488",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "0.5rem"
      }, children: "Selected Publications" }),
      /* @__PURE__ */ jsx("h2", { style: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "2rem",
        fontWeight: 700,
        color: "#0F172A",
        marginBottom: "2.5rem"
      }, children: "Recent Work" }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem"
      }, children: publications.map((pub) => /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        gap: "1.5rem",
        padding: "1.5rem",
        borderRadius: "10px",
        border: "1px solid #E2E8F0",
        alignItems: "flex-start",
        transition: "border-color 0.2s, background 0.2s"
      }, onMouseOver: (e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#0D9488";
        el.style.background = "#F8FAFC";
      }, onMouseOut: (e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#E2E8F0";
        el.style.background = "#fff";
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          color: "#94A3B8",
          fontSize: "0.85rem",
          fontWeight: 500,
          minWidth: "3rem",
          paddingTop: "2px"
        }, children: pub.year }),
        /* @__PURE__ */ jsxs("div", { style: {
          flex: 1
        }, children: [
          /* @__PURE__ */ jsx("p", { style: {
            color: "#0F172A",
            fontWeight: 500,
            fontSize: "0.95rem",
            marginBottom: "0.4rem",
            lineHeight: 1.5
          }, children: pub.title }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              color: "#0D9488",
              fontWeight: 600,
              fontSize: "0.8rem"
            }, children: pub.venue }),
            pub.award && /* @__PURE__ */ jsxs("span", { style: {
              background: "rgba(13,148,136,0.1)",
              color: "#0D9488",
              padding: "0.15rem 0.6rem",
              borderRadius: "999px",
              fontSize: "0.72rem",
              fontWeight: 600
            }, children: [
              "★ ",
              pub.award
            ] })
          ] })
        ] })
      ] }, pub.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: {
      padding: "5rem 1.5rem",
      backgroundColor: "#F8FAFC"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsx("p", { style: {
        color: "#0D9488",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "0.5rem"
      }, children: "Expertise" }),
      /* @__PURE__ */ jsx("h2", { style: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "2rem",
        fontWeight: 700,
        color: "#0F172A",
        marginBottom: "2rem"
      }, children: "Research & Technical Skills" }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem"
      }, children: skills.map((skill) => /* @__PURE__ */ jsx("span", { style: {
        padding: "0.5rem 1.1rem",
        background: "#fff",
        border: "1.5px solid #E2E8F0",
        borderRadius: "999px",
        color: "#334155",
        fontSize: "0.875rem",
        fontWeight: 500,
        transition: "border-color 0.2s, color 0.2s, background 0.2s",
        cursor: "default"
      }, onMouseOver: (e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#0D9488";
        el.style.color = "#0D9488";
        el.style.background = "rgba(13,148,136,0.05)";
      }, onMouseOut: (e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#E2E8F0";
        el.style.color = "#334155";
        el.style.background = "#fff";
      }, children: skill }, skill)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: {
      padding: "5rem 1.5rem",
      backgroundColor: "#fff"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "2.5rem",
        flexWrap: "wrap",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { style: {
            color: "#0D9488",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.5rem"
          }, children: "Writing" }),
          /* @__PURE__ */ jsx("h2", { style: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#0F172A",
            margin: 0
          }, children: "Recent Posts" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/blog/", style: {
          color: "#0D9488",
          fontWeight: 500,
          textDecoration: "none",
          fontSize: "0.9rem"
        }, children: "All posts →" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem"
      }, children: recentPosts.map((post) => /* @__PURE__ */ jsx(Link, { to: "/blog/$slug", params: {
        slug: post._meta.path
      }, style: {
        textDecoration: "none"
      }, children: /* @__PURE__ */ jsxs("div", { style: {
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        padding: "1.75rem",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s"
      }, onMouseOver: (e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 8px 24px rgba(15,23,42,0.08)";
        el.style.borderColor = "#0D9488";
      }, onMouseOut: (e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "#E2E8F0";
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1rem",
          flexWrap: "wrap"
        }, children: post.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsx("span", { style: {
          background: "rgba(13,148,136,0.1)",
          color: "#0D9488",
          padding: "0.2rem 0.6rem",
          borderRadius: "999px",
          fontSize: "0.72rem",
          fontWeight: 600
        }, children: tag }, tag)) }),
        /* @__PURE__ */ jsx("h3", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#0F172A",
          marginBottom: "0.75rem",
          lineHeight: 1.35
        }, children: post.title }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "#475569",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          marginBottom: "1rem"
        }, children: post.summary }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "#94A3B8",
          fontSize: "0.8rem"
        }, children: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }) })
      ] }) }, post._meta.path)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: {
      background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      padding: "5rem 1.5rem",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "600px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsx("h2", { style: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "2.25rem",
        fontWeight: 700,
        color: "#F8FAFC",
        marginBottom: "1rem"
      }, children: "Let's work together" }),
      /* @__PURE__ */ jsx("p", { style: {
        color: "#94A3B8",
        fontSize: "1.05rem",
        marginBottom: "2rem",
        lineHeight: 1.7
      }, children: "Interested in collaboration, speaking engagements, or just want to discuss research? I'd love to hear from you." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", style: {
        display: "inline-block",
        background: "#0D9488",
        color: "#fff",
        padding: "0.875rem 2.25rem",
        borderRadius: "8px",
        fontWeight: 600,
        fontSize: "1rem",
        textDecoration: "none",
        transition: "background 0.2s, transform 0.2s"
      }, onMouseOver: (e) => {
        e.currentTarget.style.background = "#0F766E";
        e.currentTarget.style.transform = "translateY(-1px)";
      }, onMouseOut: (e) => {
        e.currentTarget.style.background = "#0D9488";
        e.currentTarget.style.transform = "translateY(0)";
      }, children: "Get in Touch" })
    ] }) })
  ] });
}
export {
  Home as component
};
