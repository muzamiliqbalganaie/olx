'use client';
import Navbar from '@/app/ui/firstpage/navbar';
import './globals.css';
import FreshRecomands from './ui/firstpage/freshrecomdations';
import SubNav from './ui/firstpage/subnav';
export default function Home() {

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <SubNav />
      <FreshRecomands />
    </div>
  );
}
