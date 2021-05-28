import React from 'react'
import './Luxury.css'
import Card from './../../Shared_components/Card.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/wild1.jpg'
import deal7 from './../../assets/wild2.jpeg'
import deal8 from './../../assets/wild3.jpeg'
import deal9 from './../../assets/wild5.jpeg'
import Sayaji from './../../assets/wild6.jpeg'
import Radisson from './../../assets/wild7.jpeg'
import pin from './../../assets/placeholder.png'

import Jehan from './../../assets/wild8.jpeg'
import data from './../../data.json'
import {Link} from 'react-router-dom'

const Wildlife = () => {

	const title = data.luxury.title
	const hotel1 = data.luxury.image1
	const hotel2 = data.luxury.image2
	const hotel3 = data.luxury.image3
	const hotel4 = data.luxury.image4
	const hotel5 = data.luxury.image5
	const hotel6 = data.luxury.image6

	return(
		<div id="luxury">
			<div id="image">
				<img src={wallpaper}/>
				<div id="title_text">
					More  close to Nature
				</div>
			</div>
			<div id ="whole">
				<div id="filter">
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
			<div id="content">
			   
				<Link to="/Hotel1">
					<Card img={deal7} head="Pench National Park Jungle Safari" location={hotel6.location} pins={pin} text={hotel1.about}price={hotel1.price}  />
                     
					<br/>
				</Link>

				<Link to="/Hotel2">
					<Card img={deal8} head="Tigress on the Trail" location={hotel6.location} pins={pin}text={hotel2.about}price={hotel2.price}/><br/>
				</Link>
				<Link to="/Hotel3">
					<Card img={deal9} head="Satpura Cycling:Multi Adventure Edition" location={hotel6.location} pins={pin} text={hotel3.about}price={hotel3.price}/><br/>
				</Link>
				<Link to="">
					<Card img={Sayaji} head="Biking Retreat Tour" location={hotel6.location} pins={pin} text={hotel4.about}price={hotel4.price}/><br/>
				</Link>
				<Link to="">	
					<Card img={Radisson} head="Madhya Pradesh Adventure" location={hotel6.location} pins={pin}
					text={hotel5.about}price={hotel5.price}/><br/>
				</Link>
				<Link to="">	
					<Card img={Jehan} head="Wild kanha Adventure" location={hotel6.location} 
					pins={pin} text={hotel6.about}price={hotel6.price}/>
				</Link>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Wildlife;