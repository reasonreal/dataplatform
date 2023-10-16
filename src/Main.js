import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import DataTable from "./component/dataTable";
import './css/table.css';
import Post from './Post';


const Main = (props) => {
    const navigate = useNavigate();
    const [loadingTable, setLoadingTable] = useState(true);

        // 지정 id get
    // const getUser = async () => {      // GET요청
    //     // console.log(sessionStorage.getItem("access_token"))
    //     const response = await fetch("/api/v1/table-schema?id=3", {
    //         method: 'GET',
    //         credentials: "include",
    //         headers: {
    //             'content-type': 'application/json',
    //             "Authorization": "Bearer " + sessionStorage.getItem("access_token")
    //         },
    //     });

    //     if (response.status === 200) {
    //         const data = await response.json();
    //         console.log(data);
    //     } else {
    //         const error = await response.json();
    //         console.log(error);
    //     }
    // }

    
        // checkbox 누르면 해당 row data get
    const getUser = async (id) => {      // GET요청
        const response = await fetch("/api/v1/table-schema?id="+id, {
            method: 'GET',
            credentials: "include",
            headers: {
                'content-type': 'application/json',
                "Authorization": "Bearer " + sessionStorage.getItem("access_token")
            },
        });

        if (response.status === 200) {
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
        const response = await fetch("/api/v1/table-schema?id=" + id, {
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


    const modifyUser = async () => {      // put 요청
        const schema = {
            "id": 3,
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
                "Authorization": "Bearer " + sessionStorage.getItem("access_token"),
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
 
    // const headers = [
    //     {
    //         text: 'ID',
    //         value: 'id'
    //     },
    //     {
    //         text: 'TblSchema',
    //         value: 'tblSchema'
    //     },
    // ];

    // const items = [
    //     {
    //         id: '3',
    //         tblSchema: 'id3,type3,name3',
    //     },
    // ];


    const [data, setData] = useState({});   //table
    useEffect(() => {
        fetchData().then((data) => {
            setData(data);
            // console.log(data)        //table data
            setLoadingTable(false);
        });
    }, []);


    const fetchData = async () => {
        const response = await fetch(
            "/api/v1/table-schema/list?page=1&size=5&direction=ASC&sortType=ID",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + sessionStorage.getItem("access_token"),
                }
            });

        if (response.status === 200) {
            const {data} = await response.json();
            return {
                headers: Object.keys(data.content[0]),
                items: data.content,
            };
        } else {
            throw new Error("API 호출 실패");
        }
    };



    const [selection, setSelection] = useState([]);
      useEffect(() => {
        console.log('selection : {}',selection);
        // console.log(getUser(selection));        // check한 값 get 
        // console.log(data.items);                // items 전체
        // console.log('data.items : ',data.items[selection]);      //??

        // if(selection.length != 0){
        //     console.log(getUser(data.items[selection.length-1].id));    // (check갯수)번째 값 
        // }
    }, [selection]);                        
      


    /** 먼저 체크박스 셀렉션 말고
     *  get을누를때 체크박스의 체크 된 부분만 리스트로 넘기고
     *  함수를 하나더 만들어서 거기서 리스트갯수 만큼 for문을 돌려서
     *  조회하는 API 구현
     */  


    

    return (
        <>
            {/* <button onClick={handleGet}>getdata</button>     */}

            <button onClick={getUser}>get</button>
            <button onClick={registUser}>Create</button>
            <button onClick={removeUser}>delete</button>
            <button onClick={logout}>logout</button>
            <button onClick={modifyUser}>put</button>
            
            <div className="App">
                {loadingTable?"Loading...":<DataTable
                    headers={data.headers}
                    items={data.items}
                    selectable={true}
                    updateSelection={setSelection}
                
                />}
            </div>

            <Post>

            </Post>

        </>
    );
};

export default Main;