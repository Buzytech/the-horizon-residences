import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  title: "The Horizon Residences – Luxury 4 & 5 BHK in Indirapuram",
  description: "The Horizon Residences offers 4 & 5 BHK luxury apartments / flats in Indirapuram. Explore ultra luxury residential property by Harmony Infra in Delhi NCR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <meta name="google-site-verification" content="wsgUBFKHcbxFw2vFuYCAz90F2yo-vMyNjcg-CYpAim4" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9N4VK688HF"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9N4VK688HF');
          `}
        </Script>
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
