import React,{Component} from 'react';
import './../../Welcome.css'
import Register3 from './Register3.js';

class Register2 extends Component{

	constructor(props){
		super(props);
		this.state = {
			call_save : false,
			password : "",
			confirm : ""
		};		
	}

	passHandler = (e) => {
		e.preventDefault();
		let new_pass = e.target.value
		this.setState({
			password:new_pass
		})
		console.log(new_pass)
	}

	confirmHandler = (e) => {
		e.preventDefault();
		let new_confirm = e.target.value
		this.setState({
			confirm:new_confirm
		})
		console.log(new_confirm)
	}

	saveHandler = (props) => {
		if(this.state.password!="" && this.state.confirm!=""){
			if(this.state.password == this.state.confirm){
				this.setState({
					call_save : true
				})
			}
			else{
				this.setState({
				error : "password entered are not same"
				})
				alert("password and confirm password should be same")
			}
		}

		else{
			this.setState({
				error : "All blanks should be filled"
			})
			alert("All blanks should be filled")
		}		
	}

	
	render(){

		const new_data = {...this.props.new_data, password : this.state.password}

		console.log(new_data)

		let setter = this.state.call_save  ?   "none" : "block"
		
		let reg3 = this.state.call_save && <Register3  style ={{overflow : "hidden"}} new_data = {new_data}/> 
		return(
			<div>
				<div id="Login1_div" style ={{display : setter  }} >
					<h1>set password</h1><br/>
					{this.state.error}<br/>
					Password : <input type="password" name="new_password" onChange={this.passHandler.bind(this)} value={this.state.password}/><br/>
					Confirm Password : <input type="password" name="new_password2" onChange={this.confirmHandler.bind(this)} value={this.state.confirm}/><br/>
					<button onClick ={this.saveHandler.bind(this)}>Register</button>
				</div>
				{reg3}
				</div>
		);
	}
}

export default Register2;