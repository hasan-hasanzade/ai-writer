'use client'
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../scss/global.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isExcludedPage = pathname === "/ai-tutor";

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isExcludedPage && <Navbar />}
        <main className={"wrapper"}>{children}</main>
        {!isExcludedPage && <Footer />}
      </body>
    </html>
  );
}
