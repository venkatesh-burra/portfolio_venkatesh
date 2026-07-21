/**
 * Burra Venkatesh — Portfolio JavaScript
 * Typing animation, particles, scroll reveal, theme toggle
 */

(function () {
  'use strict';

  /* ========================================
     Configuration
     ======================================== */
  const TYPING_TEXTS = [
    'Python Developer',
    'Django Developer',
    'Backend Developer',
    'Full Stack Learner',
    'Problem Solver'
  ];

  const TYPING_SPEED = 80;
  const DELETING_SPEED = 45;
  const PAUSE_DURATION = 2000;

  /* ========================================
     DOM Elements
     ======================================== */
  const loader = document.getElementById('loader');
  const navbar = document.getElementById('navbar');
  const themeToggle = document.getElementById('themeToggle');
  const typingText = document.getElementById('typingText');
  const backToTop = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const particlesCanvas = document.getElementById('particles');
  const navLinks = document.querySelectorAll('.nav-link');
  const profilePhoto = document.getElementById('profilePhoto');

  /* ========================================
     Loading Screen
     ======================================== */
  function hideLoader() {
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1800);
  }

  window.addEventListener('load', hideLoader);
  document.body.style.overflow = 'hidden';

  /* ========================================
     Theme Toggle (Dark / Light)
     ======================================== */
  function getPreferredTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
      icon.className = 'bi bi-sun-fill';
    } else {
      icon.className = 'bi bi-moon-stars-fill';
    }
  }

  function initTheme() {
    const theme = getPreferredTheme();
    setTheme(theme);

    themeToggle?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ========================================
     Typing Animation
     ======================================== */
  function initTypingAnimation() {
    if (!typingText) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = TYPING_TEXTS[textIndex];

      if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

      if (!isDeleting && charIndex === currentText.length) {
        delay = PAUSE_DURATION;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % TYPING_TEXTS.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }

    type();
  }

  /* ========================================
     Particle Background
     ======================================== */
  function initParticles() {
    if (!particlesCanvas) return;

    const ctx = particlesCanvas.getContext('2d');
    let particles = [];
    let animationId;
    let width, height;

    function resize() {
      width = particlesCanvas.width = window.innerWidth;
      height = particlesCanvas.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.min(Math.floor(width * height / 12000), 80);
      particles = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const particleColor = isLight ? '99, 102, 241' : '139, 92, 246';
      const lineColor = isLight ? '99, 102, 241' : '99, 102, 241';

      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    // Redraw particles when theme changes
    themeToggle?.addEventListener('click', () => {
      cancelAnimationFrame(animationId);
      draw();
    });
  }

  /* ========================================
     Scroll Reveal Animation
     ======================================== */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* ========================================
     Animated Skill Bars
     ======================================== */
  function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target;
            const level = item.getAttribute('data-level');
            item.style.setProperty('--level', level + '%');
            item.classList.add('animated');
            observer.unobserve(item);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillItems.forEach((item) => observer.observe(item));
  }

  /* ========================================
     Sticky Navbar & Active Link
     ======================================== */
  function initNavbar() {
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
      const scrollY = window.scrollY;

      // Navbar scroll effect
      if (scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }

      // Back to top button
      if (scrollY > 400) {
        backToTop?.classList.add('visible');
      } else {
        backToTop?.classList.remove('visible');
      }

      // Active nav link
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ========================================
     Back to Top
     ======================================== */
  function initBackToTop() {
    backToTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ========================================
     Smooth Scroll for Nav Links
     ======================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });

          // Close mobile menu
          const navCollapse = document.getElementById('navMenu');
          if (navCollapse?.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
            bsCollapse?.hide();
          }
        }
      });
    });
  }

  /* ========================================
     Contact Form
     ======================================== */
  function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !subject || !message) {
        showFormFeedback('Please fill in all fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showFormFeedback('Please enter a valid email address.', 'error');
        return;
      }

      // Mailto fallback — opens user's email client
      const mailtoLink = `mailto:venkatesh.burra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

      window.location.href = mailtoLink;
      showFormFeedback('Opening your email client... If it did not open, email me directly at venkatesh.burra@gmail.com', 'success');
      contactForm.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormFeedback(message, type) {
    if (!formFeedback) return;
    formFeedback.textContent = message;
    formFeedback.className = 'form-feedback ' + type;
    formFeedback.hidden = false;

    setTimeout(() => {
      formFeedback.hidden = true;
    }, 6000);
  }

  /* ========================================
     Profile Photo Auto-Detection
     When user uploads profile.jpg, it replaces placeholder
     ======================================== */
  function initProfilePhoto() {
    const customPhoto = new Image();
    customPhoto.onload = function () {
      // Replace hero and about photos with uploaded image
      document.querySelectorAll('.hero-photo, .about-photo').forEach((img) => {
        img.src = 'assets/images/profile.jpg';
        img.alt = 'Burra Venkatesh — Python Full Stack Developer';
      });
    };
    customPhoto.onerror = function () {
      // Keep placeholder — profile.jpg not uploaded yet
    };
    customPhoto.src = 'assets/images/profile.jpg?' + Date.now();
  }

  /* ========================================
     Lazy Loading Enhancement
     ======================================== */
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) return;

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }

  /* ========================================
     Live Demo Placeholder
     ======================================== */
  function initLiveDemoBtn() {
    const btn = document.getElementById('liveDemoBtn');
    btn?.addEventListener('click', () => {
      alert('Live demo coming soon! Clone the repo and run it locally:\nhttps://github.com/venkatesh-burra/College-admissions-campus-tour-Appplication');
    });
  }

  /* ========================================
     Initialize All
     ======================================== */
  function init() {
    initTheme();
    initTypingAnimation();
    initParticles();
    initScrollReveal();
    initSkillBars();
    initNavbar();
    initBackToTop();
    initSmoothScroll();
    initContactForm();
    initProfilePhoto();
    initLazyLoading();
    initLiveDemoBtn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
