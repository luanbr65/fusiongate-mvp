import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "FusionGate — Gateway de decisão antifraude em tempo real",
  description:
    "FusionGate funde sinais de identidade, comportamento e rede em um único gateway de decisão. Aprove clientes legítimos e bloqueie fraudes em milissegundos.",
  keywords: [
    "antifraude",
    "gateway de decisão",
    "prevenção à fraude",
    "PIX",
    "risk score",
    "MVP",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
