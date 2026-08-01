import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "B.S.P. ITI College | Your Bright Future",
  description: "B.S.P. ITI College offers professional trades in Electrician, Fitter, and classes till 8th standard. Government recognised, expert trainers, and placement assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: "80px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
