import Select from 'react-select';
interface DropDownProps {
    value: string;
    data: any;
    className?: string;
    disabled?: boolean;
    onChange: Function;
  }
  
  const DropDown = ({
    onChange,
    value,
    className,
    data,
    disabled,
  }: DropDownProps) => {
    return (
        <select
          id="Status"
          value={value}
          placeholder="Status"
          defaultValue="Status"
          onChange={(e)=>{onChange(e.target.value)}}
          className={
            "  text-sm rounded-[4px] px-3 styled-select-status h-[40px] w-[100px] outline-0"
            + " " + className
          } 
        >
              {/* <option value={null}>Status</option> */}
          {data.map((el: any)=>(
              <option value={el.value} key={el.id}>{el.value}</option>
          ))}
        </select>
    );
  };
  export default DropDown;
  