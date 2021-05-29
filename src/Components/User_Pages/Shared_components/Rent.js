import React , {Component} from 'react'
import './Rent.css'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
class Rent extends Component{

	render(){
		
	return(
		 <div>
           <div className="big_div" >
            <div id="small_div">
             <div className="owners">{this.props.owner}</div>
             <div className="owner_div">
                <img src={this.props.pics} className="img0" alt=""/>{this.props.locations}
             </div>
            </div> 
             <div className="flex00">
                <div className="flex0">
	              <div className="icon_img"><img src={this.props.img1} alt=""/></div>
	              <div className="icon_img"><img src={this.props.img2} alt=""/> </div>
	            </div> 
	             <div className="flex1">
		             <div className="he_bold">{this.props.second}</div>
		             <div className="plan_text">{this.props.secondhe}</div>
		         </div>
	             <div className="flex1">
	               <div className="he_bold">{this.props.third}</div>
	               <div className="plan_text">{this.props.thirdhe}</div>
	             </div>
	             <div className="flex1">
		             <div className="he_bold">{this.props.forth}</div>
		             <div className="plan_text">{this.props.forthhe}</div>
	             </div>
                </div>
              <div className="flex_box">
               
                <div className="flex_box1" >
                 
                   <Carousel interval={1000} >
						<Carousel.Item >
							<img src={this.props.slide1} alt="first slide" />
							
						</Carousel.Item>
						<Carousel.Item >
							<img src={this.props.slide2} alt="2nd slide"/>
							
						</Carousel.Item>
						<Carousel.Item >
							<img src={this.props.slide3} alt="3rd slide"/>
							
						</Carousel.Item>
						<Carousel.Item >
							<img src={this.props.slide4} alt="4th slide"/>
							
						</Carousel.Item>
						
					</Carousel>
                 
                </div>
                 <div className="flex_button">
	                <div className="flex_box2">
	                  <div className="flex_wrap"><img src={this.props.face} className="home" alt=""/>
	                      <div>
		                     <div className="he_bold">{this.props.facing}</div>
		                     <div className="plan_text">{this.props.facee}</div>
	                     </div>
	                  </div>
	                  <div className="flex_wrap"><img src={this.props.propr}className="home" alt=""/>
	                  <div>
	                    <div className="he_bold">{this.props.property}</div>
                        <div className="plan_text">{this.props.perty}</div></div>
	                    </div>
	                  <div className="flex_wrap"> <img src={this.props.bath}className="home" alt=""/><div>
	                   <div className="he_bold">{this.props.bathroom}</div>
                       <div className="plan_text">{this.props.room}</div></div>
	                  </div>
	                  <div className="flex_wrap"> <img src={this.props.park}className="home" alt=""/><div>
	                   <div className="he_bold">{this.props.parking}</div>
                       <div className="plan_text">{this.props.king}</div></div>
	                  </div>
	                </div>
	                <div className="check_button"><button>Check it</button></div>
                  </div>
             
             
              </div> 
            
           </div>
        </div>
		)}
}
export default Rent;