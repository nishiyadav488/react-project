import React,{Component} from 'react'
import './Footer.css'
import data from './../../data.json'
import Navyom from './../../assets/Pinterest.png'

const Footer = () => {
	
	const manage = data.footer.manage
	const contact = data.footer.contact
	const address = data.footer.address

		return(
			<div class="bottom">
			<footer>
				<div><img src={Navyom}/></div>
				<div id="manage">
					<ul>
						<br/><br/><br/><br/>
						<div className="f_heading">{manage.title}</div>
						<li><a href="#" onclick="#">{manage.home}</a></li>
						<li><a href="#" onclick="#">{manage.about}</a></li>
						<li><a href="#" onclick="#">{manage.explore}</a></li>
						<li><a href="#" onclick="#">{manage.plans}</a></li>
						<li><a href="#" onclick="#">{manage.contact}</a></li>
					</ul>
				</div>
				<div id="contact">
					<ul>
						<br/><br/><br/><br/>
						<div className = "f_heading">{contact[0].title}</div>
						<li><a href="#" onclick="#">{contact[1].title} : {contact[1].value}</a></li>
						<li><a href="#" onclick="#">{contact[2].title} : {contact[2].value}</a></li>
						<li><a href="#" onclick="#">{contact[3].title} : {contact[3].value}</a></li>
					</ul>
				</div>
				<div id="address">
					<ul>
						<br/><br/><br/><br/>
						<div className = "f_heading">{address.title}</div>
						<li><a href="#" onclick="#">{address.facebook}</a></li>
						<li><a href="#" onclick="#">{address.insta}</a></li>
						<li><a href="#" onclick="#">{address.twitter}</a></li>
					</ul>
				</div>
			</footer>
		</div>
		)
	
}

export default Footer;
