import React, {useState, Component, useRef, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Table from "./table";
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';

export function DataTable() {
  const tableRef = useRef();

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      ajax: {
        type: 'GET',
        url: '/api/v1/table-schema/list?page=1&size=10&direction=ASC&sortType=ID',
        dataType: 'json',
        headers: {
          "Content-Type": "application/json",
          "Authorization":  "Bearer " + sessionStorage.getItem("access_token"),
        }
      },
      columns: [
        { data: 'name', title: 'Name' },
        { data: 'position', title: 'Position' },
        { data: 'office', title: 'Office' },
        { data: 'extn', title: 'Extn.' },
        { data: 'startDate', title: 'Start date' },
        { data: 'salary', title: 'Salary' },
      ],
      responsive: true, // 반응형 켜기
    });
    // 언마운트 시 destroy.
    console.log('aa');
    return () => {
      table.destroy();
    };
  }, []);

  return <table ref={tableRef} style={{ width: '100%' }}></table>;
}

const Main =(props) =>{
  const navigate = useNavigate();
  
    const getUser = async () => {      // GET요청
      console.log(sessionStorage.getItem("access_token"))
        const response = await fetch("/api/v1/table-schema?id=3", { 
            method: 'GET',
            credentials: "include",
            headers: {
                'content-type': 'application/json',
                "Authorization": "Bearer " + sessionStorage.getItem("access_token")
               },
        });
    
        if (response.status === 200) {
          DataTable();
          const data = await response.json();
          console.log(data);
        } else {
          const error = await response.json();
          console.log(error);
        }
    }
  

     
    const registUser = async () => {       // Post 요청
      const schema = {
        "tblSchema": "id3,type3,name3",
        "korSchema": "아이디3,타입,이름",
        "typeSchema": "Long, varchar,varchar",
        "tblSchemaComment": "스퀀스, 데이터베이스 타입, 데이터베이스 이름"
    }
    console.log(schema);
      const response = await fetch("/api/v1/table-schema", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem("access_token")
        },
        body: JSON.stringify(schema),
      });
  
      if (response.status === 200) {
        console.log("Schema created successfully!");
      } else {
        console.log("Failed to create schema.");
      }
    };

    
    
    const removeUser = async (id) => {        // delete 
        const response = await fetch("/api/v1/table-schema?id="+id, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("access_token") 
          },
        });
      
        if (response.status === 204) {
          console.log("Schema deleted successfully!");
        } else {
          console.log("Failed to delete schema.");
        }
      };


    
    const modifyUser = async() => {      // put 요청
      const schema = {
        "id" : 3,
        "tblSchema": "id3,type3,name3",
        "korSchema": "아이디,타입,이름",
        "typeSchema": "Long, varchar,varchar",
        "tblSchemaComment": "스퀀스, 데이터베이스 타입, 데이터베이스 이름"
    }
        const response = await fetch("/api/v1/table-schema", {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization":  "Bearer " + sessionStorage.getItem("access_token"),
          },
          body: schema
        });
    
        if (response.status === 200) {
          console.log("Schema updated successfully!");
        } else {
          console.log("Failed to update schema.");
        }
    };
    


    const logout = () => {        // logout
      sessionStorage.removeItem("access_token");
      console.log("로그아웃");
      navigate("/");            
    }

    

    
    const data = [
      {
        id: 1,
        tblSchema: "id1,type1,name1",
        korSchema: "아이디,타입,이름",
        typeSchema: "Long, varchar,varchar",
        tblSchemaComment: "스퀀스1, 데이터베이스 타입1, 데이터베이스 이름",
      },
      {
        id: 2,
        tblSchema: "id2,type2,name2",
        korSchema: "아이디,타입,이름",
        typeSchema: "Long, varchar,varchar",
        tblSchemaComment: "스퀀스2, 데이터베이스 타입2, 데이터베이스 이름",
      },
    ];

  


    return(
    <>
        <button onClick = {getUser}>get</button>
        <button onClick = {registUser}>Create</button>
        <button onClick= {removeUser}>delete</button>
        <button onClick = {modifyUser}>put</button>
        <button onClick = {logout}>logout</button>
        
    </>
    );
};

export default Main;
