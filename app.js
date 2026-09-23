/* ═══════════════════════════════════════════════
   MIMAG Finance · FinVista layout merge
   Branch: fvista-layout
   ═══════════════════════════════════════════════ */

/* ── data ────────────────────────────────────── */
const services = [
  { icon: "📈", name: "Mutual Funds", desc: "Grow your wealth with expert guidance.", details: "Our Mutual Fund advisory helps you select the best equity, debt, and hybrid funds based on your risk profile and financial goals. We provide regular portfolio rebalancing and performance tracking to ensure you stay on the path to wealth creation." },
  { icon: "🛡️", name: "Term Insurance", desc: "Financial security for your loved ones.", details: "Protect your family's financial future with comprehensive term insurance plans. We help you calculate the optimal cover amount and choose policies with high claim settlement ratios at the most competitive premiums." },
  { icon: "❤️", name: "Health Insurance", desc: "Better health. Brighter tomorrow.", details: "Medical emergencies shouldn't drain your savings. We guide you through selecting robust health insurance plans that offer extensive coverage, cashless hospitalization, and no hidden sub-limits for complete peace of mind." },
  { icon: "💼", name: "PMS", desc: "Personalised wealth management.", details: "For high-net-worth individuals, our Portfolio Management Services offer customized investment strategies. Benefit from direct equity exposure, active fund management by seasoned experts, and exclusive investment opportunities." },
  { icon: "📊", name: "AIF", desc: "Access alternative investment opportunities.", details: "Diversify beyond traditional asset classes with Alternative Investment Funds. We provide access to private equity, real estate, hedge funds, and venture capital, designed for sophisticated investors seeking alpha." },
  { icon: "💰", name: "SIP", desc: "Small steps. Big wealth.", details: "Systematic Investment Plans (SIPs) are the most disciplined way to build wealth. By investing a fixed amount regularly, you benefit from rupee cost averaging and the incredible power of compounding over time." },
  { icon: "🏛️", name: "NPS", desc: "Plan for a peaceful retirement.", details: "The National Pension System (NPS) offers a highly tax-efficient way to build your retirement corpus. We help you choose the right pension fund manager and asset allocation to ensure a steady income in your golden years." },
  { icon: "📋", name: "Fixed Deposits", desc: "Stable returns. Lower risk.", details: "Preserve your capital and earn guaranteed returns with corporate and bank Fixed Deposits. We handpick high-rated FDs that offer better interest rates than traditional savings accounts while ensuring maximum safety." },
  { icon: "🔗", name: "Loan Against\nMutual Funds", desc: "Unlock the value of your investments.", details: "Need urgent liquidity? Don't sell your mutual funds. We help you secure an overdraft facility against your mutual fund holdings at attractive interest rates, so your investments continue to grow while you meet short-term cash needs." },
];

const partners = [
  { name: "UTI", color: "#d4380d", img: "https://logo.uplead.com/utimf.com" },
  { name: "HDFC", color: "#004b87", img: "https://logo.uplead.com/hdfcbank.com" },
  { name: "SBI", color: "#1a237e", img: "https://logo.uplead.com/sbi.co.in" },
  { name: "ICICI Prudential", color: "#f57f17", img: "https://logo.uplead.com/icicibank.com" },
  { name: "Kotak", color: "#e53935", img: "https://logo.uplead.com/kotak.com" },
  { name: "LIC", color: "#1b5e20", img: "https://logo.uplead.com/licindia.in" },
  { name: "Axis", color: "#880e4f", img: "https://logo.uplead.com/axisbank.com" },
];

const testimonials = [
  { name: "Rahul Mehta", role: "Software Engineer", stars: 5, text: "MIMAG helped me plan my investments with clarity. Their guidance on mutual funds and SIPs has truly made a difference in my financial journey.", img: "./assets/profile_rahul.png" },
  { name: "Priya Sharma", role: "Business Owner", stars: 5, text: "The term and health insurance advice is outstanding. I really feel financially secure for my family's future.", img: "./assets/profile_priya.png" },
  { name: "Amit Kulkarni", role: "Entrepreneur", stars: 5, text: "Professional, transparent, and always available. I highly recommend MIMAG for anyone serious about long-term financial planning.", img: "./assets/profile_amit.png" },
];

const insights = [
  { tag: "Equity", title: "The Power of SIPs in Building Long-Term Wealth", date: "Aug 26, 2024", image: "./assets/insights_blog_1.png" },
  { tag: "Insurance", title: "Why Term Insurance is a Must-Have in 2024", date: "Aug 20, 2024", image: "./assets/insights_blog_2.png" },
  { tag: "Funds", title: "NPS vs Mutual Funds: Which is Right for You?", date: "Aug 12, 2024", image: "./assets/finance-building.jpg" },
];

const funds = [
  { name: "MIMAG High-Growth Equity", category: "Equity - Large & Mid Cap", risk: "Very High", return5y: "18.4%", minSip: "₹ 1,000", nav: "124.55", tag: "Top Rated" },
  { name: "MIMAG Tax Saver 80C", category: "ELSS - Tax Saving", risk: "High", return5y: "15.2%", minSip: "₹ 500", nav: "86.12", tag: "Tax Saver" },
  { name: "MIMAG Stable Debt Fund", category: "Debt - Corporate Bond", risk: "Low to Moderate", return5y: "7.8%", minSip: "₹ 1,000", nav: "32.40", tag: "Low Risk" },
  { name: "MIMAG Bluechip Equity Fund", category: "Equity - Large Cap", risk: "High", return5y: "14.6%", minSip: "₹ 1,000", nav: "192.30", tag: "Consistent" },
  { name: "MIMAG Flexi Cap Growth", category: "Equity - Flexi Cap", risk: "Very High", return5y: "16.8%", minSip: "₹ 500", nav: "115.80", tag: "Popular" },
  { name: "MIMAG Liquid Cash Fund", category: "Debt - Liquid", risk: "Low", return5y: "6.2%", minSip: "₹ 1,000", nav: "1024.15", tag: "Short Term" },
];

const faqs = [
  { q: "What is the minimum amount required to start a SIP?", a: "You can start a Systematic Investment Plan (SIP) with as little as ₹500 per month for most mutual funds." },
  { q: "How do I track my portfolio performance?", a: "MIMAG Finance provides a unified dashboard where you can track all your mutual funds, insurance, and other assets in real-time." },
  { q: "Is my money safe with MIMAG?", a: "We partner directly with SEBI-registered AMCs and IRDAI-approved insurers. Your investments are held securely with the respective institutions." },
  { q: "Can I withdraw my mutual fund investments anytime?", a: "Yes, open-ended mutual funds can be withdrawn at any time. However, ELSS (Tax Saver) funds have a mandatory 3-year lock-in period." },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We understand your goals, risk appetite, and current financial standing." },
  { step: "02", title: "Strategy", desc: "Our experts design a custom portfolio tailored to achieve your specific targets." },
  { step: "03", title: "Execution", desc: "Seamless onboarding and investment execution via our digital platform." },
  { step: "04", title: "Review", desc: "Continuous monitoring and periodic rebalancing to keep you on track." },
];

const tickers = [
  { name: "NIFTY 50", val: "22,514.65", change: "+0.85%" },
  { name: "SENSEX", val: "74,228.02", change: "+0.78%" },
  { name: "GOLD (10g)", val: "71,450", change: "-0.12%" },
  { name: "USD/INR", val: "83.45", change: "-0.05%" },
  { name: "NIFTY BANK", val: "48,159.10", change: "+1.20%" },
];

const lifeStages = [
  { img: "./assets/ls_first_investment.png", title: "First Investment", desc: "Start your wealth journey with confidence." },
  { img: "./assets/ls_growing_family.png", title: "Growing Family", desc: "Secure what matters most." },
  { img: "./assets/ls_retirement_planning.png", title: "Retirement Planning", desc: "Turn today's planning into tomorrow's freedom." },
  { img: "./assets/ls_tax_efficiency.png", title: "Tax Efficiency", desc: "Keep more of what you earn." },
  { img: "./assets/ls_legacy_planning.png", title: "Legacy Planning", desc: "Create a lasting impact for generations." },
  { img: "./assets/ls_wealth_accumulation.png", title: "Wealth Accumulation", desc: "Build a strong foundation for your future." },
  { img: "./assets/ls_education_planning.png", title: "Education Planning", desc: "Invest in a brighter future." },
  { img: "./assets/ls_business_expansion.png", title: "Business Expansion", desc: "Fuel your enterprise's growth." },
  { img: "./assets/ls_debt_management.png", title: "Debt Management", desc: "Overcome financial hurdles with ease." }
];

/* ── math helpers ─────────────────────────────── */
const formatINR = v => `₹ ${Math.round(v).toLocaleString("en-IN")}`;
const sipFV = (m, r, y) => { const n = y * 12, mr = r / 12 / 100; return mr === 0 ? m * n : m * (((1 + mr) ** n - 1) / mr) * (1 + mr); };
const lsFV = (p, r, y) => p * ((1 + r / 100) ** y);

function animateValue(el, start, end, duration) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = formatINR(end);
    return;
  }
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * ease;
    el.textContent = formatINR(current);
    if (progress < 1) window.requestAnimationFrame(step);
    else el.textContent = formatINR(end);
  };
  window.requestAnimationFrame(step);
}

/* ── render ───────────────────────────────────── */
const render = () => {
  document.querySelector("#app").innerHTML = `
  <div id="scroll-progress"></div>

  <!-- ═══ TICKER ═══ -->
  <div class="ticker-wrap" id="tickerWrap">
    <div class="ticker" id="liveTicker">
      ${[...tickers, ...tickers, ...tickers, ...tickers].map(t => `
      <div class="ticker-item">
        <span>${t.name}</span>
        <strong>${t.val}</strong>
        <em class="${t.change.startsWith('-') ? 'down' : 'up'}">${t.change}</em>
      </div>
      `).join("")}
    </div>
  </div>

  <!-- ═══ HEADER ═══ -->
  <header class="hdr">
    <div class="container hdr-inner">
      <a class="brand" href="#top">
        <img src="./assets/logo-finvista.png" alt="FinVista" style="height: 72px; width: auto;">
      </a>
      <div class="nav-wrap">
        <nav class="nav" id="mainNav">
          <div class="nav-highlight" id="navHighlight"></div>
          <a href="#top">About Us</a>
          <a href="#services">Our Services <span style="font-size:10px">▼</span></a>
          <a href="#calc">SIP Calculator</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Careers</a>
        </nav>
      </div>
      <div class="hdr-right">
        <a class="btn btn--gold" href="#contact">Book a Consultation ↗</a>
        <button class="hamburger" id="menuBtn" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>

  <main>

  <!-- ═══ HERO ═══ -->
  <section class="hero" id="top">
    <img src="./assets/hero-bg-custom.jpg" alt="Hero Background" class="hero-bg" id="heroBgImage" style="opacity: 1; z-index: 0; will-change: transform, opacity;">
    <div class="hero-glow" id="heroGlow"></div>
    <div class="bubble-deco bd-1"></div>
    <div class="bubble-deco bd-2"></div>
    <div class="bubble-deco bd-3"></div>
    <div class="hero-overlay"></div>

    <div class="container hero-body">
      <div class="hero-content">
        <p class="eyebrow hero-eyebrow hero-reveal">MORE THAN INVESTMENTS</p>
        <h1 class="hero-reveal">A More Secure,<br><strong>Confident You.</strong></h1>
        <p class="hero-sub hero-reveal" style="max-width: 600px; line-height: 1.6; margin-bottom: 32px; font-size: 18px; color: rgba(255,255,255,0.7);">Comprehensive financial solutions — from mutual funds and insurance to PMS, AIF, SIP, NPS, FD and loans against mutual funds — designed around your life goals.</p>
        <div class="hero-btns hero-reveal">
          <a class="btn btn--gold" href="#services">Explore Our Services ↗</a>
          <a class="btn btn--outline-light" href="#calc">Calculate Your SIP →</a>
        </div>

        <div class="hero-strip hero-reveal" style="display:flex; align-items:center; flex-wrap:wrap; gap:32px; padding-top:24px; margin-top:40px; border-top:1px solid rgba(255,255,255,0.1);">
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px; padding-right:32px; border-right:1px solid rgba(255,255,255,0.1);">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Plan<br>Better</span>
          </div>
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px; padding-right:32px; border-right:1px solid rgba(255,255,255,0.1);">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Invest<br>Smarter</span>
          </div>
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px; padding-right:32px; border-right:1px solid rgba(255,255,255,0.1);">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Stay<br>Protected</span>
          </div>
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px;">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Achieve<br>More</span>
          </div>
        </div>

        <div class="hero-metrics hero-reveal" style="display:flex; flex-wrap:wrap; gap:48px; margin-top:48px; animation-delay:0.5s;">
          <div>
            <div style="font-size:32px; font-weight:700; color:#fff; line-height:1;">₹500<span style="color:var(--gold)">+</span> Cr</div>
            <div style="font-size:12px; color:rgba(255,255,255,0.6); margin-top:8px; text-transform:uppercase; letter-spacing:0.05em;">Assets Under Management</div>
          </div>
          <div>
            <div style="font-size:32px; font-weight:700; color:#fff; line-height:1;">10k<span style="color:var(--gold)">+</span></div>
            <div style="font-size:12px; color:rgba(255,255,255,0.6); margin-top:8px; text-transform:uppercase; letter-spacing:0.05em;">Happy Families</div>
          </div>
          <div>
            <div style="font-size:32px; font-weight:700; color:#fff; line-height:1;">15<span style="color:var(--gold)">+</span></div>
            <div style="font-size:12px; color:rgba(255,255,255,0.6); margin-top:8px; text-transform:uppercase; letter-spacing:0.05em;">Years of Excellence</div>
          </div>
        </div>
      </div>
      <div class="hero-float-text">
        <span>DISCIPLINE</span>
        <span>TODAY</span>
        <span>FREEDOM</span>
        <span>TOMORROW</span>
      </div>
    </div>

  </section>


  <!-- ═══ LIFE STAGES ═══ -->
  <section class="lifestage-section" id="lifestages">
    <div class="lifestage-container">
      <div class="lifestage-left reveal">
        <p class="eyebrow eyebrow--gold">YOUR LIFE STAGE</p>
        <h2>Where are you on<br>your financial journey?</h2>
        <p>Get personalized guidance tailored to your goals, no matter where you are in life.</p>
        <div class="lifestage-controls">
          <button class="ls-btn" id="ls-prev" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="ls-btn" id="ls-next" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      
      <div class="lifestage-carousel" id="ls-carousel">
        ${[...lifeStages, ...lifeStages, ...lifeStages].map((s, i) => `
        <div class="ls-card reveal reveal-delay-${(i % 5) + 1}">
          <div class="ls-img-wrap">
            <img src="${s.img}" alt="${s.title}">
          </div>
          <div class="ls-content">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>



  <!-- ═══ OUR APPROACH ═══ -->
  <section class="sec approach-sec" id="process">
    <div class="mountain-bg-wrapper">
      <div class="mountain-marker" id="mountainMarker"><span class="marker-label" id="markerLabel"></span></div>
    </div>
    <div class="container approach-layout">
      <div class="approach-header reveal">
        <p class="fv-eyebrow">OUR APPROACH</p>
        <h2>Your Financial Journey</h2>
        <p>A structured path to help you move from where you are today<br>to where you want to be tomorrow.</p>
      </div>
      
      <div class="approach-content reveal reveal-delay-1">
        <!-- Left: Steps List -->
        <div class="approach-steps" id="approachSteps">
          <div class="approach-step active" data-step="0">
            <div class="approach-step-line"></div>
            <div class="approach-step-dot"></div>
            <span class="approach-step-num">01</span>
            <span class="approach-step-label">Understand</span>
          </div>
          <div class="approach-step" data-step="1">
            <div class="approach-step-line"></div>
            <div class="approach-step-dot"></div>
            <span class="approach-step-num">02</span>
            <span class="approach-step-label">Plan</span>
          </div>
          <div class="approach-step" data-step="2">
            <div class="approach-step-line"></div>
            <div class="approach-step-dot"></div>
            <span class="approach-step-num">03</span>
            <span class="approach-step-label">Invest</span>
          </div>
          <div class="approach-step" data-step="3">
            <div class="approach-step-line"></div>
            <div class="approach-step-dot"></div>
            <span class="approach-step-num">04</span>
            <span class="approach-step-label">Protect</span>
          </div>
          <div class="approach-step" data-step="4">
            <div class="approach-step-line"></div>
            <div class="approach-step-dot"></div>
            <span class="approach-step-num">05</span>
            <span class="approach-step-label">Grow</span>
          </div>
          <div class="approach-step" data-step="5">
            <div class="approach-step-dot"></div>
            <span class="approach-step-num">06</span>
            <span class="approach-step-label">Achieve</span>
          </div>
        </div>

        <!-- Right: Active Step Card -->
        <div class="approach-card" id="approachCard">
          <div class="card-num" id="acNum">01</div>
          <h3 id="acTitle">Understand</h3>
          <p id="acDesc">We begin by understanding your<br>current financial situation, goals,<br>values and aspirations.</p>
          <ul class="card-list" id="acList">
            <li><span class="card-check">✓</span> Income &amp; Expenses</li>
            <li><span class="card-check">✓</span> Existing Investments</li>
            <li><span class="card-check">✓</span> Risk Profile</li>
            <li><span class="card-check">✓</span> Short &amp; Long Term Goals</li>
          </ul>
          <a href="#" class="btn btn--gold" style="width:100%; border-radius:4px; font-weight:600;">Start Your Journey ↗</a>
        </div>
      </div>
    </div>
    <div class="approach-right-text reveal">
      A<br>CLEARER<br>PATH<br>A BRIGHTER<br>TOMORROW
    </div>
  </section>
  
  <!-- ═══ WAYPOINTS ═══ -->
  <section class="sec waypoint-sec" id="waypoints">
    <div class="container" style="position:relative; z-index:1;">
      <div class="wp-main-header reveal" style="display: flex; flex-direction: column; align-items: center; margin-bottom: 48px; text-align: center;">
        <p class="wp-eyebrow">COMPREHENSIVE SOLUTIONS</p>
        <h2 class="wp-title">Financial Waypoints</h2>
        <p class="wp-subtitle" style="margin-bottom: 16px;">Everything you need. All in one place.</p>
        <a href="#" class="wp-link">View All Services <span style="margin-left:4px;">→</span></a>
      </div>
      <div class="wp-layout reveal">
        <!-- Left Column: Featured Card -->
        <div class="wp-col-left" style="display: flex; flex-direction: column;">
          <div class="wp-featured" style="flex: 1;">
            <div class="wp-feat-bg"></div>
            <div class="wp-feat-badge">CORE PATHWAY</div>
            <div class="wp-feat-content">
              <h3>Financial Planning</h3>
              <p>A holistic plan for your present<br>and future. We align your money<br>with your goals.</p>
              <a href="#" class="wp-feat-btn">Learn More ↗</a>
            </div>
            <div class="wp-feat-watermark">
              PLANS<br>PEOPLE<br>PROGRESS
            </div>
          </div>
        </div>

        <!-- Right Column: Services Grid -->
        <div class="wp-col-right reveal-delay-1" style="display: flex; flex-direction: column;">
          <div class="wp-grid">
          <div class="wp-card">
            <div class="wp-card-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="wp-icon"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path><path d="M22 4L12 14l-6-6-4 4"></path></svg>
              <span class="wp-card-arrow">↗</span>
            </div>
            <h4>Investments</h4>
            <p>Mutual Funds, PMS, AIF<br>and more</p>
            <div class="wp-card-footer">
              <span class="wp-card-tag">Wealth Growth</span>
            </div>
          </div>
          <div class="wp-card">
            <div class="wp-card-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="wp-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span class="wp-card-arrow">↗</span>
            </div>
            <h4>Insurance</h4>
            <p>Life, Health and General<br>Insurance</p>
            <div class="wp-card-footer">
              <span class="wp-card-tag">Risk Protection</span>
            </div>
          </div>
          <div class="wp-card">
            <div class="wp-card-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="wp-icon"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-10l5-9"></path></svg>
              <span class="wp-card-arrow">↗</span>
            </div>
            <h4>Retirement</h4>
            <p>Build a financially<br>independent tomorrow</p>
            <div class="wp-card-footer">
              <span class="wp-card-tag">Independence</span>
            </div>
          </div>
          <div class="wp-card">
            <div class="wp-card-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="wp-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="wp-card-arrow">↗</span>
            </div>
            <h4>Taxes</h4>
            <p>Strategic tax planning<br>for greater savings</p>
            <div class="wp-card-footer">
              <span class="wp-card-tag">Tax Efficiency</span>
            </div>
          </div>
          <div class="wp-card">
            <div class="wp-card-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="wp-icon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              <span class="wp-card-arrow">↗</span>
            </div>
            <h4>Estate Planning</h4>
            <p>Protect your legacy<br>for generations</p>
            <div class="wp-card-footer">
              <span class="wp-card-tag">Legacy Preservation</span>
            </div>
          </div>
          <div class="wp-card">
            <div class="wp-card-top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="wp-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><rect x="18" y="3" width="4" height="4" rx="1"></rect></svg>
              <span class="wp-card-arrow">↗</span>
            </div>
            <h4>Loans & Credit</h4>
            <p>Finance your goals<br>with confidence</p>
            <div class="wp-card-footer">
              <span class="wp-card-tag">Capital Access</span>
            </div>
          </div>
        </div> <!-- end wp-card -->
      </div> <!-- end wp-grid -->
    </div> <!-- end wp-col-right -->
  </div> <!-- end wp-layout -->
</div> <!-- end container -->
</section>


  <!-- ═══ PARTNERS ═══ -->
  <section class="sec--partners-new" id="partners">
    <div class="pn-content reveal">
      
      <div class="pn-header">
        <div class="pn-eyebrow">OUR TRUSTED PARTNERS</div>
        <div class="pn-stats">
          <div class="pn-stat">
            <svg class="pn-stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div class="pn-stat-text">TRUSTED<br>INSTITUTIONS</div>
          </div>
          <div class="pn-stat-border"></div>
          <div class="pn-stat">
            <svg class="pn-stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <div class="pn-stat-text">STRONGER<br>TOGETHER</div>
          </div>
          <div class="pn-stat-border"></div>
          <div class="pn-stat">
            <svg class="pn-stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/><polyline points="22 4 17 9 12 4 2 14"/></svg>
            <div class="pn-stat-text">MORE<br>OPPORTUNITIES</div>
          </div>
        </div>
      </div>

      <div class="pn-main">
        <h2>Building Trust Today,<br>For <i>A Brighter Tomorrow.</i></h2>
        <p>We work with India's most trusted asset management companies, insurance providers and financial institutions, giving you access to genuine products, expert guidance and the best opportunities.</p>
        <div class="pn-actions">
          <a href="#contact" class="pn-btn">VIEW ALL PARTNERS &rarr;</a>
          <a href="#" class="pn-btn-play">
            <div class="icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
            <span>SEE HOW<br>WE CREATE VALUE</span>
          </a>
        </div>
      </div>

      <div class="pn-glass-container">
        <div class="pn-glass-left">
          <h4>OUR PARTNERS</h4>
          <p>India's most trusted<br>names, all in one place.</p>
        </div>
        <div class="pn-logos">
          ${partners.map(p => `
            <div class="pn-logo-box">
              <img src="${p.img}" alt="${p.name}">
            </div>
          `).join("")}
          <!-- We could render an axis bank logo here as seen in the image, but the dynamic array is sufficient -->
          <div class="pn-logo-box" style="background:transparent; border-color:transparent;">
            <div class="pn-logo-more">
              <div class="circle">+</div>
              <span>and more</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Background Elements -->
    <div class="pn-script">Partners in<br>Your Progress</div>
    
    <svg class="pn-mountain-curve" viewBox="0 0 1000 600" preserveAspectRatio="none">
      <path d="M480,180 Q560,300 640,400" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6" />
    </svg>

    <div class="pn-milestone" style="top: 36%; left: 55%;">
      <div class="pn-milestone-dot"></div>
      <div class="pn-milestone-text">PEOPLE</div>
    </div>
    <div class="pn-milestone" style="top: 44%; left: 56.5%;">
      <div class="pn-milestone-dot"></div>
      <div class="pn-milestone-text">CAPITAL</div>
    </div>
    <div class="pn-milestone" style="top: 52%; left: 59%;">
      <div class="pn-milestone-dot"></div>
      <div class="pn-milestone-text">OPPORTUNITIES</div>
    </div>
    <div class="pn-milestone" style="top: 59%; left: 58.5%;">
      <div class="pn-milestone-dot"></div>
      <div class="pn-milestone-text" style="text-align:left;">A BRIGHTER<br>TOMORROW</div>
    </div>

    <div class="pn-footer">
      <div class="pn-footer-left">TRUSTED PARTNERS. BRIGHTER POSSIBILITIES.</div>
      <div class="pn-footer-right">
        <div class="line"></div>
        <span>01 / 03</span>
        <div class="pn-footer-nav">
          <button><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
          <button><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ CALCULATOR ═══ -->
  <section class="sec sip-sec" id="calc">
    <div class="container">
      <div class="sip-layout">
        
        <!-- Left Column: Intro Text -->
        <div class="sip-intro">
          <p class="sip-eyebrow">FINANCIAL TOOLS</p>
          <h2 class="sip-title">Plan Smarter.<br>See Further.</h2>
          <p class="sip-sub">Use our easy-to-use calculators to visualize your goals and make informed decisions.</p>
        </div>

        <!-- Center Column: Calculator Card -->
        <div class="sip-card-container">
          <div class="sip-tabs">
            <button class="sip-tab active" data-mode="sip">SIP Calculator</button>
            <button class="sip-tab" data-mode="lumpsum">Lumpsum</button>
            <button class="sip-tab" data-mode="retirement">Retirement</button>
            <button class="sip-tab" data-mode="goal">Goal Planner</button>
            <button class="sip-tab" data-mode="education">Education</button>
            <button class="sip-tab" data-mode="tax">Tax Savings</button>
          </div>

          <div class="sip-card-body">
            <!-- Left: Inputs Form -->
            <div class="sip-form">
              <div class="sip-field">
                <label id="lbl1">Monthly Investment</label>
                <div class="sip-input-wrap">
                  <span class="sip-prefix">₹</span>
                  <input type="text" id="sipVal1" value="10,000" />
                </div>
              </div>

              <div class="sip-field">
                <label id="lbl2">Expected Return (p.a.)</label>
                <div class="sip-input-wrap">
                  <input type="number" id="sipVal2" value="12" step="0.5" />
                  <span class="sip-suffix">%</span>
                </div>
              </div>

              <div class="sip-field">
                <label id="lbl3">Time Period</label>
                <div class="sip-input-wrap">
                  <input type="number" id="sipVal3" value="20" min="1" max="30" />
                  <span class="sip-suffix" id="lbl3Suffix">Years</span>
                </div>
              </div>

              <button class="sip-btn" id="sipCalcBtn" type="button">
                Calculate Now <span>↗</span>
              </button>
            </div>

            <!-- Right: Results & Chart -->
            <div class="sip-results">
              <div class="sip-res-header">
                <span class="sip-res-label">Your Investment Growth</span>
                <div class="sip-res-amount" id="sipTotalVal">₹ 75,97,000</div>
              </div>

              <div class="sip-legend">
                <div class="sip-legend-item">
                  <span class="sip-dot sip-dot--invested"></span>
                  <span>Invested Amount</span>
                </div>
                <div class="sip-legend-item">
                  <span class="sip-dot sip-dot--returns"></span>
                  <span>Estimated Returns</span>
                </div>
              </div>

              <div class="sip-chart-container" id="sipChart">
                <!-- SVG stacked bar chart rendered via JS -->
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Poster Card -->
        <div class="sip-poster">
          <div class="sip-poster-bg" style="background-image: url('./assets/sip_card_banner.jpg');"></div>
          <div class="sip-poster-overlay"></div>
          <div class="sip-poster-content">
            <h3>Small Steps<br>Big Possibilities</h3>
            <p>Plan today for<br>a brighter tomorrow.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ GLOBAL PERSPECTIVE ═══ -->
  <section class="sec global-sec">
    <div class="container">
      <div class="global-layout">
        
        <!-- Left Column: Text -->
        <div class="global-left reveal">
          <p class="eyebrow eyebrow--gold" style="letter-spacing:0.2em; font-size:14px; margin-bottom:12px;">GLOBAL PERSPECTIVE</p>
          <h2 style="font-family: 'Instrument Serif', 'Times New Roman', serif; font-size:56px; line-height:1.15; font-weight:400; margin-bottom:20px;">A World of<br>Opportunities</h2>
          <p style="color:rgba(255,255,255,0.7); font-size:17px; line-height:1.6; max-width:85%; margin-bottom:32px;">Your goals aren't limited by borders.<br>We help you explore global markets<br>and emerging investment themes.</p>
          <a href="#" class="btn btn-gold-outline" style="display:inline-flex; align-items:center; gap:8px; padding:12px 24px; border:1px solid #D4AF37; color:#D4AF37; font-size:13px; font-weight:500; letter-spacing:0.02em; background:transparent; border-radius:4px;">Explore Global Opportunities <span>↗</span></a>
        </div>

        <!-- Center Column: Globe -->
        <div class="global-center reveal reveal-delay-1">
          <div id="globe-scene"></div>
          
          <div class="globe-labels">
            <div class="globe-label label-ny"><span>New York</span><div class="globe-dot"></div></div>
            <div class="globe-label label-london"><span>London</span><div class="globe-dot"></div></div>
            <div class="globe-label label-dubai"><span>Dubai</span><div class="globe-dot"></div></div>
            <div class="globe-label label-mumbai active"><span>Mumbai</span></div>
            <div class="globe-label label-sg"><span>Singapore</span><div class="globe-dot"></div></div>
          </div>
        </div>

        <!-- Right Column: Stats -->
        <div class="global-right reveal reveal-delay-2" style="display: flex; align-items: center;">
          <div class="global-stats">
            <div class="global-stat">
              <h4>6+</h4>
              <p>Global Markets We Track</p>
            </div>
            <div class="global-stat">
              <h4>100+</h4>
              <p>Investment Themes</p>
            </div>
            <div class="global-stat" style="border:none;">
              <h4>Infinite</h4>
              <p>Possibilities</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>

  <!-- ═══ MARKET INTELLIGENCE ═══ -->
  <section class="sec sec--cream" id="market-intelligence">
    <div class="container">
      <div class="mi-layout">
        
        <!-- Column 1 -->
        <div class="mi-left reveal">
          <p class="eyebrow eyebrow--gold" style="margin-bottom:8px;">MARKET INTELLIGENCE</p>
          <h2 style="font-family: 'Instrument Serif', 'Times New Roman', serif; font-size: 32px; font-weight: 400; line-height: 1.2; margin-bottom: 24px; color: #111;">Stay informed.<br>Make better decisions.</h2>
          
          <div class="mi-card">
            <div class="mi-tabs" style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; gap:4px;">
                <button class="mi-tab active">Market Today</button>
                <button class="mi-tab">Top Gainers</button>
                <button class="mi-tab">Top Losers</button>
              </div>
              <span id="miLiveStatus" style="display:inline-flex; align-items:center; gap:5px; font-size:10px; font-weight:700; letter-spacing:0.08em; color:#888; padding:3px 8px; border-radius:99px; border:1px solid #e5e5e5; background:#f8f8f8;"><span id="miLiveDot" style="width:6px;height:6px;border-radius:50%;background:#ccc;display:inline-block;"></span><span id="miLiveLabel">–</span></span>
            </div>
            
            <div class="mi-row" id="mi-row-nifty50">
              <span class="mi-col-name">NIFTY 50</span>
              <span class="mi-col-val" id="mi-val-nifty50">22,514.65</span>
              <span class="mi-col-chg text-green" id="mi-chg-nifty50">+0.85%</span>
            </div>
            <div class="mi-row" id="mi-row-sensex">
              <span class="mi-col-name">SENSEX</span>
              <span class="mi-col-val" id="mi-val-sensex">74,226.02</span>
              <span class="mi-col-chg text-red" id="mi-chg-sensex">-0.78%</span>
            </div>
            <div class="mi-row" id="mi-row-niftybank">
              <span class="mi-col-name">NIFTY BANK</span>
              <span class="mi-col-val" id="mi-val-niftybank">49,158.10</span>
              <span class="mi-col-chg text-green" id="mi-chg-niftybank">+1.20%</span>
            </div>
            <div class="mi-row" id="mi-row-usdinr">
              <span class="mi-col-name">USD/INR</span>
              <span class="mi-col-val" id="mi-val-usdinr">83.45</span>
              <span class="mi-col-chg text-red" id="mi-chg-usdinr">-0.05%</span>
            </div>
            <div class="mi-row" id="mi-row-gold">
              <span class="mi-col-name">GOLD (10g)</span>
              <span class="mi-col-val" id="mi-val-gold">71,450</span>
              <span class="mi-col-chg text-red" id="mi-chg-gold">-0.12%</span>
            </div>
            
            <a href="#" class="mi-link-right">View Live Markets →</a>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="mi-center reveal reveal-delay-1">
          <div class="mi-header-row">
            <h3>Latest Insights</h3>
            <a href="#">View All Insights →</a>
          </div>
          <div class="mi-insights-grid">
            
            <div class="mi-insight-card">
              <img src="./assets/journey-mountain.png" alt="Mountains" class="mi-insight-img">
              <div class="mi-insight-body">
                <span class="mi-tag">MARKET INSIGHTS</span>
                <h4 class="mi-insight-title">Will 2024 Be the Year of Value Investing?</h4>
                <div class="mi-insight-meta">Aug 28, 2024 • 5 min read</div>
              </div>
            </div>
            
            <div class="mi-insight-card">
              <img src="./assets/insights_blog_1.png" alt="Person on rock" class="mi-insight-img">
              <div class="mi-insight-body">
                <span class="mi-tag">RETIREMENT</span>
                <h4 class="mi-insight-title">Why Early Retirement Planning Matters</h4>
                <div class="mi-insight-meta">Aug 20, 2024 • 7 min read</div>
              </div>
            </div>
            
            <div class="mi-insight-card">
              <img src="./assets/insights_blog_2.png" alt="Road" class="mi-insight-img">
              <div class="mi-insight-body">
                <span class="mi-tag">TAX PLANNING</span>
                <h4 class="mi-insight-title">New Tax Regime vs Old Regime: A Guide</h4>
                <div class="mi-insight-meta">Aug 18, 2024 • 6 min read</div>
              </div>
            </div>
            
          </div>
          
          <div style="margin-top: 24px; background: #FFFFFF; border-radius: 12px; padding: 24px; border: 1px solid rgba(0,0,0,0.03); display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 16px rgba(0,0,0,0.02);">
            <div>
              <h4 style="font-size: 16px; font-weight: 600; margin: 0 0 4px 0; color: #111;">Get Daily Updates</h4>
              <p style="font-size: 13px; color: #666; margin: 0;">Subscribe to our morning newsletter for curated insights.</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <input type="email" placeholder="Email address" style="padding: 10px 16px; border: 1px solid #EBEBEB; border-radius: 6px; font-size: 13px; outline: none; width: 180px;">
              <button class="btn" style="background: var(--gold); color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer;">Subscribe</button>
            </div>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="mi-right reveal reveal-delay-2">
          <div class="mi-header-row">
            <h3>What We're Watching</h3>
          </div>
          <div class="mi-list">
            
            <div class="mi-list-item">
              <svg class="mi-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="mi-list-text">RBI policy outlook and interest rates</span>
            </div>
            
            <div class="mi-list-item">
              <svg class="mi-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="mi-list-text">Global market volatility</span>
            </div>
            
            <div class="mi-list-item">
              <svg class="mi-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="mi-list-text">Indian equities: opportunities in 2024</span>
            </div>
            
            <div class="mi-list-item">
              <svg class="mi-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="mi-list-text">Gold prices and safe-haven demand</span>
            </div>
            
            <div class="mi-list-item">
              <svg class="mi-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="mi-list-text">Upcoming union budget expectations</span>
            </div>
            
            <div class="mi-list-item">
              <svg class="mi-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="mi-list-text">Tech sector earnings reports</span>
            </div>
            
            <div class="mi-list-item">
              <svg class="mi-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="mi-list-text">FII / DII institutional flows</span>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ PLATFORM MOCKUP ═══ -->
  <section class="sec platform-sec" style="background:var(--dark-bg);">
    <div class="container">
      <div class="platform-layout">
        <div class="plat-left reveal">
          <p class="eyebrow eyebrow--gold">OUR PLATFORM</p>
          <h2>Manage Everything<br><strong>In One Place.</strong></h2>
          <p>Experience seamless investing and portfolio tracking with our state-of-the-art digital platform, built for both beginners and experts.</p>
          <ul class="plat-features">
            <li><strong>Unified Dashboard</strong> - Track MFs, Insurance, FDs, and NPS together.</li>
            <li><strong>Bank-Grade Security</strong> - Your data is encrypted and secure.</li>
            <li><strong>Smart Analytics</strong> - Get insights on asset allocation and risks.</li>
            <li><strong>1-Click Execution</strong> - Fast, paperless, and hassle-free.</li>
          </ul>
        </div>
        <div class="plat-right reveal reveal-delay-2">
          <div class="mockup-frame">
            <div class="mockup-inner">
              <div class="mk-top">
                <span>Total Net Worth</span>
                <strong>₹ 46,71,332</strong>
                <small>+1.2% Today</small>
              </div>
              <div class="mk-chart"></div>
              <div class="mk-assets">
                <div class="mk-asset"><div class="mk-ic">📈</div><div>Equity<small>₹ 28L</small></div></div>
                <div class="mk-asset"><div class="mk-ic">🛡️</div><div>Debt<small>₹ 12L</small></div></div>
                <div class="mk-asset"><div class="mk-ic">🏦</div><div>Cash<small>₹ 6L</small></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- [OLD PROCESS TIMELINE WAS HERE - COMMENTED OUT FOR REVERTABILITY] -->
  <!-- 
  <section class="sec sec--cream" id="process" style="padding: 60px 0;">
    <div class="container">
      <div class="sec-head reveal" style="margin-bottom: 40px;">
        <div style="margin: 0 auto; text-align: center;">
          <p class="eyebrow">HOW IT WORKS</p>
          <h2>Your Journey to<br><strong>Financial Freedom.</strong></h2>
        </div>
      </div>
      <div class="process-grid">
        ${processSteps.map((p, i) => `
        <div class="process-step reveal reveal-delay-${i + 1}">
          <div class="step-num">${p.step}</div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>
  -->


  <!-- ═══ FINANCIAL GUIDES ═══ -->
  <section class="sec guides-sec" id="guides">
    <div class="guides-container">
      <div class="guides-header reveal">
        <h2>Meet Your Financial Guides</h2>
        <p>Experienced professionals. A partner for life.</p>
      </div>
      
      <div class="guides-grid reveal reveal-delay-1">
        
        <!-- Guide 1 -->
        <div class="guide-card">
          <img src="./assets/profile_rahul.png" alt="Rahul Mehta" class="guide-img">
          <div class="guide-info">
            <div>
              <h4>Rahul Mehta</h4>
              <div class="role">Founder & Wealth Advisor</div>
              <div class="exp">15+ years experience</div>
            </div>
            <div class="guide-links">
              <a href="#" class="li-icon">in</a>
              <a href="#" class="guide-view">View Profile →</a>
            </div>
          </div>
        </div>
        
        <!-- Guide 2 -->
        <div class="guide-card">
          <img src="./assets/profile_priya.png" alt="Priya Sharma" class="guide-img">
          <div class="guide-info">
            <div>
              <h4>Priya Sharma</h4>
              <div class="role">Investment Strategist</div>
              <div class="exp">12+ years experience</div>
            </div>
            <div class="guide-links">
              <a href="#" class="li-icon">in</a>
              <a href="#" class="guide-view">View Profile →</a>
            </div>
          </div>
        </div>
        
        <!-- Guide 3 -->
        <div class="guide-card">
          <img src="./assets/profile_amit.png" alt="Vikram Sinha" class="guide-img">
          <div class="guide-info">
            <div>
              <h4>Vikram Sinha</h4>
              <div class="role">Financial Planner</div>
              <div class="exp">10+ years experience</div>
            </div>
            <div class="guide-links">
              <a href="#" class="li-icon">in</a>
              <a href="#" class="guide-view">View Profile →</a>
            </div>
          </div>
        </div>
        
        <!-- Guide 4 -->
        <div class="guide-card">
          <img src="./assets/profile_priya.png" alt="Ananya Kapoor" class="guide-img">
          <div class="guide-info">
            <div>
              <h4>Ananya Kapoor</h4>
              <div class="role">Client Relationship Head</div>
              <div class="exp">9+ years experience</div>
            </div>
            <div class="guide-links">
              <a href="#" class="li-icon">in</a>
              <a href="#" class="guide-view">View Profile →</a>
            </div>
          </div>
        </div>
        
        <!-- Quote Card -->
        <div class="guide-quote-card">
          <div style="color:var(--gold); font-size:40px; font-family:'Instrument Serif','Times New Roman',serif; line-height:0.5; margin-bottom:12px;">“</div>
          <p>We don't just<br>manage wealth.<br>We build lasting<br>relationships.</p>
        </div>
        
      </div>
    </div>
  </section>

  <!-- ═══ WHY FINVISTA ═══ -->
  <section class="sec sec--cream" id="why" style="padding-top: 40px; padding-bottom: 20px;">
    <div class="container">
      <div class="fv-why-layout">
        <div class="fv-why-left reveal">
          <p class="fv-eyebrow">WHY FINVISTA</p>
          <h2>More Than Investments.<br>A Partner for Life.</h2>
          <p>We combine expertise, transparency and a<br>client-first approach to help you make<br>smarter financial decisions.</p>
        </div>
        <div class="fv-why-right reveal reveal-delay-1">
          <div class="fv-why-card">
            <div class="fv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <h4>Client-First<br>Advice</h4>
            <p>Your goals always<br>come first.</p>
          </div>
          <div class="fv-why-card">
            <div class="fv-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h4>Transparent<br>Process</h4>
            <p>Clear, honest and<br>unbiased guidance.</p>
          </div>
          <div class="fv-why-card">
            <div class="fv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h4>Trusted<br>Partners</h4>
            <p>Work with leading<br>financial institutions.</p>
          </div>
          <div class="fv-why-card">
            <div class="fv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h4>Ongoing<br>Support</h4>
            <p>Regular reviews as<br>your life evolves.</p>
          </div>
          <div class="fv-why-card">
            <div class="fv-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path></svg>
            </div>
            <h4>Long-Term<br>Relationship</h4>
            <p>Because your<br>tomorrow matters.</p>
          </div>
        </div>
      </div>
    </div>
  </section>







  <!-- ═══ CTA ═══ -->
  <section class="sec sec--cta" id="contact">
    <div class="container">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:40px;">
        <div class="cta-left reveal">
          <p class="eyebrow eyebrow--gold">READY TO TAKE THE NEXT STEP?</p>
          <h2 style="color:#fff;">Let's Build Your<br><strong>Brighter Tomorrow.</strong></h2>
        </div>
        <div class="cta-center reveal reveal-delay-1" style="max-width:320px;">
          <p class="sec-sub" style="margin:0 0 24px 0; color: rgba(255,255,255,0.95);">Connect with our financial experts and get a personalised plan for your goals.</p>
          <a class="btn btn--gold" href="#contact">Book a Free Consultation ↗</a>
        </div>
        <div class="cta-right-float reveal reveal-delay-2" style="text-align:right; font-size:10px; font-weight:700; letter-spacing:0.3em; color:rgba(255,255,255,0.85); line-height:2.4;">
          SAME.<br>GOALS.<br>A BRIGHTER.<br>TOMORROW.
        </div>
      </div>
    </div>
  </section>

  </main>

  <!-- ═══ FOOTER ═══ -->
  <footer class="ftr">
    <div class="container ftr-top">
      <div class="ftr-brand">
        <a class="brand" href="#top"><img src="./assets/logo-finvista.png" alt="MIMAG Finance" style="height: 72px; width: auto;"></a>
        <div class="ftr-socials" style="margin-top: 16px;">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
      <div class="ftr-cols">
        <div class="ftr-col"><span>Company</span><a href="#top">About Us</a><a href="#">Our Team</a><a href="#">Careers</a><a href="#">Contact</a></div>
        <div class="ftr-col"><span>Services</span><a href="#">Investments</a><a href="#services">Insurance</a><a href="#">Retirement</a><a href="#">Tax Planning</a><a href="#">Estate Planning</a><a href="#">Loans</a></div>
        <div class="ftr-col"><span>Tools</span><a href="#calc">SIP Calculator</a><a href="#">Lumpsum Calculator</a><a href="#">Retirement Calculator</a><a href="#">Goal Planner</a></div>
        <div class="ftr-col"><span>Insights</span><a href="#">Market Updates</a><a href="#">Articles</a><a href="#">Guides</a><a href="#">FAQs</a></div>
        <div class="ftr-col" style="padding-left: 48px; border-left: 1px solid #222;">
          <span style="text-transform:none;">Subscribe to our newsletter</span>
          <p style="color:#888; font-size:12px; margin-bottom:12px;">Get the latest insights and updates.</p>
          <form class="nl-form" id="nlForm" style="display:flex; gap:0;">
            <input type="email" placeholder="Enter your email" required style="flex:1; padding:0 12px; border-radius:4px 0 0 4px; border:1px solid #333; background:#1a1a1a; color:#fff; height:40px; border-right:none;">
            <button type="submit" style="width:40px;height:40px;background:var(--gold);border:none;border-radius:0 4px 4px 0;color:var(--black);font-size:16px;cursor:pointer;font-weight:bold;">↗</button>
          </form>
        </div>
        
        <div class="ftr-col" style="padding-left: 48px; border-left: 1px solid #222; text-align:right; font-size:11px; letter-spacing:0.3em; line-height:2.4; font-weight:700; color:#888; margin-left: auto;">
          INVEST<br>PROTECT<br>GROW<br>BELONG
        </div>
      </div>
    </div>
    <div class="container ftr-bottom" style="border-top: 1px solid #222; margin-top: 24px;">
      <span style="color:#666;">© 2024 MIMAG Finance. All rights reserved.</span>
      <div class="ftr-legal"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Risk Disclosure</a><a href="#">Sitemap</a></div>
    </div>
  </footer>

  <button class="fab" id="fabBtn"><span>◎</span> Talk to a Money Guide <b>↗</b></button>  <!-- Service Info Modal -->
  <div class="modal-overlay" id="serviceModal" onclick="if(event.target===this) this.classList.remove('active')">
    <div class="modal-content" style="text-align: center; max-width: 500px;">
      <button class="modal-close" onclick="document.getElementById('serviceModal').classList.remove('active')">✕</button>
      <div id="smIcon" style="font-size: 48px; margin-bottom: 24px;"></div>
      <h3 id="smTitle" style="color: #fff; font-size: 28px; margin-bottom: 12px;"></h3>
      <p id="smDesc" style="color: var(--gold); font-size: 16px; font-weight: 700; margin-bottom: 24px;"></p>
      <div id="smDetails" style="color: var(--muted); line-height: 1.6; font-size: 15px;"></div>
    </div>
  </div>

  <div class="modal-overlay" id="contactModal">
    <div class="modal-content">
      <button class="modal-close" id="modalClose">✕</button>
      <h3>Talk to a Money Guide</h3>
      <p>Leave your details below and our expert will get in touch with you shortly.</p>
      <form class="contact-form" id="moneyGuideForm">
        <label>
          <span>Name</span>
          <input type="text" id="mgName" required placeholder="John Doe">
        </label>
        <label>
          <span>Email</span>
          <input type="email" id="mgEmail" required placeholder="john@example.com">
        </label>
        <label>
          <span>Phone Number</span>
          <input type="tel" id="mgPhone" required placeholder="+91 98765 43210">
        </label>
        <button type="submit" class="btn btn--gold btn--block" style="margin-top: 16px;">Request Callback</button>
      </form>
    </div>
  </div>

  <div class="toast" id="toast"></div>
  `;
};

/* ── SIP CALCULATOR LOGIC (1:1 Reference Implementation) ── */
let sipMode = "sip";

function parseRawNumber(str) {
  if (typeof str === 'number') return str;
  return parseFloat(String(str).replace(/,/g, '')) || 0;
}

function runSipCalc() {
  const in1 = document.querySelector("#sipVal1");
  const in2 = document.querySelector("#sipVal2");
  const in3 = document.querySelector("#sipVal3");
  if (!in1 || !in2 || !in3) return;

  const v1 = Math.max(100, parseRawNumber(in1.value));
  const v2 = Math.max(0.1, parseRawNumber(in2.value));
  const v3 = Math.max(1, Math.min(30, parseRawNumber(in3.value)));

  let invested = 0;
  let total = 0;

  if (sipMode === "sip") {
    invested = v1 * v3 * 12;
    total = sipFV(v1, v2, v3);
  } else if (sipMode === "lumpsum") {
    invested = v1;
    total = lsFV(v1, v2, v3);
  } else {
    invested = v1 * v3 * 12;
    total = sipFV(v1, v2, v3);
  }

  const totalEl = document.querySelector("#sipTotalVal");
  if (totalEl) {
    totalEl.textContent = formatINR(Math.round(total));
  }

  renderSipChart(v1, v2, v3, sipMode);
}

function renderSipChart(v1, v2, years, mode) {
  const container = document.querySelector("#sipChart");
  if (!container) return;

  const svgWidth = 340;
  const svgHeight = 180;
  const marginTop = 15;
  const marginBottom = 25;
  const marginLeft = 38;
  const marginRight = 10;

  const chartW = svgWidth - marginLeft - marginRight;
  const chartH = svgHeight - marginTop - marginBottom;

  const yearData = [];
  let maxVal = 0;

  for (let y = 1; y <= years; y++) {
    let invY = 0;
    let totY = 0;
    if (mode === "lumpsum") {
      invY = v1;
      totY = lsFV(v1, v2, y);
    } else {
      invY = v1 * y * 12;
      totY = sipFV(v1, v2, y);
    }
    const retY = Math.max(0, totY - invY);
    if (totY > maxVal) maxVal = totY;
    yearData.push({ year: y, invested: invY, returns: retY, total: totY });
  }

  if (maxVal === 0) maxVal = 100000;

  // Y Axis ticks
  const yTicksCount = 4;
  const yStep = maxVal / yTicksCount;
  let yGridHtml = '';

  for (let k = 0; k <= yTicksCount; k++) {
    const val = yStep * k;
    const yPos = marginTop + chartH - (k / yTicksCount) * chartH;
    let labelText = '';
    if (val >= 10000000) {
      labelText = (val / 10000000).toFixed(1) + 'Cr';
    } else if (val >= 100000) {
      labelText = Math.round(val / 100000) + 'L';
    } else if (val >= 1000) {
      labelText = Math.round(val / 1000) + 'k';
    } else {
      labelText = '0L';
    }

    yGridHtml += `
      <line x1="${marginLeft}" y1="${yPos}" x2="${svgWidth - marginRight}" y2="${yPos}" stroke="#EAE5DC" stroke-width="1" stroke-dasharray="2 2" />
      <text x="${marginLeft - 6}" y="${yPos + 4}" fill="#888888" font-size="10" font-family="sans-serif" text-anchor="end">${labelText}</text>
    `;
  }

  // X Axis Ticks
  let xGridHtml = '';
  const numBars = yearData.length;
  const barSpacing = chartW / numBars;
  const barW = Math.max(3, barSpacing * 0.55);

  let barsHtml = '';

  yearData.forEach((d) => {
    const xCenter = marginLeft + (d.year - 1) * barSpacing + barSpacing / 2;
    const barX = xCenter - barW / 2;

    const invH = (d.invested / maxVal) * chartH;
    const retH = (d.returns / maxVal) * chartH;

    const invYPos = marginTop + chartH - invH;
    const retYPos = invYPos - retH;

    barsHtml += `
      <rect x="${barX}" y="${invYPos}" width="${barW}" height="${invH}" fill="#4A5A6A" rx="1.5" />
      <rect x="${barX}" y="${retYPos}" width="${barW}" height="${retH}" fill="#E5B345" rx="1.5" />
    `;

    if (d.year === 1 || d.year % 5 === 0 || d.year === years) {
      xGridHtml += `
        <text x="${xCenter}" y="${svgHeight - 6}" fill="#888888" font-size="10" font-family="sans-serif" text-anchor="middle">${d.year}</text>
      `;
    }
  });

  const baseLineY = marginTop + chartH;

  container.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="none">
      ${yGridHtml}
      <line x1="${marginLeft}" y1="${baseLineY}" x2="${svgWidth - marginRight}" y2="${baseLineY}" stroke="#D8D2C6" stroke-width="1" />
      ${barsHtml}
      ${xGridHtml}
    </svg>
  `;
}

function switchSipTab(mode) {
  sipMode = mode;
  document.querySelectorAll(".sip-tab").forEach(b => {
    b.classList.toggle("active", b.dataset.mode === mode);
  });

  const lbl1 = document.querySelector("#lbl1");
  const in1 = document.querySelector("#sipVal1");
  const in2 = document.querySelector("#sipVal2");
  const in3 = document.querySelector("#sipVal3");

  if (mode === "lumpsum") {
    if (lbl1) lbl1.textContent = "Investment Amount";
    if (in1) in1.value = "5,00,000";
    if (in2) in2.value = "12";
    if (in3) in3.value = "10";
  } else if (mode === "retirement") {
    if (lbl1) lbl1.textContent = "Monthly Savings";
    if (in1) in1.value = "15,000";
    if (in2) in2.value = "12";
    if (in3) in3.value = "25";
  } else if (mode === "goal") {
    if (lbl1) lbl1.textContent = "Monthly Contribution";
    if (in1) in1.value = "20,000";
    if (in2) in2.value = "12";
    if (in3) in3.value = "15";
  } else if (mode === "education") {
    if (lbl1) lbl1.textContent = "Monthly Fund";
    if (in1) in1.value = "10,000";
    if (in2) in2.value = "11";
    if (in3) in3.value = "15";
  } else if (mode === "tax") {
    if (lbl1) lbl1.textContent = "Monthly ELSS";
    if (in1) in1.value = "12,500";
    if (in2) in2.value = "14";
    if (in3) in3.value = "10";
  } else {
    if (lbl1) lbl1.textContent = "Monthly Investment";
    if (in1) in1.value = "10,000";
    if (in2) in2.value = "12";
    if (in3) in3.value = "20";
  }

  runSipCalc();
}

function initSipEvents() {
  const btn = document.querySelector("#sipCalcBtn");
  if (btn) btn.addEventListener("click", runSipCalc);

  ["#sipVal1", "#sipVal2", "#sipVal3"].forEach(id => {
    const el = document.querySelector(id);
    if (el) el.addEventListener("input", runSipCalc);
  });

  document.querySelectorAll(".sip-tab").forEach(b => {
    b.addEventListener("click", () => switchSipTab(b.dataset.mode));
  });

  runSipCalc();
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

// SIP Calculator
initSipEvents();

// Globe — delay init to ensure layout is settled
requestAnimationFrame(() => {
  setTimeout(() => {
    const el = document.querySelector("#globe-scene");
    if (!el) return;
    import("./globe.js?v=7")
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

// Modal Logic
const modal = document.getElementById("contactModal");
const modalClose = document.getElementById("modalClose");
const mgForm = document.getElementById("moneyGuideForm");
const contactTriggers = document.querySelectorAll('a[href="#contact"], #fabBtn');

if (modal) {
  contactTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
    });
  });
  modalClose.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
  mgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
    toast("Request sent successfully! Our guide will contact you soon.");
    mgForm.reset();
  });
}

// Service Modal Logic
window.openServiceModal = function (index) {
  const service = services[index];
  if (!service) return;
  document.getElementById('smIcon').textContent = service.icon;
  document.getElementById('smTitle').textContent = service.name;
  document.getElementById('smDesc').textContent = service.desc;
  document.getElementById('smDetails').textContent = service.details;
  document.getElementById('serviceModal').classList.add('active');
};

// Scroll Animations
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Parallax & Scroll Progress
const progEl = document.getElementById('scroll-progress');
const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!isReduced) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (progEl) progEl.style.width = (scrolled / maxScroll * 100) + '%';
        ticking = false;
      });
      ticking = true;
    }
  });
}

// FAQ Accordion
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
      highlight.style.transform = `translateX(${e.target.offsetLeft}px)`;
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
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
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
      autoRotateInterval = setInterval(scrollNext, 1200); // 1.2 seconds
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
}

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
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
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
    autoRotateInterval = setInterval(scrollNext, 1200); // 1.2 seconds
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
window.addEventListener('load', () => {

  const parallaxImages = gsap.utils.toArray('.parallax-img, .waypoints-bg');
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

  /* ═══ OUR APPROACH SCROLL ANIMATION ═══ */
  const approachData = [
    { num: '01', title: 'Understand', desc: 'We begin by understanding your<br>current financial situation, goals,<br>values and aspirations.', items: ['Income & Expenses', 'Existing Investments', 'Risk Profile', 'Short & Long Term Goals'], point: {x: 78.0, y: 83.5} },
    { num: '02', title: 'Plan', desc: 'We craft a personalized roadmap<br>tailored specifically to your<br>life objectives.', items: ['Asset Allocation', 'Retirement Timeline', 'Tax Strategies', 'Risk Mitigation'], point: {x: 63.2, y: 70.3} },
    { num: '03', title: 'Invest', desc: 'Deploying capital into diversified<br>portfolios designed to maximize<br>returns and minimize volatility.', items: ['Mutual Funds', 'Equities', 'Fixed Income', 'Alternative Assets'], point: {x: 78.5, y: 59.5} },
    { num: '04', title: 'Protect', desc: 'Safeguarding your wealth against<br>unforeseen events and ensuring<br>your family\'s security.', items: ['Life Insurance', 'Health Coverage', 'Emergency Funds', 'Estate Planning'], point: {x: 69.3, y: 54.8} },
    { num: '05', title: 'Grow', desc: 'Actively monitoring and rebalancing<br>your portfolio to align with<br>changing market conditions.', items: ['Quarterly Reviews', 'Market Analysis', 'Rebalancing', 'Opportunity Identification'], point: {x: 76.0, y: 50.0} },
    { num: '06', title: 'Achieve', desc: 'Reaching your financial milestones<br>and transitioning seamlessly into<br>the next phase of your life.', items: ['Financial Freedom', 'Legacy Transfer', 'Retirement Transition', 'Ongoing Support'], point: {x: 70.5, y: 45.0} },
    { num: '07', title: 'Legacy', desc: 'Ensuring your wealth creates a lasting<br>impact for future generations<br>and your chosen causes.', items: ['Estate Preservation', 'Philanthropy', 'Family Governance', 'Succession Planning'], point: {x: 75.3, y: 41.5} }
  ];

  const approachSec = document.getElementById('process');
  const mountainMarker = document.getElementById('mountainMarker');
  const approachSteps = document.querySelectorAll('.approach-step');
  const acNum = document.getElementById('acNum');
  const acTitle = document.getElementById('acTitle');
  const acDesc = document.getElementById('acDesc');
  const acList = document.getElementById('acList');
  const approachCard = document.getElementById('approachCard');

  if (approachSec && mountainMarker) {
    // Initialize marker position
    gsap.set(mountainMarker, { left: `${approachData[0].point.x}%`, top: `${approachData[0].point.y}%` });

    let currentStepIndex = -1;

    function updateApproachStep(index) {
      if (index === currentStepIndex) return;
      currentStepIndex = index;
      const data = approachData[index];

      // Update steps UI
      approachSteps.forEach((step, i) => {
        if (i === index) step.classList.add('active');
        else step.classList.remove('active');
      });

      // Move Marker
      gsap.to(mountainMarker, {
        left: `${data.point.x}%`,
        top: `${data.point.y}%`,
        duration: 0.8,
        ease: "power2.out"
      });
      const markerLabel = document.getElementById('markerLabel');
      if (markerLabel) markerLabel.textContent = data.title;

      // Update Card UI
      gsap.to(approachCard, { opacity: 0, duration: 0.2, onComplete: () => {
        acNum.textContent = data.num;
        acTitle.textContent = data.title;
        acDesc.innerHTML = data.desc;
        acList.innerHTML = data.items.map(item => `<li><span class="card-check">✓</span> ${item}</li>`).join('');
        gsap.to(approachCard, { opacity: 1, duration: 0.3 });
      }});
    }

    // Force first update
    updateApproachStep(0);

    ScrollTrigger.create({
      trigger: approachSec,
      start: "center center",
      end: "+=3000",
      pin: true,
      scrub: true,
      snap: [0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1],
      onUpdate: (self) => {
        let p = self.progress; 
        let mappedProgress = p / (6/7); // The first 6/7 of the scroll covers all 7 points
        if (mappedProgress > 1) mappedProgress = 1;
        let index = Math.floor(mappedProgress * approachData.length);
        if (index >= approachData.length) index = approachData.length - 1;
        updateApproachStep(index);
      }
    });
  }

  // --- Hero Section Scroll Animation ---
  // The user loved the zoom-out effect specifically on the hero section, so we restore it here.
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    ScrollTrigger.create({
      trigger: heroSection,
      start: "top top",
      pin: true,
      pinSpacing: false, // Next section scrolls over it
      id: 'pin-hero'
    });

    gsap.to(heroSection, {
      scale: 0.92,
      opacity: 0.4,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: () => `+=${heroSection.offsetHeight}`,
        scrub: true,
      }
    });
  }
  
});



