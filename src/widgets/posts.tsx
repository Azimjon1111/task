import Button from "../components/button";
import SearchInput from "../components/input/search";
import Tab from "../components/tab";
import DropDown from "../components/dropdown";
import DatePicker from "../components/date-time-picker";
import { useState } from "react";
import { table_headers, table_dropdown_pagination, statuses, table_body} from '../utils/consts'
import Table from '../components/table'
import Pagination from "../components/pagination";
export default function Posts() {
  const [dropdown, setDropdown]= useState(5)
  const [page, setPage] = useState(0)
  const [date, setDate] = useState(new Date().toISOString());
  console.log(date);

  return (
    <div className="pt-4 pb-6">
      <div className="flex justify-between px-6">
      <SearchInput
        value="salom"
        onChange={(e: string) => {
          console.log(e)
        }}
      />
      <Button
        name="Create Post"
        className="w-[163px] h-[36px]"
        onClick={() => {
          console.log("salom");
        }}
      />
      </div>
     <div className="px-6 mt-3 space-x-3">
      <Tab
        isActive={true}
        name="All statuses"
        length={12}
        className="min-w-[163px] min-h-[36px]"
        onClick={() => {
          console.log("salom");
        }}
      />
      <Tab
        isActive={false}
        name="Draft"
        length={12}
        className="min-w-[163px] min-h-[36px]"
        onClick={() => {
          console.log("salom");
        }}
      />
      <Tab
        isActive={false}
        name="Published"
        length={12}
        className="min-w-[163px] min-h-[36px]"
        onClick={() => {
          console.log("salom");
        }}
      />
     </div>
     <Table head={table_headers} body={table_body} />
     <div className="flex justify-between px-[24px] pt-[32.5px] items-center">
      <DropDown
        data={table_dropdown_pagination}
        value={table_dropdown_pagination[0].value}
        onChange={(e: any) => {
          console.log(e);
        }}
      />
      <Pagination data_length={table_body.length} page={page} setPage={(e: number)=>{setPage(e)}} dropdown={dropdown} />
     </div>
      {/* <DatePicker value={date} onChange={(val: any)=>{setDate(val.target.value)}} /> */}
    </div>
  );
}
