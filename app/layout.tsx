import { DM_Sans, Fira_Code, Lexend } from "@next/font/google";
import "./globals.css";
import localFont from "@next/font/local";

export const metadata = {
  title: "Gist Enough Code",
  description: "Generated by create next app",
};

const fontSans = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontMono = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

const brandFont = localFont({
  src: [
    { path: "../assets/fonts/Jogan-Mono.woff", weight: "400" },
    { path: "../assets/fonts/Jogan-Mono.woff2", weight: "400" },
  ],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${brandFont.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
