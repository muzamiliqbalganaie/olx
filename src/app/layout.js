import { Roboto } from "next/font/google";
import Navbar from "@/app/ui/firstpage/navbar";
import "./globals.css";
import Footer from "./ui/firstpage/footer";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Landing Page",
  description: "OLX is an online marketplace for buying and selling goods and services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body

        className={roboto.variable}
      >

        {children}

      </body>
    </html >
  );
}
