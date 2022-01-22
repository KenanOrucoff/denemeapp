import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.webp'
import Button from '../Button/Button'
import './Navbar.css'
function Navbar() {
    const[click,setClick]=useState(false)


    const HandleClick = ()=>setClick(!click)
    const closeMobileMenu = ()=>setClick(false)


    return (

        
        
        <div className='navbar'>
        <Link to ='/' className ='navbar-logo' onClick={closeMobileMenu}>
            <img src ={Logo} alt=""/>
        </Link>
        <div className='menu-icon'onClick={HandleClick}>
        <i className={click ? 'fa fa-times':'fa fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
        <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ='/products' className='nav-links'onClick={closeMobileMenu}>
                Product
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ='/about' className='nav-links'onClick={closeMobileMenu}>
                About
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ='/' className='nav-links'onClick={closeMobileMenu}>
                Blog
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ='/' className='nav-links'onClick={closeMobileMenu}>
                Contact
            </Link>
        </li>
        </ul>
        <div className='buttons'>
        <Link to='/' className='call-buttons'>
        <i class="fa fa-phone-alt"></i> +10 (56) 745 3095
        </Link>
        <Button className='btn'>< Link className = 'btn_text' to ="">Order Online</Link></Button>
        </div>
        </div>
        
            
        
    )
}

export default Navbar
