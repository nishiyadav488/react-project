import React from 'react'
import './Footer.css'
import './../Center_pages/Center.css'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import Navyom from './../../assets/Pinterest.png'
import PHONE from './../../assets/telephone.svg'
import MAIL from './../../assets/email.svg'
import ADDR from './../../assets/home-address.svg'
import HEADQ from './../../assets/home.svg'
import {Link} from 'react-router-dom'

const Footer = () => {

		return(
			<div class="bottom">
			<footer>
				<div id="footerimg"><img src={Navyom}alt="#"/></div>
				<div className="footerpos">
				<div id="manage">
					<ul>
						<div className="f_heading">MANAGE</div>
						<li className="f_h" ><Link to="/home" style={{"text-decoration" : "none"}} >HOME</Link></li>
						<li className="f_h" ><Link to="/about" style={{"text-decoration" : "none"}}>ABOUT</Link></li>
						<li className="f_h" ><Link to="/contact" style={{"text-decoration" : "none"}}>CONTACT US</Link></li>
					</ul>
				</div>
				
				<div id="contact">
					

						<div className="f_heading">CONTACT</div><br/>
						<div><span><img src={PHONE} alt="#"/></span><p>+91-7483667939</p></div>
						<div><span><img src={MAIL}alt="#"/></span><p>info@navyom.com</p></div>
						<div className="word_con"><span><img src={HEADQ}alt="#"/></span><span className="word_con">Pillar building, 2nd floor, 8th C Cross, HSR Layout Scetor 5, Bengaluru-580034, Karnataka</span></div>
						<div className="word_con"><span><img src={ADDR}alt="#"/></span><span className="word_con">Khere ki devi Complex, Shop no-2, Jawahar road, Chhatarpur(M.P.), PIN : 471002</span></div>
					
				</div>
				<div id="address" >
				
						<span><a href="https://www.instagram.com/navyom.tech/?hl=en" target="_blank"rel="noreferrer"><FaInstagram className="my_icon"/></a></span>
						<span><a href="https://www.facebook.com/NavyomTechnologies/" target="_blank"rel="noreferrer"><FaFacebook className="my_icon"/></a></span>
						<span><a href="https://twitter.com/NavyomT" target="_blank"rel="noreferrer"><FaTwitter className="my_icon"/></a></span>
						<span><a href="https://www.facebook.com/NavyomTechnologies/" target="_blank"rel="noreferrer"><FaLinkedin className="my_icon"/></a></span>
					
				</div>
				
				</div>

			</footer>
			<div id="copyright">
				COPYRIGHT © 2021. All rights are reserved by <span><a target="_blank" href="https://www.navyom.com/"rel="noreferrer"> Navyom Technologies Private Ltd.</a></span>
				</div>
		</div>
		)
	
}

export default Footer;

