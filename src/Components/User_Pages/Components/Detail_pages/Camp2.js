import {React} from 'react'
import deal2  from './../../assets/deal2.jpg'
import Details from './../../Shared_components/Details.js'
import Header from './../../Shared_components/Header.js'
import './head.css'

const Camp2 = () => {
	return(
			<div className = "deeetail">
				<Header/>
				<Details 	image={deal2} 
							heading="Resort Camping At The Halali Retreat" 
							rating={3.5} 
							highlight="Halali Retreat Camping Highlights" 
							
							line1="Mesmerizing lake view from the camp" 
							line2= "Enjoy the mesmerising views of sunrise & sunset from your room"
							line3 = "Feel the delight of a nature walk & enjoy the views of lush landscapes"
							line4 = "Embark on a cycling adventure & paddle through the narrow green trails"
							line5 = "To get additional 10% cashback, please call on 9116619941 | Limited Period Offer! The package is valued at INR 8999"
							
							Overview="Halali Retreat Camping Overview"
							intime="11:00 AM"
							outtime="10:00 AM"
							location=" Bhopal, Madhya Pardesh"
							para1="This lake side is a true delight for a nature lover, spread across 9 acres and surrounded by a plantation area that spreads across 300 acres. Stroll around plantations, explore nature trails and tranquil outdoors. Enjoy the comfort which is definitely going to reach sky-high with discreet service to make your holiday experience truly memorable."
							para2="The property is located around 20 km from the main town of Bhopal and spread across 300 acres of lush landscapes and green plantations. The resort offers great hospitality with the best in class facilities and luxury accommodation. If you are looking for a great weekend getaway with your family and friends, this property is just perfect for you."
							para3="The property is located around 20 km from the main town of Bhopal and spread across 300 acres of lush landscapes and green plantations. The resort offers great hospitality with the best in class facilities and luxury accommodation. If you are looking for a great weekend getaway with your family and friends, this property is just perfect for you."
				/> 
			</div>
		)
}

export default Camp2;