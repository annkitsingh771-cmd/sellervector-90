export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="kicker">About</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              Built by <span className="text-brand-700">Glooya</span> — tools that help e-commerce sellers grow.
            </h2>
          </div>
          <div className="space-y-5 text-[16.5px] text-ink-muted leading-[1.75]">
            <p>
              <span className="text-ink font-semibold">SellerVector is a product of Glooya</span>, a company focused on building modern, reliable software for e-commerce sellers. We believe large brands shouldn&apos;t be the only ones with access to enterprise-grade growth tools — small and mid-sized sellers deserve the same quality, without the enterprise price tag.
            </p>
            <p>
              Our focus is simple: <span className="text-ink font-semibold">automation and growth</span>. We build tools that take repetitive, time-consuming work off a seller&apos;s plate — so they can spend more time on product, strategy, and customer experience, and less time wrestling with dashboards and spreadsheets.
            </p>
            <p>
              Glooya is registered as a sole proprietorship in Ghaziabad, Uttar Pradesh, India <span className="font-mono text-[14px] bg-lineSoft px-2 py-0.5 rounded border border-line">GSTIN 09CRQPT7294E1ZV</span>, operating under the leadership of its founder, Amit Thakur.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Value
            title="Transparency"
            desc="We explain clearly what data we access, how we use it, and why."
          />
          <Value
            title="Security first"
            desc="Seller data is sensitive. We treat it with the highest standards of care."
          />
          <Value
            title="Seller success"
            desc="Every feature is measured against one question: does it help sellers grow?"
          />
          <Value
            title="Compliance"
            desc="We follow Amazon's Developer Agreement, DPP, and AUP at all times."
          />
        </div>
      </div>
    </section>
  );
}

function Value({ title, desc }) {
  return (
    <div className="bg-white border border-line rounded-xl p-6 hover:border-brand-600 transition-colors">
      <div className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-700 mb-3">
        Value
      </div>
      <h3 className="text-[17px] font-bold mb-2">{title}</h3>
      <p className="text-[14px] text-ink-muted leading-relaxed">{desc}</p>
    </div>
  );
}
