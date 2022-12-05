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
        id="Draft"
        value={value}
        placeholder="Status"
        defaultValue={"Status"}
        onChange={()=>{onChange('Hello')}}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-[356px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
