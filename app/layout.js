import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "SellerVector — Smart Automation for Amazon Sellers | by Glooya",
  description:
    "SellerVector helps Amazon sellers, brands, and agencies automate ad campaigns, track ACOS and ROAS, and optimize performance across every marketplace. A product of Glooya.",
  keywords: [
    "Amazon sellers",
    "Amazon advertising",
    "PPC automation",
    "ACOS",
    "ROAS",
    "SP-API",
    "Amazon Ads",
    "SellerVector",
    "Glooya",
  ],
  metadataBase: new URL("https://glooya.com"),
  openGraph: {
    title: "SellerVector — Smart Automation for Amazon Sellers",
    description:
      "Automate campaigns, track performance, and optimize Amazon advertising — across every marketplace, from one secure dashboard.",
    url: "https://glooya.com",
    siteName: "SellerVector by Glooya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SellerVector — Smart Automation for Amazon Sellers",
    description:
      "Automate Amazon ad campaigns, track ACOS & ROAS, optimize across every marketplace.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
