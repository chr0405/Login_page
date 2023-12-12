import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as T from './StyledComponents'
import KakaoLogo from './Img/kakaotalk_logo.png'
import { useNavigate } from "react-router-dom";

export default function CheckLogin({ isLoggedin, setIsLoggedin }) {
    /*****/ 
    const navigate = useNavigate();
    /*****/ 

  const Rest_api_key='9607a85595de4234fdbd580066c0b4b2' //REST API KEY
    const redirect_uri = 'http://localhost:3000/Login' //Redirect URI
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            console.log("인가 코드:", code);
        }
    }, []);

  const email_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  const password_check = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  const [email, setEmail] = useState('');
  const [passEmail, setPassEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);

  const onCheckEmail = (email) =>{
    setEmail(email.target.value);
    if(email_check.test(email.target.value)){
      setPassEmail('');
      setCheckEmail(true);
    }else{
      setPassEmail('올바른 이메일을 입력해 주세요.');
      setCheckEmail(false);
    }
  }


  const [password, setPassword] = useState('');
  const [passPassword, setPassPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);

  const onCheckPassword = (password) =>{
    setPassword(password.target.value);
    if(password_check.test(password.target.value)){
      setPassPassword('');
      setCheckPassword(true);
    }else{
      setPassPassword('올바른 비밀번호를 입력해 주세요.');
      setCheckPassword(false);
    }
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    setIsLoggedin(true);
    navigate('/');
}

  return (
      <T.CheckLoginDiv>
        <T.CheckLoginH3>이메일과 비밀번호를 입력해 주세요.</T.CheckLoginH3>
        <T.CheckLoginForm onSubmit={onSubmit}>

          <T.CheckLoginLabel>이메일</T.CheckLoginLabel>
          <T.CheckLoginInput value={email} onChange={onCheckEmail}></T.CheckLoginInput>
          <T.CheckLoginP>{passEmail}</T.CheckLoginP>

          <T.CheckLoginLabel>비밀번호</T.CheckLoginLabel>
          <T.CheckLoginInput type='password' value={password} onChange={onCheckPassword}></T.CheckLoginInput>
          <T.CheckLoginP>{passPassword}</T.CheckLoginP>

          <T.CheckLoginSubmit type='submit' value='확인' disabled={!(checkEmail && checkPassword)}></T.CheckLoginSubmit>
          <T.CheckLoginSpan><Link to="/JoinUs" style={{ textDecoration: "none", color: "gray" }}>회원가입</Link></T.CheckLoginSpan>
          <T.CheckLoginHr/>
          <T.CheckLoginImg src={KakaoLogo} width='40' height='40' alt='kakao' onClick={handleLogin}/>
        </T.CheckLoginForm>
      </T.CheckLoginDiv>
  )
}
