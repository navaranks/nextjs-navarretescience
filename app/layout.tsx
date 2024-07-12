import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SpeedInsights} from "@vercel/speed-insights/next"


const inter = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navarrete Science",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider attribute="class"  disableTransitionOnChange>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
      <SpeedInsights />
    </html>
  );
}
