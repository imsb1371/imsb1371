import { createRootRoute, HeadContent, Scripts, useRouterState, Link, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Dr. Mohammad Sadegh Barkhordari"
      },
      {
        name: "description",
        content: "Postdoctoral Research. Exploring how machine learning can make complex environmental systems more understandable and predictable."
      }
    ]
  }),
  shellComponent: RootDocument
});
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "About" },
  { to: "/projects", label: "Research" },
  { to: "/blog/", label: "Writing" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(15,23,42,0.97)" : "#0F172A",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(13,148,136,0.25)" : "1px solid transparent",
        transition: "all 0.3s ease"
      },
      children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }, children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              style: {
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#F8FAFC",
                textDecoration: "none",
                letterSpacing: "-0.01em"
              },
              children: "Dr. Mohammad Sadegh Barkhordari"
            }
          ),
          /* @__PURE__ */ jsx("nav", { style: { display: "flex", gap: "2rem", alignItems: "center" }, className: "hidden md:flex", children: navLinks.map(({ to, label }) => {
            const isActive = currentPath === to;
            return /* @__PURE__ */ jsx(
              Link,
              {
                to,
                className: "nav-link",
                style: {
                  color: isActive ? "#0D9488" : "#CBD5E1",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "0.01em"
                },
                onMouseOver: (e) => {
                  if (!isActive) e.target.style.color = "#F8FAFC";
                },
                onMouseOut: (e) => {
                  if (!isActive) e.target.style.color = "#CBD5E1";
                },
                children: label
              },
              to
            );
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileOpen(!mobileOpen),
              style: { color: "#F8FAFC", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" },
              className: "md:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: mobileOpen ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
                /* @__PURE__ */ jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
                /* @__PURE__ */ jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
              ] }) })
            }
          )
        ] }),
        mobileOpen && /* @__PURE__ */ jsx("div", { style: { paddingBottom: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }, className: "md:hidden", children: navLinks.map(({ to, label }) => /* @__PURE__ */ jsx(
          Link,
          {
            to,
            onClick: () => setMobileOpen(false),
            style: {
              display: "block",
              padding: "0.65rem 0",
              color: currentPath === to ? "#0D9488" : "#CBD5E1",
              fontSize: "0.95rem",
              textDecoration: "none",
              fontWeight: currentPath === to ? 600 : 400
            },
            children: label
          },
          to
        )) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { style: { backgroundColor: "#0F172A", color: "#94A3B8", padding: "3rem 1.5rem 2rem" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1100px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Playfair Display', Georgia, serif", color: "#F8FAFC", fontSize: "1.1rem", marginBottom: "0.75rem", fontWeight: 600 }, children: "Dr. Mohammad Sadegh Barkhordari" }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", lineHeight: 1.7 }, children: [
          "Postdoctoral Researcher ",
          /* @__PURE__ */ jsx("br", {}),
          "Personal Lab",
          /* @__PURE__ */ jsx("br", {}),
          "Tehran, Iran"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { style: { color: "#F8FAFC", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }, children: "Navigation" }),
        /* @__PURE__ */ jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }, children: navLinks.map(({ to, label }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to,
            style: { color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" },
            onMouseOver: (e) => e.target.style.color = "#0D9488",
            onMouseOut: (e) => e.target.style.color = "#94A3B8",
            children: label
          }
        ) }, to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { style: { color: "#F8FAFC", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }, children: "Connect" }),
        /* @__PURE__ */ jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [
          { href: "mailto:imsb1371@gmail.com", label: "Email" },
          { href: "https://www.linkedin.com/in/imsb1371/", label: "LinkedIn" },
          { href: "https://github.com/", label: "GitHub" },
          { href: "https://scholar.google.com/citations?hl=en&user=ZF3RfMsAAAAJ", label: "Google Scholar" },
          { href: "https://www.researchgate.net/profile/Mohammad-Barkhordari-2", label: "ResearchGate" }
        ].map(({ href, label }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" },
            onMouseOver: (e) => e.target.style.color = "#0D9488",
            onMouseOut: (e) => e.target.style.color = "#94A3B8",
            children: label
          }
        ) }, href)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }, children: [
      /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.8rem", margin: 0 }, children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Dr. Mohammad Sadegh Barkhordari. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontSize: "0.8rem", margin: 0 }, children: "Iran, Tehran." })
    ] })
  ] }) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { style: { margin: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { style: { flex: 1 }, children }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$5 = () => import("./resume-BN33b1hn.js");
const Route$5 = createFileRoute("/resume")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./projects-N0CU1VUo.js");
const Route$4 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-SeiopNvc.js");
const Route$3 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DwPHXEaS.js");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CG8WF8hm.js");
const Route$1 = createFileRoute("/blog/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_slug-DLrbrcto.js");
const Route = createFileRoute("/blog/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$5.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$6
});
const ProjectsRoute = Route$4.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const BlogIndexRoute = Route$1.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$6
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ProjectsRoute,
  ResumeRoute,
  BlogSlugRoute,
  BlogIndexRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
