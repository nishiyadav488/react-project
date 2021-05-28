import React,{Component} from 'react';
import './../../Welcome.css'
import Login2 from './Login2.js';
import Login3 from './Login3.js';

class Login1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			data : this.props.data,
			call_show : false,
			call_edit : false
		};		
	}

	showHandler = (props) => {
		this.setState({
			call_show : true
		})
		
	}

	editHandler = (props) => {
		this.setState({
			call_edit : true
		})
	} 
	render(){	

		let setter = (this.state.call_show || this.state.call_edit) ?   "none" : "block"
		
		let log2 = this.state.call_show && <Login2  style ={{overflow : "hidden"}} data={this.state.data}/> 
		let log3 = this.state.call_edit && <Login3  style ={{overflow : "hidden"}}/> 
		return(
			<div className ="Login1">
				<div id="Login1_div" style ={{display : setter}} >
				 	<h1>helloooo again</h1>
				 	<button onClick={this.showHandler.bind(this)}>Show details</button>
				 	<button onClick={this.editHandler.bind(this)}>Edit details</button>

				</div>
				{log2}
				{log3}
				</div>
			);		
	}
}

export default Login1;