import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/chatturpur1.jpeg'
import Chhatarpur1 from './../../assets/Hotel Jatashankar Palace.jpeg'
import Chhatarpur2 from './../../assets/Hotel La Capitol.jpeg'
import Chhatarpur3 from './../../assets/Hotel Radhika kunj palace.jpeg'
import Chhatarpur4 from './../../assets/Hotel Om Sai Ram.jpeg'
import Chhatarpur5 from './../../assets/The Royal Hotel.jpeg'
import Chhatarpur6 from './../../assets/Hotel Shelter In.jpeg'

import data from './../../data.json'


const Chhatarpur = () => {

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
					Stays at Chhatarpur
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
				<CityCard img={Chhatarpur1} ratings='3' head="Hotel Jatashankar Palace" text={hotel6.about}location="Chhatarpur" price={hotel1.price}/><br/>
				<CityCard img={Chhatarpur2} ratings='5' head="Hotel La Capitol" text={hotel6.about}location="Chhatarpur" price={hotel2.price}/><br/>
				<CityCard img={Chhatarpur3} ratings='4' head="Hotel Radhika kunj palace" text={hotel6.about} location="Chhatarpur" price={hotel3.price}/><br/>
				<CityCard img={Chhatarpur4} ratings='4.5' head="Hotel Om Sai Ram" text={hotel6.about}location="Chhatarpur" price={hotel4.price}/><br/>
				<CityCard img={Chhatarpur5} ratings='3.5' head="The Royal Hotel" text={hotel6.about}location="Chhatarpur"  price={hotel5.price}/><br/>
				<CityCard img={Chhatarpur6} ratings='2' head="Hotel Shelter Inn" text={hotel6.about}location="Chhatarpur"  price={hotel6.price}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Chhatarpur;