export default function Features() {
  const features = [
    {
      num: "01",
      title: "Campaign Automation",
      desc: "Launch Sponsored Products, Brands, and Display campaigns in minutes. Set automation rules that adjust bids, pause losers, and scale winners — always with your approval first.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Ads Optimization",
      desc: "Our engine analyzes your campaign data and recommends keywords to add, bids to adjust, negatives to apply, and budgets to rebalance — each suggestion shown with clear reasoning.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.66 17h4.68M12 3v2M5.6 5.6l1.4 1.4M18.4 5.6L17 7M3 12h2M19 12h2M12 8a4 4 0 014 4c0 2-2 3-2 5H10c0-2-2-3-2-5a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Performance Tracking",
      desc: "Track every metric that matters: ACOS, ROAS, TACOS, CTR, conversion rate, ad-attributed sales, and more — pulled directly from the official Amazon Advertising API.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18M7 14l4-4 4 4 5-7" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Multi-Account Management",
      desc: "Switch between seller accounts with one click. Role-based permissions let agencies and brand teams give each member exactly the access they need — and nothing more.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 3.13a4 4 0 010 7.75M22 21v-2a4 4 0 00-3-3.87" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Marketplace Support",
      desc: "Sell in India, the US, the UK, Germany, Japan, or any other Amazon region? Bring every marketplace into one unified view — with correct currency, timezone, and tax handling.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "Secure API Access",
      desc: "SellerVector uses Amazon's official Login with Amazon (LWA) OAuth flow. We never request or store your Amazon password. You can revoke access anytime from Seller Central.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="section bg-lineSoft/60 border-y border-line">
      <div className="container-page">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="kicker">Features</div>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05]">
            Every tool your Amazon advertising needs — <span className="text-brand-700">nothing it doesn&apos;t.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted max-w-2xl">
            A focused toolkit built on the official Amazon Selling Partner API and Amazon Advertising API. Designed for clarity, speed, and complete transparency about your data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-line rounded-2xl overflow-hidden bg-white">
          {features.map((f, i) => (
            <div
              key={f.num}
              className={`p-7 md:p-8 border-line transition-colors hover:bg-brand-50/40 ${
                (i + 1) % 3 !== 0 ? "lg:border-r" : ""
              } ${i % 2 === 0 ? "md:border-r lg:border-r" : "md:border-r-0"} ${
                i < features.length - 1 ? "border-b md:border-b" : ""
              } ${i >= features.length - 3 ? "lg:border-b-0" : ""}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 grid place-items-center">
                  {f.icon}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                  {f.num}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2.5">{f.title}</h3>
              <p className="text-[14.5px] text-ink-muted leading-[1.65]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
