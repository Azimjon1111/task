interface InputProps {
    value: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: Function;
  }
  const Input = ({
    onChange,
    value,
    className,
    disabled,
    placeholder
  }: InputProps) => {
    return (
          <input
            type="search"
            id="search"
            value={value}
            onChange={(e)=>{onChange(e.target.value)}}
            className= {
                "block p-4  w-[356px] h-[40px] text-sm text-gray-900 bg-own_gray rounded-lg  placeholder-[#667281]  font-normal"
                + " " + className
            } 
            placeholder={placeholder}
            required
          />
    );
  };
  export default Input;
  