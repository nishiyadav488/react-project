import React, {useState,useEffect} from 'react'
import SliderCard from './../../Shared_components/SliderCard.js'
import patalpani from './../../assets/patalpani.jpeg'
import trek from './../../assets/trek.jpeg'
import bhopalcamp from './../../assets/bhopalcamp.jpeg'
import panna from './../../assets/panna.jpeg'
import panna2 from './../../assets/panna2.jpeg'
import deo from './../../assets/deo.jpeg'
import rosa from './../../assets/rosa.jpeg'
import khaj_camp from './../../assets/khaj_camp.jpeg'
import './TopRated.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const AwayCrowd = () => {

	const [dot, setdot] = useState(true);
	const [button, setbutton] = useState(false);

	const handleResize = (e) => {
		
		if(window.innerWidth < 1300){
			setdot(false)
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
		<div className="rate_collection">
			<SliderCard image={patalpani} heading="Camping near patalpani" locai="Indore"rating="5" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={trek} heading="Chidiya Bhadak Waterfall" locai="abcd"rating="4" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={bhopalcamp} heading="Adventure Camping" locai="Bhopal"rating="3.5" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={panna} heading="Camping at ken River" locai="Panna"rating="2" price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={panna2} heading="Dense Forest Camping" locai="Panna, Jabalpur"rating="1" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={rosa} heading="Rosa Bhandavgarh" locai="Jabalpur"rating="2.4" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={khaj_camp} heading="Camping" locai="Khajurao"rating="5" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={deo} heading="Deo Bagh" locai="Gwalior"rating="2" price="XXXXX"/>
		</div>,
	];

	const responsive  =  {
		800 : {items : 1},
		900 : {items : 2},
		1300 : {items : 3},
		1808: {items : 4}
	}

	
	return (
		<div className="hello">
			<div id="top_destination">
			Destinations Away From Crowd
			</div>
			<div id="rate">
				<br/>
				<AliceCarousel 
					mouseTracking 
					items={items}
					responsive ={responsive}
					controlStrategy = "responsive"
					disableDotsControls = {dot}
					disableButtonsControls = {button}
				/> 
			</div>
		</div>
	)
}

export default AwayCrowd;