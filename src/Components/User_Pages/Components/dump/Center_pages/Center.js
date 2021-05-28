import React from 'react'
import Camp from './../../assets/camp.jpeg'
import Stays from './../../assets/stays.jpeg'
import Food from './../../assets/food.jpeg'
import './Center.css'

const Center = () => {
	return(
		<div>
			<div className="perfect">
				<div id="textid1">Find your perfect destinations</div>
			     <div className="main">
				   <div className="imgid1">
					  <p><img src ={Camp}/></p>
					  <div className="textclass">Adventure<br/></div>
				   </div>
				   <div className="imgid1">
					  <p><img src ={Stays}/></p>
					  <div className="textclass">Hotel Deals<br/></div>
				   </div>
				   <div className="imgid1">
					  <p> <img src ={Food}/></p>
					  <div className="textclass">Cusine<br/></div>
				   </div>
				  </div>
			   </div>
		</div>
	)
}

export default Center;