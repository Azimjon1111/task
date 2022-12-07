import Button from "../components/button";
import SearchInput from "../components/input/search";
import Tab from "../components/tab";
import DropDown from "../components/dropdown/index";
import DatePicker from "../components/date-time-picker";
import Input from "../components/input/index";
import {useDispatch, useSelector} from 'react-redux'
import { RootState, AppDispatch } from "../store";
import { createPost } from "../data/posts";
import { useState } from "react";
import {
  table_headers,
  table_dropdown_pagination,
  statuses,
  table_body,
} from "../utils/consts";
import {IdGenerator} from '../utils/functions'
export default function CreatePost() {
  const dispatch = useDispatch<AppDispatch>()
  const [title, setTitle]= useState('')
  const [status, setStatus] = useState(statuses[0].value)
  const [date, setDate] = useState(null);
  console.log(date);
  const Submit = () =>{
    if(date && status && title){
      dispatch(
        createPost({
          id: IdGenerator(),
          date: date,
          status: status,
          title: title
        })
        )
        alert('Successfuly created !!')
        setTitle('')
        setStatus(statuses[0].value)
        setDate(null)
      }else{
        alert('Title/Time/Status are required')
      }
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
