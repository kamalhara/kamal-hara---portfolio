import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Rubik as Poppins, JetBrains_Mono } from "next/font/google";
import Navbar from "./_components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kamal Hara | Full-Stack & Mobile Developer",
  description:
    "Portfolio of Kamal Hara, a full-stack and mobile developer. Expertise in React, Next.js, React Native, Expo, Node.js, Firebase, Supabase, AWS, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
