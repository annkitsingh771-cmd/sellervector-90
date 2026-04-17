export default function Contact() {
  const contacts = [
    { label: "General", email: "hello@glooya.com" },
    { label: "Support", email: "support@glooya.com" },
    { label: "Privacy & Data", email: "privacy@glooya.com" },
    { label: "Partnerships", email: "partners@glooya.com" },
    { label: "Legal", email: "legal@glooya.com" },
  ];

  return (
    <section id="contact" className="section bg-lineSoft/50 border-y border-line">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <div className="kicker">Contact</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
            We&apos;re here to <span className="text-brand-700">help.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            Whether you&apos;re a seller with questions, a brand evaluating SellerVector, or a member of Amazon&apos;s review team — we respond to every inquiry within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
          <div>
            <div className="divide-y divide-line border-y border-line">
              {contacts.map((c) => (
                <div
                  key={c.email}
                  className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 py-5"
                >
                  <div className="text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-faint pt-1">
                    {c.label}
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-[15.5px] text-ink hover:text-brand-700 border-b border-transparent hover:border-brand-600 transition-colors w-fit"
                  >
                    {c.email}
                  </a>
                </div>
              ))}

              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 py-5">
                <div className="text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-faint pt-1">
                  Registered office
                </div>
                <div className="text-[15px] text-ink leading-relaxed">
                  <strong>Glooya</strong> (Sole Proprietorship of Amit Thakur)<br />
                  Building No. V, Bhowapur, Hasanpur<br />
                  Ghaziabad, Uttar Pradesh – 201010<br />
                  India
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 py-5">
                <div className="text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-faint pt-1">
                  GSTIN
                </div>
                <div className="text-[14.5px] font-mono text-ink">09CRQPT7294E1ZV</div>
              </div>

              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 py-5">
                <div className="text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-faint pt-1">
                  Support hours
                </div>
                <div className="text-[15px] text-ink">Mon – Fri, 9:00 AM to 7:00 PM IST</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-line rounded-2xl p-7 md:p-10 shadow-card">
            <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
            <p className="text-[15px] text-ink-muted mb-6">
              Prefer to write instead of emailing? Use the form and we&apos;ll reply at the address you provide.
            </p>
            <form className="space-y-4">
              <Field label="Your name" type="text" placeholder="Jane Doe" />
              <Field label="Email address" type="email" placeholder="jane@yourbrand.com" />
              <Field label="Company (optional)" type="text" placeholder="Your brand or agency" />
              <div>
                <label className="block text-[12px] font-mono uppercase tracking-[0.06em] text-ink-muted mb-1.5">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about your Amazon business and what you're looking for..."
                  className="w-full px-4 py-3 bg-lineSoft border border-line rounded-lg text-[14.5px] focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 resize-y"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary w-full justify-center py-3.5"
              >
                Send message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-[12px] text-ink-faint text-center pt-2">
                Or email us directly at{" "}
                <a href="mailto:support@glooya.com" className="text-brand-700 hover:underline">
                  support@glooya.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-[12px] font-mono uppercase tracking-[0.06em] text-ink-muted mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-lineSoft border border-line rounded-lg text-[14.5px] focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
      />
    </div>
  );
}
