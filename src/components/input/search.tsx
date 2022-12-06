import Image from "next/image";
interface SearchInputProps {
  value: string;
  className?: string;
  disabled?: boolean;
  onChange: Function;
}
const SearchInput = ({
  onChange,
  value,
  className,
  disabled,
}: SearchInputProps) => {
  return (
    <form>
      <label
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative w-[432px] ">
        <input
          type="search"
          id="search"
          value={value}
          onChange={(e)=>{onChange(e.target.value)}}
          className= {
              "block p-4  w-[432px] h-[36px] text-sm text-gray-900 bg-own_gray rounded-lg  placeholder-[#667281]  font-normal"
              + " " + className
          } 
          placeholder="Search"
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
          <Image src="/assets/svg/search.svg" className="mr-[10px]" width={15} height={15} alt="svg" />
          {/* <svg aria-hidden="true" class="w-5 h-5 text-gray-500  dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
        </div>
      </div>
    </form>
  );
};
export default SearchInput;
