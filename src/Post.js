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
    {/* <div className='text-l font-bold mt-5 mb-2 text-center'>데이터 추가하기</div> */}
        <div className = "postbox">
          <form className="mt-3" onSubmit={handleSubmit}>
    
            <div className="flex flex-col md:flex-row mb-1">
                {/* tblSchema */}
                <label htmlFor="username" className="w-full flex-1 mx-2 text-xs font-semibold 
                text-gray-600 uppercase"> tblSchema
                <input className="w-full py-3 px-1 mt-1 
                      text-gray-800 appearance-none 
                      border-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                      required placeholder='입력해주세요' type='text' name='tblSchema' 
                      value={form.tblSchema} onChange={handleChange} />
                </label>
                {/* korSchema */}
                <label htmlFor="email" className="w-full flex-1 mx-2 text-xs font-semibold 
                      text-gray-600 uppercase">korSchema
                    <input className="w-full py-3 px-1 mt-1 
                      text-gray-800 appearance-none 
                      border-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder='입력해주세요' type='text' name='korSchema' 
                        value={form.korSchema} onChange={handleChange} />
                </label>
            </div>
    
            <div className="flex flex-col md:flex-row">
                {/* typeSchema */}
                <label htmlFor="phone" className="w-full flex-1 mx-2 text-xs font-semibold 
                      text-gray-600 uppercase">typeSchema
                    <input className="w-full py-3 px-1 mt-1 
                      text-gray-800 appearance-none 
                      border-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder='입력해주세요' type='text' name='typeSchema' 
                        value={form.typeSchema} onChange={handleChange} />
                </label>
                {/* tblSchemaComment */}
                <label htmlFor="website" className="w-full flex-1 mx-2 text-xs font-semibold 
                      text-gray-600 uppercase"> tblSchemaComment
                    <input className="w-full py-3 px-1 mt-1 
                      text-gray-800 appearance-none 
                      border-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder='입력해주세요' type='text' name='tblSchemaComment' 
                        value={form.tblSchemaComment} onChange={handleChange} />
                </label>
            </div>
    
            <div className='text-center'>
                <button className='bg-blue-400 py-2 text-center px-10 md:px-6 md:py-2 text-white 
                rounded text-xl md:text-base mt-4' type='submit'>save</button>
            </div>
    
          </form>
        </div>  
    </>
  );




}
export default Post;