import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-line">
      <div className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-[17px] tracking-tight">
              <span className="relative w-8 h-8 rounded-lg bg-ink text-white grid place-items-center overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-600 opacity-90" />
                <span className="relative font-bold text-[15px]">S</span>
              </span>
              Seller<span className="text-brand-700">Vector</span>
            </Link>
            <p className="mt-5 text-[14px] text-ink-muted leading-relaxed">
              Smart automation for Amazon sellers. Built with transparency, security, and seller success at its core.
            </p>
            <div className="mt-6 text-[12.5px] text-ink-faint leading-[1.7]">
              A product of <span className="text-ink-soft font-semibold">Glooya</span> (Proprietorship of Amit Thakur)<br />
              Ghaziabad, Uttar Pradesh – 201010, India<br />
              <span className="font-mono text-[11.5px]">GSTIN 09CRQPT7294E1ZV</span>
            </div>
          </div>

          <FooterCol title="Product">
            <FooterLink href="/#features">Features</FooterLink>
            <FooterLink href="/#how-it-works">How it works</FooterLink>
            <FooterLink href="/#who-its-for">Who it&apos;s for</FooterLink>
            <FooterLink href="/login">Sign in</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
            <FooterLink href="mailto:partners@glooya.com">Partnerships</FooterLink>
            <FooterLink href="mailto:hello@glooya.com">Press</FooterLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="mailto:privacy@glooya.com">Data requests</FooterLink>
            <FooterLink href="mailto:legal@glooya.com">Legal inquiries</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <div className="text-[13px] text-ink-faint">
            © 2026 Glooya. SellerVector and the SellerVector logo are trademarks of Glooya. All rights reserved.
          </div>
          <div className="text-[12px] text-ink-faint italic max-w-xl">
            SellerVector is an independent software tool. Amazon, Amazon Advertising, and related marks are the property of Amazon.com, Inc. or its affiliates.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h5 className="text-[11.5px] font-mono uppercase tracking-[0.12em] text-ink-faint mb-5 font-medium">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] text-ink-soft hover:text-brand-700 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
