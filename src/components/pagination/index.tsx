import Image from "next/image"
interface ButtonsProps {
    page: Number,
    data_length: Number,
    dropdown: Number,
    setPage: Function;
 };
const Pagination = ({page, data_length, setPage, dropdown}: ButtonsProps) =>{
    let paginations = []
    for(let i = 0; i < Math.ceil(data_length/dropdown); i++){
        paginations.push(i+1)
    }
    // console.log(paginations)
    // let pagination_count = 
    // console.log(pagination_count)
    // console.log(data_length)
    // console.log(dropdown)
    
    const onClick = (action: string) =>{
        console.log(paginations.indexOf(page))
        if(action == "increment" && paginations.indexOf(page+1) != -1 ){
            setPage(page + 1);
        }else if(action == "decrement" && paginations.indexOf(page-1) != -1){
            setPage(page - 1);
        }
    }
    const ChangePage = (element: any) => {
        console.log(paginations.indexOf(page))
        if(paginations.indexOf(page) != -1 ){
            setPage(element);
        }
    }
    return(
        <div className="flex justify-center space-x-1">
        <button 
        className={"bg-own_gray text-[14px] w-[32px] h-[32px] flex justify-center items-center text-white font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick("decrement")}}
        >
            <Image src="/assets/svg/prev.svg" alt="Prev" width={6} height={6} />
        </button>
        {paginations.map((el)=>(
            <>
            {el === page  ? <>
            <button 
            className={"bg-primary text-[14px] w-[32px] h-[32px] flex justify-center items-center text-white font-arial text-center rounded-[8px]"}
            // onClick={()=>{onClick()}}
            > {el} </button>
            </>: <>
            <button 
            className={"text-[14px] w-[32px] h-[32px] flex justify-center items-center text-[#667281] font-arial text-center rounded-[8px]"}
            onClick={()=>{ChangePage(el)}}
            > {el} </button>
            </>}
            </>
            ))}
          {/* <button 
        className={"text-[14px] w-[32px] h-[32px] flex justify-center items-center text-[#667281] font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick()}}
        > 2 </button>
             <button 
        className={"text-[14px] w-[32px] h-[32px] flex justify-center items-center text-[#667281] font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick()}}
        > 3 </button>
             <button 
        className={"text-[14px] w-[32px] h-[32px] flex justify-center items-center text-[#667281] font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick()}}
        > 4 </button> */}
        <button 
        className={"bg-own_gray text-[14px] w-[32px] h-[32px] flex justify-center items-center text-white font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick('increment')}}
        >
            <Image src="/assets/svg/next.svg"  alt="next" width={6} height={6}  />
        </button>
        </div>
    )
}
export default Pagination