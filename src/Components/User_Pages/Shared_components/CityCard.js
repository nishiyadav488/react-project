import React from 'react'
import ReactStars from 'react-rating-stars-component'

const CityCard = (props) => { 

	return(
		<div>
         <div className="hotel">
		   <div className="mycitycard">
		  
			  <div className="content">
				 <div className="head">{props.head}</div>
				 <div className="locai">{props.location}</div>
				
			  </div>
			  <div className="myimage"> <img src={props.img} /> </div>
			  <div className="mytext">{props.text}</div>
			  <div className="rating">
				<div>
					<ReactStars
						count = {5}
						size = {14}
						activeColor = "#ffd700"
						isHalf = {true}
						value = {props.ratings}
					/>
				</div>
			  </div>	
			  <div>Rs. {props.price}/-</div>
			  <button>Check_it</button>
		 	  </div>
		 	  <div className="box">
		 	    <div className="title">XYZ</div> 
			 	<div className="para">{props.paragraph}</div>
		  	  </div>
			
		</div>
	 </div>	
	)
}

export default CityCard;