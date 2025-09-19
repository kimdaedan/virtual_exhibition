// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Impor Header di sini
import Footer from "@/components/Footer"; // Impor Footer di sini

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Virtual Exhibition Polibatam",
  description: "Pameran Virtual Politeknik Negeri Batam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* CONTAINER UTAMA UNTUK STICKY FOOTER */}
        <div id="root-container">
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}