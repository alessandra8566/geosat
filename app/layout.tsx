import type { Metadata } from "next";
import { Roboto_Flex, Roboto, Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

const robotoFontSemiCondensed = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  axes: ["wdth"],
});
const robotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Geosat Jingwei",
  description: "Geosat Jingwei Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${robotoFontSemiCondensed.variable} ${robotoFont.variable} ${poppinsFont.variable} bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
