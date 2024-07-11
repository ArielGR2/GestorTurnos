import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "../app/componentes/footer/Footer";
import { Header } from "../app/componentes/header/Header";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestor de Turnos - CAE",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}><Header/>{children}<Footer/></body>
      </html>
    </>
  );
}
