/* ═══════════════════════════════════════════════
   MIMAG Finance · FinVista layout merge
   Branch: fvista-layout
   ═══════════════════════════════════════════════ */

/* ── data ────────────────────────────────────── */
const services = [
  { icon: "📈", name: "Mutual Funds",      desc: "Grow your wealth with expert guidance." },
  { icon: "🛡️", name: "Term Insurance",    desc: "Financial security for your loved ones." },
  { icon: "❤️", name: "Health Insurance",   desc: "Better health. Brighter tomorrow." },
  { icon: "💼", name: "PMS",               desc: "Personalised wealth management." },
  { icon: "📊", name: "AIF",               desc: "Access alternative investment opportunities." },
  { icon: "💰", name: "SIP",               desc: "Small steps. Big wealth." },
  { icon: "🏛️", name: "NPS",              desc: "Plan for a peaceful retirement." },
  { icon: "📋", name: "Fixed Deposits",    desc: "Stable returns. Lower risk." },
  { icon: "🔗", name: "Loan Against\nMutual Funds", desc: "Unlock the value of your investments." },
];

const partners = [
  { name: "UTI", color: "#d4380d" },
  { name: "HDFC", color: "#004b87" },
  { name: "SBI", color: "#1a237e" },
  { name: "ICICI Prudential", color: "#f57f17" },
  { name: "Kotak", color: "#e53935" },
  { name: "LIC", color: "#1b5e20" },
  { name: "Axis", color: "#880e4f" },
];

const testimonials = [
  { name: "Rahul Mehta",   role: "Software Engineer",  stars: 5, text: "MIMAG helped me plan my investments with clarity. Their guidance on mutual funds and SIPs has truly made a difference in my financial journey." },
  { name: "Priya Sharma",  role: "Business Owner",     stars: 5, text: "The term and health insurance advice is outstanding. I really feel financially secure for my family's future." },
  { name: "Amit Kulkarni", role: "Entrepreneur",       stars: 5, text: "Professional, transparent, and always available. I highly recommend MIMAG for anyone serious about long-term financial planning." },
];

const insights = [
  { tag: "Equity",    title: "The Power of SIPs in Building Long-Term Wealth",  date: "Aug 26, 2024", image: "./assets/insights_blog_1.png" },
  { tag: "Insurance", title: "Why Term Insurance is a Must-Have in 2024",        date: "Aug 20, 2024", image: "./assets/insights_blog_2.png" },
  { tag: "Funds",     title: "NPS vs Mutual Funds: Which is Right for You?",    date: "Aug 12, 2024", image: "./assets/finance-building.jpg" },
];

/* ── math helpers ─────────────────────────────── */
const formatINR = v => `₹ ${Math.round(v).toLocaleString("en-IN")}`;
const sipFV = (m, r, y) => { const n=y*12, mr=r/12/100; return mr===0 ? m*n : m*(((1+mr)**n-1)/mr)*(1+mr); };
const lsFV  = (p, r, y) => p * ((1 + r/100) ** y);

/* ── render ───────────────────────────────────── */
const render = () => {
  document.querySelector("#app").innerHTML = `

  <!-- ═══ HEADER ═══ -->
  <header class="hdr">
    <div class="container hdr-inner">
      <a class="brand" href="#top">
        <span class="brand-mark">M</span>
        <span class="brand-txt">MIMAG<small>Finance</small></span>
      </a>
      <nav class="nav" id="mainNav">
        <a href="#top">About Us</a>
        <a href="#services">Our Services</a>
        <a href="#calc">SIP Calculator</a>
        <a href="#insights">Insights</a>
        <a href="#contact">Careers</a>
      </nav>
      <div class="hdr-right">
        <a class="btn btn--gold" href="#contact">Book a Consultation</a>
        <button class="hamburger" id="menuBtn" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>

  <main>

  <!-- ═══ HERO ═══ -->
  <section class="hero" id="top">
    <img class="hero-bg" src="./assets/hero_finance_bg.png" alt="" />
    <div class="hero-overlay"></div>
    <div id="globe-scene"></div>

    <div class="hero-float">
      <span style="top:8%;right:18%;font-size:14px;opacity:.18">DISCIPLINE</span>
      <span style="top:15%;right:6%;font-size:12px;opacity:.14;transform:rotate(12deg)">FREEDOM</span>
      <span style="top:28%;right:22%;font-size:16px;opacity:.2">PROTECTION</span>
      <span style="top:42%;right:10%;font-size:11px;opacity:.14;transform:rotate(-8deg)">PROSPERITY</span>
      <span style="top:56%;right:25%;font-size:13px;opacity:.16">LEGACY</span>
      <span style="top:68%;right:8%;font-size:10px;opacity:.12;transform:rotate(6deg)">GROWTH</span>
      <em style="top:36%;right:4%;font-size:24px;opacity:.12;font-style:italic">Your Confidence</em>
    </div>

    <div class="container hero-body">
      <div class="hero-content">
        <p class="eyebrow hero-eyebrow"><span class="dot"></span>MORE THAN INVESTMENTS</p>
        <h1>A More Secure,<br><strong>Confident You.</strong></h1>
        <p class="hero-sub">Comprehensive financial solutions — from mutual funds and insurance to PMS, SIP, NPS, FD and loans against mutual funds — designed around your life goals.</p>
        <div class="hero-btns">
          <a class="btn btn--magenta" href="#services">Explore Our Services ↗</a>
          <a class="btn btn--outline-light" href="#calc">Calculate Your SIP →</a>
        </div>
      </div>
    </div>

    <div class="hero-strip">
      <div class="container hero-strip-inner">
        <div class="hstrip-item"><span class="hstrip-ico">📋</span><span>Plan<br>Smart</span></div>
        <div class="hstrip-item"><span class="hstrip-ico">📊</span><span>Invest<br>Smarter</span></div>
        <div class="hstrip-item"><span class="hstrip-ico">🛡️</span><span>Stay<br>Protected</span></div>
        <div class="hstrip-item"><span class="hstrip-ico">✨</span><span>Add More<br>Value</span></div>
        <a class="hstrip-cta" href="#calc">Open your investment desk <b>↗</b></a>
      </div>
    </div>
  </section>

  <!-- ═══ SERVICES ═══ -->
  <section class="sec sec--cream" id="services">
    <div class="container">
      <div class="sec-head">
        <div>
          <p class="eyebrow">OUR SERVICES</p>
          <h2>Complete Financial Solutions<br><strong>Under One Roof.</strong></h2>
          <p class="sec-sub">Whether you want to grow your wealth, protect what matters, or plan for the future — we offer a wide range of financial solutions tailored to your goals.</p>
        </div>
        <a class="link-arrow" href="#contact">Explore All Services</a>
      </div>
      <div class="svc-grid">
        ${services.map(s => `
        <div class="svc-card">
          <span class="svc-ico">${s.icon}</span>
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
        </div>`).join("")}
        <div class="svc-card svc-card--cta">
          <p>Not sure<br>what's right for you?</p>
          <strong>Talk to our experts for personalised advice.</strong>
          <a class="btn btn--gold btn--sm" href="#contact">Get Advice ↗</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ PARTNERS ═══ -->
  <section class="sec sec--white" id="partners">
    <div class="container">
      <div class="sec-head">
        <div>
          <p class="eyebrow">OUR TRUSTED PARTNERS</p>
          <h2>Direct Access to Leading<br><strong>Financial Institutions.</strong></h2>
          <p class="sec-sub">We work with India's most trusted asset management companies, insurance providers and financial institutions, giving you access to genuine products and the best opportunities.</p>
        </div>
        <a class="link-arrow" href="#contact">View All Partners</a>
      </div>
      <div class="partners-row">
        ${partners.map(p => `<div class="partner-logo" style="--pc:${p.color}"><span>${p.name}</span></div>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══ CALCULATOR ═══ -->
  <section class="sec sec--cream" id="calc">
    <div class="container">
      <div class="calc-top">
        <div class="calc-intro">
          <p class="eyebrow">OUR CALCULATOR</p>
          <h2>See the Power of<br><strong>Compounding.</strong></h2>
          <p class="sec-sub">Find out how your small, consistent investments can grow into something big over time.</p>
          <div class="calc-deco"><em>Small Investments,</em><br><em>Big Results</em></div>
        </div>
        <div class="calc-panel">
          <div class="calc-tabs">
            <button class="calc-tab active" data-mode="sip">SIP Calculator</button>
            <button class="calc-tab" data-mode="ls">Lumpsum Calculator</button>
          </div>
          <div class="calc-form" id="calcForm">
            <label class="calc-field">
              <span>Monthly Investment</span>
              <div class="calc-input"><span class="pre">₹</span><input type="number" id="cIn1" value="5000" min="500" max="100000" step="500"></div>
            </label>
            <label class="calc-field">
              <span>Expected Return</span>
              <div class="calc-input"><input type="number" id="cIn2" value="12" min="1" max="30" step="0.5"><span class="suf">%</span></div>
            </label>
            <label class="calc-field">
              <span>Time Period</span>
              <div class="calc-input"><input type="number" id="cIn3" value="20" min="1" max="30" step="1"><span class="suf">Years</span></div>
            </label>
            <button class="btn btn--gold btn--block" id="calcBtn" type="button">Calculate Now →</button>
          </div>
        </div>
      </div>
      <div class="calc-results" id="calcResults">
        <div class="calc-res-box"><strong id="rInv">₹ 12,00,000</strong><span>Total Investment</span></div>
        <div class="calc-res-box"><strong id="rRet">₹ 34,71,332</strong><span>Estimated Returns</span></div>
        <div class="calc-res-box calc-res-box--hl"><strong id="rTot">₹ 46,71,332</strong><span>Total Value</span></div>
      </div>
    </div>
  </section>

  <!-- ═══ WHY CHOOSE US ═══ -->
  <section class="sec sec--dark-brown" id="why">
    <div class="container why-layout">
      <div class="why-left">
        <p class="eyebrow eyebrow--gold">WHY CHOOSE US</p>
        <h2>More Than Investments.<br><strong>A Partner for Life.</strong></h2>
        <p class="why-sub">We combine expertise, technology, and a client-first approach to help you make smarter financial decisions.</p>
      </div>
      <div class="why-grid">
        <div class="why-card"><span class="why-ico">🎓</span><h3>Expert Guidance</h3><p>Backed by research and experience.</p></div>
        <div class="why-card"><span class="why-ico">🔍</span><h3>Transparent Process</h3><p>Clear, honest, and always in your best interest.</p></div>
        <div class="why-card"><span class="why-ico">🎯</span><h3>Personalised Solutions</h3><p>Tailored to your unique goals.</p></div>
        <div class="why-card"><span class="why-ico">🔭</span><h3>Long-Term Focus</h3><p>Because your tomorrow matters.</p></div>
      </div>
    </div>
  </section>

  <!-- ═══ TESTIMONIALS ═══ -->
  <section class="sec sec--cream" id="testimonials">
    <div class="container">
      <p class="eyebrow">TESTIMONIALS</p>
      <h2 class="testi-h">What Our Clients Say.</h2>
      <div class="testi-grid">
        ${testimonials.map(t => `
        <div class="testi-card">
          <div class="testi-q">❝</div>
          <div class="testi-stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</div>
          <p>${t.text}</p>
          <div class="testi-author">
            <div class="testi-avatar">${t.name[0]}</div>
            <div><strong>${t.name}</strong><span>${t.role}</span></div>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══ INSIGHTS ═══ -->
  <section class="sec sec--cream" id="insights">
    <div class="container">
      <div class="sec-head">
        <div>
          <p class="eyebrow">INSIGHTS &amp; RESEARCH</p>
          <h2>Knowledge for a<br><strong>Brighter Tomorrow.</strong></h2>
          <p class="sec-sub">Stay informed with the latest insights, the best updates and financial planning tips.</p>
        </div>
        <a class="link-arrow" href="#insights">View All Insights</a>
      </div>
      <div class="ins-grid">
        ${insights.map(a => `
        <a class="ins-card" href="#insights">
          <div class="ins-img" style="background-image:url('${a.image}')">
            <span class="ins-tag">${a.tag}</span>
          </div>
          <div class="ins-body">
            <h3>${a.title}</h3>
            <span class="ins-date">${a.date}</span>
          </div>
        </a>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══ CTA ═══ -->
  <section class="sec sec--navy" id="contact">
    <div class="container cta-layout">
      <div class="cta-left">
        <p class="eyebrow eyebrow--blue">READY TO TAKE THE NEXT STEP?</p>
        <h2>Let's Build Your<br><strong>Brighter Tomorrow.</strong></h2>
        <p>Connect with our financial experts and get a personalised plan for your goals.</p>
        <a class="btn btn--gold" href="mailto:hello@mimag.finance?subject=Free%20Consultation">Book a Free Consultation ↗</a>
      </div>
      <div class="cta-right">
        <span class="cta-pill">INVEST</span>
        <span class="cta-pill">PROTECT</span>
        <span class="cta-pill">GROW</span>
        <span class="cta-pill">BELONG</span>
      </div>
    </div>
  </section>

  </main>

  <!-- ═══ FOOTER ═══ -->
  <footer class="ftr">
    <div class="container ftr-top">
      <div class="ftr-brand">
        <a class="brand" href="#top"><span class="brand-mark">M</span><span class="brand-txt">MIMAG<small>Finance</small></span></a>
        <p>Plan Today. Wealth Tomorrow.</p>
        <div class="ftr-socials">
          <a href="#">in</a><a href="#">▶</a><a href="#">𝕏</a><a href="#">◎</a>
        </div>
      </div>
      <div class="ftr-cols">
        <div class="ftr-col"><span>Quick Links</span><a href="#top">Home</a><a href="#top">About Us</a><a href="#services">Our Services</a><a href="#calc">SIP Calculator</a></div>
        <div class="ftr-col"><span>Our Services</span><a href="#services">Mutual Funds</a><a href="#services">Insurance</a><a href="#services">PMS &amp; AIF</a><a href="#services">NPS &amp; FD</a><a href="#services">Loan Against MF</a></div>
        <div class="ftr-col ftr-nl"><span>Newsletter</span><p>Get the latest updates and insights.</p>
          <form class="nl-form" id="nlForm"><input type="email" placeholder="Enter your email" required><button type="submit">→</button></form>
        </div>
      </div>
    </div>
    <div class="container ftr-bottom">
      <span>© 2024 MIMAG Finance. All rights reserved.</span>
      <div class="ftr-legal"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Sitemap</a></div>
    </div>
  </footer>

  <a class="fab" href="mailto:hello@mimag.finance"><span>◎</span> Talk to a Money Guide <b>↗</b></a>
  <div class="toast" id="toast"></div>
  `;
};

/* ── calculator logic ────────────────────────── */
let calcMode = "sip";

function runCalc() {
  const v1 = Math.max(1, Number(document.querySelector("#cIn1").value) || 0);
  const v2 = Math.max(1, Number(document.querySelector("#cIn2").value) || 0);
  const v3 = Math.max(1, Number(document.querySelector("#cIn3").value) || 0);

  let invested, total;
  if (calcMode === "sip") {
    invested = v1 * v3 * 12;
    total = sipFV(v1, v2, v3);
  } else {
    invested = v1;
    total = lsFV(v1, v2, v3);
  }
  const returns = total - invested;
  document.querySelector("#rInv").textContent = formatINR(invested);
  document.querySelector("#rRet").textContent = formatINR(returns);
  document.querySelector("#rTot").textContent = formatINR(total);
}

function switchCalcMode(mode) {
  calcMode = mode;
  document.querySelectorAll(".calc-tab").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  const form = document.querySelector("#calcForm");
  if (mode === "sip") {
    form.innerHTML = `
      <label class="calc-field"><span>Monthly Investment</span><div class="calc-input"><span class="pre">₹</span><input type="number" id="cIn1" value="5000" min="500" max="100000" step="500"></div></label>
      <label class="calc-field"><span>Expected Return</span><div class="calc-input"><input type="number" id="cIn2" value="12" min="1" max="30" step="0.5"><span class="suf">%</span></div></label>
      <label class="calc-field"><span>Time Period</span><div class="calc-input"><input type="number" id="cIn3" value="20" min="1" max="30" step="1"><span class="suf">Years</span></div></label>
      <button class="btn btn--gold btn--block" id="calcBtn" type="button">Calculate Now →</button>`;
  } else {
    form.innerHTML = `
      <label class="calc-field"><span>Investment Amount</span><div class="calc-input"><span class="pre">₹</span><input type="number" id="cIn1" value="500000" min="5000" max="10000000" step="5000"></div></label>
      <label class="calc-field"><span>Expected Return</span><div class="calc-input"><input type="number" id="cIn2" value="12" min="1" max="30" step="0.5"><span class="suf">%</span></div></label>
      <label class="calc-field"><span>Time Period</span><div class="calc-input"><input type="number" id="cIn3" value="10" min="1" max="30" step="1"><span class="suf">Years</span></div></label>
      <button class="btn btn--gold btn--block" id="calcBtn" type="button">Calculate Now →</button>`;
  }
  document.querySelector("#calcBtn").addEventListener("click", runCalc);
  document.querySelectorAll("#calcForm input").forEach(i => i.addEventListener("input", runCalc));
  runCalc();
}

/* ── toast ────────────────────────────────────── */
function toast(msg) {
  const el = document.querySelector("#toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3200);
}

/* ── boot ─────────────────────────────────────── */
render();

// Calculator
document.querySelector("#calcBtn").addEventListener("click", runCalc);
document.querySelectorAll("#calcForm input").forEach(i => i.addEventListener("input", runCalc));
document.querySelectorAll(".calc-tab").forEach(b => b.addEventListener("click", () => switchCalcMode(b.dataset.mode)));
runCalc();

// Globe — delay init to ensure layout is settled
requestAnimationFrame(() => {
  setTimeout(() => {
    const el = document.querySelector("#globe-scene");
    if (!el) return;
    import("./globe.js?v=6")
      .then(({ initGlobe }) => { if (el) initGlobe(el); })
      .catch(err => console.warn("Globe:", err));
  }, 120);
});

// Mobile nav
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#mainNav").classList.toggle("open");
});

// Newsletter
document.querySelector("#nlForm").addEventListener("submit", e => {
  e.preventDefault(); e.currentTarget.reset();
  toast("Thanks! You're subscribed to MIMAG Finance insights.");
});
