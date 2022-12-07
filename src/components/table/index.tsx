import React from "react";
import DropDown from '../dropdown/update-dropdown'
import {RangeTwoDates} from '../../utils/functions'
import {statuses} from '../../utils/consts'
import {updatePost } from '../../data/posts'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
const Table = ({head, body}: any) => {
//   var head = ["Company", "Country", "Contact"];
const dispatch = useDispatch<AppDispatch>()
  return (
      <table className="w-full mx-auto bg-white rounded-xl">
        <thead>
            <tr>
          {head.map((el: any, i: number) => (
              <td key={el.id} className="border-b-[1px] text-[#667281] text-[13px] text-left px-8 py-4">{el.value}</td>
              )
            )}
            </tr>
        </thead>
        <tbody>
        {body.map((el: any, index: number) => (
            <tr key={el.id}>
            <td className="border-b-[1px] text-[14px] px-8 py-4 h-[80px]">{el.id}</td>
            <td className="border-b-[1px] text-[14px] px-8 py-4 h-[80px]">{el.title}</td>
            <td className="border-b-[1px] text-[14px] px-8 py-4 h-[80px]">{RangeTwoDates(new Date(el.date), new Date())}</td>
            <td className="border-b-[1px] text-[14px] px-8 py-4 h-[80px]">
              <DropDown
              data={statuses}
              value={el.status}
              onChange={(element: any) => {
                console.log(element);
                dispatch(updatePost({status: element, index})) 
              }}
              />
              {/* {el.status} */}
            </td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default Table;