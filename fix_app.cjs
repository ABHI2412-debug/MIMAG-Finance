const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf-8');
const index = content.indexOf('// FAQ Accordion');

if (index === -1) {
  console.log("Could not find anchor");
  process.exit(1);
}

const newTail = `// FAQ Accordion
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const active = document.querySelector(".faq-item.active");
    if (active && active !== item) active.classList.remove("active");
    item.classList.toggle("active");
  });
});

// Phase 4: Advanced Interaction JS
if (!isReduced && window.matchMedia("(hover: hover)").matches) {
  // Nav Highlight
  const nav = document.getElementById("mainNav");
  const highlight = document.getElementById("navHighlight");
  const links = nav.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
      highlight.style.opacity = "1";
      highlight.style.width = e.target.offsetWidth + "px";
      highlight.style.transform = \`translateX(\${e.target.offsetLeft}px)\`;
    });
  });
  nav.addEventListener("mouseleave", () => {
    highlight.style.opacity = "0";
  });

  // Hero Glow
  const hero = document.getElementById("top");
  const glow = document.getElementById("heroGlow");
  if (hero && glow) {
    let heroRect;
    hero.addEventListener("mouseenter", () => {
      heroRect = hero.getBoundingClientRect();
    });
    hero.addEventListener("mousemove", (e) => {
      if (!heroRect) heroRect = hero.getBoundingClientRect();
      const x = e.clientX - heroRect.left;
      const y = e.clientY - heroRect.top;
      glow.style.setProperty('--x', x + "px");
      glow.style.setProperty('--y', y + "px");
    });
    window.addEventListener("resize", () => { heroRect = null; });
  }

  // Magnetic Buttons
  document.querySelectorAll('.btn:not(.no-magnet)').forEach(btn => {
    let btnRect;
    btn.addEventListener('mouseenter', () => {
      btnRect = btn.getBoundingClientRect();
    });
    btn.addEventListener('mousemove', (e) => {
      if (!btnRect) btnRect = btn.getBoundingClientRect();
      const x = e.clientX - btnRect.left - btnRect.width / 2;
      const y = e.clientY - btnRect.top - btnRect.height / 2;
      btn.style.transform = \`translate(\${x * 0.25}px, \${y * 0.25}px)\`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btnRect = null;
    });
    window.addEventListener("resize", () => { btnRect = null; });
  });

  // Header compact on scroll
  const hdr = document.querySelector(".hdr");
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      hdr.classList.add("scrolled");
    } else {
      hdr.classList.remove("scrolled");
    }
  });

  // Life Stage Carousel Scroll & Autorotate
  const carousel = document.getElementById('ls-carousel');
  const btnPrev = document.getElementById('ls-prev');
  const btnNext = document.getElementById('ls-next');
  
  if (carousel && btnPrev && btnNext) {
    const scrollAmount = 324; // Card width + gap
    const originalSetWidth = lifeStages.length * scrollAmount;

    // Start in the middle set to allow immediate left/right infinite scroll
    // Delay initialization slightly to ensure layout is done
    setTimeout(() => {
      carousel.scrollLeft = originalSetWidth;
    }, 100);

    let autoRotateInterval;

    const scrollNext = () => {
      // If we've scrolled near the end of the second set, jump back to first set seamlessly
      if (carousel.scrollLeft >= originalSetWidth * 2 - scrollAmount) {
        carousel.scrollBy({ left: -originalSetWidth, behavior: 'instant' });
      }
      setTimeout(() => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }, 20);
    };

    const scrollPrev = () => {
      // If we've scrolled near the start of the second set, jump forward seamlessly
      if (carousel.scrollLeft <= scrollAmount) {
         carousel.scrollBy({ left: originalSetWidth, behavior: 'instant' });
      }
      setTimeout(() => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }, 20);
    };

    const startAutoRotate = () => {
      stopAutoRotate();
      autoRotateInterval = setInterval(scrollNext, 1800); // 1.8 seconds
    };

    const stopAutoRotate = () => {
      if (autoRotateInterval) clearInterval(autoRotateInterval);
    };

    btnPrev.addEventListener('click', () => {
      scrollPrev();
      startAutoRotate(); // Reset timer on manual click
    });

    btnNext.addEventListener('click', () => {
      scrollNext();
      startAutoRotate(); // Reset timer on manual click
    });

    // Pause on hover or touch
    carousel.addEventListener('mouseenter', stopAutoRotate);
    carousel.addEventListener('mouseleave', startAutoRotate);
    carousel.addEventListener('touchstart', stopAutoRotate, { passive: true });
    carousel.addEventListener('touchend', startAutoRotate);

    // Start initially
    startAutoRotate();
  }

  // --- Image Parallax Effect ---
  // Add parallax to specific images for depth without lag
  const parallaxImages = gsap.utils.toArray('.global-card img, .parallax-img, .waypoints-bg');
  parallaxImages.forEach(img => {
    gsap.to(img, {
      yPercent: 15, // Move the image slightly down as we scroll
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

}
`;

fs.writeFileSync('app.js', content.substring(0, index) + newTail, 'utf-8');
console.log("app.js fixed!");
