import "./globals.css";
import { Cinzel, Bebas_Neue, Barlow } from "next/font/google";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-cinzel",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Skol Robotics | FRC Team #9073",
  description:
    "Fayette Academy's Skol Robotics — FIRST Robotics Competition Team #9073. Engineering, programming, and competition updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${bebas.variable} ${barlow.variable} min-h-screen flex flex-col text-ink bg-parchment`}
      >
        <Background />
        <Navbar />

        <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
