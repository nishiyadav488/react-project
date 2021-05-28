import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/amarkantak1.jpeg'
import Amarkantak1 from './../../assets/MPT .jpeg'
import Amarkantak2 from './../../assets/Narmade Anandam.jpeg'
import Amarkantak3 from './../../assets/hotel7.jpeg'
import Amarkantak4 from './../../assets/Shree Mata .jpeg'
import Amarkantak5 from './../../assets/Pinaki.jpeg'
import Amarkantak6 from './../../assets/Temple.jpeg'

import data from './../../data.json'


const Amarkantak = () => {

	const hotel1 = data.luxury.image1
	const hotel2 = data.luxury.image2
	const hotel3 = data.luxury.image3
	const hotel4 = data.luxury.image4
	const hotel5 = data.luxury.image5
	const hotel6 = data.luxury.image6

	return(
		<div id="Bhopal">
			<div id="image_bhopal">
				<img src={wallpaper}/>
				<div id="title_bhopal">
					Stays at Amarkantak
				</div>
			</div>
			<div id ="whole_bhopal">
			
			<div id="content_bhopal">
				<CityCard img={Amarkantak1} head="MPT Holiday Homes Amarkantak" text={hotel6.about}location="Amarkantak" price={hotel1.price} ratings='3' paragraph={data.city_para}/><br/>
				<CityCard img={Amarkantak2} head="Narmade Anandam Family Resort" text={hotel6.about}location="Amarkantak" price={hotel2.price}ratings='4'paragraph={data.city_para}/><br/>
				<CityCard img={Amarkantak3} head="Hotel Vilasa International" text={hotel6.about} location="Amarkantak" price={hotel3.price}ratings='5'paragraph={data.city_para}/><br/>
				<CityCard img={Amarkantak4} head="Hotel Shree Mata Sadan" text={hotel6.about}location="Amarkantak" price={hotel4.price}ratings='4.5' paragraph={data.city_para}/><br/>
				<CityCard img={Amarkantak5} head="Hotel Pinaki Inn " text={hotel6.about}location="Amarkantak" price={hotel5.price}ratings='3'paragraph={data.city_para}/><br/>
				<CityCard img={Amarkantak6} head="Hotel Temple Tree" text={hotel6.about}location="Amarkantak" price={hotel6.price}ratings='3.5'paragraph={data.city_para}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Amarkantak;