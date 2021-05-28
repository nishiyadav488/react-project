import React,{Component} from 'react';
import './../../Welcome.css'
import Welcome from './../Homepage/Welcome.js'

class Login2 extends Component{
	constructor(props){
		super(props);
		this.state = {
			data : this.props.data,
			main_page : false
		}
	}

	clickHandler = () => {
		this.setState({
			main_page : true
		})
	}

	render(){
		console.log(this.state.data)

		let main = this.state.main_page && <Welcome style ={{overflow : "hidden"}} count="1"/>
		let setter = this.state.main_page ? "none" : "block"
		
		return(
			<div>
				<div id="Login1_div" style ={{display : setter }} >
					<h1>Your details</h1><br/>
					
					Name : {this.state.data.user}<br/>
					Email : {this.state.data.email}<br/>
					Age : {this.state.data.age}<br/>
					State : {this.state.data.state}<br/>
					Mobile : {this.state.data.mobile}<br/>
					<button onClick={this.clickHandler.bind(this)}>Go to main page</button>
				</div>
				{main}
			</div>

		);
	}
}

export default Login2;

