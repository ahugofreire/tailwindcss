import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-app">
          <Sidebar />

          <main className="px-4 pb-12 pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


// Tudo  que é colocar o arquivo layout fica fixo indepedente da pagina que o usuario está acessando.
