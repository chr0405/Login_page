import React, { useState } from 'react'
import * as T from './StyledComponents'
import { useNavigate } from "react-router-dom";

export default function JoinUs({ isLoggedin, setIsLoggedin }) {
  /*****/ 
  const navigate = useNavigate();
  /*****/ 

  const email_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  const password_check = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  const [nickname, setNickname] = useState('');
  const [passNickname, setPassNickname] = useState('');

  const onCheckNickname = (nickname) =>{
      setNickname(nickname.target.value);
      if(nickname.target.value){
        setPassNickname('멋진 닉네임이에요!');
        }
  }

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
    console.log("왜 안돼 ㅡㅡ");
    event.preventDefault();
    setIsLoggedin(true);
    navigate('/');
  }

  return (
    <div>
        <T.CheckLoginDiv>
          <T.CheckLoginH3>회원 가입 양식을 작성해주세요.</T.CheckLoginH3>
          <T.CheckLoginForm onSubmit={onSubmit}>

          <T.CheckLoginLabel>닉네임</T.CheckLoginLabel>
          <T.CheckLoginInput value={nickname} onChange={onCheckNickname}></T.CheckLoginInput>
          <T.CheckLoginPforNickname>{passNickname}</T.CheckLoginPforNickname>

          <T.CheckLoginLabel>이메일</T.CheckLoginLabel>
          <T.CheckLoginInput value={email} onChange={onCheckEmail}></T.CheckLoginInput>
          <T.CheckLoginP>{passEmail}</T.CheckLoginP>

          <T.CheckLoginLabel>비밀번호</T.CheckLoginLabel>
          <T.CheckLoginInput type='password' value={password} onChange={onCheckPassword}></T.CheckLoginInput>
          <T.CheckLoginP>{passPassword}</T.CheckLoginP>

          <T.CheckLoginSubmit type='submit' value='확인' disabled={!(checkEmail && checkPassword)}></T.CheckLoginSubmit>
        </T.CheckLoginForm>
      </T.CheckLoginDiv>
    </div>
  )
}
