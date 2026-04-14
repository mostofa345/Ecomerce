import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "আঁঠালি | Panjabi Fashion Store",
  description: "Company level multi-vendor e-commerce platform for men's fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header/Navbar সব পেজের জন্য ফিক্সড */}
          <Navbar />

          {/* মেইন কন্টেন্ট যা পেজ অনুযায়ী পরিবর্তন হবে */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer সব পেজের নিচে থাকবে */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}