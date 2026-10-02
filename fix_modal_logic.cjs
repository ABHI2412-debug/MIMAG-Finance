const fs = require('fs');

const oldLogicStr = `
            // Show Modal & Animate
            modal.classList.remove('hidden');
            
            // Small delay to allow display:block to apply before animating opacity/scale
            requestAnimationFrame(() => {
                setTimeout(() => {
                    modalCard.classList.remove('scale-95', 'opacity-0');
                    modalCard.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
`;

const newLogicStr = `
            // Show Modal & Animate
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            
            // Small delay to allow display:block to apply before animating opacity/scale
            requestAnimationFrame(() => {
                setTimeout(() => {
                    modalCard.style.opacity = '1';
                    modalCard.style.transform = 'scale(1)';
                }, 10);
            });
`;

const oldCloseStr = `
            modalCard.classList.remove('scale-100', 'opacity-100');
            modalCard.classList.add('scale-95', 'opacity-0');
            
            // Wait for transition to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
`;

const newCloseStr = `
            modalCard.style.opacity = '0';
            modalCard.style.transform = 'scale(0.95)';
            
            // Wait for transition to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.style.display = 'none';
            }, 300);
`;

function fixModalLogic(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  if (content.includes("classList.remove('scale-95', 'opacity-0')")) {
    content = content.replace(oldLogicStr, newLogicStr);
    content = content.replace(oldCloseStr, newCloseStr);
    fs.writeFileSync(filePath, content);
    console.log('Fixed modal logic in ' + filePath);
  } else {
    console.log('Could not find modal logic in ' + filePath);
  }
}

['index.html', 'insights.html', 'contact.html'].forEach(fixModalLogic);
