import React,{Component} from 'react';
import './../../Welcome.css'
import Welcome from './../Homepage/Welcome.js'
import Mydata from './../../Mydata.js'

class Register3 extends Component{

	constructor(props){
		super(props)
		this.state = {
			main_page : false,
			new_data : this.props.new_data
		}
		this.datachild = React.createRef();
		this.updatedata = this.updatedata.bind(this)
	}

	clickHandler = () => {
		this.updatedata();
		this.setState({
			main_page : true
		})
	}

	updatedata = () => {
		this.datachild.current.updateData(this.state.new_data)
	}

	render(){
		console.log(this.state.new_data)

		let main = this.state.main_page && <Welcome style ={{overflow : "hidden"}} count="1"/>
		let setter = this.state.main_page ? "none" : "block"

		return(
				<div>
					<div id="Login1_div" style ={{display : setter }} >
						<Mydata ref={this.datachild}/>
						<h2>Your details</h2><br/>
						<h4>
							name : {this.props.new_data.user}<br/>
							email : {this.props.new_data.email}<br/>
							age : {this.props.new_data.age}<br/>
							state : {this.props.new_data.state}<br/>
							mobile : {this.props.new_data.mobile}<br/>
							password : {this.props.new_data.password}
						</h4>
						<button onClick={this.clickHandler.bind(this)}>Go to main page</button>
					</div>
					{main}
				
				</div>
		);
	}
}

export default Register3;