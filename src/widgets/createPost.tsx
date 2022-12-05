import Button from "../components/button";
import SearchInput from "../components/input/search";
import Tab from "../components/tab";
import DropDown from "../components/dropdown/index";
import DatePicker from "../components/date-time-picker";
import Input from "../components/input/index";
import { useState } from "react";
import {
  table_headers,
  table_dropdown_pagination,
  statuses,
  table_body,
} from "../utils/consts";
export default function CreatePost() {
  const [dropdown, setDropdown] = useState(5);
  const [page, setPage] = useState(0);
  const [date, setDate] = useState(new Date().toISOString());
  console.log(date);
  return (
    <div className="pt-[19px] px-7 space-y-2">
      <h1>Post information</h1>
      <Input
        value=""
        placeholder="Title"
        onChange={(e: string) => {
          console.log(e);
        }}
      />
      <DropDown
          data={statuses}
          value={statuses[0].value}
          onChange={(e: any) => {
            console.log(e);
          }}
        />
      <DatePicker
        value={date}
        onChange={(val: any) => {
          setDate(val.target.value);
        }}
      />
      <Button
        name="Submit"
        link="/create"
        className="w-[163px] h-[36px]"
        onClick={() => {
          console.log("salom");
        }}
      />
    </div>
  );
}
