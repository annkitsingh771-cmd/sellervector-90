import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-page grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="chip fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
            </span>
            Smart automation for Amazon sellers
          </div>

          <h1 className="mt-6 text-[40px] md:text-[58px] lg:text-[68px] leading-[1.03] font-bold fade-up d1">
            SellerVector — <span className="text-brand-700">smart automation</span> for Amazon sellers.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-xl fade-up d2">
            Automate your ad campaigns, track ACOS and ROAS in real time, and optimize performance across every Amazon marketplace — from a single, secure dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 fade-up d3">
            <Link href="/login" className="btn btn-primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/login" className="btn btn-ghost">
              Login
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-6 fade-up d4">
            <Stat value="14+" label="Marketplaces" />
            <Stat value="Live" label="SP-API sync" />
            <Stat value="AES-256" label="Encryption" />
            <Stat value="Zero" label="Data resale" />
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-[26px] font-bold tracking-tight text-ink">{value}</div>
      <div className="text-[11.5px] font-mono uppercase tracking-[0.1em] text-ink-faint mt-1">
        {label}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative fade-up d3">
      <div className="absolute -inset-6 bg-brand-100/30 rounded-3xl blur-2xl -z-10" />
      <div className="bg-ink text-white rounded-2xl p-5 shadow-dash border border-white/5 rotate-[-1deg]">
        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-white/40">
            Campaigns / Overview — IN
          </div>
          <div className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-white/40">
            Last 30d
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <Metric label="ACOS" value="18.4%" delta="▼ 3.2%" up />
          <Metric label="ROAS" value="5.41×" delta="▲ 0.6×" up />
          <Metric label="Ad sales" value="₹4.2L" delta="▲ 12%" up />
        </div>

        {/* Chart */}
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 relative overflow-hidden h-[180px]">
          <div className="flex justify-between mb-2">
            <div className="text-[12.5px] font-medium">Ad spend vs. sales</div>
            <div className="flex gap-3 text-[10.5px] font-mono text-white/50">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-500" />SPEND</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" />SALES</span>
            </div>
          </div>
          <svg viewBox="0 0 400 130" preserveAspectRatio="none" className="absolute inset-x-4 bottom-4 top-10">
            <defs>
              <linearGradient id="gSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,110 L40,95 L80,100 L120,80 L160,85 L200,60 L240,65 L280,45 L320,30 L360,25 L400,15 L400,130 L0,130 Z"
              fill="url(#gSales)"
            />
            <path
              className="chart-line"
              d="M0,110 L40,95 L80,100 L120,80 L160,85 L200,60 L240,65 L280,45 L320,30 L360,25 L400,15"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
            />
            <path
              className="chart-line"
              d="M0,120 L40,115 L80,110 L120,105 L160,100 L200,92 L240,88 L280,80 L320,72 L360,68 L400,60"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
          </svg>
        </div>

        {/* Campaign rows */}
        <div className="mt-3 space-y-1.5">
          <CampaignRow color="bg-brand-500" name="Auto — Hero SKU" clicks="1,240 clicks" acos="ACOS 14%" ok />
          <CampaignRow color="bg-amber-400" name="Manual — Brand KWs" clicks="876 clicks" acos="ACOS 9%" ok />
          <CampaignRow color="bg-emerald-400" name="SB — Category Push" clicks="512 clicks" acos="ACOS 32%" />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, delta, up }) {
  return (
    <div className="bg-white/[0.04] border border-white/5 rounded-lg p-3.5">
      <div className="text-[10px] font-mono uppercase tracking-[0.08em] text-white/50 mb-2">
        {label}
      </div>
      <div className="text-[21px] font-bold tracking-tight">{value}</div>
      <div className={`text-[10.5px] font-mono mt-0.5 ${up ? "text-emerald-400" : "text-red-400"}`}>
        {delta}
      </div>
    </div>
  );
}

function CampaignRow({ color, name, clicks, acos, ok }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center text-[11.5px] py-2 px-3 bg-white/[0.02] rounded-md">
      <div className="flex items-center gap-2.5">
        <span className={`w-4 h-4 rounded-sm ${color}`} />
        <span>{name}</span>
      </div>
      <span className="font-mono text-[10.5px] text-white/50">{clicks}</span>
      <span className={`font-mono text-[10.5px] ${ok ? "text-emerald-400" : "text-amber-400"}`}>{acos}</span>
      <span className={`text-[10px] ${ok ? "text-emerald-400" : "text-amber-400"}`}>●</span>
    </div>
  );
}
