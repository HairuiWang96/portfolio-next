import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hairui Wang — Full Stack Developer",
  description:
    "Personal portfolio of Hairui Wang, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "Hairui Wang — Full Stack Developer",
    description:
      "Personal portfolio of Hairui Wang, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://www.hairui-wang.com",
    siteName: "Hairui Wang Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${lora.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
