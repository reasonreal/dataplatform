import "./App.css";
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  let sessionStorage = window.sessionStorage;
  let userId = document.querySelector('#userId');
	let passwordForm = document.querySelector('#userPW');

	

	const [inputs, setInputs] = useState({
   		userId: '',
		userPW: '',
    	});


  const onChange = (e) => {//input에 name을 가진 요소의 value에 이벤트를 걸었다
    const { name, value } = e.target   // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
    const nextInputs = { ...inputs,  [name]: value,}//스프레드 문법으로 기존의 객체를 복사한다.
    setInputs(nextInputs);       //만든 변수를 seInput으로 변경해준다.
  }


    // function CheckPass(str){ //비밀번호 정규식
    //     let reg1 =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
    //     return(reg1.test(str));
    // };

	
	function letsJoin() { //로그인 유효성 검사
        if(inputs.userId===""){
            alert("아이디를 입력해주세요!");
            userId.focus();
            return;
        }else if(inputs.userPW===""){
            alert("비밀번호를 입력해주세요!");
            passwordForm.focus();
            return;
        }

        else{
          let URL = "/api/v1/keycloak/token"
            fetch(URL, { //원하는 주소 입력
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body : JSON.stringify({
                    username : inputs.userId,
                    password : inputs.userPW,
                })
            }).then(res => res.json())
                .then(resonse => {
                    if(resonse.status===200){
                      sessionStorage.setItem("access_token" , resonse.data.access_token)
                      sessionStorage.setItem("refresh_token" , resonse.data.refresh_token)
                      /** 화면에서 다른화면 넘어가서
                       *  CRUD 만들어논 API 호출
                       *  버튼 4개 Create, Get, Delete , Put
                       *  API호출 방법이랑 토큰 사용해서 API만 날리면 어느정도
                       * **/
                      navigate("/main");
                      console.log(resonse.data);
                    }else{
                      alert("다시 시도해주세요");
                    }
               });
          }
	  }
    return (
	<div className="userJoinOuter">
		<div className="form-box login-register-form-element" id="userJoinInner">
			<h2 className="form-box-title">Login</h2>
			<form className="form" id="registerFrm" name="register-page" >
				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="text" id="userId" name="userId" onChange={onChange}  placeholder="아이디" />
							</div>
					</div>
				</div>

			
				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="password" id="userPW" name="userPW" onChange={onChange} placeholder="비밀번호"/>
						</div>
					</div>
				</div>

				{/* <div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="password" id="re_password" name="re_password" onChange={onChange} placeholder="비밀번호 확인"/>
						</div>
					</div>
				</div> */}

				<div className="form-row">
					<div className="form-item">
						<input type="button" className="button medium primary"  onClick={letsJoin} id="joinBtn" value="로그인"/>
					</div>
				</div>

        <div>
                sessionStorage에 저장된 token은 
            </div>
            <div>
                { JSON.stringify(sessionStorage) }
            </div>
          
			</form>
		</div>
	</div>

  );
}