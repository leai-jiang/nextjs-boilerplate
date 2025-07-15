import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "耒石网络",
  description: "聚力精进技术, 同心服务客户",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white min-w-[1024px]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
