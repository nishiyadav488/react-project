import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/wallpaper4.jpg'
import Bhopal1 from './../../assets/bhopal1.jpeg'
import Bhopal2 from './../../assets/bhopal2.jpeg'
import Bhopal3 from './../../assets/bhopal3.jpeg'
import Bhopal4 from './../../assets/bhopal4.jpeg'
import Bhopal5 from './../../assets/bhopal5.jpeg'
import Bhopal6 from './../../assets/bhopal6.jpeg'

import data from './../../data.json'


const Bhopal = () => {

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
					Stays at Bhopal
				</div>
			</div>
			<div id ="whole_bhopal">
			
			<div id="content_bhopal">
				<CityCard img={Bhopal1} ratings='5' head="Nature Courtyard" text={hotel6.about}location={hotel6.location} price={hotel1.price} paragraph={data.city_para}/><br/>
				<CityCard img={Bhopal2} ratings='2' head="Woods Inn Resort" text={hotel6.about}location={hotel6.location} price={hotel2.price}paragraph={data.city_para}/><br/>
				<CityCard img={Bhopal3} ratings='4.5' head="Madhuban Resort" text={hotel6.about} location={hotel6.location} price={hotel3.price}paragraph={data.city_para}/><br/>
				<CityCard img={Bhopal4} ratings='5' head="Holiday Homes Aand Resort" text={hotel6.about}location={hotel6.location} price={hotel4.price}paragraph={data.city_para}/><br/>
				<CityCard img={Bhopal5} ratings='4' head="Villa De Casa, Bhopal" text={hotel6.about}location={hotel6.location} price={hotel5.price}paragraph={data.city_para}/><br/>
				<CityCard img={Bhopal6} ratings='3.5' head="Laal Kothi,Bhopal" text={hotel6.about}location={hotel6.location} price={hotel6.price}paragraph={data.city_para}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Bhopal;