/* =========================================================
   APPSARCH IT Solutions — Site Script
   ---------------------------------------------------------
   ALL EDITABLE SITE INFO LIVES IN SITE_CONFIG BELOW.
   Change your logo, company name, phone, email, address,
   social links and nav menu here — every page updates
   automatically because the header & footer are built
   from this one file. See README.md for full instructions.
   ========================================================= */

const SITE_CONFIG = {
  companyName: "APPSARCH",
  companyFullName: "APPSARCH IT Solutions Pvt. Ltd.",
  tagline: "Oracle Cloud & EBS Consulting",

  // Replace assets/images/logo.svg with your own logo file
  // (keep the same file name, or update the path here).
  // Recommended: transparent PNG or SVG, ~160x50px.
  logo: "assets/images/logo.svg",

  // --- Contact details (placeholders — replace with real info) ---
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  email: "info@appsarch.com",
  address: "3rd Floor, Tech Park Avenue, Hitech City, Hyderabad, Telangana 500081, India",
  mapEmbedUrl: "https://www.google.com/maps?q=Hitech+City+Hyderabad&output=embed",

  // --- Social links (leave blank "" to hide an icon) ---
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    youtube: "#"
  },

  // --- Main navigation ---
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "services.html" },
    { label: "About Us", href: "about.html" },
    { label: "Contact", href: "contact.html" }
  ]
};

/* ---------------------------------------------------------
   Header / Footer rendering
   --------------------------------------------------------- */
function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const page = currentPage();

  const navLinks = SITE_CONFIG.nav
    .map(
      (item) =>
        `<a href="${item.href}" class="${item.href === page ? "active" : ""}">${item.label}</a>`
    )
    .join("");

  mount.innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-contacts">
          <span>&#9993; <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a></span>
          <span>&#9742; <a href="${SITE_CONFIG.phoneHref}">${SITE_CONFIG.phone}</a></span>
        </div>
        <div class="topbar-contacts">
          <span>Oracle Cloud &bull; Oracle EBS &bull; Power BI &bull; Oracle Fusion</span>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="container navbar-inner">
        <a href="index.html" class="brand">
          <img src="${SITE_CONFIG.logo}" alt="${SITE_CONFIG.companyName} logo" class="logo-mark">
          <span class="brand-text">
            ${SITE_CONFIG.companyName}
            <small>${SITE_CONFIG.tagline}</small>
          </span>
        </a>
        <nav class="nav-links" id="nav-links">${navLinks}</nav>
        <div class="nav-cta">
          <a href="contact.html" class="btn btn-outline">Get a Free Consult</a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  `;

  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("is-open");
      links.classList.toggle("is-open");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("is-open");
        links.classList.remove("is-open");
      })
    );
  }
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;
  const year = new Date().getFullYear();

  const socialIcon = (key, label, symbol) =>
    SITE_CONFIG.social[key]
      ? `<a href="${SITE_CONFIG.social[key]}" aria-label="${label}" target="_blank" rel="noopener">${symbol}</a>`
      : "";

  const navLinks = SITE_CONFIG.nav.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("");

  mount.innerHTML = `
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="brand">
              <img src="${SITE_CONFIG.logo}" alt="${SITE_CONFIG.companyName} logo" class="logo-mark">
              <span class="brand-text">${SITE_CONFIG.companyName}<small>${SITE_CONFIG.tagline}</small></span>
            </a>
            <p>${SITE_CONFIG.companyFullName} helps enterprises plan, implement and support Oracle Cloud, Oracle E-Business Suite and Power BI analytics — plus custom Oracle Fusion tooling built around how your business actually works.</p>
            <div class="footer-social">
              ${socialIcon("linkedin", "LinkedIn", "in")}
              ${socialIcon("twitter", "Twitter / X", "X")}
              ${socialIcon("facebook", "Facebook", "f")}
              ${socialIcon("youtube", "YouTube", "&#9654;")}
            </div>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>${navLinks}</ul>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="services.html#oracle-cloud">Oracle Cloud Consulting</a></li>
              <li><a href="services.html#oracle-ebs">Oracle EBS Services</a></li>
              <li><a href="services.html#power-bi">Power BI &amp; Analytics</a></li>
              <li><a href="services.html#fusion-tools">Oracle Fusion Tools</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a></li>
              <li><a href="${SITE_CONFIG.phoneHref}">${SITE_CONFIG.phone}</a></li>
              <li style="color:#a9c2b6;">${SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${year} ${SITE_CONFIG.companyFullName} All rights reserved.</span>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------
   Back to top button
   --------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 480);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------------------------------------------------------
   Reveal-on-scroll animation
   --------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   FAQ accordion
   --------------------------------------------------------- */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item").forEach((i) => {
        i.classList.remove("is-open");
        i.querySelector(".faq-answer").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("is-open");
        answer.style.maxHeight = answer.scrollHeight + 20 + "px";
      }
    });
  });
}

/* ---------------------------------------------------------
   Contact form (client-side demo)
   ---------------------------------------------------------
   This static site has no backend, so the form simply shows
   a success message. To actually receive messages, connect
   the <form id="contact-form"> to a service such as Formspree,
   Netlify Forms, Google Forms, or your own backend endpoint —
   see README.md for a two-line Formspree example.
   --------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const success = document.getElementById("form-success");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (success) {
      success.classList.add("is-visible");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.reset();
  });
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initBackToTop();
  initReveal();
  initFaq();
  initContactForm();
});
