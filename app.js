/* ── data ──────────────────────────────────────────────────────────── */
const funds = [
  { icon: "01", tag: "Equity · Direct Growth",  name: "MIMAG Flexi Cap",           description: "One fund for long-term wealth across market leaders and emerging businesses.", return: "18.4%", period: "3Y annualised", risk: "Very high risk",       image: "./assets/finance-building.jpg" },
  { icon: "02", tag: "Hybrid · Direct Growth",  name: "MIMAG Balanced Advantage",  description: "Dynamic equity and debt allocation designed for changing market cycles.",   return: "14.1%", period: "3Y annualised", risk: "High risk" },
  { icon: "03", tag: "Debt · Direct Growth",    name: "MIMAG Short Duration",       description: "A steadier place for near-term goals with a focus on quality fixed income.", return: "7.6%",  period: "3Y annualised", risk: "Moderate risk" },
  { icon: "04", tag: "Index · Direct Growth",   name: "MIMAG Nifty 50",            description: "Broad-market exposure to India's 50 leading listed companies.",             return: "15.7%", period: "3Y annualised", risk: "Very high risk" },
  { icon: "05", tag: "ELSS · Direct Growth",    name: "MIMAG Tax Saver",            description: "Equity-led investing with a three-year lock-in for long-term goals.",       return: "16.9%", period: "3Y annualised", risk: "Very high risk" },
  { icon: "06", tag: "Liquid · Direct Growth",  name: "MIMAG Liquid Reserve",       description: "A flexible parking place for money you may need in the near term.",        return: "6.9%",  period: "3Y annualised", risk: "Low to moderate" },
];

const services = [
  { icon: "📈", name: "Mutual Funds",      desc: "Grow your wealth through expert-curated equity and debt fund options." },
  { icon: "🛡️", name: "Term Insurance",    desc: "Financial security for your loved ones. Bigger tomorrow." },
  { icon: "❤️", name: "Health Insurance",  desc: "Better health, brighter tomorrow." },
  { icon: "💼", name: "PMS",               desc: "Personalised wealth management." },
  { icon: "🏦", name: "AIF",               desc: "Access alternative investment opportunities." },
  { icon: "💰", name: "SIP",               desc: "Small steps, big wealth." },
  { icon: "🏛️", name: "NPS",               desc: "Plan for a peaceful retirement." },
  { icon: "📋", name: "Fixed Deposits",    desc: "Stable security, unstable markets." },
  { icon: "🔗", name: "Loan Against Mutual Funds", desc: "Unlock the value inside your investments." },
];

const partners = ["UTI", "HDFC", "SBI", "ICICI Prudential", "Kotak", "LIC", "Axis", "Nippon", "Mirae"];

const testimonials = [
  { name: "Rahul Mehta",  role: "Software Engineer",    stars: 5, text: "MIMAG helped me plan my investments with clarity. Their guidance on mutual funds and SIPs has made a real difference in my financial journey." },
  { name: "Priya Sharma", role: "Business Owner",       stars: 5, text: "This has been made-in and health insurance advice is outstanding. I now feel financially secure for my family's future." },
  { name: "Amit Kulkarni",role: "Entrepreneur",         stars: 4, text: "Professional, transparent, and always available. Recommended MIMAG for anyone serious about long-term financial planning." },
];

const insights = [
  { tag: "Equity",    title: "The Power of SIPs in Building Long-Term Wealth",       date: "Aug 26, 2024", image: "./assets/insights_blog_1.png" },
  { tag: "Insurance", title: "Why Term Insurance is a Must-Have in 2024",             date: "Aug 20, 2024", image: "./assets/insights_blog_2.png" },
  { tag: "Funds",     title: "NPS vs Mutual Funds — Which is Right for You?",        date: "Aug 12, 2024", image: null },
];

/* ── math ──────────────────────────────────────────────────────────── */
const formatINR  = (v) => `₹${Math.round(v).toLocaleString("en-IN")}`;
const fv         = (m, r, y) => { const n = y*12, mr = r/12/100; return mr === 0 ? m*n : m*(((1+mr)**n-1)/mr)*(1+mr); };
const lsv        = (p, r, y) => p * ((1 + r/100) ** y);
const goalSIP    = (t, r, y) => { const n = y*12, mr = r/12/100; return mr === 0 ? t/n : t*mr/(((1+mr)**n)-1); };

/* ── render ────────────────────────────────────────────────────────── */
const render = () => {
  document.querySelector("#app").innerHTML = `

  <!-- ═══════════ HEADER ═══════════ -->
  <header class="site-header" id="top">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="MIMAG Finance home">
        <span class="brand-logo">M</span>
        <span class="brand-text">MIMAG <small>Finance</small></span>
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="#top">About Us</a>
        <div class="nav-dropdown">
          <a href="#services">Our Services ▾</a>
        </div>
        <a href="#calculator">SIP Calculator</a>
        <a href="#insights">Insights</a>
        <a href="#contact">Careers</a>
      </nav>
      <div class="header-actions">
        <button class="header-link" id="themeToggle" type="button">◐ Theme</button>
        <button class="header-link" data-toast="Account sign-in coming soon." type="button">Sign in</button>
        <a class="button btn-cta" href="#contact">Book a Consultation ↗</a>
        <button class="menu-button" aria-label="Open navigation">☰</button>
      </div>
    </div>
  </header>

  <main>

  <!-- ═══════════ HERO ═══════════ -->
  <section class="hero" id="hero">
    <img class="hero-image" src="./assets/hero_finance_bg.png" alt="Modern financial district at golden hour" />
    <div id="globe-scene" role="img" aria-label="Interactive animated globe"></div>
    <div class="container hero-content">
      <div class="hero-eyebrow">
        <span class="eyebrow-dot"></span>More than investments
      </div>
      <h1>A More Secure,<br><strong>Confident You.</strong></h1>
      <p class="hero-copy">Comprehensive financial solutions — from mutual funds and insurance to PMS, AIF, SIP, NPS, FD and loans against mutual funds — designed around all your goals.</p>
      <div class="hero-actions">
        <a class="button btn-hero-primary" href="#services">Explore Our Services ↗</a>
        <a class="button btn-hero-secondary" href="#calculator">Calculate Your SIP →</a>
      </div>
    </div>
    <div class="container hero-meta">
      <div class="meta-item"><span class="meta-icon">📋</span><span class="meta-label">Plan<br>Smart</span></div>
      <div class="meta-item"><span class="meta-icon">📊</span><span class="meta-label">Invest<br>Smarter</span></div>
      <div class="meta-item"><span class="meta-icon">🛡️</span><span class="meta-label">Stay<br>Protected</span></div>
      <div class="meta-item"><span class="meta-icon">✨</span><span class="meta-label">Add More<br>Value</span></div>
    </div>
  </section>

  <!-- ═══════════ SERVICES ═══════════ -->
  <section class="services-section" id="services">
    <div class="container">
      <div class="section-intro">
        <div class="eyebrow-label">OUR SERVICES</div>
        <div class="section-intro-row">
          <div>
            <h2>Complete Financial Solutions<br><strong>Under One Roof.</strong></h2>
            <p>Whether you want to grow your wealth, protect what matters, or plan for the future — we offer a wide range of financial services tailored to your goals.</p>
          </div>
          <a class="arrow-link" href="#contact">Explore All Services →</a>
        </div>
      </div>
      <div class="services-grid">
        ${services.map((s, i) => `
        <article class="service-card${i === 8 ? " service-card--cta" : ""}">
          ${i === 8 ? `
            <div class="service-cta-inner">
              <p>Not sure which is right for you?</p>
              <strong>Talk to our experts for personalised advice.</strong>
              <a class="button btn-service-cta" href="#contact">Get Advice ↗</a>
            </div>
          ` : `
            <span class="service-icon">${s.icon}</span>
            <h3>${s.name}</h3>
            <p>${s.desc}</p>
            <button class="service-plus" data-toast="${s.name} details coming soon.">+</button>
          `}
        </article>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══════════ PARTNERS ═══════════ -->
  <section class="partners-section" id="partners">
    <div class="container">
      <div class="section-intro">
        <div class="eyebrow-label">OUR TRUSTED PARTNERS</div>
        <div class="section-intro-row">
          <div>
            <h2>Direct Access to Leading<br><strong>Financial Institutions.</strong></h2>
            <p>We partner with India's most trusted asset management companies, insurance providers, and financial institutions, giving you access to genuine products and the best opportunities.</p>
          </div>
          <a class="arrow-link" href="#contact">View All Partners →</a>
        </div>
      </div>
      <div class="partners-strip">
        ${partners.map(p => `<div class="partner-logo">${p}</div>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══════════ CALCULATOR ═══════════ -->
  <section class="calculator-section" id="calculator">
    <div class="container">
      <div class="section-intro">
        <div class="eyebrow-label">OUR CALCULATOR</div>
        <h2>See the Power of<br><strong>Compounding.</strong></h2>
        <p>Find out how your small, consistent investments can grow into something big over time.</p>
      </div>
      <div class="calc-tabs" role="tablist">
        <button class="calc-tab active" data-calc="sip">SIP Calculator</button>
        <button class="calc-tab" data-calc="lumpsum">Lumpsum Calculator</button>
      </div>
      <div class="calculator-shell" id="calcPanel">
        <div class="calculator-form">
          <h3>Build your SIP</h3>
          <p>Start small, stay consistent, let time do the heavy lifting.</p>
          <label class="field">
            <span class="field-head"><span class="field-label">Monthly Investment</span><span class="field-value" id="monthlyValue">₹10,000</span></span>
            <input class="range" id="monthlyRange" type="range" min="500" max="100000" step="500" value="10000" />
            <span class="range-hints"><span>₹500</span><span>₹1,00,000</span></span>
          </label>
          <label class="field">
            <span class="field-head"><span class="field-label">Expected Return (p.a.)</span><span class="field-value" id="returnValue">12%</span></span>
            <input class="range" id="returnRange" type="range" min="4" max="20" step="0.5" value="12" />
            <span class="range-hints"><span>4%</span><span>20%</span></span>
          </label>
          <label class="field">
            <span class="field-head"><span class="field-label">Time Period</span><span class="field-value" id="yearsValue">10 years</span></span>
            <input class="range" id="yearsRange" type="range" min="1" max="30" step="1" value="10" />
            <span class="range-hints"><span>1 year</span><span>30 years</span></span>
          </label>
          <a class="button btn-calc" href="#contact">Calculate Now →</a>
          <p class="calculator-footnote">Illustration only. Mutual fund investments are subject to market risks.</p>
        </div>
        <div class="result-panel">
          <div class="result-kicker">Potential value after <span id="resultYears">10 years</span></div>
          <div class="result-chart" id="resultChart" aria-label="Illustrative growth chart"></div>
          <div class="result-stats">
            <div class="result-stat"><span class="rstat-label">Total Investment</span><strong id="resultInvested" class="rstat-val">₹12,00,000</strong></div>
            <div class="result-stat"><span class="rstat-label">Estimated Returns</span><strong id="resultGain" class="rstat-val gain">₹11,23,391</strong></div>
            <div class="result-stat result-stat--total"><span class="rstat-label">Total Value</span><strong id="resultTotal" class="rstat-val lime">₹23,23,391</strong></div>
          </div>
          <a class="button btn-calc-result" href="#contact">Create an Investing Plan ↗</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════ WHY CHOOSE US ═══════════ -->
  <section class="why-section" id="why">
    <div class="container">
      <div class="why-intro">
        <div class="eyebrow-label why-eyebrow">WHY CHOOSE US</div>
        <h2>More Than Investments.<br><strong>A Partner for Life.</strong></h2>
        <p>We can drive expertise, technology, and a client-first approach to help you make smarter financial decisions.</p>
        <a class="button btn-why" href="#contact">Learn More →</a>
      </div>
      <div class="why-grid">
        <div class="why-card">
          <span class="why-icon">🧑‍💼</span>
          <h3>Expert Guidance</h3>
          <p>Backed by decades of expertise and experience.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🔍</span>
          <h3>Transparent Process</h3>
          <p>Clear, honest, and always in your best interest.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🎯</span>
          <h3>Personalised Solutions</h3>
          <p>Tailored to your unique goals.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🔭</span>
          <h3>Long-Term Focus</h3>
          <p>Because your tomorrow matters more.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════ TESTIMONIALS ═══════════ -->
  <section class="testimonials-section" id="testimonials">
    <div class="container">
      <div class="eyebrow-label">TESTIMONIALS</div>
      <h2>What Our Clients Say.</h2>
      <div class="testimonials-grid">
        ${testimonials.map(t => `
        <article class="testimonial-card">
          <div class="testimonial-stars">${"★".repeat(t.stars)}${"☆".repeat(5-t.stars)}</div>
          <p>"${t.text}"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${t.name[0]}</div>
            <div>
              <strong>${t.name}</strong>
              <span>${t.role}</span>
            </div>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══════════ INSIGHTS ═══════════ -->
  <section class="insights-section" id="insights">
    <div class="container">
      <div class="section-intro">
        <div class="eyebrow-label">INSIGHTS &amp; RESEARCH</div>
        <div class="section-intro-row">
          <div>
            <h2>Knowledge for a<br><strong>Brighter Tomorrow.</strong></h2>
            <p>Stay informed with the latest insights, market updates, and financial planning tips.</p>
          </div>
          <a class="arrow-link" href="#insights">View All Insights →</a>
        </div>
      </div>
      <div class="insights-grid">
        ${insights.map(article => `
        <article class="insight-card">
          <div class="insight-image" style="${article.image ? `background-image:url('${article.image}')` : "background: linear-gradient(135deg, #1a2b1a 0%, #2d4a2d 100%)"}">
            <span class="insight-tag">${article.tag}</span>
          </div>
          <div class="insight-body">
            <h3>${article.title}</h3>
            <div class="insight-foot">
              <span class="insight-date">${article.date}</span>
              <a class="insight-arrow" href="#insights">→</a>
            </div>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══════════ CTA BANNER ═══════════ -->
  <section class="cta-section" id="contact">
    <div class="container cta-inner">
      <div class="cta-left">
        <div class="eyebrow-label cta-eyebrow">READY TO TAKE THE NEXT STEP?</div>
        <h2>Let's Build Your<br><strong>Brighter Tomorrow.</strong></h2>
        <p>Connect with our financial experts and get a personalised plan for your goals.</p>
        <a class="button btn-cta-main" href="mailto:hello@mimag.finance?subject=Free%20Consultation">Book a Free Consultation ↗</a>
      </div>
      <div class="cta-right">
        <div class="cta-pill">INVEST</div>
        <div class="cta-pill">PROTECT</div>
        <div class="cta-pill">GROW</div>
        <div class="cta-pill">BELONG</div>
      </div>
    </div>
  </section>

  </main>

  <!-- ═══════════ FOOTER ═══════════ -->
  <footer>
    <div class="container footer-top">
      <div class="footer-brand">
        <a class="brand" href="#top">
          <span class="brand-logo">M</span>
          <span class="brand-text">MIMAG <small>Finance</small></span>
        </a>
        <p>Invest. Protect. Grow. Belong.</p>
        <div class="footer-socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">▶</a>
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="Instagram">◎</a>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <span>Quick Links</span>
          <a href="#top">Home</a>
          <a href="#top">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#calculator">SIP Calculator</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Careers</a>
        </div>
        <div class="footer-col">
          <span>Our Services</span>
          <a href="#services">Mutual Funds</a>
          <a href="#services">Insurance</a>
          <a href="#services">PMS</a>
          <a href="#services">NPS &amp; AIF</a>
          <a href="#services">Loan Against MF</a>
        </div>
        <div class="footer-col footer-newsletter">
          <span>Newsletter</span>
          <p>Get market updates and insights.</p>
          <form class="newsletter-form" id="newsletterForm">
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit" class="btn-newsletter">→</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 MIMAG Finance. All rights reserved.</span>
      <div class="footer-legal">
        <a href="#top">Privacy Policy</a>
        <a href="#top">Terms &amp; Conditions</a>
        <a href="#top">Sitemap</a>
      </div>
    </div>
  </footer>

  <div class="floating-cta" id="floatingCta">
    <span>◎</span> Talk to a Money Guide <b>↗</b>
  </div>
  <div class="toast" id="toast" role="status"></div>
  `;
};

/* ── range util ─────────────────────────────────────────────────────── */
const updateRange = (el, pct) => el.style.setProperty("--fill", `${pct}%`);
const pct = (el) => ((el.value - el.min) / (el.max - el.min)) * 100;

/* ── SIP calculator ─────────────────────────────────────────────────── */
const updateCalculator = () => {
  const monthly = Number(document.querySelector("#monthlyRange").value);
  const rate    = Number(document.querySelector("#returnRange").value);
  const years   = Number(document.querySelector("#yearsRange").value);
  const invested = monthly * years * 12;
  const total    = fv(monthly, rate, years);
  document.querySelector("#monthlyValue").textContent = formatINR(monthly);
  document.querySelector("#returnValue").textContent  = `${rate}%`;
  document.querySelector("#yearsValue").textContent   = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#resultYears").textContent  = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#resultTotal").textContent  = formatINR(total);
  document.querySelector("#resultInvested").textContent = formatINR(invested);
  document.querySelector("#resultGain").textContent   = formatINR(total - invested);
  ["monthlyRange", "returnRange", "yearsRange"].forEach(id => {
    const el = document.querySelector(`#${id}`);
    updateRange(el, pct(el));
  });
  const chart = document.querySelector("#resultChart");
  chart.innerHTML = Array.from({ length: 20 }, (_, i) => {
    const p = (i + 1) / 20;
    const invested_h = 10 + p * 42;
    const gain_h     = 10 + (Math.pow(p, 1.6) * 46);
    return `<div class="chart-col"><span class="bar bar-gain" style="height:${gain_h}%"></span><span class="bar bar-inv" style="height:${invested_h}%"></span></div>`;
  }).join("");
};

/* ── Lumpsum switch ────────────────────────────────────────────────── */
const showLumpsum = () => {
  const panel = document.querySelector("#calcPanel");
  panel.innerHTML = `
    <div class="calculator-form">
      <h3>Build your Lump Sum</h3>
      <p>Choose an amount, a return assumption, and the time you can stay invested.</p>
      <label class="field">
        <span class="field-head"><span class="field-label">Initial Investment</span><span class="field-value" id="lsValue">₹2,50,000</span></span>
        <input class="range" id="lsRange" type="range" min="5000" max="5000000" step="5000" value="250000" />
        <span class="range-hints"><span>₹5,000</span><span>₹50,00,000</span></span>
      </label>
      <label class="field">
        <span class="field-head"><span class="field-label">Expected Return (p.a.)</span><span class="field-value" id="lsReturnVal">12%</span></span>
        <input class="range" id="lsReturn" type="range" min="4" max="20" step="0.5" value="12" />
        <span class="range-hints"><span>4%</span><span>20%</span></span>
      </label>
      <label class="field">
        <span class="field-head"><span class="field-label">Time Period</span><span class="field-value" id="lsYearsVal">10 years</span></span>
        <input class="range" id="lsYears" type="range" min="1" max="30" step="1" value="10" />
        <span class="range-hints"><span>1 year</span><span>30 years</span></span>
      </label>
      <a class="button btn-calc" href="#contact">Calculate Now →</a>
      <p class="calculator-footnote">Illustration only. Actual returns can vary. Consider goal, horizon, and risk appetite.</p>
    </div>
    <div class="result-panel">
      <div class="result-kicker">Potential value after <span id="lsResultYears">10 years</span></div>
      <div class="result-chart" id="lsChart" aria-label="Lumpsum growth chart"></div>
      <div class="result-stats">
        <div class="result-stat"><span class="rstat-label">Total Investment</span><strong id="lsResultInv" class="rstat-val">₹2,50,000</strong></div>
        <div class="result-stat"><span class="rstat-label">Estimated Returns</span><strong id="lsResultGain" class="rstat-val gain">₹5,26,463</strong></div>
        <div class="result-stat result-stat--total"><span class="rstat-label">Total Value</span><strong id="lsResultTotal" class="rstat-val lime">₹7,76,463</strong></div>
      </div>
      <a class="button btn-calc-result" href="#contact">Discuss Your Investment Plan ↗</a>
    </div>
  `;
  const updateLS = () => {
    const p2 = Number(document.querySelector("#lsRange").value);
    const r2 = Number(document.querySelector("#lsReturn").value);
    const y2 = Number(document.querySelector("#lsYears").value);
    const total2 = lsv(p2, r2, y2);
    document.querySelector("#lsValue").textContent      = formatINR(p2);
    document.querySelector("#lsReturnVal").textContent  = `${r2}%`;
    document.querySelector("#lsYearsVal").textContent   = `${y2} ${y2 === 1 ? "year" : "years"}`;
    document.querySelector("#lsResultYears").textContent = `${y2} ${y2 === 1 ? "year" : "years"}`;
    document.querySelector("#lsResultTotal").textContent = formatINR(total2);
    document.querySelector("#lsResultInv").textContent  = formatINR(p2);
    document.querySelector("#lsResultGain").textContent = formatINR(total2 - p2);
    ["lsRange", "lsReturn", "lsYears"].forEach(id => {
      const el = document.querySelector(`#${id}`);
      updateRange(el, pct(el));
    });
    const chart = document.querySelector("#lsChart");
    chart.innerHTML = Array.from({ length: 20 }, (_, i) => {
      const prog = (i + 1) / 20;
      const base = 12 + prog * 38;
      const gain = 10 + Math.pow(prog, 1.35) * 52;
      return `<div class="chart-col"><span class="bar bar-gain" style="height:${gain}%"></span><span class="bar bar-inv" style="height:${base}%"></span></div>`;
    }).join("");
  };
  document.querySelectorAll(".range").forEach(el => el.addEventListener("input", updateLS));
  updateLS();
};

const showSIP = () => {
  const panel = document.querySelector("#calcPanel");
  panel.innerHTML = `
    <div class="calculator-form">
      <h3>Build your SIP</h3>
      <p>Start small, stay consistent, let time do the heavy lifting.</p>
      <label class="field">
        <span class="field-head"><span class="field-label">Monthly Investment</span><span class="field-value" id="monthlyValue">₹10,000</span></span>
        <input class="range" id="monthlyRange" type="range" min="500" max="100000" step="500" value="10000" />
        <span class="range-hints"><span>₹500</span><span>₹1,00,000</span></span>
      </label>
      <label class="field">
        <span class="field-head"><span class="field-label">Expected Return (p.a.)</span><span class="field-value" id="returnValue">12%</span></span>
        <input class="range" id="returnRange" type="range" min="4" max="20" step="0.5" value="12" />
        <span class="range-hints"><span>4%</span><span>20%</span></span>
      </label>
      <label class="field">
        <span class="field-head"><span class="field-label">Time Period</span><span class="field-value" id="yearsValue">10 years</span></span>
        <input class="range" id="yearsRange" type="range" min="1" max="30" step="1" value="10" />
        <span class="range-hints"><span>1 year</span><span>30 years</span></span>
      </label>
      <a class="button btn-calc" href="#contact">Calculate Now →</a>
      <p class="calculator-footnote">Illustration only. Mutual fund investments are subject to market risks.</p>
    </div>
    <div class="result-panel">
      <div class="result-kicker">Potential value after <span id="resultYears">10 years</span></div>
      <div class="result-chart" id="resultChart" aria-label="Illustrative growth chart"></div>
      <div class="result-stats">
        <div class="result-stat"><span class="rstat-label">Total Investment</span><strong id="resultInvested" class="rstat-val">₹12,00,000</strong></div>
        <div class="result-stat"><span class="rstat-label">Estimated Returns</span><strong id="resultGain" class="rstat-val gain">₹11,23,391</strong></div>
        <div class="result-stat result-stat--total"><span class="rstat-label">Total Value</span><strong id="resultTotal" class="rstat-val lime">₹23,23,391</strong></div>
      </div>
      <a class="button btn-calc-result" href="#contact">Create an Investing Plan ↗</a>
    </div>
  `;
  document.querySelectorAll(".range").forEach(el => el.addEventListener("input", updateCalculator));
  updateCalculator();
};

/* ── toast ──────────────────────────────────────────────────────────── */
const showToast = (msg) => {
  const toast = document.querySelector("#toast");
  toast.textContent = msg;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 3200);
};

/* ── boot ───────────────────────────────────────────────────────────── */
render();

// Globe
import("./globe.js?v=5")
  .then(({ initGlobe }) => initGlobe(document.querySelector("#globe-scene")))
  .catch(err => console.warn("Globe unavailable:", err));

// Calculator init
updateCalculator();
document.querySelectorAll(".range").forEach(el => el.addEventListener("input", updateCalculator));

// Calc tab switching
document.querySelectorAll(".calc-tab").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".calc-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  if (btn.dataset.calc === "lumpsum") showLumpsum();
  else showSIP();
}));

// Toast events
document.querySelectorAll("[data-toast]").forEach(el => el.addEventListener("click", () => showToast(el.dataset.toast)));

// Theme toggle
document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("soft-light");
  showToast(`${document.body.classList.contains("soft-light") ? "Soft light" : "Reference dark"} theme enabled.`);
});

// Mobile nav
document.querySelector(".menu-button").addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.contains("mobile-open");
  nav.classList.toggle("mobile-open", !open);
});

// Newsletter
document.querySelector("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Thanks! You're subscribed to MIMAG Finance insights.");
  e.currentTarget.reset();
});

// Floating CTA
document.querySelector("#floatingCta").addEventListener("click", () => {
  window.location.href = "mailto:hello@mimag.finance";
});
