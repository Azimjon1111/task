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
            "  text-sm rounded-[4px] px-3 styled-select  block w-[356px] h-[40px] bg-own_gray"
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
  