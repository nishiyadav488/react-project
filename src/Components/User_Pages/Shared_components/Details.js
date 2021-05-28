import {React} from 'react'
import Footer from './../Components/Footer/Footer.js'
import './Details.css'
import ReactStars from 'react-rating-stars-component'

const Details =(props)=> {
	return(
		<div>
            <div className="DEEtail">
             <div className="picss">
               <img src={props.image}/>
             </div> 
             <br/>
             <div className="border1">
               <div id="detail_head">{props.heading}</div>
               <div><span>
               		
						<ReactStars
							count = {5}
							size = {18}
							activeColor = "#ffd700"
							isHalf = {true}
							value = {props.rating}
						/>
					</span>
               </div>
             </div>
             <br/>
             <div className="border1"><div className="detail_big">{props.highlight}</div>

            <ul><li> {props.line1} </li>
            	<li> {props.line2} </li>
            	<li> {props.line3} </li>
            	<li> {props.line4} </li>
            	<li> {props.line5} </li>
             </ul>
             </div>
             <br/>
             <div className="border1">
             <div className="detail_big">{props.Overview}</div>
             <br/>
				<div><span className="detail_big">Checkin Time </span>: {props.intime}</div>

				<div><span className="detail_big">Checkout Time</span>: {props.outtime}</div>
				<br/>

				<div><span className="detail_big">Resort Location:</span> {props.location}</div>

				<br/>
				<div className="detail_big">About {props.heading}:</div>
				<br/>
				<div>{props.para1}</div>
				<div>{props.para2}</div>
				
				<br/>
				<div className="detail_big">Your Room:</div>
				<br/>
				<div className="detail_big">Premium rooms</div>
				<br/>
				<div>{props.para3}</div>
				<br/>

				<div className="detail_big">Package Inclusions:</div>
				<br/>
				<div>Begin your day with Morning Breakfast</div>

				<div>Traverse through the nearby places and enjoy the views of lush landscapes with Nature and Plantation Walk.</div>

				<div>Avail the chance of traversing the magnificence of Bhopal and dive in the adventure of a mild Trekking session.</div>


				<div className="detail_big">Activities at {props.heading}:</div>

				<div>You can spend a day doing any of the following activities-</div>

				<div><span className="detail_big">Plantation Walk</span>- Enjoy taking a walk into the charming culture of thick flora and fauna that surround the resort and experience the wilderness of Bhopal.</div>

				<div><span className="detail_big">Soft Trekking</span>- Direct towards exploring the natural composition of Bhopal with the guided assistance and enjoy the panoramic views of the entire valley.</div>

				<div><span className="detail_big">Cycling</span>- Paddle through the narrow trails that lead you to some refreshing views of greenery.</div>



             </div>
             </div>
             <br/>
            <Footer/>
  
           </div>
		)
}

export default Details;