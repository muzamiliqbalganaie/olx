
import MarketPlaceLogo from '../../../public/Logo.svg';
import LoginForm from '../ui/login-form';
import Image from 'next/image';
import '../globals.css';

export const metadata = {
    title: "Login Page",
    description: "OLX isan online marketplace for buying and selling goods and services.",
};

const LoginPage = () => {
    return (
        <main className=' relative background-container flex item-center justify-center md:h-screen '>
            <div className=" absolute left-0 w-32 m-5 text-white  justify-start md:w-40">
                <Image src={MarketPlaceLogo} alt="Marketplace logo" width={105.49} height={59.3} />
            </div>
            <div className="  m-auto flex  w-[700px]    rounded-[20px] shadow-bs1">
                <LoginForm />
            </div>
        </main>
    );
}

export default LoginPage;