import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { Fira_Code } from "next/font/google";

const FiraCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Vladislav Pavlenko",
  description: "Personal portfolio Vladislav Pavlenko",
  icons: {
    icon: "images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FiraCode.className}>{children}</body>
    </html>
  );
}
