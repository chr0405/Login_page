import styled from "styled-components";

export const CheckLoginDiv = styled.div`
    position: absolute;

    top: 20%;
    left: 35%;
    
    width: 500px;
    height: 500px;

    /* background-color: rgba(131, 166, 178, 0.581);
    border-radius: 20px; */
`;

export const CheckLoginH3 = styled.h3`
    text-align: center;
    position: relative;
    top : 30px;
`;

export const CheckLoginForm = styled.form`
    display: inline-block;
    position: relative;

    top: 40px;
    left: 20%;
`;



export const CheckLoginLabel = styled.label`
    display: block;
    font-size: 15px;
    margin-bottom: 3px;
`;

export const CheckLoginInput = styled.input`
    width: 300px;
    height: 40px;

    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
`;

export const CheckLoginP = styled.p`
    margin : 10px 0px 10px;

    font-size: 15px;
    color : #c94343;
`;

export const CheckLoginPforNickname = styled.p`
    margin : 10px 0px 10px;
    
    font-size: 15px;
    color : #5fc05f;
`;

export const CheckLoginSubmit = styled.input`
    display: block;

    width: 310px;
    height: 40px;

    margin-top: 18px;

    background-color:#0a0a23;
    color: #fff;
    border:none; 

    border-radius: 10px;

    &:disabled{
      background-color: #74747a;
  };
`;

export const CheckLoginSpan = styled.span`
    position: relative;
    top: 10px;
    left: 40%;

    font-size: 15px;
    text-decoration: none;
`;

export const CheckLoginHr = styled.hr`
    position: relative;
    top: 15px;
`;

export const CheckLoginImg = styled.img`
    position: relative;
    top: 20px;
    left: 43%;
`;

/////////////////////////////////////

export const HeaderWholeDiv = styled.div`
    display: inline-block;
    width: 100%;
    height: 53px;

    background-color: rgb(233, 233, 233);
    border-radius: 10px;
`