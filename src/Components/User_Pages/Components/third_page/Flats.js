import {React,Component} from 'react'
import Rent from './../../Shared_components/Rent.js'
import deal6  from './../../assets/deal6.jpg'
import pin from './../../assets/placeholder.png'
import correct from './../../assets/check.png'
import rupess from './../../assets/rupees.png'
import home from './../../assets/compass.png'
import propert from './../../assets/home.png'
import Bath from './../../assets/bathroom.png'
import car from './../../assets/parked-car.png'
import close from './../../assets/close.png'
import Header from './../../Shared_components/Header.js'
import Footer from './../Footer/Footer.js'
import './../../Shared_components/Rent.css'
import deal8 from './../../assets/deal8.jpg'
import deal9 from './../../assets/deal9.webp'
import Sayaji from './../../assets/sayaji.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Flat.css'
import Carouselss from './Carousel.js'

class Flats extends Component{

  constructor(props){
    super(props);
    this.state = {
      click : false
    };
  }

  clickHandling = (props) =>{
    this.setState({
       click : !(this.state.click)
     })
  }

  render(){

   let clicker = this.state.click && <Carouselss slide1={deal6} slide2={deal8} slide3={deal9} slide4={Sayaji}/>

	return(
           <div>
           
           {clicker}
           <div id={this.state.click ? "flat-show" : "flat-hide"} className="flat-imgg">
              <img src={close} alt="" onClick={this.clickHandling.bind(this)}/>
           </div>
                <div id={this.state.click ? "flat-hide" : "flat-show"}>  
                   <Header/>
                   <div id="whole_flats">
                  <div onClick={this.clickHandling.bind(this)}>
                    <Rent  owner="2 BHK Flat For Sale In Ansal Forte In Roopena Agrahara" locations="1st Main Road Hosur Road Roopena Agrahara Bengaluru Karnataka 560068" pics={pin} img1={correct} img2={rupess} secondhe="1,528 sqft" second="Builtup" thirdhe="₹ 75 Lacs" third="Negotiable" forthhe="₹ 50,373/Month"  forth="Estimated EMI" imgs={deal6} facing="South-west" facee="Facing" property=">10 years" perty="Property" bathroom="2" room="Bathroom" parking="Bike and Car" king="Parking" face={home}
                    propr={propert} bath={Bath} park={car} slide1={deal6} slide2={deal8} slide3={deal9} slide4={Sayaji}/>
                   </div>
                   <br/>
                   
                    <Rent owner="2 BHK Flat For Sale In Ansal Forte In Roopena Agrahara" locations="1st Main Road Hosur Road Roopena Agrahara Bengaluru Karnataka 560068" pics={pin} img1={correct} img2={rupess} secondhe="1,528 sqft" second="Builtup" thirdhe="₹ 75 Lacs" third="Negotiable" forthhe="₹ 50,373/Month"  forth="Estimated EMI" imgs={deal6} facing="South-west" facee="Facing" property=">10 years" perty="Property" bathroom="2" room="Bathroom" parking="Bike and Car" king="Parking" face={home}
                    propr={propert} bath={Bath} park={car} slide4={deal6} slide1={deal8} slide2={deal9} slide3={Sayaji}/>
                    <br/>
                    <Rent owner="2 BHK Flat For Sale In Ansal Forte In Roopena Agrahara" locations="1st Main Road Hosur Road Roopena Agrahara Bengaluru Karnataka 560068" pics={pin} img1={correct} img2={rupess} secondhe="1,528 sqft" second="Builtup" thirdhe="₹ 75 Lacs" third="Negotiable" forthhe="₹ 50,373/Month"  forth="Estimated EMI" imgs={deal6} facing="South-west" facee="Facing" property=">10 years" perty="Property" bathroom="2" room="Bathroom" parking="Bike and Car" king="Parking" face={home}
                    propr={propert} bath={Bath} park={car} slide3={deal6} slide4={deal8} slide1={deal9} slide2={Sayaji}/>
                    <br/>
                    <Rent owner="2 BHK Flat For Sale In Ansal Forte In Roopena Agrahara" locations="1st Main Road Hosur Road Roopena Agrahara Bengaluru Karnataka 560068" pics={pin} img1={correct} img2={rupess} secondhe="1,528 sqft" second="Builtup" thirdhe="₹ 75 Lacs" third="Negotiable" forthhe="₹ 50,373/Month"  forth="Estimated EMI" imgs={deal6} facing="South-west" facee="Facing" property=">10 years" perty="Property" bathroom="2" room="Bathroom" parking="Bike and Car" king="Parking" face={home}
                    propr={propert} bath={Bath} park={car} slide4={deal6} slide2={deal8} slide3={deal9} slide1={Sayaji}/>
                    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <Footer/>
                </div>

           </div>
		)}
}

export default Flats 