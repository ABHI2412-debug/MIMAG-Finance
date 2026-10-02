const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

// 1. Add background-attachment: fixed to the Family Office section for a beautiful depth effect
appJs = appJs.replace(
  "background: radial-gradient(circle at 50% 0%, #FAF5EE 0%, #F1E9DE 50%, #E8DFCFA0 100%); color: #1A1A1A; padding: 80px 0; font-family: 'Open Sans', sans-serif; position: relative;",
  "background: radial-gradient(circle at 50% 0%, #FAF5EE 0%, #F1E9DE 50%, #E8DFCFA0 100%); background-attachment: fixed; color: #1A1A1A; padding: 80px 0; font-family: 'Open Sans', sans-serif; position: relative;"
);

// 2. Add GSAP ScrollTrigger script before the closing </script> tag
const gsapScript = `
// Premium GSAP Scroll Animations
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
          trigger: title.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      }
    );
  });

  // Parallax on glass cards
  gsap.utils.toArray('.light-glass-card').forEach((card, i) => {
    // slightly stagger the parallax distance based on index for a more organic feel
    const distance = i % 2 === 0 ? -50 : -30;
    gsap.fromTo(card,
      { y: 0 },
      {
        y: distance,
        ease: "none",
        scrollTrigger: {
          trigger: card.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      }
    );
  });
}
`;

// Insert the GSAP script right before the end of the script block
const scriptClosingIndex = appJs.lastIndexOf('</script>\n</body>');
if (scriptClosingIndex !== -1) {
  appJs = appJs.slice(0, scriptClosingIndex) + gsapScript + '\n' + appJs.slice(scriptClosingIndex);
}

fs.writeFileSync('app.js', appJs);
console.log("Added GSAP parallax and background-attachment: fixed.");
