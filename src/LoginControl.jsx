import React/*, {useState}*/ from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginControl1({ isLoggedin, setIsLoggedin }) {
    // const [isLoggedIn, setisLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate((`/WebLogin`));
        // setIsLoggedin(true);
    };
    const handleLogoutClick = () => {
        navigate((`/`));
        setIsLoggedin(false);
    };

    return (
        <div>
            {isLoggedin ? <span className='Login_text'><button className='Login_btn' onClick={handleLogoutClick}>로그아웃</button>환영합니다!</span> : <span className='Login_text'><button className='Login_btn' onClick={handleLoginClick}>로그인</button>로그인 해주세요!</span>}
        </div>
    )
}