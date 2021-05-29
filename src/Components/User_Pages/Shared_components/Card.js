import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Card = (props) => { 

	return(
		<div className="mycard">
			<div className="myimage"> <img id="src_img"src={props.img}  alt=""/> </div>
			<div className="content">
				<div className="head">{props.head}</div>
				<div className="locai"><span><img id="src_pin" src={props.pins} alt=""/></span>{props.location}</div>
				<div><ReactStars
						count = {5}
						size = {14}
						activeColor = "#ffd700"
						isHalf = {true}
						value = {4}
					/></div>
				<br/>
				<div className="text">{props.text}</div>
				
			</div>
			<div className="rating">
				<br/>
				
				<button>Check it</button>
			</div>
		</div>
	)
}

export default Card;