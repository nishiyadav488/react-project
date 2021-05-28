import React, {useState,useEffect} from 'react'
import SliderCard from './../../Shared_components/SliderCard.js'
import lake from './../../assets/slider1.jpeg'
import deal1 from './../../assets/slider2.jpeg'
import deal2 from './../../assets/slider3.jpeg'
import deal3 from './../../assets/slider4.jpg'
import deal4 from './../../assets/deal4.jpg'
import deal5 from './../../assets/deal5.jpeg'
import deal6 from './../../assets/deal6.jpg'
import deal7 from './../../assets/new_grid7.jpeg'
import './TopRated.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Link} from 'react-router-dom' 

const AwayCrowd = () => {

	const [dot, setdot] = useState(true);
	const [button, setbutton] = useState(false);

	const handleResize = (e) => {
		
		if(window.innerWidth < 1200){
			setdot(true)
			setbutton(true)
		}
		else{
			setdot(true)
			setbutton(false)
		}
	}

	useEffect(()=>{
		
		window.addEventListener("resize",handleResize);
	})

	const handleDragStart = (e) => e.preventDefault();


	const items = [
		<Link to='/Cusine2' className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={deal5} heading="LA KUCHINO RESTRAUNT" locai="Bhopal"rating='4.5' price="XXXXX"/>
		</Link>,
		<Link to='/Cusine3' className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={deal6} heading="THE MANGO TREE CAFE" locai="abcd"rating='5' price="XXXXX"/>
		</Link>,
		<Link to='/Hotel1' className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={deal7} heading="NATURE COURTYARD CAFE" locai="Bhopal"rating='3.5' price="XXXXX"/>
		</Link>,
		<Link to='/Camp3' className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={deal3} heading="CAMPING AT SALKANPUR" locai="Bhopal"rating= '2' price="XXXXX"/>
		</Link>,
		<Link to='/Cusine1' className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={deal4} heading="MOMO CAFE" locai="Bhopal"rating='4' price="XXXXX"/>
		</Link>,
		<Link to='/Camp1' className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={deal1} heading="LAKESIDE CAMPING" locai="Bhopal"rating= '4' price="XXXXX"/>
		</Link>,
		<Link to='/Camp2' className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={deal2} heading="CAMPING AT HALALI" locai="Bhopal"rating='3' price="XXXXX"/>
		</Link>,
		<Link to='/lake'className="rate_collection" style={{"text-decoration" : "none"}}>
			<SliderCard image={lake} heading="BHOPAL LAKE" locai="Bhopal"rating='2' price="XXXXX"/>
		</Link>
	];

	const responsive  =  {
		800 : {items : 1},
		900 : {items : 2},
		1300 : {items : 3},
		1808: {items : 4}
	}

	
	return (
		<div className="hello2">
			<div id="top_destination">
			DESTINATIONS AWAY FROM CROWD
			</div>
			<div id="rate">
				
				<AliceCarousel 
					mouseTracking 
					items={items}
					responsive ={responsive}
					controlStrategy = "responsive"
					disableDotsControls = {dot}
					disableButtonsControls = {button}
					autoPlay autoPlayInterval = "2000"
					infinite
				/> 
			</div>
		</div>
	)
}

export default AwayCrowd;