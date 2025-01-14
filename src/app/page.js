'use client';
import './globals.css';
import FreshRecomands from './ui/firstpage/freshrecomdations';
import SubNav from './ui/firstpage/subnav';
import AddBanner from './ui/firstpage/addpbanner';
import Navbar from './ui/firstpage/navbar';
import Footer from './ui/firstpage/footer';

export default function Home() {

  return (
    <div className=''>
      <Navbar />
      <SubNav />
      <FreshRecomands />
      <AddBanner />
      <Footer />
    </div>
  );
}
