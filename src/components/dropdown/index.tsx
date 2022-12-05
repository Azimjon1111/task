interface DropDownProps {
  value: number;
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
        id="Draft"
        value={value}
        placeholder="Status"
        defaultValue={"Status"}
        onChange={()=>{onChange('Hello')}}
        className={
          " border text-sm rounded-[4px]  block w-[64px] h-[36px] bg-own_gray"
          + " " + className
        } 
      >
        {data.map((el: any)=>(
            <option value={el.value} key={el.id}>{el.value}</option>
        ))}
      </select>
  );
};
export default DropDown;
