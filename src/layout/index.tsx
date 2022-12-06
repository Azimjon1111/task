import React, { useEffect, useState } from 'react'
import  Sidebar from './sidebar'
import  Navbar from './navbar'

const Layout = ({ children} : any) => {
  const [sideBar,setSideBar] = useState(true)
  const [responsive,setResponsive] = useState(false)

//   window.addEventListener("resize", ()=> {
//     console.log(window.innerWidth);
//     if(window.innerWidth <= 992){
//       setSideBar(false)
//       setResponsive(true)
//     }
//     else{
//       setSideBar(true)
//       setResponsive(false)

//     }
//   })

  useEffect(()=> {
    if(window.innerWidth <= 992){
      setSideBar(false) 
      setResponsive(true)
    }
    else{
      setSideBar(true)
      setResponsive(false)

    }
  },[])

  return (
    <>
      <Navbar/>
      <Sidebar />
      <div
        style={{ paddingLeft: "228px", paddingRight: "20px", paddingTop: "64px", paddingBottom: "16px" }} className="all-content bg-[#F5F5F5]  min-h-screen"
      >
        {/* {
        sideBar && responsive ?  <div onClick={()=> setSideBar(false)} className='overlay w-full h-full fixed left-0 top-0 bg-black z-10 opacity-50'></div> :  null
        } */}
        <div className='bg-white rounded-lg min-h-[613px] pt-4 pb-6 flex flex-col justify-between'>
        {children}
        </div>
      </div>
    </>
  )
}

export default Layout