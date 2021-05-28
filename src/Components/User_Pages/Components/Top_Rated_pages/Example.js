import React, {useState} from 'react'
import SliderCard from './../../Shared_components/SliderCard.js'
import lake from './../../assets/Bhopalake.jpg'
import sanchi from './../../assets/sanchi.jpg'
import gijari from './../../assets/gijari.jpg'
import kujrao from './../../assets/khujrao.jpg'
import dhoodhdhara from './../../assets/dhoodhdhara.JPG'
import mahakaal from './../../assets/mahakaal.jpg'
import kandariya from './../../assets/kandariya.jpeg'
import jahaz from './../../assets/jahaz.jpeg'
import './TopRated.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Example = () => {

	const handleDragStart = (e) => e.preventDefault();

	const items = [
	  
	  <SliderCard image={lake} className="rate_collection"  heading="Bhopal Lake" locai="abcd"rating='2' price="XXXXX"/>,
				
	  <img src={jahaz} onDragStart={handleDragStart} className="rate_collection" />,
	  <img src={kandariya} onDragStart={handleDragStart} className="rate_collection" />,
	  <img src={mahakaal} onDragStart={handleDragStart} className="rate_collection" />,
	];

	const responsive  =  {
		0 : {items : 1},
		300 : {items : 1.5}
		400 : {items : 2},
		800 : {items : 3},
		1024 : {items : 4}
	}

	return (
		<div>
			<div id="top_destination">
			Top Attractions
			</div>
			<br/>
			<AliceCarousel 
				mouseTracking 
				items={items}
				responsive ={responsive}
				controlStrategy = "responsive"
				disableDotsControls = {true} 
			/>
		</div>
	)
}

export default Example;