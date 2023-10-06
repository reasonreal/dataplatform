import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Table from "./table";
import DataTable from "./component/dataTable";
import './css/table.css';


const Main = (props) =>{
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


    ///

    const Table = () => {
      const [data, setData] = useState([]);
        useEffect(() => {
        fetchData().then((data) => {
          setData(data);
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


    const headers = [
      {
        text: 'ID',
        value: 'id'
      },
      {
        text: 'TblSchema',
        value: 'tblSchema'
      },
      {
        text: 'KorSchema',
        value: 'korSchema'
      },
      {
        text: 'TypeSchema',
        value: 'typeSchema'
      },
      {
        text: 'TblSchemaComment',
        value: 'tblSchemaComment'
      }
    ];
    
    let key1 = Object.keys(headers);
    console.log(key1);
  
    console.log(Object.keys(headers));

    const items = [
      {
        id: '3',
        tblSchema: 'id3,type3,name3',
        korSchema: '아이디,타입,이름',
        typeSchema: 'Long, varchar,varchar',
        tblSchemaComment: '스퀀스, 데이터베이스 타입, 데이터베이스 이름'
      },
      {
        id: '4',
        tblSchema: 'id,type,name',
        korSchema: '아이디,타입,이름',
        typeSchema: 'Long, varchar,varchar',
        tblSchemaComment: '스퀀스, 데이터베이스 타입, 데이터베이스 이름'
      },
      
    ];    
    

    //
    

    const [selection, setSelection] = useState([]);
    useEffect(() => {
      console.log(selection);
    }, [selection]);

    }
 
    return(
    <>
        <button onClick = {getUser}>get</button>
        <button onClick = {registUser}>Create</button>
        <button onClick= {removeUser}>delete</button>
        <button onClick = {modifyUser}>put</button>
        <button onClick = {logout}>logout</button>
        
        <div className="App">
          <DataTable 
            // data = {data}

            headers={headers} 
            items={items} 
            selectable={true} 
            updateSelection={setSelection}
          />
        </div>
        
    </>
    );
};

export default Main;
