import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "The Horizon Residences | Final Launch of 4, 4.5 & 5 BHK Ultra-Luxury Apartments in Indirapuram",
  description: "Discover The Horizon Residences, offering premium 4, 4.5 & 5 BHK ultra-luxury apartments in Indirapuram. Limited 264 inventory, landmark location - next to shipra mall in gaziabad with world-class amenities, and seamless connectivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
