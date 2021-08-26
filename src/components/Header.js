import React from 'react'
import logo from '../images/headerLogo.png'
import { HeaderStyle } from './HeaderStyle'
export default function Header() {
    
    return (
       <>
       <HeaderStyle>
         <div className="logoContainer">
            <img src={logo} alt="logo" />
            <div>
            <h3>Трейдеры</h3>
            <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
        <div className="appInfo">
            <p>Lorem, ipsum.</p>
            <p>Lorem.</p>
            <p>v.2</p>
        </div>
        </HeaderStyle>
       </>
    )
}
