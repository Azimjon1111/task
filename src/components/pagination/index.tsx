interface ButtonsProps {
    name: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] | "button",
    className: string,
    disabled ?: boolean,
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
 };
const Pagination = ({onClick, name, className, disabled}: ButtonsProps) =>{
    return(
        <button 
        className={"bg-primary text-[14px] text-white font-arial text-center rounded-[8px]"+ " " + className}
        onClick={onClick}
        >
            {name}
        </button>
    )
}
export default Pagination