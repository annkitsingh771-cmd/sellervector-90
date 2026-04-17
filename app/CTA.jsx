import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="relative overflow-hidden bg-ink text-white rounded-3xl p-10 md:p-16 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-600 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-800 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
              Ready to run <span className="text-brand-300">smarter</span> Amazon ads?
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Start free. Connect your Amazon account in minutes. See your first insights the same day — no credit card required.
            </p>
          </div>

          <div className="relative flex flex-col gap-3">
            <Link
              href="/login"
              className="btn bg-white text-ink border-white hover:bg-brand-50 py-4 text-[15px] font-semibold justify-center"
            >
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="btn bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 py-4 text-[15px] font-semibold justify-center"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
