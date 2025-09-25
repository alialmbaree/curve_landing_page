// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all animations and interactions
  initSmoothScrolling();
  initScrollAnimations();
  initButtonInteractions();
  initParallaxEffects();
  initHeroAnimations();
  initServiceCardAnimations();
  initCompanyCarousel();
  initTeamMemberAnimations();
  initContactForm();
  initSocialMediaInteractions();
  initMobileMenu();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(
    ".nav-link, .learn-more-link, .btn-apply"
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  const animatedElements = [
    { selector: ".hero-content", animation: "fade-in" },
    { selector: ".social-container", animation: "slide-in-left" },
    { selector: ".services-content", animation: "fade-in" },
    { selector: ".service-card", animation: "scale-in" },
    { selector: ".companies-content", animation: "fade-in" },
    { selector: ".company-item", animation: "scale-in" },
    { selector: ".team-content", animation: "fade-in" },
    { selector: ".member-card", animation: "scale-in" },
    { selector: ".contact-content", animation: "fade-in" },
    { selector: ".contact-form", animation: "slide-in-left" },
    { selector: ".contact-options", animation: "slide-in-right" },
    { selector: ".courses-title", animation: "fade-in" },
    { selector: ".footer-content", animation: "slide-in-left" },
  ];

  animatedElements.forEach(({ selector, animation }) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.classList.add(animation);
      observer.observe(element);
    });
  });
}

// Button interactions and hover effects
function initButtonInteractions() {
  const buttons = document.querySelectorAll(".btn-apply");

  buttons.forEach((button) => {
    // Add ripple effect on click
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });

    // Add hover sound effect (optional)
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.02)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Parallax effects for background elements
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll(".gradient-orb");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.1;
      element.style.transform = `translateY(${rate * speed}px) rotate(${
        scrolled * 0.1
      }deg)`;
    });
  });
}

// Service card hover animations and interactions
function initServiceCardAnimations() {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    // Enhanced hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
      this.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";

      // Animate the service icon
      const icon = this.querySelector(".service-icon");
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)";
        icon.style.background = "rgba(255, 255, 255, 0.15)";
      }

      // Animate the 3D shape
      const shape = this.querySelector(".service-shape");
      if (shape) {
        shape.style.transform = "rotate(180deg) scale(1.1)";
        shape.style.opacity = "0.8";
      }

      // Animate the service number
      const number = this.querySelector(".service-number");
      if (number) {
        number.style.transform = "scale(1.1)";
        number.style.opacity = "0.8";
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "";

      const icon = this.querySelector(".service-icon");
      if (icon) {
        icon.style.transform = "";
        icon.style.background = "";
      }

      const shape = this.querySelector(".service-shape");
      if (shape) {
        shape.style.transform = "";
        shape.style.opacity = "";
      }

      const number = this.querySelector(".service-number");
      if (number) {
        number.style.transform = "";
        number.style.opacity = "";
      }
    });

    // Click animation
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navLinkElements = navLinks.querySelectorAll(".nav-link");
    navLinkElements.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
      ) {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
}

// Typing animation for hero title
function initTypingAnimation() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  const text = heroTitle.textContent;
  heroTitle.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  // Start typing animation after a delay
  setTimeout(typeWriter, 1000);
}

// Company carousel interactions and animations
function initCompanyCarousel() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselTrack = document.querySelector(".carousel-track");
  const companyItems = document.querySelectorAll(".company-item");

  // Pause animation on hover
  carouselContainer.addEventListener("mouseenter", function () {
    carouselTrack.style.animationPlayState = "paused";
  });

  carouselContainer.addEventListener("mouseleave", function () {
    carouselTrack.style.animationPlayState = "running";
  });

  // Enhanced hover effects for individual items
  companyItems.forEach((item, index) => {
    // Staggered animation delay for entrance
    item.style.animationDelay = `${index * 0.1}s`;

    // Enhanced hover effects
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.05)";
      this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
      this.style.zIndex = "10";

      // Animate the company logo
      const logo = this.querySelector(".company-logo");
      if (logo) {
        logo.style.transform = "scale(1.2) rotate(10deg)";
        logo.style.background = "rgba(255, 255, 255, 0.2)";
        logo.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.2)";
      }

      // Animate the company name
      const name = this.querySelector(".company-name");
      if (name) {
        name.style.transform = "translateY(-3px)";
        name.style.color = "var(--text-secondary)";
      }
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "";
      this.style.zIndex = "";

      const logo = this.querySelector(".company-logo");
      if (logo) {
        logo.style.transform = "";
        logo.style.background = "";
        logo.style.boxShadow = "";
      }

      const name = this.querySelector(".company-name");
      if (name) {
        name.style.transform = "";
        name.style.color = "";
      }
    });

    // Click animation with ripple effect
    item.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("company-ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

      // Scale animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // Add touch/swipe support for mobile
  let startX = 0;
  let isDragging = false;

  carouselContainer.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    carouselTrack.style.animationPlayState = "paused";
  });

  carouselContainer.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    e.preventDefault();
  });

  carouselContainer.addEventListener("touchend", function (e) {
    if (!isDragging) return;
    isDragging = false;
    carouselTrack.style.animationPlayState = "running";
  });
}

// Team member 3D interactions and animations
function initTeamMemberAnimations() {
  const memberCards = document.querySelectorAll(".member-card");

  memberCards.forEach((card, index) => {
    // Staggered animation delay
    card.style.animationDelay = `${index * 0.2}s`;

    // Mouse move 3D effect
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      this.style.transform = `
                translateY(-10px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.02)
            `;

      // Add dynamic lighting effect
      const image = this.querySelector(".member-image");
      if (image) {
        const lightX = (x / rect.width) * 100;
        const lightY = (y / rect.height) * 100;
        image.style.background = `
                    radial-gradient(circle at ${lightX}% ${lightY}%, 
                    rgba(255, 255, 255, 0.3) 0%, 
                    rgba(240, 147, 251, 0.8) 50%, 
                    rgba(245, 87, 108, 0.8) 100%)
                `;
      }
    });

    // Reset on mouse leave
    card.addEventListener("mouseleave", function () {
      this.style.transform = "";

      const image = this.querySelector(".member-image");
      if (image) {
        image.style.background = "";
      }
    });

    // Enhanced click animation
    card.addEventListener("click", function (e) {
      // Create 3D ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("team-ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);

      // 3D scale animation
      this.style.transform = "scale(0.95) rotateX(5deg) rotateY(5deg)";
      setTimeout(() => {
        this.style.transform = "";
      }, 200);
    });

    // Social link interactions
    const socialLinks = card.querySelectorAll(".member-social .social-link");
    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.transform = "translateZ(15px) scale(1.2) rotateY(180deg)";
        this.style.background = "rgba(255, 255, 255, 0.2)";
      });

      link.addEventListener("mouseleave", function () {
        this.style.transform = "";
        this.style.background = "";
      });
    });
  });

  // Parallax effect for team shapes
  const memberShapes = document.querySelectorAll(".member-shape");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    memberShapes.forEach((shape, index) => {
      const rate = scrolled * -0.3;
      const speed = (index + 1) * 0.1;
      shape.style.transform += ` translateZ(${rate * speed}px)`;
    });
  });
}

// Enhanced hero animations with mouse interactions
function initHeroAnimations() {
  const heroSection = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");
  const shapes = document.querySelectorAll(".shape");
  const particles = document.querySelectorAll(".particle");
  const gradientOrbs = document.querySelectorAll(".gradient-orb");

  // Mouse parallax effect
  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 50;
    const moveY = (y - centerY) / 50;

    // Move shapes based on mouse position
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.5;
      shape.style.transform += ` translate(${moveX * speed}px, ${
        moveY * speed
      }px)`;
    });

    // Move gradient orbs
    gradientOrbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.3;
      orb.style.transform += ` translate(${moveX * speed}px, ${
        moveY * speed
      }px)`;
    });

    // Move particles slightly
    particles.forEach((particle, index) => {
      const speed = (index + 1) * 0.2;
      particle.style.transform += ` translate(${moveX * speed}px, ${
        moveY * speed
      }px)`;
    });
  });

  // Reset transforms on mouse leave
  heroSection.addEventListener("mouseleave", () => {
    shapes.forEach((shape) => {
      shape.style.transform = "";
    });
    gradientOrbs.forEach((orb) => {
      orb.style.transform = "";
    });
    particles.forEach((particle) => {
      particle.style.transform = "";
    });
  });

  // Dynamic particle generation
  function createDynamicParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 10 + 8 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    document.querySelector(".particle-container").appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, 20000);
  }

  // Create new particles periodically
  setInterval(createDynamicParticle, 3000);

  // Enhanced button hover effects
  const heroButton = document.querySelector(".btn-hero");
  if (heroButton) {
    heroButton.addEventListener("mouseenter", () => {
      heroButton.style.animationPlayState = "paused";
      heroButton.style.transform = "translateY(-8px) scale(1.05)";
      heroButton.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.4)";
    });

    heroButton.addEventListener("mouseleave", () => {
      heroButton.style.animationPlayState = "running";
      heroButton.style.transform = "";
      heroButton.style.boxShadow = "";
    });
  }

  // Title glow enhancement on hover
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTitle.addEventListener("mouseenter", () => {
      heroTitle.style.animationDuration = "1s";
    });

    heroTitle.addEventListener("mouseleave", () => {
      heroTitle.style.animationDuration = "4s";
    });
  }

  // Scroll-based animation speed adjustment
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.1;
      shape.style.transform += ` translateZ(${rate * speed}px)`;
    });
  });
}

// Contact form validation and interactions
function initContactForm() {
  const form = document.querySelector(".contact-form");
  const submitBtn = form.querySelector(".btn-submit");
  const statusEl = form.querySelector(".form-status");

  // Validation rules
  const validators = {
    name: (value) => {
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return null;
    },
    email: (value) => {
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return null;
    },
    phone: (value) => {
      if (!value.trim()) return null; // Optional field
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, "")))
        return "Please enter a valid phone number";
      return null;
    },
    subject: (value) => {
      if (!value.trim()) return "Subject is required";
      if (value.trim().length < 3)
        return "Subject must be at least 3 characters";
      return null;
    },
    message: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters";
      return null;
    },
  };

  // Show field error
  function showFieldError(fieldName, message) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    const errorEl = form.querySelector(`[data-for="${fieldName}"]`);

    if (field && errorEl) {
      field.style.borderColor = "rgba(239, 68, 68, 0.5)";
      errorEl.textContent = message;
      errorEl.classList.add("show");
    }
  }

  // Clear field error
  function clearFieldError(fieldName) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    const errorEl = form.querySelector(`[data-for="${fieldName}"]`);

    if (field && errorEl) {
      field.style.borderColor = "";
      errorEl.classList.remove("show");
    }
  }

  // Validate single field
  function validateField(fieldName) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (!field) return true;

    const value = field.value;
    const validator = validators[fieldName];

    if (validator) {
      const error = validator(value);
      if (error) {
        showFieldError(fieldName, error);
        return false;
      } else {
        clearFieldError(fieldName);
        return true;
      }
    }
    return true;
  }

  // Validate all fields
  function validateForm() {
    let isValid = true;
    Object.keys(validators).forEach((fieldName) => {
      if (!validateField(fieldName)) {
        isValid = false;
      }
    });
    return isValid;
  }

  // Real-time validation
  Object.keys(validators).forEach((fieldName) => {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (field) {
      field.addEventListener("blur", () => validateField(fieldName));
      field.addEventListener("input", () => {
        if (
          form
            .querySelector(`[data-for="${fieldName}"]`)
            .classList.contains("show")
        ) {
          validateField(fieldName);
        }
      });
    }
  });

  // Form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      statusEl.className = "form-status error";
      statusEl.textContent = "Please fix the errors above";
      statusEl.style.opacity = "1";
      return;
    }

    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const phone = formData.get("phone") || "";
      const subject = formData.get("subject") || "Contact Form Submission";
      const message = formData.get("message") || "";

      const mailSubject = encodeURIComponent(`${subject} - ${name}`);
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      );
      const mailto = `mailto:info@curves.agency?subject=${mailSubject}&body=${mailBody}`;

      window.location.href = mailto;

      statusEl.className = "form-status success";
      statusEl.textContent = "Opening your email client to send the message...";
      statusEl.style.opacity = "1";

      form.reset();
      Object.keys(validators).forEach((fieldName) =>
        clearFieldError(fieldName)
      );
    } catch (error) {
      // Error state
      statusEl.className = "form-status error";
      statusEl.textContent = "Failed to send message. Please try again.";
      statusEl.style.opacity = "1";
    } finally {
      // Reset button
      submitBtn.textContent = "Send message";
      submitBtn.disabled = false;

      // Hide status after 5 seconds
      setTimeout(() => {
        statusEl.style.opacity = "0";
      }, 5000);
    }
  });

  // Option card interactions
  const optionCards = document.querySelectorAll(".option-card");
  optionCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Add click animation
      card.style.transform = "translateY(-2px) scale(0.98)";
      setTimeout(() => {
        card.style.transform = "";
      }, 150);
    });
  });
}

// Contact form validation and interactions
function initContactForm() {
  const form = document.querySelector(".contact-form");
  const submitBtn = form.querySelector(".btn-submit");
  const statusEl = form.querySelector(".form-status");

  // Validation rules
  const validators = {
    name: (value) => {
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return null;
    },
    email: (value) => {
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return null;
    },
    phone: (value) => {
      if (!value.trim()) return null; // Optional field
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, "")))
        return "Please enter a valid phone number";
      return null;
    },
    subject: (value) => {
      if (!value.trim()) return "Subject is required";
      if (value.trim().length < 3)
        return "Subject must be at least 3 characters";
      return null;
    },
    message: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters";
      return null;
    },
  };

  // Show field error
  function showFieldError(fieldName, message) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    const errorEl = form.querySelector(`[data-for="${fieldName}"]`);

    if (field && errorEl) {
      field.style.borderColor = "rgba(239, 68, 68, 0.5)";
      errorEl.textContent = message;
      errorEl.classList.add("show");
    }
  }

  // Clear field error
  function clearFieldError(fieldName) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    const errorEl = form.querySelector(`[data-for="${fieldName}"]`);

    if (field && errorEl) {
      field.style.borderColor = "";
      errorEl.classList.remove("show");
    }
  }

  // Validate single field
  function validateField(fieldName) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (!field) return true;

    const value = field.value;
    const validator = validators[fieldName];

    if (validator) {
      const error = validator(value);
      if (error) {
        showFieldError(fieldName, error);
        return false;
      } else {
        clearFieldError(fieldName);
        return true;
      }
    }
    return true;
  }

  // Validate all fields
  function validateForm() {
    let isValid = true;
    Object.keys(validators).forEach((fieldName) => {
      if (!validateField(fieldName)) {
        isValid = false;
      }
    });
    return isValid;
  }

  // Real-time validation
  Object.keys(validators).forEach((fieldName) => {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (field) {
      field.addEventListener("blur", () => validateField(fieldName));
      field.addEventListener("input", () => {
        if (
          form
            .querySelector(`[data-for="${fieldName}"]`)
            .classList.contains("show")
        ) {
          validateField(fieldName);
        }
      });
    }
  });

  // Form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      statusEl.className = "form-status error";
      statusEl.textContent = "Please fix the errors above";
      statusEl.style.opacity = "1";
      return;
    }

    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const phone = formData.get("phone") || "";
      const subject = formData.get("subject") || "Contact Form Submission";
      const message = formData.get("message") || "";

      const mailSubject = encodeURIComponent(`${subject} - ${name}`);
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      );
      const mailto = `mailto:info@curves.agency?subject=${mailSubject}&body=${mailBody}`;

      window.location.href = mailto;

      statusEl.className = "form-status success";
      statusEl.textContent = "Opening your email client to send the message...";
      statusEl.style.opacity = "1";

      form.reset();
      Object.keys(validators).forEach((fieldName) =>
        clearFieldError(fieldName)
      );
    } catch (error) {
      // Error state
      statusEl.className = "form-status error";
      statusEl.textContent = "Failed to send message. Please try again.";
      statusEl.style.opacity = "1";
    } finally {
      // Reset button
      submitBtn.textContent = "Send message";
      submitBtn.disabled = false;

      // Hide status after 5 seconds
      setTimeout(() => {
        statusEl.style.opacity = "0";
      }, 5000);
    }
  });

  // Option card interactions
  const optionCards = document.querySelectorAll(".option-card");
  optionCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Add click animation
      card.style.transform = "translateY(-2px) scale(0.98)";
      setTimeout(() => {
        card.style.transform = "";
      }, 150);
    });
  });
}

// Social media interactions
function initSocialMediaInteractions() {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    // Add click animation
    link.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("social-ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });

    // Add hover sound effect simulation
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.02)";

      // Add glow effect to icon
      const icon = this.querySelector(".social-icon");
      if (icon) {
        icon.style.filter = "drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))";
      }
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";

      const icon = this.querySelector(".social-icon");
      if (icon) {
        icon.style.filter = "";
      }
    });
  });
}

// Cursor trail effect (optional enhancement)
function initCursorTrail() {
  const trail = [];
  const trailLength = 20;

  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement("div");
    dot.className = "cursor-trail";
    dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, ${1 - i / trailLength});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        `;
    document.body.appendChild(dot);
    trail.push(dot);
  }

  document.addEventListener("mousemove", (e) => {
    trail.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
      }, index * 10);
    });
  });
}

// Initialize additional features
document.addEventListener("DOMContentLoaded", function () {
  initTypingAnimation();
  // Uncomment for cursor trail effect
  // initCursorTrail();
});

// Add CSS for ripple effect
const style = document.createElement("style");
style.textContent = `
    .ripple, .social-ripple, .company-ripple, .team-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    .team-ripple {
        background: radial-gradient(circle, rgba(240, 147, 251, 0.4) 0%, rgba(245, 87, 108, 0.4) 100%);
        animation: team-ripple-animation 0.8s linear;
    }
    
    @keyframes team-ripple-animation {
        to {
            transform: scale(6);
            opacity: 0;
        }
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .mobile-menu-btn {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .nav-links.mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.mobile-menu.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
`;
document.head.appendChild(style);
