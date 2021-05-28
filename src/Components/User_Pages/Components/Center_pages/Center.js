import React from 'react'
import Camp from './../../assets/new_adven.jpeg'
import Stays from './../../assets/stays.jpeg'
import Food from './../../assets/new_food.jpeg'
import './Center.css'
import {Link} from 'react-router-dom'

const Center = () => {
	return(
		<div>
			<div className="perfect">
				<div id="textid1">Find your PERFECT destinations</div>
			     <div className="main">
				   <Link to="/luxury_deals" className="imgid1" style={{"text-decoration" : "none"}}>
					  <p><img src ={Camp}/></p>
					  <div className="textclass">ADVENTURE<br/></div>
				   </Link>
				   <Link to="/luxury_deals" className="imgid1" style={{"text-decoration" : "none"}}>
					  <p><img src ={Stays}/></p>
					  <div className="textclass" id="imgid1_font">Hotel Deals<br/></div>
				   </Link>
				   <Link to="/luxury_deals" className="imgid1" style={{"text-decoration" : "none"}}>
					  <p> <img src ={Food}/></p>
					  <div className="textclass">CUSINE<br/></div>
				   </Link>
				  </div>
			   </div>
		</div>
	)
}

export default Center;