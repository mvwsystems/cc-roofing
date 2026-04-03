/* ============================================================
   C&C ROOFING — MAIN JS
   ============================================================ */

// --- Nav scroll effect ---
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// --- Scroll reveal ---
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// --- Mobile menu ---
// iOS Safari ignores `overflow: hidden` on body — use position:fixed trick instead.
const toggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
let mobileOpen = false;
let scrollY = 0;

function lockScroll() {
  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.overflow = '';
  window.scrollTo(0, scrollY);
}

function setHamburger(open) {
  const spans = toggle.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileOpen = !mobileOpen;
    mobileMenu.classList.toggle('open', mobileOpen);
    mobileOpen ? lockScroll() : unlockScroll();
    setHamburger(mobileOpen);
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileOpen = false;
      mobileMenu.classList.remove('open');
      unlockScroll();
      setHamburger(false);
    });
  });
}

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
