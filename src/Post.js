import React, {useState} from "react";

//table data 추가 
const Post = ({ onSaveData }) => {
  const [form, setForm] = useState({
    tblSchema: '',
    korSchema: '',
    typeSchema: '',
    tblSchemaComment: '',
});

    const registUser = async (schema) => {       // Post 요청
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
            console.log(response)
            console.log("Schema created successfully!");
        } else {
            console.log("Failed to create schema.");
        }
    };


  const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
          ...form,
          [name]: value
      })
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      registUser(form);         // 데이터 추가
      setForm({
        tblSchema: '',
        korSchema: '',
        typeSchema: '',
        tblSchemaComment: '',
      })
  }


  return (
    <>
      <div className='text-xl font-bold mt-5 mb-2 text-center'>데이터 추가하기</div>
      <form className="mt-3" onSubmit={handleSubmit}>

          <div className="flex flex-col md:flex-row mb-1">
          tblSchema
              <input required placeholder='입력해주세요' type='text' name='tblSchema' 
                    value={form.tblSchema} onChange={handleChange} />
            
                korSchema
                  <input 
                      required placeholder='입력해주세요' type='text' name='korSchema' 
                      value={form.korSchema} onChange={handleChange} />
          </div>

          <div className="flex flex-col md:flex-row">
              typeSchema
                  <input
                      required placeholder='입력해주세요' type='text' name='typeSchema' 
                      value={form.typeSchema} onChange={handleChange} />
            websitblSchemaComment
                  <input
                      required placeholder='입력해주세요' type='text' name='tblSchemaComment' 
                      value={form.tblSchemaComment} onChange={handleChange} />
          </div>

          <div className='text-center'>
              <button className='bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white 
              rounded text-xl md:text-base mt-4' type='submit'>저장</button>
          </div>

      </form>
    </>  
  );  



}
export default Post;