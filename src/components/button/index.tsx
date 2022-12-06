import Link from 'next/link'    
interface ButtonsProps {
    name: string,
    link?: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] | "button",
    className: string,
    disabled ?: boolean,
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
 };
const Button = ({onClick, name, className, disabled, link}: ButtonsProps) =>{
    return(
        <>
        {link ? <>
        <Link href={link}>
        <button 
        className={"bg-primary text-[14px] text-white text-center rounded-[8px]"+ " " + className}
        onClick={onClick}
        >
            {name}
        </button>
            </Link>
            </>: <>
            <button 
        className={"bg-primary text-[14px] text-white text-center rounded-[8px]"+ " " + className}
        onClick={onClick}
        >
            {name}
        </button>
            </>}
            </>
    )
}
export default Button