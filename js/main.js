(function () {
  const ANDREA_IMAGE_URL = "https://res.cloudinary.com/deqkn7ti2/image/upload/v1780279553/Sin_t%C3%ADtulo_-_31_de_mayo_de_2026_22.04.30_utsdfb.png";
  const WHATSAPP_NUMBER = "595981596430";

  const body = document.body;
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const form = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");
  const mainImage = document.querySelector("[data-main-image]");
  const imageFrame = document.querySelector("[data-image-frame]");
  const whatsappFloat = document.querySelector("[data-whatsapp-float]");
  const contactSection = document.getElementById("contacto");
  const whatsappBaseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  /* ─── Header scroll state ─── */
  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 14);
  };

  /* ─── Mobile menu ─── */
  const closeMenu = () => {
    body.classList.remove("nav-open");
    header?.classList.remove("nav-active");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Abrir menú de navegación");
  };

  const openMenu = () => {
    body.classList.add("nav-open");
    header?.classList.add("nav-active");
    navToggle?.setAttribute("aria-expanded", "true");
    navToggle?.setAttribute("aria-label", "Cerrar menú de navegación");
  };

  const toggleMenu = () => {
    if (body.classList.contains("nav-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  /* ─── Reveal animations ─── */
  const initReveals = () => {
    const revealItems = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
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
      {
        threshold: 0.14,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  /* ─── WhatsApp float visibility on contact section ─── */
  const initWhatsAppFloatObserver = () => {
    if (!whatsappFloat || !contactSection) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          whatsappFloat.classList.toggle(
            "is-hidden-on-contact",
            entry.isIntersecting
          );
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(contactSection);
  };

  /* ─── Form validation helpers ─── */
  const clearFieldError = (field) => {
    const wrapper = field.closest(".form-field");
    const error = document.querySelector(`[data-error-for="${field.name}"]`);

    wrapper?.classList.remove("has-error");
    field.removeAttribute("aria-invalid");
    if (error) error.textContent = "";
  };

  const setFieldError = (field, message) => {
    const wrapper = field.closest(".form-field");
    const error = document.querySelector(`[data-error-for="${field.name}"]`);

    wrapper?.classList.add("has-error");
    field.setAttribute("aria-invalid", "true");
    if (error) error.textContent = message;
  };

  const validateForm = () => {
    if (!form) return false;

    const fields = Array.from(form.querySelectorAll("[data-required]"));
    let isValid = true;

    fields.forEach((field) => {
      const value = field.value.trim();
      clearFieldError(field);

      if (!value) {
        setFieldError(field, "Completá este campo para enviar la consulta.");
        isValid = false;
        return;
      }

      if (field.name === "phone" && value.replace(/[^\d+]/g, "").length < 6) {
        setFieldError(field, "Ingresá un teléfono o WhatsApp válido.");
        isValid = false;
      }
    });

    return isValid;
  };

  /* ─── Form submit → WhatsApp ─── */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!form) return;

    if (formStatus) formStatus.textContent = "";

    const firstInvalid = () => form.querySelector("[aria-invalid='true']");

    if (!validateForm()) {
      firstInvalid()?.focus();
      if (formStatus) formStatus.textContent = "Revisá los campos marcados antes de enviar.";
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const reason = String(data.get("reason") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = [
      "Hola Dra. Andrea, quisiera consultar disponibilidad para una atención.",
      "",
      `Nombre: ${name}`,
      `Teléfono/WhatsApp: ${phone}`,
      `Motivo de consulta: ${reason}`,
      `Mensaje: ${message}`,
    ].join("\n");
    const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(text)}`;

    if (formStatus) formStatus.textContent = "Abriendo WhatsApp para enviar tu consulta.";
    const whatsappLink = document.createElement("a");
    whatsappLink.href = whatsappUrl;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener";
    whatsappLink.style.display = "none";
    document.body.appendChild(whatsappLink);
    whatsappLink.click();
    whatsappLink.remove();
  };

  /* ─── Init ─── */
  window.addEventListener("load", () => {
    body.classList.add("is-ready");
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();
  initReveals();
  initWhatsAppFloatObserver();

  navToggle?.addEventListener("click", toggleMenu);

  navMenu?.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  form?.addEventListener("submit", handleFormSubmit);
  form?.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => clearFieldError(field));
  });

  /* Normalise WhatsApp hrefs — only for links that point to wa.me
     (skip internal anchors like the hero CTA which now points to #contacto) */
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.href = whatsappBaseUrl;
  });

  mainImage?.addEventListener("error", () => {
    imageFrame?.classList.add("is-missing-image");
  });

  if (mainImage) {
    mainImage.src = ANDREA_IMAGE_URL;
  }

  if (mainImage?.complete && mainImage.naturalWidth === 0) {
    imageFrame?.classList.add("is-missing-image");
  }
})();
