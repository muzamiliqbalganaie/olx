'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import CustomDropdown from './customdropdown';


const LoginPage = () => {
    const [phone, setPhone] = useState('');
    const [newCountryCode, setnewCountryCode] = useState('+91');

    const countryCodes = [
        { code: '+91', flag: '/productspage/cflag.svg' },
        { code: '+1', flag: '/productspage/countryflag.png' },
        { code: '+44', flag: '/productspage/cflag.svg' },
        { code: '+61', flag: '/productspage/cflag.svg' },
        // Add more country codes and flags as needed
    ];
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleCountryCodeChange = (code) => {
        setnewCountryCode(code);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        await signIn('credentials', { phone: `${newCountryCode} ${phone}` });
    };


    return (
        <div className="w-full bg-white py-4  rounded-[20px]">
            <h1 className='text-[48px] font-[800] leading-[56.25px] text-color1 text-center'>Let’s Get Started</h1>
            <h2 className='font-[400] text-[24px] leading-[28.13px] text-color2 text-center mt-2'>Login to Continue</h2>
            <form onSubmit={handleSubmit} className='flex flex-col  mt-4 m justify-center items-center'>
                <label className='flex flex-col gap-2 mt-4 py-4  justify-start font-[400] text-[24px] leading-[28.13px] text-color2'>
                    Enter your phone number
                    <div className='flex flex-row item-center gap-[-1px]'>
                        <CustomDropdown
                            options={countryCodes}
                            selectedValue={newCountryCode}
                            onChange={handleCountryCodeChange}
                        />
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => handlePhoneChange(e)}
                            placeholder={`${newCountryCode} ${phone}`}
                            required
                            className='border-[0.5px] min-w-[500px] min-h-[55px] border-color3 rounded-[8px] pl-[4.5rem] p-2 text-[24px] leading-[28.13px] '
                        />
                    </div>
                </label>
                <button type='submit' className=" min-w-[500px] flex items-center  mx-4 py-2  bg-color1 text-white rounded-[8px] justify-center font-[400] text-[24px] leading-[28.13px]">
                    Continue
                </button>
            </form>
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className=" social-login flex  justify-between mx-20">
                <button onClick={() => signIn('google')} className=''>
                    <Image src="/login/google-login.svg" alt="google-login" width={156} height={44}
                        className='text-[24px] font-[400] leading-[28.13px] text-color2 p-5'>
                    </Image>
                </button>
                <button onClick={() => signIn('facebook')}>
                    <Image src="/login/facebook-login.svg" alt="google-login" width={185} height={44}
                        className='text-[24px] font-[400] leading-[28.13px] text-color2 p-5'>
                    </Image>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
