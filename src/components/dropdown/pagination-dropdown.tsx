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
        onChange={(e)=>{onChange(e)}}
        className={
          "  text-sm rounded-[4px] styled-select-dropdown px-3  block w-[64px] h-[36px] bg-own_gray"
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
