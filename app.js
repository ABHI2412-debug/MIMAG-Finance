const funds = [
  { icon: "01", tag: "Equity · Direct Growth", name: "MIMAG Flexi Cap", description: "One fund for long-term wealth across market leaders and emerging businesses.", return: "18.4%", period: "3Y annualised", risk: "Very high risk", image: "./assets/finance-building.jpg" },
  { icon: "02", tag: "Hybrid · Direct Growth", name: "MIMAG Balanced Advantage", description: "Dynamic equity and debt allocation designed for changing market cycles.", return: "14.1%", period: "3Y annualised", risk: "High risk" },
  { icon: "03", tag: "Debt · Direct Growth", name: "MIMAG Short Duration", description: "A steadier place for near-term goals with a focus on quality fixed income.", return: "7.6%", period: "3Y annualised", risk: "Moderate risk" },
  { icon: "04", tag: "Index · Direct Growth", name: "MIMAG Nifty 50", description: "Broad-market exposure to India’s 50 leading listed companies.", return: "15.7%", period: "3Y annualised", risk: "Very high risk" },
  { icon: "05", tag: "ELSS · Direct Growth", name: "MIMAG Tax Saver", description: "Equity-led investing with a three-year lock-in for long-term goals.", return: "16.9%", period: "3Y annualised", risk: "Very high risk" },
  { icon: "06", tag: "Liquid · Direct Growth", name: "MIMAG Liquid Reserve", description: "A flexible parking place for money you may need in the near term.", return: "6.9%", period: "3Y annualised", risk: "Low to moderate" }
];

const formatINR = (value) => `₹${Math.round(value).toLocaleString("en-IN")}`;
const futureValue = (monthly, annualRate, years) => {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  return monthlyRate === 0 ? monthly * months : monthly * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
};
const lumpSumFutureValue = (principal, annualRate, years) => principal * ((1 + annualRate / 100) ** years);
const goalMonthlyInvestment = (target, annualRate, years) => {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  return monthlyRate === 0 ? target / months : target * monthlyRate / (((1 + monthlyRate) ** months) - 1);
};
const withdrawalCorpus = (monthly, annualRate, years) => {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  return monthlyRate === 0 ? monthly * months : monthly * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
};

const render = () => {
  document.querySelector("#app").innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="MIMAG Finance home"><span class="brand-mark">M</span><span>MIMAG <small>Finance</small></span></a>
        <nav class="main-nav" aria-label="Main navigation">
          <a href="#top">About</a>
          <a href="#tools">Tools & Calculators</a>
          <a href="#funds">Mutual Funds</a>
          <a href="#pulse">Market Pulse</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Help Center</a>
        </nav>
        <div class="header-actions"><button class="header-link" id="themeToggle" type="button">◐ Theme</button><button class="header-link" data-toast="Account sign-in and KYC will connect in the secure backend phase." type="button">Sign in</button><a class="button" href="#calculator">Start planning ↗</a><button class="menu-button" aria-label="Open navigation">☰</button></div>
      </div>
    </header>

    <main id="top">
      <section class="hero"><img class="hero-image" src="./assets/finance-building.jpg?v=4" alt="Modern glass towers viewed from below" /><div id="globe-scene" role="img" aria-label="Interactive animated globe. Drag to rotate and use the mouse wheel to zoom."></div>
        <div class="container hero-content">
          <div class="eyebrow">Intelligent investing · built for real life</div>
          <h1>Make your money<br><strong>move smarter.</strong></h1>
          <p class="hero-copy">A calmer, clearer way to plan your next financial move. Explore mutual funds, model your SIP, and build conviction with data that speaks human.</p>
          <div class="hero-actions"><a class="button" href="#calculator">Calculate your SIP ↗</a><a class="button secondary" href="#funds">Explore mutual funds</a></div>
        </div>
        <div class="container hero-meta">
          <div class="meta-item"><span class="meta-value">₹500 minimum</span><span class="meta-label">Start a SIP</span></div>
          <div class="meta-item"><span class="meta-value">24 / 7</span><span class="meta-label">Market visibility</span></div>
          <div class="meta-item"><span class="meta-value">Direct plans</span><span class="meta-label">Lower-cost investing</span></div>
          <a class="meta-action" href="#calculator">Open your investment desk <span>↗</span></a>
        </div>
      </section>

      <section class="pulse-strip" id="pulse">
        <div class="container impact-section">
          <div class="impact-heading"><div><div class="eyebrow">Actionable financial intelligence</div><h2>Money moves <strong>made clear & actionable</strong></h2></div><a class="arrow-link" href="#calculator">Explore all investing tools</a></div>
          <div class="impact-grid">
            <article class="impact-card"><div class="impact-card-top">YOUR MONTHLY PLAN <span>•</span></div><div class="impact-number">₹10K</div><div class="impact-label">ILLUSTRATIVE SIP</div><p>A simple starting point for a repeatable long-term investing habit.</p><a href="#calculator">Open SIP calculator <span>→</span></a></article>
            <article class="impact-card"><div class="impact-card-top">NIFTY 50 <span>•</span></div><div class="impact-number">24,693</div><div class="impact-label">DEMO MARKET LEVEL</div><p>A quick read on the market before you make your next move.</p><a href="#pulse">View market pulse <span>→</span></a></article>
            <article class="impact-card"><div class="impact-card-top">FUND EXPLORER <span>•</span></div><div class="impact-number">06</div><div class="impact-label">CURATED CATEGORIES</div><p>Focused options across equity, debt, hybrid, index, ELSS, and liquid.</p><a href="#funds">Explore mutual funds <span>→</span></a></article>
            <article class="impact-card"><div class="impact-card-top">LONG-TERM VIEW <span>•</span></div><div class="impact-number">12%</div><div class="impact-label">ILLUSTRATIVE RETURN</div><p>See how time and consistency can change the shape of your outcome.</p><a href="#calculator">Model your future value <span>→</span></a></article>
          </div>
        </div>
      </section>

      <section class="calculator-section" id="calculator">
        <div class="container">
          <div class="section-top"><div><div class="eyebrow">The compounding engine</div><h2>See what consistency can become.</h2></div><p>Adjust three simple inputs to see an illustrative estimate of how your monthly SIP could grow over time.</p></div>
          <div class="calculator-shell">
            <div class="calculator-form">
              <h3>Build your SIP</h3><p>Start small, stay consistent, and let time do more of the heavy lifting.</p>
              <label class="field"><span class="field-head"><span class="field-label">Monthly investment</span><span class="field-value" id="monthlyValue">₹10,000</span></span><input class="range" id="monthlyRange" type="range" min="500" max="100000" step="500" value="10000" /><span class="range-hints"><span>₹500</span><span>₹1,00,000</span></span></label>
              <label class="field"><span class="field-head"><span class="field-label">Expected return (p.a.)</span><span class="field-value" id="returnValue">12%</span></span><input class="range" id="returnRange" type="range" min="4" max="20" step="0.5" value="12" /><span class="range-hints"><span>4%</span><span>20%</span></span></label>
              <label class="field"><span class="field-head"><span class="field-label">Time horizon</span><span class="field-value" id="yearsValue">10 years</span></span><input class="range" id="yearsRange" type="range" min="1" max="30" step="1" value="10" /><span class="range-hints"><span>1 year</span><span>30 years</span></span></label>
              <p class="calculator-footnote">Illustration only. Mutual fund investments are subject to market risks. Past performance does not indicate future returns.</p>
            </div>
            <div class="result-panel">
              <h3>Your estimated outcome</h3><div class="result-kicker">Potential value after <span id="resultYears">10 years</span></div><div class="result-total" id="resultTotal">₹23,23,391</div>
              <div class="result-chart" id="resultChart" aria-label="Illustrative growth chart"></div>
              <div class="result-row"><span>Total invested</span><strong id="resultInvested">₹12,00,000</strong></div>
              <div class="result-row"><span>Estimated returns</span><strong class="gain" id="resultGain">₹11,23,391</strong></div>
              <a class="arrow-link" href="#contact" style="position:relative;display:inline-flex;margin-top:26px">Create an investing plan</a>
            </div>
          </div>
        </div>
      </section>

      <section class="lumpsum-section" id="lumpsum">
        <div class="container">
          <div class="section-top"><div><div class="eyebrow">One-time investing</div><h2>Give a larger amount more time to work.</h2></div><p>Model a lump-sum investment for a long-term goal and see how compounding can shape its potential value.</p></div>
          <div class="calculator-shell">
            <div class="calculator-form">
              <h3>Build your lump sum</h3><p>Choose an amount, a return assumption, and the time you can stay invested.</p>
              <label class="field"><span class="field-head"><span class="field-label">Initial investment</span><span class="field-value" id="lumpSumValue">₹2,50,000</span></span><input class="range lump-range" id="lumpSumRange" type="range" min="5000" max="5000000" step="5000" value="250000" /><span class="range-hints"><span>₹5,000</span><span>₹50,00,000</span></span></label>
              <label class="field"><span class="field-head"><span class="field-label">Expected return (p.a.)</span><span class="field-value" id="lumpReturnValue">12%</span></span><input class="range lump-range" id="lumpReturnRange" type="range" min="4" max="20" step="0.5" value="12" /><span class="range-hints"><span>4%</span><span>20%</span></span></label>
              <label class="field"><span class="field-head"><span class="field-label">Time horizon</span><span class="field-value" id="lumpYearsValue">10 years</span></span><input class="range lump-range" id="lumpYearsRange" type="range" min="1" max="30" step="1" value="10" /><span class="range-hints"><span>1 year</span><span>30 years</span></span></label>
              <p class="calculator-footnote">Illustration only. Actual returns can vary. Consider your goal, time horizon, liquidity needs, and risk appetite before investing.</p>
            </div>
            <div class="result-panel lump-result-panel">
              <h3>Your estimated outcome</h3><div class="result-kicker">Potential value after <span id="lumpResultYears">10 years</span></div><div class="result-total" id="lumpResultTotal">₹7,76,463</div>
              <div class="result-chart" id="lumpResultChart" aria-label="Illustrative lump-sum growth chart"></div>
              <div class="result-row"><span>Initial investment</span><strong id="lumpResultInvested">₹2,50,000</strong></div>
              <div class="result-row"><span>Estimated returns</span><strong class="gain" id="lumpResultGain">₹5,26,463</strong></div>
              <a class="arrow-link" href="#contact" style="position:relative;display:inline-flex;margin-top:26px">Discuss your investment plan</a>
            </div>
          </div>
          <div class="lump-comparison" aria-label="Lump sum and SIP comparison">
            <div class="comparison-card"><span class="comparison-label">Lump sum</span><strong>Upfront growth</strong><p>Invest a larger amount at once when you already have capital available.</p></div>
            <div class="comparison-card"><span class="comparison-label">SIP</span><strong>Gradual entry</strong><p>Invest smaller amounts regularly to build a habit and spread entry points.</p></div>
          </div>
        </div>
      </section>

      <section class="tools-section" id="tools">
        <div class="container">
          <div class="section-top"><div><div class="eyebrow">A complete planning desk</div><h2>Tools for every money move.</h2></div><p>Use simple, transparent models to understand your options before you make an investment decision.</p></div>
          <div class="tool-tabs" role="tablist"><button class="tool-tab active" data-tool="goal">Goal planner</button><button class="tool-tab" data-tool="swp">SWP planner</button><button class="tool-tab" data-tool="stp">STP planner</button><button class="tool-tab" data-tool="inflation">Inflation check</button><button class="tool-tab" data-tool="tax">ELSS tax guide</button></div>
          <div class="tool-workspace">
            <div class="tool-copy"><span class="tool-number">01</span><h3 id="toolTitle">Plan backward from your goal.</h3><p id="toolDescription">Tell us what you want to build, when you need it, and we’ll estimate the monthly investment needed to get there.</p><a class="button" href="#contact" id="toolCta">Save this plan ↗</a></div>
            <div class="tool-inputs" id="toolInputs"><label class="field"><span class="field-head"><span class="field-label">Target amount</span><span class="field-value" id="goalTargetValue">₹25,00,000</span></span><input class="range" id="goalTargetRange" type="range" min="100000" max="10000000" step="50000" value="2500000" /><span class="range-hints"><span>₹1L</span><span>₹1Cr</span></span></label><label class="field"><span class="field-head"><span class="field-label">Time horizon</span><span class="field-value" id="goalYearsValue">10 years</span></span><input class="range" id="goalYearsRange" type="range" min="1" max="30" step="1" value="10" /><span class="range-hints"><span>1 year</span><span>30 years</span></span></label><label class="field"><span class="field-head"><span class="field-label">Expected return</span><span class="field-value" id="goalReturnValue">12%</span></span><input class="range" id="goalReturnRange" type="range" min="4" max="20" step="0.5" value="12" /><span class="range-hints"><span>4%</span><span>20%</span></span></label><div class="tool-result"><span>Estimated monthly SIP</span><strong id="goalResult">₹10,761</strong></div></div>
          </div>
          <div class="planning-grid"><article class="planning-card"><span class="planning-icon">◎</span><h3>Risk profile</h3><p>Answer five quick questions to understand whether your current mix matches your comfort with volatility.</p><button class="text-button" data-toast="Risk profile questionnaire is ready for your answers.">Start questionnaire →</button></article><article class="planning-card"><span class="planning-icon">◈</span><h3>Inflation-aware goals</h3><p>See what today’s goal may cost in the future and avoid planning with a frozen price tag.</p><button class="text-button" data-tool="inflation">Check inflation →</button></article><article class="planning-card"><span class="planning-icon">↗</span><h3>Portfolio dashboard</h3><p>Track a demo allocation, watchlist, goal progress, and annual review cues in one calm view.</p><a class="text-button" href="#dashboard">Open dashboard →</a></article></div>
        </div>
      </section>

      <section class="dashboard-section" id="dashboard">
        <div class="container"><div class="section-top"><div><div class="eyebrow">Your investment desk</div><h2>See the shape of your portfolio.</h2></div><p>A private, local-only demo dashboard for organizing the funds and goals you want to revisit.</p></div><div class="dashboard-grid"><div class="dashboard-card allocation-card"><div class="dashboard-card-head"><span>Current allocation</span><span class="status-dot">● Demo</span></div><div class="allocation-visual"><div><strong>₹8,40,000</strong><span>Demo portfolio value</span></div></div><div class="allocation-rows"><div><span><i class="dot equity"></i> Equity</span><strong>60%</strong></div><div><span><i class="dot debt"></i> Debt</span><strong>25%</strong></div><div><span><i class="dot hybrid"></i> Hybrid</span><strong>15%</strong></div></div></div><div class="dashboard-card"><div class="dashboard-card-head"><span>Goal progress</span><a href="#tools">Edit goals ↗</a></div><div class="goal-line"><div><span>Emergency reserve</span><strong>72%</strong></div><div class="progress"><span style="width:72%"></span></div></div><div class="goal-line"><div><span>Home down payment</span><strong>38%</strong></div><div class="progress"><span style="width:38%"></span></div></div><div class="goal-line"><div><span>Retirement corpus</span><strong>21%</strong></div><div class="progress"><span style="width:21%"></span></div></div><div class="dashboard-note">Next review suggested in 24 days.</div></div><div class="dashboard-card watchlist-card"><div class="dashboard-card-head"><span>Watchlist</span><span id="watchCount">0 saved</span></div><div id="watchlistItems"><p class="empty-state">Save funds from the explorer to see them here.</p></div><a class="text-button" href="#funds">Browse funds →</a></div></div></div>
      </section>

      <section class="funds-section" id="funds">
        <div class="container"><div class="section-top"><div><div class="eyebrow">Curated by conviction</div><h2>Funds with a point of view.</h2></div><p>Explore a focused shortlist by investing style. Compare the essentials, then go deeper when you’re ready.</p></div><div class="fund-controls"><label class="search-field"><span>⌕</span><input id="fundSearch" type="search" placeholder="Search funds or categories" /></label><div class="filter-pills"><button class="filter-pill active" data-filter="All">All</button><button class="filter-pill" data-filter="Equity">Equity</button><button class="filter-pill" data-filter="Debt">Debt</button><button class="filter-pill" data-filter="Hybrid">Hybrid</button><button class="filter-pill" data-filter="Index">Index</button></div></div><div class="fund-grid">${funds.map((fund) => `<article class="fund-card" data-category="${fund.tag.split(" · ")[0]}" data-name="${fund.name.toLowerCase()}">${fund.image ? `<img class="fund-image" src="${fund.image}" alt="Modern glass buildings" />` : ""}<div><div class="fund-top"><span class="fund-icon">${fund.icon}</span><span class="fund-tag">${fund.tag}</span></div><h3>${fund.name}</h3><p>${fund.description}</p></div><div class="fund-bottom"><div class="fund-return">${fund.return}<span>${fund.period}</span></div><div class="risk">${fund.risk}</div></div><div class="fund-actions"><button class="text-button watch-button" data-fund="${fund.name}">＋ Watchlist</button><button class="text-button" data-toast="${fund.name} detail view is ready for the next product phase.">View details →</button></div></article>`).join("")}</div><div class="funds-bottom"><a class="arrow-link" href="#funds" id="viewAllFunds">View all mutual funds</a></div></div>
      </section>

      <section class="insights-section" id="insights">
        <div class="container"><div class="section-top"><div><div class="eyebrow">Goal-led investing</div><h2>Clear frameworks. Accountable progress.</h2></div><a class="arrow-link" href="#contact">View all money notes</a></div><div class="practice-grid"><article class="practice-card"><div class="practice-head"><span class="practice-icon">◌</span><span class="practice-label">FRAMEWORK 01</span></div><h3>Build a wealth habit</h3><p>Turn an intention into a monthly system with a SIP that fits your real cash flow.</p><div class="tag-row"><span>Budget mapping</span><span>Goal setting</span><span>Auto-invest</span></div></article><article class="practice-card"><div class="practice-head"><span class="practice-icon">◈</span><span class="practice-label">FRAMEWORK 02</span></div><h3>Choose your fund mix</h3><p>Match equity, debt, and hybrid exposure to your horizon and comfort with volatility.</p><div class="tag-row mint"><span>Asset allocation</span><span>Risk mapping</span><span>Diversification</span></div></article><article class="practice-card"><div class="practice-head"><span class="practice-icon">⌁</span><span class="practice-label">FRAMEWORK 03</span></div><h3>Read market movement</h3><p>Learn which signals matter when headlines are loud and the market keeps moving.</p><div class="tag-row blue"><span>Market pulse</span><span>Trend reading</span><span>Volatility</span></div></article><article class="practice-card"><div class="practice-head"><span class="practice-icon">↗</span><span class="practice-label">FRAMEWORK 04</span></div><h3>Plan for a milestone</h3><p>Work backward from the amount you need for a home, education, or financial freedom.</p><div class="tag-row"><span>Goal calculator</span><span>Time horizon</span><span>Inflation</span></div></article><article class="practice-card"><div class="practice-head"><span class="practice-icon">◎</span><span class="practice-label">FRAMEWORK 05</span></div><h3>Stay invested</h3><p>Use simple reviews and rebalancing cues to keep a long-term plan on track.</p><div class="tag-row mint"><span>Annual review</span><span>Rebalancing</span><span>Patience</span></div></article><article class="practice-card"><div class="practice-head"><span class="practice-icon">▱</span><span class="practice-label">FRAMEWORK 06</span></div><h3>Understand the fine print</h3><p>Make informed choices with plain-language explainers on costs, taxes, and risk.</p><div class="tag-row blue"><span>Expense ratios</span><span>Tax basics</span><span>Disclosures</span></div></article></div></div>
      </section>

      <section class="financial-help-section" id="help">
        <div class="container help-layout">
          <div class="help-intro"><div class="eyebrow">About MIMAG Finance</div><h2>Financial guidance for <strong>clearer decisions.</strong></h2><p>Bring us your goal, your questions, or the part of investing that still feels difficult. Our financial guides help you understand the choices before you commit.</p><div class="help-benefits"><div><span>✓</span><strong>Goal-first guidance</strong></div><div><span>✓</span><strong>Plain-language explanations</strong></div><div><span>✓</span><strong>Risk-aware conversations</strong></div><div><span>✓</span><strong>Confidential by design</strong></div></div><div class="help-contact"><span>✉</span><a href="mailto:hello@mimag.finance">hello@mimag.finance</a><span>◷</span><span>Response within 24 hours</span></div></div>
          <div class="help-form-card"><h3>Schedule a financial planning call</h3><p>Tell us what you’d like help with and a guide will follow up.</p><form id="helpForm"><div class="help-form-grid"><label><span>FULL NAME *</span><input name="name" required placeholder="e.g. Aisha Sharma" /></label><label><span>EMAIL ADDRESS *</span><input name="email" type="email" required placeholder="name@example.com" /></label></div><label><span>WHAT WOULD YOU LIKE HELP WITH?</span><select name="topic"><option>Building a SIP</option><option>Choosing mutual funds</option><option>Planning a financial goal</option><option>Understanding risk</option><option>Reviewing my portfolio</option></select></label><label><span>YOUR QUESTION *</span><textarea name="message" required placeholder="Tell us a little about your goal or question..."></textarea></label><div class="help-form-foot"><small>Your details stay private. This is an educational consultation, not a guaranteed-return recommendation.</small><button class="button" type="submit">Request a conversation ↗</button></div></form></div>
        </div>
      </section>

      <section class="cta-section" id="contact"><div class="container"><div class="cta-box"><div><div class="eyebrow">Your next money move</div><h2>Bring a question.<br>Leave with a plan.</h2></div><a class="button" href="mailto:hello@mimag.finance?subject=My%20investing%20question">Talk to a money guide ↗</a></div></div></section>
    </main>

<footer><div class="container footer-top"><div><a class="brand" href="#top"><span class="brand-mark">M</span><span>MIMAG <small>Finance</small></span></a><p>Tools and perspective for long-term wealth building. Make your money move smarter.</p></div><div class="footer-links"><div class="footer-col"><span>Explore</span><a href="#calculator">SIP calculator</a><a href="#lumpsum">Lump-sum calculator</a><a href="#funds">Mutual funds</a><a href="#pulse">Market pulse</a></div><div class="footer-col"><span>Learn</span><a href="#insights">Money notes</a><a href="#contact">Talk to us</a><a href="#top">Disclosures</a></div></div></div><div class="container footer-bottom"><span>© 2026 MIMAG Finance</span><span>For education and illustration only · Investments are subject to market risks</span></div></footer>
    <a class="floating-cta" href="#contact"><span>▢</span> Talk to a money guide <b>↗</b></a><div class="toast" id="toast" role="status"></div>
  `;
};

const updateRange = (input, percent) => { input.style.setProperty("--fill", `${percent}%`); };

const updateCalculator = () => {
  const monthly = Number(document.querySelector("#monthlyRange").value);
  const annualReturn = Number(document.querySelector("#returnRange").value);
  const years = Number(document.querySelector("#yearsRange").value);
  const invested = monthly * years * 12;
  const total = futureValue(monthly, annualReturn, years);
  document.querySelector("#monthlyValue").textContent = formatINR(monthly);
  document.querySelector("#returnValue").textContent = `${annualReturn}%`;
  document.querySelector("#yearsValue").textContent = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#resultYears").textContent = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#resultTotal").textContent = formatINR(total);
  document.querySelector("#resultInvested").textContent = formatINR(invested);
  document.querySelector("#resultGain").textContent = formatINR(total - invested);
  ["monthlyRange", "returnRange", "yearsRange"].forEach((id) => { const el = document.querySelector(`#${id}`); updateRange(el, ((el.value - el.min) / (el.max - el.min)) * 100); });
  const chart = document.querySelector("#resultChart");
  chart.innerHTML = Array.from({ length: 18 }, (_, index) => { const progress = (index + 1) / 18; const height = 16 + (Math.pow(progress, 1.55) * 80); return `<span class="bar" style="height:${height}%"></span>`; }).join("");
};

const updateLumpSumCalculator = () => {
  const principal = Number(document.querySelector("#lumpSumRange").value);
  const annualReturn = Number(document.querySelector("#lumpReturnRange").value);
  const years = Number(document.querySelector("#lumpYearsRange").value);
  const total = lumpSumFutureValue(principal, annualReturn, years);
  document.querySelector("#lumpSumValue").textContent = formatINR(principal);
  document.querySelector("#lumpReturnValue").textContent = `${annualReturn}%`;
  document.querySelector("#lumpYearsValue").textContent = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#lumpResultYears").textContent = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#lumpResultTotal").textContent = formatINR(total);
  document.querySelector("#lumpResultInvested").textContent = formatINR(principal);
  document.querySelector("#lumpResultGain").textContent = formatINR(total - principal);
  ["lumpSumRange", "lumpReturnRange", "lumpYearsRange"].forEach((id) => { const el = document.querySelector(`#${id}`); updateRange(el, ((el.value - el.min) / (el.max - el.min)) * 100); });
  const chart = document.querySelector("#lumpResultChart");
  chart.innerHTML = Array.from({ length: 18 }, (_, index) => { const progress = (index + 1) / 18; const height = 17 + (Math.pow(progress, 1.35) * 80); return `<span class="bar lump-bar" style="height:${height}%"></span>`; }).join("");
};

const toolPresets = {
  goal: { title: "Plan backward from your goal.", description: "Tell us what you want to build, when you need it, and we’ll estimate the monthly investment needed to get there.", label: "Estimated monthly SIP", cta: "Save this plan ↗" },
  swp: { title: "Create a steady income stream.", description: "Estimate how much you may withdraw from a corpus each month while keeping a long-term return assumption in view.", label: "Illustrative corpus needed", cta: "Explore withdrawal plans ↗" },
  stp: { title: "Move money with a measured rhythm.", description: "Model a systematic transfer from a source corpus into a growth-oriented destination over a chosen period.", label: "Transfer value", cta: "Build a transfer plan ↗" },
  inflation: { title: "Make tomorrow’s price visible.", description: "A goal that costs ₹25 lakh today will need a larger corpus later. Add inflation to make your plan more honest.", label: "Future goal value", cta: "Adjust your goal ↗" },
  tax: { title: "Make tax-saving part of the plan.", description: "ELSS funds combine equity exposure with a three-year lock-in. Use this as an explainer, not a tax recommendation.", label: "Potential 80C saving", cta: "Read the ELSS guide ↗" }
};

const updateGoalTool = () => {
  const target = Number(document.querySelector("#goalTargetRange").value);
  const years = Number(document.querySelector("#goalYearsRange").value);
  const annualReturn = Number(document.querySelector("#goalReturnRange").value);
  document.querySelector("#goalTargetValue").textContent = formatINR(target);
  document.querySelector("#goalYearsValue").textContent = `${years} ${years === 1 ? "year" : "years"}`;
  document.querySelector("#goalReturnValue").textContent = `${annualReturn}%`;
  document.querySelector("#goalResult").textContent = formatINR(goalMonthlyInvestment(target, annualReturn, years));
  ["goalTargetRange", "goalYearsRange", "goalReturnRange"].forEach((id) => { const el = document.querySelector(`#${id}`); updateRange(el, ((el.value - el.min) / (el.max - el.min)) * 100); });
};

const showToast = (message) => { const toast = document.querySelector("#toast"); toast.textContent = message; toast.classList.add("visible"); window.setTimeout(() => toast.classList.remove("visible"), 3200); };

const renderWatchlist = () => {
  const saved = JSON.parse(localStorage.getItem("mimag-watchlist") || "[]");
  const list = document.querySelector("#watchlistItems");
  document.querySelector("#watchCount").textContent = `${saved.length} saved`;
  list.innerHTML = saved.length ? saved.map((name) => `<div class="watch-item"><span>${name}</span><button class="remove-watch" data-fund="${name}" aria-label="Remove ${name}">×</button></div>`).join("") : `<p class="empty-state">Save funds from the explorer to see them here.</p>`;
  document.querySelectorAll(".watch-button").forEach((button) => { button.textContent = saved.includes(button.dataset.fund) ? "✓ Saved" : "＋ Watchlist"; button.classList.toggle("saved", saved.includes(button.dataset.fund)); });
  document.querySelectorAll(".remove-watch").forEach((button) => button.addEventListener("click", () => { localStorage.setItem("mimag-watchlist", JSON.stringify(saved.filter((name) => name !== button.dataset.fund))); renderWatchlist(); }));
};

const selectTool = (tool) => {
  const preset = toolPresets[tool];
  document.querySelectorAll(".tool-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tool === tool));
  document.querySelector("#toolTitle").textContent = preset.title;
  document.querySelector("#toolDescription").textContent = preset.description;
  document.querySelector("#toolCta").textContent = preset.cta;
  document.querySelector(".tool-number").textContent = `${Object.keys(toolPresets).indexOf(tool) + 1}`.padStart(2, "0");
  if (tool !== "goal") { document.querySelector("#toolInputs").classList.add("tool-preview"); document.querySelector("#toolInputs .tool-result span").textContent = preset.label; document.querySelector("#goalResult").textContent = tool === "inflation" ? formatINR(Number(document.querySelector("#goalTargetRange").value) * (1.06 ** Number(document.querySelector("#goalYearsRange").value))) : tool === "tax" ? formatINR(Math.min(150000, Number(document.querySelector("#goalTargetRange").value)) * .3) : tool === "swp" ? formatINR(withdrawalCorpus(25000, 10, 10)) : formatINR(Number(document.querySelector("#goalTargetRange").value) / 12); } else { document.querySelector("#toolInputs").classList.remove("tool-preview"); document.querySelector("#toolInputs .tool-result span").textContent = preset.label; updateGoalTool(); }
};

render();
document.querySelector("#insights").after(document.querySelector(".calculator-section"), document.querySelector(".lumpsum-section"));
import("./globe.js?v=2").then(({ initGlobe }) => initGlobe(document.querySelector("#globe-scene"))).catch((error) => console.warn("Globe unavailable:", error));
updateCalculator();
updateLumpSumCalculator();
document.querySelectorAll(".range").forEach((input) => input.addEventListener("input", () => { updateCalculator(); updateGoalTool(); }));
document.querySelectorAll(".lump-range").forEach((input) => input.addEventListener("input", updateLumpSumCalculator));
updateGoalTool();
document.querySelectorAll(".tool-tab,[data-tool]").forEach((element) => element.addEventListener("click", (event) => { const tool = event.currentTarget.dataset.tool; if (tool) { event.preventDefault(); selectTool(tool); document.querySelector("#tools").scrollIntoView({ behavior: "smooth" }); } }));
document.querySelectorAll("[data-toast]").forEach((element) => element.addEventListener("click", () => showToast(element.dataset.toast)));
document.querySelectorAll(".filter-pill").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll(".filter-pill").forEach((pill) => pill.classList.remove("active")); button.classList.add("active"); filterFunds(); }));
document.querySelector("#fundSearch").addEventListener("input", filterFunds);
function filterFunds() { const query = document.querySelector("#fundSearch").value.toLowerCase(); const active = document.querySelector(".filter-pill.active").dataset.filter; document.querySelectorAll(".fund-card").forEach((card) => { card.hidden = !(active === "All" || card.dataset.category === active) || !card.dataset.name.includes(query); }); }
document.querySelectorAll(".watch-button").forEach((button) => button.addEventListener("click", () => { const saved = JSON.parse(localStorage.getItem("mimag-watchlist") || "[]"); const next = saved.includes(button.dataset.fund) ? saved.filter((name) => name !== button.dataset.fund) : [...saved, button.dataset.fund]; localStorage.setItem("mimag-watchlist", JSON.stringify(next)); renderWatchlist(); showToast(next.includes(button.dataset.fund) ? `${button.dataset.fund} added to your watchlist.` : `${button.dataset.fund} removed from your watchlist.`); }));
renderWatchlist();
document.body.classList.remove("soft-light");
document.querySelector("#themeToggle").addEventListener("click", () => { document.body.classList.toggle("soft-light"); const light = document.body.classList.contains("soft-light"); showToast(`${light ? "Soft light" : "Reference dark"} theme enabled.`); });
document.querySelector("#viewAllFunds").addEventListener("click", (event) => { event.preventDefault(); const toast = document.querySelector("#toast"); toast.textContent = "Fund explorer is next — the curated shortlist is ready to compare."; toast.classList.add("visible"); window.setTimeout(() => toast.classList.remove("visible"), 3200); });
document.querySelector("#helpForm").addEventListener("submit", (event) => { event.preventDefault(); const name = new FormData(event.currentTarget).get("name"); event.currentTarget.reset(); showToast(`Thanks ${name || "there"}. Your financial help request is saved for this demo.`); });
document.querySelector(".menu-button").addEventListener("click", () => { const nav = document.querySelector(".main-nav"); const open = nav.style.display === "flex"; nav.style.display = open ? "none" : "flex"; nav.style.position = "absolute"; nav.style.top = "66px"; nav.style.left = "15px"; nav.style.right = "15px"; nav.style.padding = "18px"; nav.style.flexDirection = "column"; nav.style.alignItems = "flex-start"; nav.style.border = "1px solid var(--line)"; nav.style.background = "#101014"; });


