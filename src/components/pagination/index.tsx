import Image from "next/image"
interface ButtonsProps {
    page: Number,
    data_length: Number,
    dropdown: Number,
    setPage: Function;
 };
const Pagination = ({page, data_length, setPage, dropdown}: ButtonsProps) =>{
    const onClick = () =>{
        // setPage(page + 1);
    }
    return(
        <div className="flex justify-center space-x-1">
        <button 
        className={"bg-own_gray text-[14px] w-[32px] h-[32px] flex justify-center items-center text-white font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick()}}
        >
            <Image src="/assets/svg/prev.svg" alt="Prev" width={6} height={6} />
        </button>
        <button 
        className={"bg-primary text-[14px] w-[32px] h-[32px] flex justify-center items-center text-white font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick()}}
        > 1 </button>
          <button 
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
        > 4 </button>
        <button 
        className={"bg-own_gray text-[14px] w-[32px] h-[32px] flex justify-center items-center text-white font-arial text-center rounded-[8px]"}
        onClick={()=>{onClick()}}
        >
            <Image src="/assets/svg/next.svg"  alt="next" width={6} height={6}  />
        </button>
        </div>
    )
}
export default Pagination