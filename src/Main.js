import React from "react";

const Main =(props) =>{
    // const getUser = async () => {      //GET요청
    //     const response = await fetch("/api/v1/table-schema?id=1", { 
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //             "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2U2JENmd2cEFjMzJMOTZEWjZvYTYwd3FOLVMxbEtaUFZIdU9OT01UaGRrIn0.eyJleHAiOjE2OTU2MjQzMTIsImlhdCI6MTY5NTYyMDcxMiwianRpIjoiNmJiNzdkZTMtYTY2MS00MTRhLWI3NjgtMDYzOWE0YThhNDMyIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMi4xODY6ODA4MC9yZWFsbXMvZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGI1MTEwMWItYWQyMy00ODI1LThjNjctZDcyMmY0ZWYzNDI1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWluaW9fY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImRhMzZkM2VmLWM4N2UtNDNkYy1iYTI1LTk5NTEzOGYyODU0MiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovLzE5Mi4xNjguMi4xOTM6OTAwMSIsImh0dHA6Ly8xOTIuMTY4LjEuOTI6MTk5OTkiLCJodHRwOi8vMTkyLjE2OC4yLjE5Mzo5MDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im1pbmlvX2NsaWVudCI6eyJyb2xlcyI6WyJhZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIG1pbmlvLWF1dGhvcml6YXRpb24iLCJzaWQiOiJkYTM2ZDNlZi1jODdlLTQzZGMtYmEyNS05OTUxMzhmMjg1NDIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFlc29vIiwiZ2l2ZW5fbmFtZSI6IiIsImZhbWlseV9uYW1lIjoiIiwiZW1haWwiOiJkYWVzb29AZGF0YW51cmkubmV0IiwicG9saWN5IjpbImNvbnNvbGVBZG1pbiJdfQ.XdT5hIZricgtzupIZNPpa9wUjdtwBWZg8k75lVLRlzF-ARtiT8tByETu3-_fWswbedM0yVSMqjhbSC4c6tIXB3SSr2ElQXQ90MXqQ0sce1vAZewk6O_60a9AONi2teJgYWTWEvySguqhDoaRxGlFloJ4lWPJWpb2xmCMadKC-Oam3Rv5AW6OvWGHl_dKXljTXBQcnfOI2JZPGR9TNCR-qtHiBqHYHubRVVpSNUHWTJm8pNZsFQ9Dfg-iIZIn4yQ_9__X4A3Lsi82mzpRwDiX-Hcs4IH3jhl7IIfLRYKv-7OPxo0D-cBwot-OnJFv2yJ9Sp2Cqndqi_7HGhIogcVR5Q"           
    //            },
    //     });
    
    //     if (response.status === 200) {
    //       const data = await response.json();
    //       console.log(data);
    //     } else {
    //       const error = await response.json();
    //       console.log(error);
    //     }
    // }
  

     
    const registUser = async (schema) => {       //Post 요청
      const response = await fetch("/api/v1/table-schema", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2U2JENmd2cEFjMzJMOTZEWjZvYTYwd3FOLVMxbEtaUFZIdU9OT01UaGRrIn0.eyJleHAiOjE2OTU2MjcyMzksImlhdCI6MTY5NTYyMzYzOSwianRpIjoiNzBlNTVkNWItYTg2NS00MTcxLWFmMTUtZjQ1YTBkYTlmYWZiIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMi4xODY6ODA4MC9yZWFsbXMvZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGI1MTEwMWItYWQyMy00ODI1LThjNjctZDcyMmY0ZWYzNDI1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWluaW9fY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImNhYjk1M2Q0LTQzNTAtNDc5MS1hOTU4LWY5MzFkOGUxN2M5NyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovLzE5Mi4xNjguMi4xOTM6OTAwMSIsImh0dHA6Ly8xOTIuMTY4LjEuOTI6MTk5OTkiLCJodHRwOi8vMTkyLjE2OC4yLjE5Mzo5MDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im1pbmlvX2NsaWVudCI6eyJyb2xlcyI6WyJhZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIG1pbmlvLWF1dGhvcml6YXRpb24iLCJzaWQiOiJjYWI5NTNkNC00MzUwLTQ3OTEtYTk1OC1mOTMxZDhlMTdjOTciLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFlc29vIiwiZ2l2ZW5fbmFtZSI6IiIsImZhbWlseV9uYW1lIjoiIiwiZW1haWwiOiJkYWVzb29AZGF0YW51cmkubmV0IiwicG9saWN5IjpbImNvbnNvbGVBZG1pbiJdfQ.HV0uXlDB35qwM4V8pQygXb4PqeomFrYib49mzB7n3XhzMpyEyn58E-LLx9ZbauOvK0qrikHOREXxHXiDOBkZ3zxycao-lMMkZfeO4JMlIVK9OT3tXCP5c8O4YIKwn1HUJLTxtd8RE7_xkBUGOZf6w3QsjFyWVD5t9Jf8tf9ZdJjc6h3Ml0BO16EjAMB9wc5hozXLzhJi6IW3mW3nL6SGuAL_vkkvDUYjUVW8b4Y4CRPHEJoTfwr5vozO8hiKYQQAdvz2p9ltkrhQk_UBsRuxuxJKTbwD6TnX8b4p0Djh4Yv6Fhbb2C2Mg0Zs9CudLG2MiqFr8YgBY0U_QMFb2ucHRg"
        },
        body: schema,
      });
  
      if (response.status === 201) {
        console.log("Schema created successfully!");
      } else {
        console.log("Failed to create schema.");
      }
    };

    
    
    // const removeUser = async (id) => {        // delete 
    //     const response = await fetch("/api/v1/table-schema?id=1", {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2U2JENmd2cEFjMzJMOTZEWjZvYTYwd3FOLVMxbEtaUFZIdU9OT01UaGRrIn0.eyJleHAiOjE2OTU2MjMwMjEsImlhdCI6MTY5NTYxOTQyMSwianRpIjoiYTdhNGI0NzQtZDg0Zi00YWRlLWJhNzMtYWI2YjNkODczZGI1IiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMi4xODY6ODA4MC9yZWFsbXMvZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGI1MTEwMWItYWQyMy00ODI1LThjNjctZDcyMmY0ZWYzNDI1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWluaW9fY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjRjMWE0NDYyLTRlMDQtNGY4Mi1hMjgyLTA2NGZkMTZkN2ZkMiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovLzE5Mi4xNjguMi4xOTM6OTAwMSIsImh0dHA6Ly8xOTIuMTY4LjEuOTI6MTk5OTkiLCJodHRwOi8vMTkyLjE2OC4yLjE5Mzo5MDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtZGF0YXBsYXRmb3JtX3NlcnZpY2UiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im1pbmlvX2NsaWVudCI6eyJyb2xlcyI6WyJhZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIG1pbmlvLWF1dGhvcml6YXRpb24iLCJzaWQiOiI0YzFhNDQ2Mi00ZTA0LTRmODItYTI4Mi0wNjRmZDE2ZDdmZDIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFlc29vIiwiZ2l2ZW5fbmFtZSI6IiIsImZhbWlseV9uYW1lIjoiIiwiZW1haWwiOiJkYWVzb29AZGF0YW51cmkubmV0IiwicG9saWN5IjpbImNvbnNvbGVBZG1pbiJdfQ.dqNeffxDEz7i-jJezEryj6Y6Nf1gzOV0OPDT2Kec_LSWg5lFKsM8zaMOHpXZ8qeplQnl18r5TSiy55bnBLmxeUoFOj84ekdKrN2y4WeGgbmzqCTyx9BYtsV7GVcD3fxruAB7dXaTZsnbAtdhWJr4h3xB4y2Qpk-d5iyFIzhNVUOK_cBPLaKlKZrnVw_EmFsS58wo4mBychGrq0qwz4h7vtaaL5DDdZOVmmnbYy9aYz82yE6quQ_AmURuKh8HPQgH5cgmG2CzUC09MY3h_624ccPiMQu5RjkxVtG6qdhP5BxPqqm_W4GVNW9t_T7i9XKPuT5JdqctcT3Gu55p6HUCyw",
    //       },
    //       query: {
    //         id: 1,
    //       },
    //     });
      
    //     if (response.status === 204) {
    //       console.log("Schema deleted successfully!");
    //     } else {
    //       console.log("Failed to delete schema.");
    //     }
    //   };


    
    // const modifyUser = async (schema) => {      //put 요청
    //     const response = await fetch("/api/v1/table-schema", {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": " ",
    //       },
    //       body: JSON.stringify(schema),
    //     });
    
    //     if (response.status === 200) {
    //       console.log("Schema updated successfully!");
    //     } else {
    //       console.log("Failed to update schema.");
    //     }
    // };
    

       
    return(
    <>
        {/* <button onClick = {getUser}>get</button> */}
        <button onClick = {registUser}>Create</button>
        {/* <button onClick= {removeUser}>delete</button> */}
        {/* <button onClick = {modifyUser}>put</button> */}
    </>
    );
};

export default Main;
