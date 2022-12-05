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
    <div className="flex items-center justify-center">
      <div className="datepicker relative form-floating mb-3 xl:w-96">
        <div className="border-2 rounded-[8px] px-3 py-2 flex items-center justify-between">
          <p>
            {value?.slice(0, 10).split("-").reverse().join(".")}{" "}
            {value.slice(11, 16)}
          </p>
          <input
            className="bg-transparent flex items-center outline-none "
            style={{ maxWidth: "17px" }}
            onChange={()=>{onChange()}}
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
