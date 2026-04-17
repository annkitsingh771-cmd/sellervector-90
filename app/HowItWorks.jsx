import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Connect your Amazon account",
      desc: "Sign up and click 'Connect Amazon.' You're taken directly to Amazon's official Login with Amazon screen, where you authorize the connection. We never see or store your Amazon password.",
      tag: "OAuth via Amazon LWA",
    },
    {
      num: "02",
      title: "Create your campaigns",
      desc: "Use our guided flow to set up Sponsored Products, Brands, and Display campaigns — or import and review your existing ones. Configure budgets, targets, and automation rules.",
      tag: "Sponsored Products, Brands, Display",
    },
    {
      num: "03",
      title: "Track your performance",
      desc: "Within minutes of connection, your dashboard populates with campaigns, products, and live performance metrics — ACOS, ROAS, sales, conversions — updated directly from Amazon's API.",
      tag: "Live metrics from Amazon Ads API",
    },
    {
      num: "04",
      title: "Optimize your results",
      desc: "Review SellerVector's data-driven suggestions — new keywords, bid adjustments, negatives to apply, budget rebalances. You approve each change; nothing is applied without your sign-off.",
      tag: "You stay in control",
    },
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <div>
            <div className="kicker">How it works</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              From signup to smarter ads in <span className="text-brand-700">four steps.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-muted">
              No lengthy onboarding. No contracts. Connect through Amazon&apos;s own authorization flow, and your dashboard is live within minutes.
            </p>
            <Link href="/login" className="btn btn-primary mt-8">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="border-t border-line">
            {steps.map((s) => (
              <div
                key={s.num}
                className="py-8 border-b border-line grid grid-cols-[auto_1fr] gap-6 group transition-all duration-300 hover:pl-2"
              >
                <div className="text-4xl md:text-[42px] font-bold text-brand-700 leading-none">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[15.5px] text-ink-muted leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-lineSoft border border-line rounded-full text-[11.5px] font-mono text-ink-muted">
                    {s.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
