import React from'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Navbar = () =>{
    const router = useRouter();
    console.log(router.pathname)
    return(
        <>
        {router.pathname == '/create' ? <>
        <div className='w-full h-[48px] pl-[232px] bg-white z-10 fixed px-[24px] py-[15px] flex items-center space-x-[18px]'>
            <Link href={'/'} legacyBehavior>
            <a className='border w-[28px] h-[28px] flex items-center justify-center' >
            <Image alt='nav-prev' width={12} height={12}src='/assets/svg/nav-prev.svg' />
        </a>
            </Link>
            <h2 className='pl-[12px] text-[18px] font-normal'>Posts</h2>
        </div>
        </>  : <>
        <div className='w-full h-[48px] pl-[208px] bg-white z-10 fixed px-[24px] py-[15px] flex space-x-40'>
            {/* <div  className='border w-[28px] h-[28px] flex items-center justify-center' >
            <Image width={10.5} height={8.2}src='/assets/svg/nav-prev.svg' />
        </div> */}
            <h2 className='pl-[12px]  text-[18px] font-normal'>Posts</h2>
        </div>
        </>}
        </>
    )
}
export default Navbar