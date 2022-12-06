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
  const [title, setTitle]= useState('')
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState('')
  const [date, setDate] = useState();
  console.log(date);
  const Submit = () =>{
    dispatch(
      createPost({
        id: Math.floor(Math.random(100)*100),
        date: date,
        status: status,
        title: title
      })
      )
  }
  return (
    <div className="pt-[19px] px-7 space-y-2">
      <h1>Post information</h1>
      <Input
        value={title}
        placeholder="Title"
        onChange={(e: string) => {
          console.log(e);
          setTitle(e)
        }}
      />
      <DropDown
          data={statuses}
          value={status}
          onChange={(e: any) => {
            console.log(e);
            setStatus(e)
          }}
        />
      <DatePicker
        value={date}
        onChange={(val: any) => {
          setDate(val.target.value);
          // console.log(val.target.value);
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
