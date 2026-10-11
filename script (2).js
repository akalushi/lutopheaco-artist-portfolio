/* ============================================================
   LUTOPHEACO — script.js
   All editable content lives in SITE_DATA below.
   Update store URLs, social links, portfolio items, etc. there.
   ============================================================ */

/* ------------------------------------------------------------
   1. EDITABLE SITE DATA
   ------------------------------------------------------------ */
const SITE_DATA = {
  /* ---- My Stores (F) ----
     Replace the placeholder "url" values with your real store links.
     Add new stores by copying a block — the grid updates automatically. */
  stores: [
    {
      name: "Gumroad",
      mark: "G",
      markClass: "mark-gumroad",
      description:
        "Digital products, creative downloads, stickers, and illustrated stories.",
      button: "Shop on Gumroad",
      url: "https://www.gumroad.com/PLACEHOLDER-lutopheaco",
    },
    {
      name: "TeePublic",
      mark: "T",
      markClass: "mark-teepublic",
      description:
        "Wearable art, T-shirt designs, stickers, and merchandise.",
      button: "Explore TeePublic",
      url: "https://www.teepublic.com/PLACEHOLDER-lutopheaco",
    },
    {
      name: "Redbubble",
      mark: "R",
      markClass: "mark-redbubble",
      description:
        "Creative artwork on stickers, accessories, apparel, and lifestyle products.",
      button: "Shop on Redbubble",
      url: "https://www.redbubble.com/PLACEHOLDER-lutopheaco",
    },
    {
      name: "Zazzle",
      mark: "Z",
      markClass: "mark-zazzle",
      description:
        "Creative designs for customizable products, gifts, and everyday essentials.",
      button: "Discover My Zazzle Store",
      url: "https://www.zazzle.com/PLACEHOLDER-lutopheaco",
    },
  ],

  /* ---- Featured Collections (E) ---- */
  collections: [
    {
      title: "Cozy Little Moods",
      description: "Soft, warm illustrations for slow and gentle days.",
      image: "assets/placeholder-cozy.svg",
      alt: "Cozy illustration placeholder for the Cozy Little Moods collection",
      link: "#portfolio",
    },
    {
      title: "Cozy Little Stories",
      description: "Illustrated tales and storybook worlds to wander through.",
      image: "assets/placeholder-stories.svg",
      alt: "Storybook placeholder for the Cozy Little Stories collection",
      link: "#portfolio",
    },
    {
      title: "Spooky & Cute Halloween",
      description: "Friendly frights, pumpkins, and seasonal charm.",
      image: "assets/placeholder-halloween.svg",
      alt: "Halloween illustration placeholder for the Spooky and Cute collection",
      link: "#portfolio",
    },
    {
      title: "Whimsical Art & Illustrations",
      description: "Playful characters and imaginative scenes, made with love.",
      image: "assets/placeholder-whimsical.svg",
      alt: "Whimsical illustration placeholder for the Whimsical Art collection",
      link: "#portfolio",
    },
  ],

  /* ---- Portfolio (D) ----
     Categories: stickers | apparel | storybooks | digital | seasonal */
  portfolio: [
    {
      title: "Cute Stickers & Illustrations",
      category: "stickers",
      caption: "Playful characters and charming little illustrations for everyday joy.",
      image: "assets/placeholder-stickers.svg",
      alt: "Cute sticker illustration placeholder",
      link: "#",
      linkLabel: "View Collection",
    },
    {
      title: "Halloween & Seasonal Designs",
      category: "seasonal",
      caption: "Friendly spooky art and seasonal designs for every time of year.",
      image: "assets/placeholder-halloween.svg",
      alt: "Seasonal Halloween artwork placeholder",
      link: "#",
      linkLabel: "View Collection",
    },
    {
      title: "T-Shirt & Merchandise Artwork",
      category: "apparel",
      caption: "Illustrations designed to be worn — bold, cozy, and expressive.",
      image: "assets/placeholder-apparel.svg",
      alt: "Apparel artwork placeholder",
      link: "#",
      linkLabel: "View Collection",
    },
    {
      title: "Children's Storybooks",
      category: "storybooks",
      caption: "Whimsical illustrated stories for young dreamers and old ones too.",
      image: "assets/placeholder-book.svg",
      alt: "Children's storybook illustration placeholder",
      link: "#",
      linkLabel: "View Collection",
    },
    {
      title: "Digital Products & Printables",
      category: "digital",
      caption: "Downloads, printables, and digital creations to collect and enjoy.",
      image: "assets/placeholder-digital.svg",
      alt: "Digital product placeholder artwork",
      link: "#",
      linkLabel: "View Collection",
    },
    {
      title: "Creative Experiments",
      category: "digital",
      caption: "Sketches, style explorations, and ideas fresh from the studio.",
      image: "assets/placeholder-whimsical.svg",
      alt: "Creative experiment artwork placeholder",
      link: "#",
      linkLabel: "View Collection",
    },
  ],

  /* ---- Latest Creations (G) — sample content, replace with real artwork ---- */
  latest: [
    {
      title: "Morning Coffee Cat",
      category: "stickers",
      image: "assets/placeholder-stickers.svg",
      alt: "Sticker placeholder — Morning Coffee Cat",
      link: "#",
    },
    {
      title: "Autumn Leaves Postcard",
      category: "seasonal",
      image: "assets/placeholder-halloween.svg",
      alt: "Seasonal placeholder — Autumn Leaves Postcard",
      link: "#",
    },
    {
      title: "Dreamy Reading Nook",
      category: "digital",
      image: "assets/placeholder-digital.svg",
      alt: "Digital art placeholder — Dreamy Reading Nook",
      link: "#",
    },
    {
      title: "The Little Lighthouse",
      category: "storybooks",
      image: "assets/placeholder-stories.svg",
      alt: "Storybook placeholder — The Little Lighthouse",
      link: "#",
    },
  ],

  /* ---- Social profiles (H) ----
     Replace placeholder URLs with your real profile links. */
  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/PLACEHOLDER-lutopheaco",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.86s-.01 3.6-.07 4.86c-.15 3.23-1.66 4.77-4.92 4.92-1.3.06-1.65.07-4.9.07s-3.6-.01-4.86-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.2 15.6 2.2 15.25 2.2 12s0-3.6.07-4.86C2.42 3.9 3.94 2.36 7.19 2.21 8.45 2.15 8.8 2.14 12 2.14V2.2Zm0 3.63a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/></svg>',
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/PLACEHOLDER-lutopheaco",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-4.9s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.1-.2.9.5 1.6 1.3 1.6 1.6 0 2.8-1.7 2.8-4.1 0-2.1-1.5-3.6-3.7-3.6-2.5 0-4 1.9-4 3.8 0 .8.3 1.6.6 2-.1.2-.2.5-.2.7l-.2.9c-.1.2-.2.3-.4.2-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.6.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2Z"/></svg>',
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/PLACEHOLDER-lutopheaco",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>',
    },
  ],
};

/* ------------------------------------------------------------
   2. CONTACT FORM CONFIGURATION
   ------------------------------------------------------------
   Demo mode: leave action as null and the form will explain that it
   is not connected yet. To go live, set action to your form
   endpoint (e.g. Formspree: "https://formspree.io/f/xxxx") and the
   form will POST the message and show a real success message. */
const CONTACT_FORM = {
  action: null,
};

/* ============================================================
   3. MODULE: RENDERERS
   ============================================================ */
const Render = (() => {
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const storeCard = (store) => `
    <article class="store-card">
      <div class="store-mark ${esc(store.markClass)}" aria-hidden="true">${esc(store.mark)}</div>
      <h3 class="store-name">${esc(store.name)}</h3>
      <p class="store-desc">${esc(store.description)}</p>
      <a class="btn btn-primary store-btn" href="${esc(store.url)}"
         target="_blank" rel="noopener noreferrer">
        ${esc(store.button)} &rarr;
      </a>
    </article>`;

  const collectionCard = (col) => `
    <article class="collection-card">
      <img src="${esc(col.image)}" alt="${esc(col.alt)}" loading="lazy" />
      <div class="collection-overlay">
        <h3>${esc(col.title)}</h3>
        <p>${esc(col.description)}</p>
        <a class="collection-link" href="${esc(col.link)}">Explore Collection &rarr;</a>
      </div>
    </article>`;

  const portfolioCard = (item) => `
    <article class="card" data-category="${esc(item.category)}">
      <div class="card-media">
        <img src="${esc(item.image)}" alt="${esc(item.alt)}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(item.title)}</h3>
        <p class="card-caption">${esc(item.caption)}</p>
        <div class="card-footer">
          <a class="btn btn-outline card-link" href="${esc(item.link)}">${esc(item.linkLabel)}</a>
        </div>
      </div>
    </article>`;

  const latestCard = (item) => `
    <article class="latest-card">
      <div class="card-media">
        <img src="${esc(item.image)}" alt="${esc(item.alt)}" loading="lazy" />
      </div>
      <div class="latest-meta">
        <span class="latest-cat">${esc(item.category)}</span>
        <h3 class="latest-title">${esc(item.title)}</h3>
        <a class="latest-link" href="${esc(item.link)}">View project &rarr;</a>
      </div>
    </article>`;

  return { storeCard, collectionCard, portfolioCard, latestCard };
})();

/* ============================================================
   4. MODULE: MOBILE NAVIGATION
   ============================================================ */
const MobileNav = (() => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  function close() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function init() {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });

    // Close when a nav link is clicked
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    // Close on Escape (accessible keyboard navigation)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        close();
        toggle.focus();
      }
    });
  }

  return { init };
})();

/* ============================================================
   5. MODULE: PORTFOLIO FILTERS
   ============================================================ */
const PortfolioFilters = (() => {
  function init() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll("#portfolio-grid .card");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const filter = btn.dataset.filter;
        cards.forEach((card) => {
          const show = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }
  return { init };
})();

/* ============================================================
   6. MODULE: CONTACT FORM
   ============================================================ */
const ContactForm = (() => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(id, message) {
    const field = document.getElementById(id);
    const row = field.closest(".form-row");
    const errEl = row.querySelector(".field-error");
    errEl.textContent = message;
    row.classList.toggle("has-error", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validate() {
    let ok = true;
    const name = document.getElementById("cf-name");
    const email = document.getElementById("cf-email");
    const subject = document.getElementById("cf-subject");
    const message = document.getElementById("cf-message");

    if (!name.value.trim()) { setError("cf-name", "Please enter your name."); ok = false; }
    else setError("cf-name", "");

    if (!email.value.trim()) { setError("cf-email", "Please enter your email."); ok = false; }
    else if (!EMAIL_RE.test(email.value.trim())) { setError("cf-email", "Please enter a valid email address."); ok = false; }
    else setError("cf-email", "");

    if (!subject.value.trim()) { setError("cf-subject", "Please enter a subject."); ok = false; }
    else setError("cf-subject", "");

    if (!message.value.trim()) { setError("cf-message", "Please write a message."); ok = false; }
    else setError("cf-message", "");

    return ok;
  }

  async function submit(e) {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    if (!validate()) return;

    // Demo mode: no backend configured — be honest with the visitor.
    if (!CONTACT_FORM.action) {
      status.classList.add("demo");
      status.textContent =
        "Demo mode: this form isn't connected to a mail service yet, so your message was not sent. Please reach out via one of my store or social pages for now.";
      return;
    }

    // Live mode: POST to configured endpoint and report real success.
    try {
      const res = await fetch(CONTACT_FORM.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        status.classList.add("success");
        status.textContent = "Thank you! Your message has been sent.";
        form.reset();
      } else {
        status.classList.add("demo");
        status.textContent = "Something went wrong sending your message. Please try again.";
      }
    } catch {
      status.classList.add("demo");
      status.textContent = "Network error — please try again in a moment.";
    }
  }

  function init() {
    form.addEventListener("submit", submit);
    form.querySelectorAll("input, textarea").forEach((el) =>
      el.addEventListener("input", () => setError(el.id, ""))
    );
  }

  return { init };
})();

/* ============================================================
   7. MODULE: SCROLLSPY (highlight current section in nav)
   ============================================================ */
const ScrollSpy = (() => {
  function init() {
    const links = document.querySelectorAll(".nav-link");
    const sections = [...links]
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) =>
              l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id)
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => spy.observe(s));
  }
  return { init };
})();

/* ============================================================
   8. BOOT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Render dynamic content
  document.getElementById("store-grid").innerHTML =
    SITE_DATA.stores.map(Render.storeCard).join("");

  document.getElementById("collection-grid").innerHTML =
    SITE_DATA.collections.map(Render.collectionCard).join("");

  document.getElementById("portfolio-grid").innerHTML =
    SITE_DATA.portfolio.map(Render.portfolioCard).join("");

  document.getElementById("latest-grid").innerHTML =
    SITE_DATA.latest.map(Render.latestCard).join("");

  // Social buttons
  document.getElementById("social-buttons").innerHTML = SITE_DATA.social
    .map(
      (s) => `
      <a class="social-btn" href="${s.url}" target="_blank" rel="noopener noreferrer">
        ${s.icon}<span>${s.name}</span>
      </a>`
    )
    .join("");

  // Footer store & social links
  document.getElementById("footer-stores").innerHTML = SITE_DATA.stores
    .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.name}</a></li>`)
    .join("");

  document.getElementById("footer-social").innerHTML = SITE_DATA.social
    .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.name}</a></li>`)
    .join("");

  // Dynamic copyright year
  document.getElementById("copyright-year").textContent = new Date().getFullYear();

  // Init modules
  MobileNav.init();
  PortfolioFilters.init();
  ContactForm.init();
  ScrollSpy.init();
});
