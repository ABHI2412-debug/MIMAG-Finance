const fs = require('fs');
let content = fs.readFileSync('d:\\MIMAG-Finance\\app.js', 'utf8');
const lines = content.split(/\r?\n/);
const before = lines.slice(0, 977).join('\n');
const after = lines.slice(1060).join('\n');
const newContent = `  <!-- ═══ QUOTE SECTION ═══ -->
  <section class="sec quote-sec" id="guides" style="padding: 120px 0; background: var(--black); border-bottom: 1px solid rgba(255,255,255,0.05);">
    <div class="container" style="display: flex; justify-content: center; align-items: center; text-align: center;">
      <div class="quote-content reveal" style="max-width: 900px; padding: 80px 40px; border: 1px solid rgba(229,169,60,0.2); border-radius: 20px; background: rgba(229,169,60,0.02);">
        <div style="color:var(--gold); font-size:80px; font-family:'Playfair Display', 'Times New Roman', serif; line-height:0.5; margin-bottom:40px;">“</div>
        <p style="font-size: clamp(36px, 5vw, 56px); font-family: 'Playfair Display', serif; color: var(--white); font-weight: 400; line-height: 1.3; margin:0;">We don't just manage wealth.<br><span style="color: var(--gold); font-style: italic;">We build lasting relationships.</span></p>
      </div>
    </div>
  </section>`;
fs.writeFileSync('d:\\MIMAG-Finance\\app.js', before + '\n' + newContent + '\n' + after);
console.log('done');
