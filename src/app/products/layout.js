import { Roboto } from "next/font/google";
import "../globals.css";
import Footer from "@/app/ui/firstpage/footer";
import ProductNavbar from "../ui/productspage/pnavbar";
import PriceRange from "../ui/productspage/sidenav.js/pricerange";
import CategoriesList from "../ui/productspage/sidenav.js/catagorieslist";
import AdsPostedTime from "../ui/productspage/sidenav.js/adsptime";
import LocationList from "../ui/productspage/sidenav.js/locationlist";


const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Products Page",
    description: "OLX is an online marketplace for buying and selling goods and services.",
};

export default function Layout({ children }) {
    return (
        <>
            <ProductNavbar />
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden gap-10">
                <div className="w-full flex md:w-96 md:flex-shrink-0 overflow-y-auto p-4 flex-col justify-evenly">
                    <CategoriesList />
                    <PriceRange />
                    <AdsPostedTime />
                    <LocationList />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
            <Footer />
        </>

    );
}
