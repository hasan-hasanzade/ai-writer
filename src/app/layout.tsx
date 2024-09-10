import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../scss/global.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";

const inter = Inter({ subsets: ["latin"],
  weight: ['400', '500', '700','800', '900'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "ИИ ассистент в учебе",
  description: "Учись быстрее, учись лучше с ИИ ассистентом!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          <main className={'wrapper'}>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
