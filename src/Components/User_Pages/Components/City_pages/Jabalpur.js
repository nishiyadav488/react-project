import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/Jabalpur2.jpeg'
import Jabalpur1 from './../../assets/Vijan Mahal.jpeg'
import Jabalpur2 from './../../assets/MPT Kalchuri Residency.jpeg'
import Jabalpur3 from './../../assets/Grand  .jpeg'
import Jabalpur4 from './../../assets/FabHotel .jpeg'
import Jabalpur5 from './../../assets/Galaxy .jpeg'
import Jabalpur6 from './../../assets/Jabali .jpeg'

import data from './../../data.json'


const Jabalpur = () => {

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
					Stays at Jabalpur
				</div>
			</div>
			<div id ="whole_bhopal">
			
			<div id="content_bhopal">
				<CityCard img={Jabalpur1} ratings='4.5' head="Vijan Mahal" text={hotel6.about}location="Jabalpur" price={hotel1.price}paragraph={data.city_para}/><br/>
				<CityCard img={Jabalpur2} ratings='4' head="MPT Kalchuri Residency, Jabalpur" text={hotel6.about}location="Jabalpur" price={hotel2.price}paragraph={data.city_para}/><br/>
				<CityCard img={Jabalpur3} ratings='5' head="Grand Heritage Narmada Jacksons " text={hotel6.about} location="Jabalpur" price={hotel3.price}paragraph={data.city_para}/><br/>
				<CityCard img={Jabalpur4} ratings='3' head="FabHotel Prestige Princess" text={hotel6.about}location="Jabalpur"price={hotel4.price}paragraph={data.city_para}/><br/>
				<CityCard img={Jabalpur5} ratings='2' head="Hotel The Galaxy " text={hotel6.about}location="Jabalpur"price={hotel5.price}paragraph={data.city_para}/><br/>
				<CityCard img={Jabalpur6} ratings='4.5' head="Hotel Jabali Palace" text={hotel6.about}location="Jabalpur" price={hotel6.price}paragraph={data.city_para}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Jabalpur;