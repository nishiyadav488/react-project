import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/Gwalior1.jpeg'
import Gwalior1 from './../../assets/deo.jpeg'
import Gwalior2 from './../../assets/orccha.jpeg'
import Gwalior3 from './../../assets/shiv3.jpeg'
import Gwalior4 from './../../assets/camping.jpeg'
import Gwalior5 from './../../assets/radisson1.jpeg'
import Gwalior6 from './../../assets/landmark.jpeg'

import data from './../../data.json'


const Gwalior = () => {

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
					Stays at Gwalior
				</div>
			</div>
			<div id ="whole_bhopal">
			
			<div id="content_bhopal">
				<CityCard img={Gwalior1} ratings='5' head="Deo Bagh,Gwalior" text={hotel6.about}location="Gwalior" price={hotel1.price}paragraph={data.city_para}/><br/>
				<CityCard img={Gwalior2} ratings='4' head="Tour to Gwalior,Orccha,Khajuraho" text={hotel6.about}location="Gwalior" price={hotel2.price}paragraph={data.city_para}/><br/>
				<CityCard img={Gwalior3} ratings='3' head="Shivpuri.and Chanderi Tour" text={hotel6.about} location="Gwalior" price={hotel3.price}paragraph={data.city_para}/><br/>
				<CityCard img={Gwalior4} ratings='4.5' head="Camping with Multiple Adventure Activities,Gwalior" text={hotel6.about}location="Gwalior" price={hotel4.price}paragraph={data.city_para}/><br/>
				<CityCard img={Gwalior5} ratings='3.5' head="Radisson Gwalior" text={hotel6.about}location="Gwalior" price={hotel5.price}paragraph={data.city_para}/><br/>
				<CityCard img={Gwalior6} ratings='2' head="Hotel Landmark" text={hotel6.about}location="Gwalior" price={hotel6.price}paragraph={data.city_para}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Gwalior;