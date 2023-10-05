import React, { useState, useEffect, useRef } from "react";


const Table = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {      
      setTableData(data);
    });
  }, []);


  const fetchData = async () => {
    const response = await fetch(
      "/api/v1/table-schema/list?page=1&size=10&direction=ASC&sortType=ID", 
      {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":  "Bearer " + sessionStorage.getItem("access_token"),
      }
      });
  
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("API 호출 실패");
    }
  };

  

  return (
    <table>
      {/* <thead>
        <tr>
          {data.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {row.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody> */}
    </table>

  
  );
};



export default Table;






// const list = [
//   {
//     "id": 3,
//     "tblSchema": "id2,type2,name2",
//     "korSchema": "아이디,타입,이름",
//     "typeSchema": "Long, varchar,varchar",
//     "tblSchemaComment": "스퀀스2, 데이터베이스 타입2, 데이터베이스 이름"
//   }, 
//   {
//     "id": 4,
//     "tblSchema": "id,type,name",
//     "korSchema": "아이디,타입,이름",
//     "typeSchema": "Long, varchar,varchar",
//     "tblSchemaComment": "스퀀스, 데이터베이스 타입, 데이터베이스 이름"
//   },
//   {
//     "id": 5,
//     "tblSchema": "id,type,name",
//     "korSchema": "아이디,타입,이름",
//     "typeSchema": "Long, varchar,varchar",
//     "tblSchemaComment": "스퀀스, 데이터베이스 타입, 데이터베이스 이름"
//   },
//   {
//     "id": 6,
//     "tblSchema": "id,type,name",
//     "korSchema": "아이디,타입,이름",
//     "typeSchema": "Long, varchar,varchar",
//     "tblSchemaComment": "스퀀스, 데이터베이스 타입, 데이터베이스 이름"
//   },

// ]

// export function getList() {
//   return list;
// }
