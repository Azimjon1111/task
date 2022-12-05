import Button from "../components/button";
import SearchInput from "../components/input/search";
import Tab from "../components/tab";
import DropDown from "../components/dropdown/index";
import DatePicker from "../components/date-time-picker";
import Input from "../components/input/index";
import {useDispatch, useSelector} from 'react-redux'
import { createPost } from "../data/posts";
import { useState } from "react";
import {
  table_headers,
  table_dropdown_pagination,
  statuses,
  table_body,
} from "../utils/consts";
export default function CreatePost() {
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(5);
  const [page, setPage] = useState(0);
  const [date, setDate] = useState(new Date().toISOString());
  console.log(date);
  const Submit = () =>{
    dispatch(
      createPost({
        id: 1,
        date: date,
        status: 'published',
        title: 'React js and Next js are similar'
      })
      )
  }
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
        className="w-[163px] h-[36px]"
        onClick={() => {
          console.log("salom");
          Submit()
        }}
      />
    </div>
  );
}
