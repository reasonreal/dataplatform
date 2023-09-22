import React from "react";

const Main =(props) =>{
    const getUser = async () => {
        // GET요청
        const response = await fetch("/api/v1/table-schema?id=1", { 
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2U2JENmd2cEFjMzJMOTZEWjZvYTYwd3FOLVMxbEtaUFZIdU9OT01UaGRrIn0.eyJleHAiOjE2OTUzNzU0NzQsImlhdCI6MTY5NTM3MTg3NCwianRpIjoiODAxZGI2NWUtZmMwYi00OGUyLWFjN2ItMjM3OWNjM2I0ZDdlIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMi4xODY6ODA4MC9yZWFsbXMvZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGI1MTEwMWItYWQyMy00ODI1LThjNjctZDcyMmY0ZWYzNDI1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWluaW9fY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjUyMGVhYzkzLWFiMTAtNGUyMS05MmY0LWQzNjllZDA0NmNmOSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovLzE5Mi4xNjguMi4xOTM6OTAwMSIsImh0dHA6Ly8xOTIuMTY4LjEuOTI6MTk5OTkiLCJodHRwOi8vMTkyLjE2OC4yLjE5Mzo5MDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im1pbmlvX2NsaWVudCI6eyJyb2xlcyI6WyJhZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIG1pbmlvLWF1dGhvcml6YXRpb24iLCJzaWQiOiI1MjBlYWM5My1hYjEwLTRlMjEtOTJmNC1kMzY5ZWQwNDZjZjkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFlc29vIiwiZ2l2ZW5fbmFtZSI6IiIsImZhbWlseV9uYW1lIjoiIiwiZW1haWwiOiJkYWVzb29AZGF0YW51cmkubmV0IiwicG9saWN5IjpbImNvbnNvbGVBZG1pbiJdfQ.N28DiQrwPlddMhyUmh5OiEDcsrc6B-aCBWQgY8BteR4vHjS1gGNja2S9_60svdjJsBUKnDA4R6jUnnaSiGZNHJgkd-aY_fu4XqnOOeYd2XLlS-UjeU58Qxju8XbHW1Z9i20EdyYXj28nQJAfN7fVjQbceXZHDODqAVgW_Hs-Fx8V9IVmrHLaNp4YQhXlwmxmhq76cB2PpP8vCkI5iowgGd0tMIP39n0WBI50KSqfpcI6SPxI9tXUyMMmwEVK0Oi1EYvKLnTm2BjRX48FyjoARSzo1bT2RQ_4ghI9BJCG1ht0WKnzCId5X100n0s5ER_TIJ_i0vy0ybyM2-gtFZDlhg"            },
        });
    
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
        } else {
          const error = await response.json();
          console.log(error);
        }
    }
  
    // // delete 
    // const deleteSchema = async (id) => {
    //     const response = await fetch("/api/v1/table-schema?id=1", {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer your-token",
    //       },
    //       query: {
    //         id: id,
    //       },
    //     });
      
    //     if (response.status === 204) {
    //       console.log("Schema deleted successfully!");
    //     } else {
    //       console.log("Failed to delete schema.");
    //     }
    //   };



    //   // Post 요청 
    // const postSchema = async (schema) => {
    //   const response = await fetch("/api/v1/table-schema", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2U2JENmd2cEFjMzJMOTZEWjZvYTYwd3FOLVMxbEtaUFZIdU9OT01UaGRrIn0.eyJleHAiOjE2OTUzNzEyMTUsImlhdCI6MTY5NTM2NzYxNSwianRpIjoiNTExZjExZGQtMjk3NS00ZTU5LWI4MTItZjRjM2Q0OGNlNmZiIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMi4xODY6ODA4MC9yZWFsbXMvZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGI1MTEwMWItYWQyMy00ODI1LThjNjctZDcyMmY0ZWYzNDI1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWluaW9fY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjViMDM4YmNiLTQ5MGMtNDUyMS1iNzZiLTJkNmUzZjNkMDNmNCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovLzE5Mi4xNjguMi4xOTM6OTAwMSIsImh0dHA6Ly8xOTIuMTY4LjEuOTI6MTk5OTkiLCJodHRwOi8vMTkyLjE2OC4yLjE5Mzo5MDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im1pbmlvX2NsaWVudCI6eyJyb2xlcyI6WyJhZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIG1pbmlvLWF1dGhvcml6YXRpb24iLCJzaWQiOiI1YjAzOGJjYi00OTBjLTQ1MjEtYjc2Yi0yZDZlM2YzZDAzZjQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFlc29vIiwiZ2l2ZW5fbmFtZSI6IiIsImZhbWlseV9uYW1lIjoiIiwiZW1haWwiOiJkYWVzb29AZGF0YW51cmkubmV0IiwicG9saWN5IjpbImNvbnNvbGVBZG1pbiJdfQ.C1H3uZQ11VxSDGMfiOUdmtuC0MvA9_emgJRr2zYzcdxSw5UAMrTpyapDZtuxH9kIdoX2jdb5m0aaSPcZuN1iXjK4zaZYoCwvRKJNfwPZxuMvEsTY8gR_FCa_3dFba1FP9bfFgfgXDU3yAAAo6DMTe8PjMmLDMXkKEW92Mv62zAHsseatnFjFkOlA-YzpO4Bt36aNgbUgnhu0WULQvOm38ZY9kQXDohNkRmH375STlpZWIk6xsW23th6gfZA9nwpsWGRWdsSjXd8RCfHJUo47gK35U5kwaOsX2sKYv5v80U59WPLBYoAqncr15RMhQBetXsN80fqL5vzYqp9FjzHmGQ"
    //     },
    //     body: JSON.stringify(schema),
    //   });
  
    //   if (response.status === 201) {
    //     console.log("Schema created successfully!");
    //   } else {
    //     console.log("Failed to create schema.");
    //   }
    // };
  

    //put 요청
    // const putSchema = async (schema) => {
    //     const response = await fetch("/api/v1/table-schema", {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer your-token",
    //       },
    //       body: JSON.stringify(schema),
    //     });
    
    //     if (response.status === 200) {
    //       console.log("Schema updated successfully!");
    //     } else {
    //       console.log("Failed to update schema.");
    //     }
    // };
    

 
    // const handleCreate = () => {     //post 요청
    //   postSchema(schema);
    // };
  
    // const handleDelete = (id) => {      //delete 요청
    //     deleteSchema(id);
    //   };

    // const putSchema = (id) => {      //put 요청
    //   deleteSchema(id);
    // };
    
  
    return(
    <>
        <button onClick = {getUser}>get</button>
        {/* <button onClick = {postSchema}>Create</button> */}
        {/* <button onClick= {deleteSchema}>delete</button>
        <button onClick = {putSchema}>put</button> */}
    </>
    );
};

export default Main;
