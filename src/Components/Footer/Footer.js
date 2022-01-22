import React from 'react'
import Logo2 from '../../assets/Logo2.webp'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="menu-footer">
                <div className="footer-text">
                    <img src={Logo2} alt='' />
                    
                    <div className="icon-orange">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram-square"></i>
                        <i class="fab fa-linkedin"></i>

                    </div>
                </div>

                <div className='list1'>
                    <ul className="list-footer">
                        <h4>Quick Links</h4>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Services</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </div>


                <div className='list2'>
                    <ul className="list-footer">
                        <h4>Cakes</h4>
                        <li><Link to='/'>Blackforest</Link></li>
                        <li><Link to='/'>Bodhubon</Link></li>
                        <li><Link to='/'>Rongdhonu</Link></li>
                        <li><Link to='/'>Meghrong</Link></li>
                    </ul>
                </div>


                <div className='list3'>
                    <ul className="list-footer">
                        <h4>Contact Us</h4>
                        <p>76/A, Green Lane, Dhanmondi, NYC</p>
                        <li><Link to='/' className='number'>+10 (78) 738-9083</Link></li>

                    </ul>
                </div>
            </div>

            <div className="finish-text">
                <p>Copyright ©2021 All rights reserved | This template is made with <i class="fas fa-heart"></i>by <a href="">Colorlib</a></p>
            </div>
        </>
    )
}


