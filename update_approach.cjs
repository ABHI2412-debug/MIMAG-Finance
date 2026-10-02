const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

const targetRegex = /let st = ScrollTrigger\.create\(\{\s*trigger: approachSec,[\s\S]*?\}, \{ passive: false \}\);/m;

const replacement = `let currentPhase = 0;
    let phaseInterval = null;

    const startAutoplay = () => {
      if (!phaseInterval) {
        phaseInterval = setInterval(() => {
          currentPhase = (currentPhase + 1) % approachData.length;
          updateApproachStep(currentPhase);
        }, 3000);
      }
    };

    const stopAutoplay = () => {
      if (phaseInterval) {
        clearInterval(phaseInterval);
        phaseInterval = null;
      }
    };

    ScrollTrigger.create({
      trigger: approachSec,
      start: "top bottom",
      end: "bottom top",
      onEnter: startAutoplay,
      onLeave: stopAutoplay,
      onEnterBack: startAutoplay,
      onLeaveBack: stopAutoplay
    });

    const stepElements = document.querySelectorAll('.approach-step');
    stepElements.forEach((step, idx) => {
      step.style.cursor = 'pointer';
      step.addEventListener('click', () => {
        currentPhase = idx;
        updateApproachStep(currentPhase);
        stopAutoplay();
        startAutoplay();
      });
    });`;

if (targetRegex.test(content)) {
  content = content.replace(targetRegex, replacement);
  fs.writeFileSync('app.js', content);
  console.log("Successfully replaced approachSec logic!");
} else {
  console.log("Could not find approachSec logic to replace.");
}
