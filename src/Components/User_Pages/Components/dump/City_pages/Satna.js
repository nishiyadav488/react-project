import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/satna.jpeg'
import Satna1 from './../../assets/MPT Hotel Bharhut.jpeg'
import Satna2 from './../../assets/Hotel Uma Residency.jpeg'
import Satna3 from './../../assets/hotel dashmesh palace.jpeg'
import Satna4 from './../../assets/atul.jpeg'
import Satna5 from './../../assets/Hotel Bhuwan Heights.jpeg'
import Satna6 from './../../assets/Hotel Tulsi Chhaya Inn.jpeg'

import data from './../../data.json'


const Satna = () => {

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
					Stays at Satna
				</div>
			</div>
			<div id ="whole_bhopal">
			<div id="filter_bhopal">
			<form>
				<div className="filter_head">Filter</div><hr/>
				<div><input type="checkbox" id="choice1" name="choice1"/>Immediate Bookings</div>
				<div><input type="checkbox" id="choice2" name="choice2"/>Further Bookings</div><hr/>
				<div className="filter_head">Tour Type</div><hr/>
				<div><input type="checkbox" id="choice3" name="choice3"/>Activity</div>
				<div><input type="checkbox" id="choice4" name="choice4"/>Stays</div>
				<div><input type="checkbox" id="choice5" name="choice5"/>Events</div>
				<div><input type="checkbox" id="choice6" name="choice6"/>Rentals</div><hr/>
				<div className="filter_head">Categories</div><hr/>
				<div><input type="checkbox" id="choice7" name="choice7"/>Adventure</div>
				<div><input type="checkbox" id="choice8" name="choice8"/>Trekking</div>
				<div><input type="checkbox" id="choice9" name="choice9"/>Camping</div>
				<div><input type="checkbox" id="choice10" name="choice10"/>Sports</div>
				<div><input type="checkbox" id="choice11" name="choice11"/>Luxury Experience</div>
				<div><input type="checkbox" id="choice12" name="choice12"/>Walking & Biking</div>
				<div><input type="checkbox" id="choice13" name="choice13"/>Art & Culture</div>
				<div><input type="checkbox" id="choice14" name="choice14"/>Day Outs</div>
				<div><input type="checkbox" id="choice15" name="choice15"/>Wildlife</div>

			</form>
			</div>
			<div id="content_bhopal">
				<CityCard img={Satna1} ratings='4.5' head="MPT Hotel Bharhut, Satna" text={hotel6.about}location="Satna" price={hotel1.price}/><br/>
				<CityCard img={Satna2} ratings='4' head="Hotel Uma Residency" text={hotel6.about}location="Satna" price={hotel2.price}/><br/>
				<CityCard img={Satna3} ratings='5' head="hotel dashmesh palace" text={hotel6.about} location="Satna" price={hotel3.price}/><br/>
				<CityCard img={Satna4} ratings='3' head="Hotel Atul Residency " text={hotel6.about}location="Satna" price={hotel4.price}/><br/>
				<CityCard img={Satna5} ratings='2' head="Hotel Bhuwan Heights" text={hotel6.about}location="Satna" price={hotel5.price}/><br/>
				<CityCard img={Satna6} ratings='4.5' head="Hotel Tulsi Chhaya Inn" text={hotel6.about}location="Satna" price={hotel6.price}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Satna;