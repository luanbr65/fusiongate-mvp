import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "FusionGate — Gateway de decisão antifraude em tempo real";
const description =
  "FusionGate funde sinais de identidade, comportamento e rede em um único gateway de decisão. Aprove clientes legítimos e bloqueie fraudes em milissegundos.";

export const metadata = {
  title,
  description,
  keywords: [
    "antifraude",
    "gateway de decisão",
    "prevenção à fraude",
    "PIX",
    "risk score",
    "MVP",
  ],
  applicationName: "FusionGate",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "FusionGate",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
