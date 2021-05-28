import React,{Component} from 'react';
import './Flat.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
class Carouselss extends Component{

	render(){
		
	return(
		<div>
			<div className="new-carosel">
				<Carousel>
		 				<div>
							<img src={this.props.slide1} alt="first slide"/>
						</div>	
						<div>
							<img src={this.props.slide2} alt="2nd slide"/>
						</div>	
						<div>
							<img src={this.props.slide3} alt="3rd slide"/>
						</div>	
						<div>
							<img src={this.props.slide4} alt="4th slide"/>
						</div>	
				</Carousel>		
		 		</div>

		</div>
	)}
} 

export default Carouselss;