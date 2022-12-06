interface ButtonsProps {
    name: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] | "button",
    className: string,
    disabled ?: boolean,
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    isActive: boolean,
    length: number,
 };
const Tab = ({onClick, name, className, disabled, length, isActive}: ButtonsProps) =>{
    return(
        <button 
        className={` ${isActive ? 'bg-primary text-white' : 'bg-own_gray text-black'}  text-[14px] flex items-center justify-between p-2 text-center rounded-[8px]`+ " " + className}
        onClick={onClick}
        >
             <span>
            {name}
            </span>
            <span className={` ${isActive ? 'bg-light_blue': 'bg-gray_light'}  text-[12px] py-[4px] px-[8px] text-white rounded-[46px] ml-[22px]`}>
                {length}
            </span>
        </button>
    )
}
export default Tab