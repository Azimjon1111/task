import Button from "../components/button";
import SearchInput from "../components/input/search";
import Tab from "../components/tab";
import DropDown from "../components/dropdown/pagination-dropdown";
import DatePicker from "../components/date-time-picker";
import {useDispatch, useSelector} from 'react-redux'
import { getPosts, selectPosts } from "../data/posts";
import { useState, useEffect } from "react";
import {
  table_headers,
  table_dropdown_pagination,
  statuses,
} from "../utils/consts";
import Table from "../components/table";
import Pagination from "../components/pagination";
export default function Posts() {
  const dispatch = useDispatch()
  const postStatus = useSelector(state => state.posts.status)
  const allPosts = useSelector(state => state.posts.data)
  const render_posts = useSelector(state => state.posts.render_data)
  const count_current_posts = useSelector(state => state.posts.count)
  const [searchValue, setSearchValue] = useState('')
  const [dropdown, setDropdown] = useState(5);
  const [currentStatus, setCurrentStatus] = useState(null)
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(new Date().toISOString());
  useEffect(()=>{
    if(postStatus == 'idle'){
      let query = {
        page: page,
        search: searchValue,
        dropdown: dropdown,
        currentStatus: currentStatus
      }
      dispatch(getPosts(query))
    }
  },[postStatus])
  useEffect(()=>{
    let query = {
      page: page,
      search: searchValue,
      dropdown: dropdown,
      currentStatus: currentStatus
    }
      dispatch(getPosts(query))
  },[page, searchValue, currentStatus, dropdown])
  // const Table_body = () =>{
  //   if(!currentStatus){
  //     return {
  //       count: allPosts.length,
  //       data: allPosts.slice(dropdown*(page-1), page*dropdown)
  //     }
  //   }else{
  //     return {
  //      count: allPosts.filter((item)=> item.status == currentStatus).length ,
  //      data: allPosts.filter((item)=> item.status == currentStatus).slice(dropdown*(page-1), page*dropdown)
  //     }
  //   }
  // }
  return (
    <>
    <div>
      <div className="flex justify-between px-6">
        <SearchInput
          value={searchValue}
          onChange={(e: string) => {
            console.log(e);
            setSearchValue(e)
          }}
        />
        <Button
          name="Create Post"
          link="/create"
          className="w-[163px] h-[36px]"
          onClick={() => {
            console.log("salom");
          }}
        />
      </div>
      <div className="px-6 mt-3 space-x-3 flex ">
        <Tab
          isActive={!currentStatus}
          name="All statuses"
          length={allPosts.length}
          className="min-w-[163px] min-h-[36px]"
          onClick={() => {
            console.log("salom");
            setCurrentStatus(null)
            setPage(1)
          }}
        />
        {
          statuses.map((el)=>(
            <Tab
            isActive={currentStatus == el.value}
            name={el.value}
            length={allPosts.filter((item)=> item.status === el.value).length}
            className="min-w-[163px] min-h-[36px]"
            onClick={() => {
              console.log("salom");
              setCurrentStatus(el.value)
              setPage(1)
            }}
            />
            ))
          }
        {/* <Tab
          isActive={false}
          name="Published"
          length={12}
          className="min-w-[163px] min-h-[36px]"
          onClick={() => {
            console.log("salom");
          }}
        /> */}
      </div>
      <Table head={table_headers} body={render_posts} />
    </div>
      <div className="flex justify-between px-[24px] pt-[32.5px] items-center">
        <DropDown
          data={table_dropdown_pagination}
          value={dropdown}
          onChange={(e: any) => {
            setDropdown(e.target.value);
            setPage(1)
          }}
        />
        <Pagination
          data_length={count_current_posts}
          page={page}
          setPage={(e: number) => {
            setPage(e);
          }}
          dropdown={dropdown}
        />
      </div>
      {/* <DatePicker value={date} onChange={(val: any)=>{setDate(val.target.value)}} /> */}
    </>

  );
}
