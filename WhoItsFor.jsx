export default function WhoItsFor() {
  const audiences = [
    {
      title: "Amazon Sellers",
      tagline: "Independent sellers and small teams",
      desc: "Whether you're running a handful of ASINs or scaling a mature product line, SellerVector gives you enterprise-grade ad automation without the enterprise price tag.",
      points: [
        "Launch and optimize campaigns without spreadsheets",
        "See exactly which products deserve more ad investment",
        "Spot wasted spend before it damages your margins",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 11-8 0" />
        </svg>
      ),
    },
    {
      title: "E-commerce Brands",
      tagline: "Growing consumer brands on Amazon",
      desc: "Protect your brand with smarter bidding, unified insights, and product-level analytics. Coordinate campaigns across marketplaces without losing the full picture.",
      points: [
        "Unified view of sales and ads across all marketplaces",
        "Product-level profit and performance insights",
        "Role-based team access for marketing and ops teams",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1" />
        </svg>
      ),
    },
    {
      title: "Agencies",
      tagline: "Teams managing multiple clients",
      desc: "Centralize every client account in one secure workspace. Switch accounts in a click, keep data isolated, and deliver clear performance reporting — without rebuilding the dashboard every month.",
      points: [
        "Manage dozens of Amazon accounts from one login",
        "Fine-grained permissions for team members",
        "Export-ready reporting for client delivery",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 3.13a4 4 0 010 7.75M22 21v-2a4 4 0 00-3-3.87" />
        </svg>
      ),
    },
  ];

  return (
    <section id="who-its-for" className="section bg-lineSoft/60 border-y border-line">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <div className="kicker">Who it&apos;s for</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
            Built for everyone selling on <span className="text-brand-700">Amazon.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            Whether you&apos;re a solo seller, a consumer brand, or an agency managing dozens of accounts — SellerVector adapts to how you work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-line rounded-2xl p-7 md:p-8 hover:border-brand-600 hover:shadow-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 grid place-items-center mb-5">
                {a.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{a.title}</h3>
              <div className="text-[13px] font-mono uppercase tracking-[0.08em] text-brand-700 mb-4">
                {a.tagline}
              </div>
              <p className="text-[14.5px] text-ink-muted leading-relaxed mb-5">{a.desc}</p>
              <ul className="space-y-2.5">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px] text-ink-soft">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-600 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
