import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/Indore1.jpeg'
import Indore1 from './../../assets/indoreh1.jpeg'
import Indore2 from './../../assets/indoreh2.jpeg'
import Indore3 from './../../assets/bhopal3.jpeg'
import Indore4 from './../../assets/bhopal4.jpeg'
import Indore5 from './../../assets/indoresky.jpeg'
import Indore6 from './../../assets/inporedream.jpeg'

import data from './../../data.json'


const Indore = () => {

	const hotel1 = data.luxury.image1
	const hotel2 = data.luxury.image2
	const hotel3 = data.luxury.image3
	const hotel4 = data.luxury.image4
	const hotel5 = data.luxury.image5
	const hotel6 = data.luxury.image6

	return(
		<div id="Bhopal">
			<div id="image_bhopal">
				<img src={wallpaper} alt="#"/>
				<div id="title_bhopal">
					Stays at Indore
				</div>
			</div>
			<div id ="whole_bhopal">
			
			<div id="content_bhopal">
				<CityCard img={Indore1} ratings='4.5' head="Crescent Spa and Resort,Indore" text={hotel6.about}location="Indore" price={hotel1.price} paragraph={data.city_para}/><br/>
				
				<CityCard img={Indore2} ratings='4' head="Sole Mud House,Indore" text={hotel6.about}location="Indore" price={hotel2.price}paragraph={data.city_para}/><br/>
				<CityCard img={Indore3} ratings='5' head="Eduventuure Tour to Kalakud" text={hotel6.about} location="Indore" price={hotel3.price}paragraph={data.city_para}/><br/>
				<CityCard img={Indore4} ratings='3' head="Hotel Nhargarh Palace" text={hotel6.about}location="Indore" price={hotel4.price}paragraph={data.city_para}/><br/>
				<CityCard img={Indore5} ratings='2' head="Skyline Club Resort,Indore" text={hotel6.about}location="Indore" price={hotel5.price}paragraph={data.city_para}/><br/>
				<CityCard img={Indore6} ratings='4.5' head="Dream World Resort Stay" text={hotel6.about}location="Indore" price={hotel6.price}paragraph={data.city_para}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Indore;