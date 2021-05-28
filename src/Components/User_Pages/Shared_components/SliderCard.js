import React from 'react'
import ReactStars from 'react-rating-stars-component'

const SliderCard = (props) => {

	return (
		<div id="ratecard">
			<div id="card_title">{props.heading}</div>
			<div id="card_locai">{props.locai}</div>
			<img src={props.image} />
			<div id="card_ratings">
				<ReactStars
					count = {5}
					size = {18}
					activeColor = "#ffd700"
					isHalf = {true}
					value = {props.rating}
				/>
			</div>
			<div id="card_price">PRICE : {props.price}</div>
			<button id="slidercard_button">Check it</button>
		</div>
	)
}

export default SliderCard;