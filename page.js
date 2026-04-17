import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — SellerVector by Glooya",
  description:
    "The terms governing your use of SellerVector, the SaaS product operated by Glooya.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container-page max-w-4xl">
          <div className="kicker">Legal</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
            Terms of Service
          </h1>
          <div className="mt-4 text-[13px] font-mono uppercase tracking-[0.08em] text-ink-faint">
            Effective date: 17 April 2026
          </div>

          <div className="mt-10 space-y-6 text-[15.5px] text-ink-soft leading-[1.75]">
            <p>
              Welcome to SellerVector. By creating an account or using our service, you
              agree to these Terms of Service (&ldquo;Terms&rdquo;). Please read them carefully.
            </p>

            <H3>1. Who we are</H3>
            <p>
              SellerVector is a software-as-a-service platform operated by{" "}
              <strong>Glooya</strong>, a sole proprietorship business owned by Amit Thakur,
              registered in Ghaziabad, Uttar Pradesh, India (GSTIN 09CRQPT7294E1ZV). These
              Terms form a legal agreement between you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and Glooya,
              operator of SellerVector (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </p>

            <H3>2. Eligibility</H3>
            <p>
              You must be at least 18 and legally capable of entering into a contract. You
              must also be an active Amazon seller or an authorized representative (such
              as an agency employee) acting on behalf of one.
            </p>

            <H3>3. Your account</H3>
            <p>
              You are responsible for keeping your login credentials secure and for
              activity under your account. Notify us at{" "}
              <a className="text-brand-700 hover:underline" href="mailto:support@glooya.com">support@glooya.com</a> if you suspect
              unauthorized access. By connecting your Amazon account, you confirm you are
              authorized to grant us access to that account&apos;s data.
            </p>

            <H3>4. Acceptable use</H3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Use SellerVector to violate any law, regulation, or Amazon policy (including Amazon&apos;s Seller Code of Conduct, Advertising Policies, and Developer Agreement)</li>
              <li>Reverse-engineer, scrape, or disrupt the platform</li>
              <li>Manipulate Amazon search rankings, reviews, or metrics in ways prohibited by Amazon</li>
              <li>Share your account with unauthorized users</li>
              <li>Attempt to access data belonging to other SellerVector users</li>
            </ul>
            <p>Violations may result in suspension or termination.</p>

            <H3>5. Subscription and payment</H3>
            <p>
              SellerVector offers free and paid plans. Paid subscriptions renew
              automatically until cancelled. Cancellation takes effect at the end of the
              current billing cycle. Fees are non-refundable except where required by
              law. We may change pricing with at least 30 days&apos; notice.
            </p>

            <H3>6. Service availability</H3>
            <p>
              We strive for 24/7 availability but do not guarantee uninterrupted access.
              Scheduled maintenance, third-party outages (including Amazon API outages),
              and unforeseen technical issues may temporarily affect the service.
            </p>

            <H3>7. Intellectual property</H3>
            <p>
              The SellerVector platform — design, code, branding, content — is our
              property or that of our licensors. You receive a limited, non-exclusive,
              non-transferable license to use the service for its intended purpose. Data
              you bring into the platform (such as your Amazon account data) remains
              yours.
            </p>

            <H3>8. Disclaimers</H3>
            <p>
              SellerVector provides tools, analytics, and automation suggestions. We do
              not guarantee any specific advertising outcome, sales level, or return on
              investment. The service is provided &ldquo;as is&rdquo; without warranties of any kind,
              to the fullest extent permitted by law.
            </p>

            <H3>9. Limitation of liability</H3>
            <p>
              To the maximum extent allowed by law, our total liability for any claim
              will not exceed the amount you paid us in the 12 months before the claim
              arose. We are not liable for indirect, incidental, or consequential
              damages.
            </p>

            <H3>10. Termination</H3>
            <p>
              You may close your account at any time. We may suspend or terminate your
              account if you violate these Terms, abuse the service, or if required by
              law or Amazon. Upon termination, your data will be deleted in accordance
              with our Privacy Policy.
            </p>

            <H3>11. Changes to the Terms</H3>
            <p>
              We may update these Terms occasionally. If we make material changes, we&apos;ll
              notify you in advance by email or in-app. Continued use means you accept
              the updated Terms.
            </p>

            <H3>12. Governing law</H3>
            <p>
              These Terms are governed by and construed in accordance with the laws of
              India. Any disputes arising out of or related to these Terms or the service
              will be subject to the exclusive jurisdiction of the courts of Ghaziabad,
              Uttar Pradesh, India, unless applicable consumer-protection law requires
              otherwise.
            </p>

            <H3>13. Contact</H3>
            <p>
              Questions about these Terms:{" "}
              <a className="text-brand-700 hover:underline" href="mailto:legal@glooya.com">legal@glooya.com</a>
              <br />
              <strong>Registered business:</strong> Glooya (Proprietorship of Amit Thakur),
              Building No. V, Bhowapur, Hasanpur, Ghaziabad, Uttar Pradesh – 201010, India
              <br />
              <strong>GSTIN:</strong> 09CRQPT7294E1ZV
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-line flex flex-wrap gap-4 items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-[14px] text-ink-muted hover:text-brand-700 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to home
            </Link>
            <Link href="/privacy" className="inline-flex items-center gap-2 text-[14px] text-ink-muted hover:text-brand-700 transition-colors">
              View Privacy Policy
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function H3({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-ink pt-8 pb-1 tracking-tight">
      {children}
    </h2>
  );
}
