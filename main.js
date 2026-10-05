/**
 * Main JavaScript - Naveedullah Jabarkhail Website
 */
(function () {
  "use strict";

  function removePreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.remove();
  }
  window.addEventListener("load", removePreloader);
  setTimeout(removePreloader, 3000);

  function toggleScrolled() {
    const header = document.querySelector("#header");
    if (!header) return;
    document.body.classList.toggle("scrolled", window.scrollY > 100);
  }
  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  }

  document.querySelectorAll("#navmenu a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("mobile-nav-active");
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.classList.remove("bi-x");
        mobileNavToggleBtn.classList.add("bi-list");
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const parent = this.parentNode;
      if (!parent) return;
      parent.classList.toggle("active");
      const next = parent.nextElementSibling;
      if (next) next.classList.toggle("dropdown-active");
    });
  });

  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const toggleScrollTop = function () {
      scrollTop.classList.toggle("active", window.scrollY > 100);
    };
    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
    scrollTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("load", function () {
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
    }
  });

  const contactForm = document.querySelector("#whatsapp-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const get = (id) => document.getElementById(id)?.value.trim();
      const name = get("name");
      const email = get("email");
      const subject = get("subject");
      const message = get("message");
      const status = document.getElementById("contact-status");

      if (!name || !email || !subject || !message) {
        if (status) status.textContent = "Please complete all fields before sending.";
        return;
      }

      const whatsappNumber = "93731088074";
      const text = [
        "Hello Naveedullah,",
        "",
        "New Portfolio Contact",
        "",
        "Name: " + name,
        "Email: " + email,
        "Subject: " + subject,
        "",
        "Message:",
        message
      ].join("\\n");

      const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);
      window.open(whatsappURL, "_blank", "noopener");
      if (status) status.textContent = "Opening WhatsApp…";
    });
  }
})();
