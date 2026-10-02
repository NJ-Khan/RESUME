/**
 * Kelly Portfolio - Main JavaScript
 * Customized for Naveedullah Jabarkhail
 */

(function () {
  "use strict";

  /* =========================================================
     PRELOADER
  ========================================================= */

  function removePreloader() {
    const preloader = document.getElementById("preloader");

    if (preloader) {
      preloader.remove();
    }
  }

  window.addEventListener("load", removePreloader);

  // Safety fallback
  setTimeout(removePreloader, 3000);


  /* =========================================================
     SCROLLED HEADER
  ========================================================= */

  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");

    if (!body || !header) return;

    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    ) {
      return;
    }

    if (window.scrollY > 100) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);


  /* =========================================================
     MOBILE NAVIGATION
  ========================================================= */

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  if (mobileNavToggleBtn) {

    mobileNavToggleBtn.addEventListener("click", function () {

      const body = document.querySelector("body");

      if (!body) return;

      body.classList.toggle("mobile-nav-active");

      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");

    });

  }


  /* =========================================================
     CLOSE MOBILE NAVIGATION
  ========================================================= */

  document.querySelectorAll("#navmenu a").forEach(function (link) {

    link.addEventListener("click", function () {

      const body = document.querySelector("body");

      if (
        body &&
        body.classList.contains("mobile-nav-active")
      ) {

        body.classList.remove("mobile-nav-active");

        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.classList.remove("bi-x");
          mobileNavToggleBtn.classList.add("bi-list");
        }

      }

    });

  });


  /* =========================================================
     MOBILE DROPDOWN
  ========================================================= */

  document
    .querySelectorAll(".navmenu .toggle-dropdown")
    .forEach(function (dropdownToggle) {

      dropdownToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const parent = this.parentNode;

        if (!parent) return;

        parent.classList.toggle("active");

        const nextElement = parent.nextElementSibling;

        if (nextElement) {
          nextElement.classList.toggle("dropdown-active");
        }

      });

    });


  /* =========================================================
     SCROLL TOP
  ========================================================= */

  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {

    if (!scrollTop) return;

    if (window.scrollY > 100) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }

  }

  if (scrollTop) {

    scrollTop.addEventListener("click", function (event) {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);


  /* =========================================================
     AOS ANIMATION
  ========================================================= */

  function aosInit() {

    if (typeof AOS === "undefined") {
      return;
    }

    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });

  }

  window.addEventListener("load", aosInit);


  /* =========================================================
     SKILLS ANIMATION
  ========================================================= */

  const skillsAnimation = document.querySelectorAll(
    ".skills-animation"
  );

  if (
    skillsAnimation.length &&
    typeof Waypoint !== "undefined"
  ) {

    skillsAnimation.forEach(function (item) {

      new Waypoint({

        element: item,

        offset: "80%",

        handler: function () {

          const progressBars =
            item.querySelectorAll(
              ".progress .progress-bar"
            );

          progressBars.forEach(function (bar) {

            const value =
              bar.getAttribute("aria-valuenow");

            if (value) {
              bar.style.width = value + "%";
            }

          });

        }

      });

    });

  }


  /* =========================================================
     PURE COUNTER
  ========================================================= */

  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }


  /* =========================================================
     SWIPER
  ========================================================= */

  function initSwiper() {

    if (typeof Swiper === "undefined") {
      return;
    }

    document
      .querySelectorAll(".init-swiper")
      .forEach(function (swiperElement) {

        const configElement =
          swiperElement.querySelector(".swiper-config");

        if (!configElement) {
          return;
        }

        let config;

        try {

          config = JSON.parse(
            configElement.innerHTML.trim()
          );

        } catch (error) {

          console.error(
            "Swiper configuration error:",
            error
          );

          return;
        }

        try {

          if (
            swiperElement.classList.contains(
              "swiper-tab"
            ) &&
            typeof initSwiperWithCustomPagination ===
              "function"
          ) {

            initSwiperWithCustomPagination(
              swiperElement,
              config
            );

          } else {

            new Swiper(
              swiperElement,
              config
            );

          }

        } catch (error) {

          console.error(
            "Swiper initialization error:",
            error
          );

        }

      });

  }

  window.addEventListener("load", initSwiper);


  /* =========================================================
     GLIGHTBOX
  ========================================================= */

  if (typeof GLightbox !== "undefined") {

    try {

      GLightbox({
        selector: ".glightbox"
      });

    } catch (error) {

      console.error(
        "GLightbox initialization error:",
        error
      );

    }

  }


  /* =========================================================
     ISOTOPE
  ========================================================= */

  document
    .querySelectorAll(".isotope-layout")
    .forEach(function (isotopeElement) {

      if (
        typeof Isotope === "undefined" ||
        typeof imagesLoaded === "undefined"
      ) {
        return;
      }

      const container =
        isotopeElement.querySelector(
          ".isotope-container"
        );

      if (!container) {
        return;
      }

      const layout =
        isotopeElement.getAttribute(
          "data-layout"
        ) || "masonry";

      const filter =
        isotopeElement.getAttribute(
          "data-default-filter"
        ) || "*";

      const sort =
        isotopeElement.getAttribute(
          "data-sort"
        ) || "original-order";

      let isotopeInstance = null;

      imagesLoaded(
        container,
        function () {

          isotopeInstance =
            new Isotope(
              container,
              {
                itemSelector: ".isotope-item",
                layoutMode: layout,
                filter: filter,
                sortBy: sort
              }
            );

        }
      );

      isotopeElement
        .querySelectorAll(
          ".isotope-filters li"
        )
        .forEach(function (filterButton) {

          filterButton.addEventListener(
            "click",
            function () {

              const activeFilter =
                isotopeElement.querySelector(
                  ".isotope-filters .filter-active"
                );

              if (activeFilter) {
                activeFilter.classList.remove(
                  "filter-active"
                );
              }

              this.classList.add(
                "filter-active"
              );

              if (isotopeInstance) {

                isotopeInstance.arrange({
                  filter:
                    this.getAttribute(
                      "data-filter"
                    )
                });

              }

              if (
                typeof AOS !== "undefined"
              ) {

                AOS.refresh();

              }

            }
          );

        });

    });


  /* =========================================================
     CONTACT FORM
     WHATSAPP HANDLER
  ========================================================= */

  const contactForm =
    document.querySelector(
      "#whatsapp-contact-form"
    );

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const name =
          document.querySelector(
            "#name-field"
          )?.value.trim();

        const email =
          document.querySelector(
            "#email-field"
          )?.value.trim();

        const subject =
          document.querySelector(
            "#subject-field"
          )?.value.trim();

        const message =
          document.querySelector(
            "#message-field"
          )?.value.trim();

        if (
          !name ||
          !email ||
          !subject ||
          !message
        ) {

          alert(
            "Please complete all fields before sending."
          );

          return;

        }


        /*
         * IMPORTANT:
         * Replace this number with your WhatsApp
         * number including country code.
         *
         * Afghanistan example:
         * 937XXXXXXXXX
         */

        const whatsappNumber =
          "93731088074";


        const whatsappMessage =
          "Hello Naveedullah,%0A%0A" +

          "*New Portfolio Contact*%0A%0A" +

          "*Name:* " +
          encodeURIComponent(name) +
          "%0A" +

          "*Email:* " +
          encodeURIComponent(email) +
          "%0A" +

          "*Subject:* " +
          encodeURIComponent(subject) +
          "%0A%0A" +

          "*Message:*%0A" +
          encodeURIComponent(message);


        const whatsappURL =
          "https://wa.me/" +
          whatsappNumber +
          "?text=" +
          whatsappMessage;


        window.open(
          whatsappURL,
          "_blank"
        );

      }
    );

  }

})();