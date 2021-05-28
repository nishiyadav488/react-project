import React,{Component} from 'react'
import './Footer.css'
import './../Center_pages/Center.css'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import data from './../../data.json'
import Navyom from './../../assets/Pinterest.png'
import LUXURY from './../../assets/hotel.svg'
import TOUR from './../../assets/tour-bus.svg'
import CULTURE from './../../assets/pray.svg'
import CUSINE from './../../assets/bonfire.svg'
import WILD from './../../assets/nature.svg'
import PLACE from './../../assets/podium.svg'
import PHONE from './../../assets/telephone.svg'
import MAIL from './../../assets/email.svg'
import ADDR from './../../assets/home-address.svg'
import INSTA from './../../assets/instagram.svg'
import HEADQ from './../../assets/home.svg'
import FB from './../../assets/facebook.png'
import TWITER from './../../assets/TWITTER.webp'
import GMAIL from './../../assets/GMAIL.png'
import {Link} from 'react-router-dom'

const Footer = () => {
	
	const manage = data.footer.manage
	const contact = data.footer.contact
	const address = data.footer.address

		return(
			<div class="bottom">
			<footer>
				<div id="footerimg"><img src={Navyom}/></div>
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
						<div><span><img src={PHONE}/></span><p>+91-7483667939</p></div>
						<div><span><img src={MAIL}/></span><p>info@navyom.com</p></div>
						<div className="word_con"><span><img src={HEADQ}/></span><span className="word_con">Pillar building, 2nd floor, 8th C Cross, HSR Layout Scetor 5, Bengaluru-580034, Karnataka</span></div>
						<div className="word_con"><span><img src={ADDR}/></span><span className="word_con">Khere ki devi Complex, Shop no-2, Jawahar road, Chhatarpur(M.P.), PIN : 471002</span></div>
					
				</div>
				<div id="address" >
				
						<span><a href="https://www.instagram.com/navyom.tech/?hl=en" target="_blank"><FaInstagram className="my_icon"/></a></span>
						<span><a href="https://www.facebook.com/NavyomTechnologies/" target="_blank"><FaFacebook className="my_icon"/></a></span>
						<span><a href="https://twitter.com/NavyomT" target="_blank"><FaTwitter className="my_icon"/></a></span>
						<span><a href="https://www.facebook.com/NavyomTechnologies/" target="_blank"><FaLinkedin className="my_icon"/></a></span>
					
				</div>
				
				</div>

			</footer>
			<div id="copyright">
				COPYRIGHT © 2021. All rights are reserved by <span><a target="_blank" href="https://www.navyom.com/"> Navyom Technologies Private Ltd.</a></span>
				</div>
		</div>
		)
	
}

export default Footer;

