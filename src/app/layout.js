import { Roboto } from "next/font/google";
import Navbar from "@/app/ui/firstpage/navbar";
import "./globals.css";


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
    <html lang="en">
      <body
        className={roboto.variable}
      >
        <Navbar />
        {children}
      </body>
    </html >
  );
}
