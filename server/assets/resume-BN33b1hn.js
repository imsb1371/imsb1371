import { jsxs, jsx } from "react/jsx-runtime";
import { marked } from "marked";
const allJobs = [
  {
    "jobTitle": "Postdoctoral Researcher",
    "summary": "Conducting interdisciplinary research at the intersection of machine learning, probabilistic modeling, and environmental/resilience engineering, with a focus on uncertainty-aware prediction systems for natural hazards and contamination remediation.",
    "startDate": "2024-09-01",
    "endDate": "Present",
    "company": "Central South University",
    "location": "Changsha, Hunan, China",
    "tags": [
      "Machine Learning",
      "Probabilistic Modeling",
      "Python",
      "Uncertainty Quantification",
      "Environmental Risk Assessment"
    ],
    "content": "- Led advanced probabilistic and machine learning research for environmental risk assessment, focusing on uncertainty-aware prediction of heavy metal contamination and remediation efficiency in soil systems.\r\n- Developed data-driven and interpretable models for performance prediction and risk analysis of complex environmental and engineered systems, integrating reliability analysis and uncertainty quantification.\r\n- Published 5 peer-reviewed Q1 papers in top-tier journals (Journal of Hazardous Materials, Journal of Cleaner Production, Expert Systems with Applications, etc.) during 2024-2026.\r\n- Mentored graduate students in machine learning applications for hazard and resilience engineering at School of Resources and Safety Engineering.",
    "_meta": {
      "filePath": "initech-junior.md",
      "fileName": "initech-junior.md",
      "directory": ".",
      "extension": "md",
      "path": "initech-junior"
    }
  },
  {
    "jobTitle": "Graduate Research Assistant & Teaching Assistant",
    "summary": "Conducted advanced research in earthquake engineering and machine learning, focusing on seismic evaluation of concrete structures, uncertainty quantification, and data-driven modeling for infrastructure resilience as part of PhD dissertation work.",
    "startDate": "2016-09-01",
    "endDate": "2020-12-31",
    "company": "Amirkabir University of Technology",
    "location": "Tehran, Iran",
    "tags": [
      "Python",
      "MATLAB",
      "Machine Learning",
      "Structural Engineering",
      "Seismic Analysis",
      "OpenSees"
    ],
    "content": "- Implemented probabilistic modeling and finite element analysis (usig OpenSees) to assess seismic performance of reinforced concrete shear walls and high-rise buildings under extreme events.\r\n- Served as Teaching Assistant for Seismology & Earthquake Engineering courses (2016–2018), responsible for solving sample problems, designing exams, and grading for graduate students.",
    "_meta": {
      "filePath": "job-2.md",
      "fileName": "job-2.md",
      "directory": ".",
      "extension": "md",
      "path": "job-2"
    }
  }
];
const allEducations = [
  {
    "school": "Isfahan University of Technology",
    "summary": "B.Sc. in Civil Engineering - GPA 3.8/4.0 (17.2/20)",
    "startDate": "2010-09-01",
    "endDate": "2014-12-31",
    "tags": [
      "Civil Engineering",
      "Structural Analysis",
      "Engineering Fundamentals"
    ],
    "content": "**Honors Thesis:** *Toward Adaptive Interfaces for Collaborative Document Editing: A Mixed-Methods Study*\r\n\r\n**Activities:** Undergraduate Researcher, Civil Engineering Department.  \r\n\r\n**Awards:** Ranked 4 among 104 graduate students in bachelor (2010-2014) at Isfahan University of Technology",
    "_meta": {
      "filePath": "bachelor.md",
      "fileName": "bachelor.md",
      "directory": ".",
      "extension": "md",
      "path": "bachelor"
    }
  },
  {
    "school": "Amirkabir University of Technology",
    "summary": "M.Sc. in Earthquake Engineering - GPA 3.9/4.0 (17.69/20)",
    "startDate": "2014-09-01",
    "endDate": "2016-12-31",
    "tags": [
      "Earthquake Engineering",
      "Soil-Structure Interaction",
      "Tall Buildings",
      "Near-field Earthquake"
    ],
    "content": "**Honors Thesis:** *base level on tall building structures under near-field earthquake records using soil-structure interaction method*\r\n\r\n**Activities:** Graduate Researcher, Structural Analysis Lab.",
    "_meta": {
      "filePath": "master.md",
      "fileName": "master.md",
      "directory": ".",
      "extension": "md",
      "path": "master"
    }
  },
  {
    "school": "Amirkabir University of Technology",
    "summary": "Ph.D. in Earthquake Engineering — GPA 3.9/4.0 (17.89/20)",
    "startDate": "2016-09-01",
    "endDate": "2020-12-31",
    "tags": [
      "Earthquake Engineering",
      "Structural Engineering",
      "Seismic Evaluation",
      "Concrete Structures"
    ],
    "content": "**Thesis:** *Seismic Evaluation of Concrete Structures with Interaction of Axial, Flexural- Shear Model in Shear Wall*\r\n\r\n**Activities:** Teaching Assistant (Seismology & Earthquake Engineering, 2016-2018), Graduate Researcher.",
    "_meta": {
      "filePath": "Phd.md",
      "fileName": "Phd.md",
      "directory": ".",
      "extension": "md",
      "path": "Phd"
    }
  }
];
const researchInterests = ["Probabilistic Modeling of Natural Hazards", "Uncertainty Quantification & Reliability Analysis", "Machine Learning for Engineering Systems", "Environmental Risk Assessment", "Structural Damage Identification", "Data-Driven Decision Support", "Extreme Events Simulation"];
const technicalSkills = [{
  category: "Machine Learning &Programming Languages",
  items: ["TensorFlow", "PyTorch", "Python", "MATLAB"]
}, {
  category: "Simulation & FEA",
  items: ["OpenSees", "ANSYS", "Finite Element Analysis"]
}, {
  category: "Modeling & Analysis",
  items: ["Probabilistic Modeling", "Uncertainty Quantification", "Reliability Analysis"]
}, {
  category: "Domain Expertise",
  items: ["Seismic Evaluation", "Environmental Risk Assessment", "Structural Health Monitoring"]
}];
function About() {
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
        backgroundImage: "radial-gradient(circle at 70% 50%, rgba(13,148,136,0.08) 0%, transparent 60%)",
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
        }, children: "Background & Experience" }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          margin: "0 0 1rem",
          lineHeight: 1.2
        }, children: "About Me" }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "#94A3B8",
          fontSize: "1.05rem",
          maxWidth: "600px",
          lineHeight: 1.7,
          margin: 0
        }, children: "Postdoctoral researcher and civil engineer dedicated to integrating machine learning with structural engineering to improve disaster risk reduction and sustainable remediation strategies." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "4rem 1.5rem"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "3rem",
        alignItems: "start",
        marginBottom: "4rem"
      }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { style: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.6rem",
            color: "#0F172A",
            marginBottom: "1.25rem",
            fontWeight: 600
          }, children: "Career Summary" }),
          /* @__PURE__ */ jsxs("div", { style: {
            color: "#334155",
            lineHeight: 1.8,
            fontSize: "0.975rem"
          }, children: [
            /* @__PURE__ */ jsx("p", { style: {
              marginBottom: "1rem"
            }, children: "I am a Postdoctoral Researcher at Central South University, where I work with the School of Resources and Safety Engineering on machine learning and probabilistic modeling for environmental and hazard resilience. My research sits at the intersection of civil engineering, data science, and risk assessment — I design data-driven models that help engineers and decision-makers predict infrastructure performance and environmental risks under extreme events." }),
            /* @__PURE__ */ jsx("p", { style: {
              marginBottom: "1rem"
            }, children: "I completed my Ph.D. in Earthquake Engineering at Amirkabir University of Technology. My dissertation developed advanced seismic evaluation models for concrete structures, integrating axial, flexural, and shear interactions, while my recent work expands into uncertainty quantification and AI applications for natural hazards and contamination remediation." }),
            /* @__PURE__ */ jsx("p", { children: "Beyond research, I care deeply about advancing resilient infrastructure and environmental safety. I have published extensively in Q1/Q2 journals (including the CMES Best Paper Award 2024) and actively mentor graduate students in machine learning applications for hazard and resilience engineering. I strive to bridge the gap between traditional structural engineering and modern data-driven methodologies." })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            gap: "0.75rem",
            marginTop: "1.75rem",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsxs("a", { href: "mailto:imsb1371@gmail.com", style: {
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#0D9488",
              color: "#fff",
              padding: "0.6rem 1.25rem",
              borderRadius: "7px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s"
            }, onMouseOver: (e) => e.currentTarget.style.background = "#0F766E", onMouseOut: (e) => e.currentTarget.style.background = "#0D9488", children: [
              /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
                /* @__PURE__ */ jsx("path", { d: "m2 7 10 7 10-7" })
              ] }),
              "Email Me"
            ] }),
            /* @__PURE__ */ jsxs("a", { href: "/cv.pdf", download: true, style: {
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              border: "1.5px solid #0D9488",
              color: "#0D9488",
              padding: "0.6rem 1.25rem",
              borderRadius: "7px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              background: "transparent",
              transition: "background 0.2s"
            }, onMouseOver: (e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(13,148,136,0.07)";
            }, onMouseOut: (e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
            }, children: [
              /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                /* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
                /* @__PURE__ */ jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
              ] }),
              "Download CV"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { style: {
          flexShrink: 0
        }, children: /* @__PURE__ */ jsx("img", { src: "/headshot-on-white.jpg", alt: "Dr. Mohammad Sadegh Barkhordari", style: {
          width: "180px",
          height: "220px",
          objectFit: "cover",
          borderRadius: "12px",
          display: "block",
          boxShadow: "0 8px 24px rgba(15,23,42,0.12)"
        } }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        marginBottom: "4rem"
      }, children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.6rem",
          color: "#0F172A",
          marginBottom: "1.25rem",
          fontWeight: 600
        }, children: "Research Interests" }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "0.65rem"
        }, children: researchInterests.map((interest) => /* @__PURE__ */ jsx("span", { style: {
          padding: "0.45rem 1rem",
          background: "#fff",
          border: "1.5px solid #E2E8F0",
          borderRadius: "999px",
          color: "#334155",
          fontSize: "0.875rem",
          fontWeight: 500,
          transition: "all 0.2s",
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
        }, children: interest }, interest)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { style: {
        marginBottom: "4rem"
      }, children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.6rem",
          color: "#0F172A",
          marginBottom: "1.5rem",
          fontWeight: 600
        }, children: "Experience" }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem"
        }, children: allJobs.map((job) => /* @__PURE__ */ jsxs("div", { style: {
          background: "#fff",
          borderRadius: "12px",
          padding: "1.75rem",
          border: "1px solid #E2E8F0",
          transition: "border-color 0.2s, box-shadow 0.2s"
        }, onMouseOver: (e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#0D9488";
          el.style.boxShadow = "0 4px 16px rgba(13,148,136,0.08)";
        }, onMouseOut: (e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#E2E8F0";
          el.style.boxShadow = "none";
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "0.75rem"
          }, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { style: {
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "#0F172A",
                marginBottom: "0.3rem"
              }, children: job.jobTitle }),
              /* @__PURE__ */ jsxs("p", { style: {
                color: "#0D9488",
                fontWeight: 500,
                fontSize: "0.9rem"
              }, children: [
                job.company,
                " · ",
                job.location
              ] })
            ] }),
            /* @__PURE__ */ jsxs("span", { style: {
              background: "#F1F5F9",
              color: "#475569",
              padding: "0.25rem 0.85rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 500,
              whiteSpace: "nowrap"
            }, children: [
              job.startDate.slice(0, 4),
              " – ",
              job.endDate ? job.endDate.slice(0, 4) : "Present"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            color: "#475569",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "1rem"
          }, children: job.summary }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: job.content ? "1rem" : 0
          }, children: job.tags.map((tag) => /* @__PURE__ */ jsx("span", { style: {
            background: "rgba(13,148,136,0.08)",
            color: "#0D9488",
            padding: "0.2rem 0.65rem",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600
          }, children: tag }, tag)) }),
          job.content && /* @__PURE__ */ jsx("div", { className: "prose", style: {
            marginTop: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid #F1F5F9"
          }, dangerouslySetInnerHTML: {
            __html: marked(job.content)
          } })
        ] }, job.jobTitle)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { style: {
        marginBottom: "4rem"
      }, children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.6rem",
          color: "#0F172A",
          marginBottom: "1.5rem",
          fontWeight: 600
        }, children: "Education" }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem"
        }, children: allEducations.map((education) => /* @__PURE__ */ jsxs("div", { style: {
          background: "#fff",
          borderRadius: "12px",
          padding: "1.75rem",
          border: "1px solid #E2E8F0",
          transition: "border-color 0.2s, box-shadow 0.2s"
        }, onMouseOver: (e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#0D9488";
          el.style.boxShadow = "0 4px 16px rgba(13,148,136,0.08)";
        }, onMouseOut: (e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#E2E8F0";
          el.style.boxShadow = "none";
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "0.75rem"
          }, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { style: {
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "#0F172A",
                marginBottom: "0.3rem"
              }, children: education.school }),
              /* @__PURE__ */ jsx("p", { style: {
                color: "#0D9488",
                fontWeight: 500,
                fontSize: "0.9rem"
              }, children: education.summary })
            ] }),
            /* @__PURE__ */ jsxs("span", { style: {
              background: "#F1F5F9",
              color: "#475569",
              padding: "0.25rem 0.85rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 500,
              whiteSpace: "nowrap"
            }, children: [
              education.startDate.slice(0, 4),
              " – ",
              education.endDate ? education.endDate.slice(0, 4) : "Present"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: education.content ? "1rem" : 0
          }, children: education.tags.map((tag) => /* @__PURE__ */ jsx("span", { style: {
            background: "#F1F5F9",
            color: "#475569",
            padding: "0.2rem 0.65rem",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 500
          }, children: tag }, tag)) }),
          education.content && /* @__PURE__ */ jsx("div", { className: "prose", style: {
            marginTop: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid #F1F5F9"
          }, dangerouslySetInnerHTML: {
            __html: marked(education.content)
          } })
        ] }, education.school)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.6rem",
          color: "#0F172A",
          marginBottom: "1.5rem",
          fontWeight: 600
        }, children: "Technical Skills" }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem"
        }, children: technicalSkills.map(({
          category,
          items
        }) => /* @__PURE__ */ jsxs("div", { style: {
          background: "#fff",
          borderRadius: "10px",
          padding: "1.25rem",
          border: "1px solid #E2E8F0"
        }, children: [
          /* @__PURE__ */ jsx("h4", { style: {
            color: "#0D9488",
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            marginBottom: "0.75rem"
          }, children: category }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem"
          }, children: items.map((item) => /* @__PURE__ */ jsx("span", { style: {
            background: "#F1F5F9",
            color: "#334155",
            padding: "0.25rem 0.6rem",
            borderRadius: "5px",
            fontSize: "0.8rem",
            fontWeight: 500
          }, children: item }, item)) })
        ] }, category)) })
      ] })
    ] })
  ] });
}
export {
  About as component
};
