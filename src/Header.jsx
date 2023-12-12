import React from 'react'
import { Link } from 'react-router-dom'
import * as T from './StyledComponents'
import CiteLogo from './Img/SiteLogo.png'
import LoginControl from './LoginControl'

export default function Header({ isLoggedin, setIsLoggedin }) {
  return (
    <T.HeaderWholeDiv>
        <Link to="/">
            <img
                src={CiteLogo}
                width='132' height='71'
                alt="logo"
            />
        </Link>
        <LoginControl isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    </T.HeaderWholeDiv>
  )
}
