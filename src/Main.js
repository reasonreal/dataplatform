import './css/table.css';
import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import DataTable from "./component/dataTable";
import Post from './Post';
import "tailwindcss/tailwind.css";


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
            "/api/v1/table-schema/list?page=1&size=5&direction=DESC&sortType=ID",
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


    //
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const handleClick = () => {
      setIsBoxVisible(!isBoxVisible);
    };


    return (
        <>
            <div className="crud">
                <div className='text-l font-bold mt-5 mb-2 text-center'> Edit </div>

                <button onClick={getUser} className="rounded-xl bg-red-500 px-3 py-0.5 text-base font-s text-white 
                transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white 
                dark:hover:bg-red-300 dark:active:bg-red-200">
                get</button>
        
                <button onClick={registUser} className="rounded-xl bg-yellow-500 px-3 py-0.5 text-base font-s text-white 
                transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white 
                dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
                Create</button>
        
                <button onClick={removeUser} className="rounded-xl bg-green-500 px-3 py-0.5 text-base font-s text-white 
                transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white 
                dark:hover:bg-green-300 dark:active:bg-green-200"> 
                delete</button>
        
                <button onClick={modifyUser} className="rounded-xl bg-blue-500 px-3 py-0.5 text-base font-s text-white 
                transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white 
                dark:hover:bg-blue-300 dark:active:bg-blue-200">
                put</button>
            
                <button onClick={logout} className="rounded-xl bg-purple-500 px-3 py-0.5 text-base font-s text-white 
                transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white 
                dark:hover:bg-purple-300 dark:active:bg-purple-200">
                logout</button>

            </div>
            
            {/* 테이블 */}
            <div className="App">
                {loadingTable?"Loading...":<DataTable
                    headers={data.headers}
                    items={data.items}
                    selectable={true}
                    updateSelection={setSelection}
                
                />}
            </div>
            
            {/* 데이터 추가 버튼 */}
            <div>
              <button onClick={handleClick}  className="rounded-xl bg-navy-700 px-5 py-3 text-base font-medium text-white 
              transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white 
              dark:hover:bg-white/20 dark:active:bg-white/30">
                데이터 추가하기</button>
              {isBoxVisible && <Post />}
            </div>

                 

        </>
    );
};

export default Main;
