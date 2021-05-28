import React ,{Component} from 'react'
import './Loginpage.css'


class Home extends Component {
  render(){
    let show = this.props.counter
		return(
			<div className="home">
				<div id="my_div" style ={{display : {show}  && "block" }} >
           			 <div className="headdingg">WELCOME SCREEN </div>
            	</div> 
            </div>
          
    	);

  }

}
export default Home