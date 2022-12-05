import React from "react";
const Table = ({head, body}: any) => {
//   var head = ["Company", "Country", "Contact"];
  return (
      <table className="w-full mx-auto bg-white rounded-xl">
        <thead>
            <tr>
          {head.map((el: any, i: number) => (
              <td key={el.id} className="border-b-[1px] text-[#667281] text-left px-8 py-4">{el.value}</td>
              )
            )}
            </tr>
        </thead>
        <tbody>
        {body.map((el: any, i: number) => (
            <tr key={el.id}>
            <td className="border-b-[1px] px-8 py-4 h-[80px]">{el.id}</td>
            <td className="border-b-[1px] px-8 py-4 h-[80px]">{el.title}</td>
            <td className="border-b-[1px] px-8 py-4 h-[80px]">{el.time}</td>
            <td className="border-b-[1px] px-8 py-4 h-[80px]">{el.status}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default Table;