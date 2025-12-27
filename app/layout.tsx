import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diagnostico | Comece 2026 com o pé direito",
  description: "Ganhe 3 dicas para alavancar sua jornada digital!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
