import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Scuba Druskininkai – Nardymo mokykla",
  description:
    "Profesionalus nardymo instruktorius iš Druskininkų. " +
    "Virš 10 metų patirtis, individualios pamokos, vaikų programa Bubble Rangers.",
  keywords: [
    "nardymas Druskininkai",
    "nardymo mokykla",
    "nardymo kursai",
    "Bubble Rangers",
    "scuba diving Lietuva",
    "nardymo instruktorius",
  ],
  openGraph: {
    title: "Scuba Druskininkai – Nardymo mokykla",
    description: "Nardyk su drąsa ir džiaugsmu. Druskininkai, Lietuva.",
    locale: "lt_LT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt" className={`${montserrat.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
