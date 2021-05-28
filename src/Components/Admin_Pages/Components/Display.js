import React ,{Component} from 'react'
import './Loginpage.css'

class Display extends Component{

	render(){
		const data = this.props.new_data

		return(
				<div id="my_div" style ={{display : "block"} }>
				<h4>
				username :{data.user}<br/>
                email 	 :{data.email}<br/>
                password :{data.password}<br/>
                number	 :{data.number}<br/>
                </h4>
				</div>
			)
	}
}
 export default Display