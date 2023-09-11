import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Superheat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-[100vh] flex flex-col`}>
        <div className="w-full bg-neutral text-primary fixed top-0 z-50">
          <Header />
        </div>
        <main className="pt-[75px]">{children}</main>
        <div className="bg-neutral text-primary mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
//bg-[#3F4244]