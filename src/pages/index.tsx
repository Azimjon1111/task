import Button from "../components/button";
import SearchInput from "../components/input/search";
import Tab from "../components/tab";
import DropDown from "../components/dropdown";
import DatePicker from "../components/date-time-picker";
import Layout from "../layout/index";
import { useState } from "react";
export default function Home() {
  const Data = [
    { value: "Published", id: 1 },
    { value: "Draft", id: 2 },
  ];
  const [date, setDate] = useState(new Date().toISOString());
  console.log(date);

  return (
    <Layout>
      <h1 className="text-center text-primary text-3xl font-bold">Done</h1>
      <Button
        name="Create Post"
        className="w-[163px] h-[36px]"
        onClick={() => {
          console.log("salom");
        }}
      />
      <SearchInput
        value="salom"
        onChange={(e: string) => {
          console.log(e);
        }}
      />
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
      <DropDown
        data={Data}
        value={Data[0].value}
        onChange={(e: any) => {
          console.log(e);
        }}
      />
      <DatePicker value={date} onChange={(val: any)=>{setDate(val.target.value)}} />
    </Layout>
  );
}
