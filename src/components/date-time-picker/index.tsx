interface DatePickerProps {
  value: any;
  className?: string;
  disabled?: boolean;
  onChange: Function;
}
const DatePicker = ({
  onChange,
  value,
  className,
  disabled,
}: DatePickerProps) => {
  return (
    <div className="flex items-center mt-2">
      <div className="datepicker relative form-floating mb-3 ">
        <div className="rounded-[8px] bg-own_gray h-[40px] w-[356px] px-3 py-2 flex items-center justify-between">
          <p className="text-sm ">
            {!value ? <>
            Time
            </>: <>
            {value?.slice(0, 10).split("-").reverse().join(".")}{" "}
            {value.slice(11, 16)}
            </>}
          </p>
          <input
            className="bg-transparent flex items-center outline-none "
            style={{ maxWidth: "17px" }}
            onChange={(e)=>{onChange(e)}}
            type="datetime-local"
          />
        </div>
        {/* <input
          value={value}
          placeholder="Time"
          onChange={() => {
            onChange();
          }}
          type="datetime-local"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        /> */}
      </div>
    </div>
  );
};
export default DatePicker;
