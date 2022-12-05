import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Sidebar_data from './data'
const Sidebar = () => {
    const router = useRouter()
    return (
        <div className=" flex flex-row  ">
        <div style={true ? {transform:"translateX(0)", zIndex: "10 !important"} : {transform:"translateX(-100%)"}} className=" py-[15px] font-arial  w-[208px] bg-white z-10 fixed h-full  overflow-hidden">
            <div className="flex px-[25px] items-center  ">
                <Link href={"/"} legacyBehavior>
                    <a>
                        <Image width={78} height={18} src="/logo.png" alt='logo' />
                    </a>
                </Link>
            </div>
            <hr className='h-0.5 w-full bg-[#F5F5F5] mt-[15px]' />
            <div className='flex h-full px-3 mt-[32px]'>
                <ul className="flex flex-col w-full">
                    {
                        Sidebar_data.map((el, index)=>(
                            <Link href={el.href} key={index} passHref legacyBehavior>
                            <li className="bg-own_gray min-w-[184px] flex space-x-2 h-[40px] rounded-lg px-[18px] py-[8px] cursor-pointer">
                                <img src={el.icon} className="w-6 h-6 " />
                                    <a className='font-normal'>{el.title}</a>
                            </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Sidebar