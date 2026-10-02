const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

// 1. Add background-attachment: fixed securely
appJs = appJs.replace(
  /background:\s*radial-gradient\(circle at 50% 0%, #FAF5EE 0%, #F1E9DE 50%, #E8DFCFA0 100%\);/g,
  "background: radial-gradient(circle at 50% 0%, #FAF5EE 0%, #F1E9DE 50%, #E8DFCFA0 100%); background-attachment: fixed;"
);

// 2. Add GSAP logic at the very end of app.js
const gsapScript = `

// Premium GSAP Scroll Animations
setTimeout(() => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax on section titles
    gsap.utils.toArray('section h2').forEach(title => {
      gsap.fromTo(title, 
        { y: 0 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: title.closest('section'),
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        }
      );
    });

    // Parallax on glass cards
    gsap.utils.toArray('.light-glass-card').forEach((card, i) => {
      const distance = i % 2 === 0 ? -50 : -30;
      gsap.fromTo(card,
        { y: 0 },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: card.closest('.grid'),
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );
    });
  }
}, 500); // small delay to ensure DOM is fully parsed and rendered
`;

// Append GSAP script if it hasn't been added already
if (!appJs.includes('Premium GSAP Scroll Animations')) {
  appJs += gsapScript;
}

fs.writeFileSync('app.js', appJs);
console.log("Successfully added GSAP animations and fixed background.");
