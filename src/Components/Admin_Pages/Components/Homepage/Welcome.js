import React, {Component} from 'react';
import Login1 from './../Login_pages/Login1.js';
import Register1 from './../Register_page/Register1.js';
import './../../Welcome.css'
import Mydata from './../../Mydata.js';

class Welcome extends Component{

	constructor(props){
		super(props);
		this.state = {
			call_login 		: false,
			username 		: "",
			pass 	 		: "",
			login_error 	: "",
			data 			: "",

			call_register 	: false,
			register_error 	: "",
			user 			: "",
			email 			: ""
		};		
		this.child = React.createRef();
	}

	login_click = (props) => {		
		let result = null;
		result = this.loginclick_Handler();
		if(result != null){		
			this.setState({
				call_login : true,
				data : result
			})
		}
		else{
			this.setState({
				login_error : "WRONG username or password"
			})
			alert("WRONG username or password")
		}
	}

	loginclick_Handler = (props) => {
		console.log("child calling");
		let id = 1
		let result = this.child.current.login(this.state.username,this.state.pass,id)
		return result;
	}

	register_click = (props) => {
		let result = null;
		result = this.registerclick_Handler();
		if(result == null && this.state.user !== "" && this.state.email !== ""){		
			this.setState({
				call_register : true
			})
		}
		else{
			if(this.state.user === "" || this.state.email === ""){
				this.setState({
				register_error : "Username and email must be filled"
				})
				alert("Username and email must be filled")
			}
			else{
				this.setState({
					register_error : "Entered username/email not available"
				})
				alert("Entered username/email not available")
			}
		}
	}

	registerclick_Handler = (props) => {
		console.log("child calling");
		let id = 2
		let result = this.child.current.login(this.state.user,this.state.email,id)
		return result;
	} 

	nameHandler = (e) => {
		e.preventDefault();
		let id = e.target.id;
		if(id === 1){
			let new_name = e.target.value;
			this.setState({
				username: new_name
			})
			console.log(new_name)
		}
		else if(id === 2){
			let new_name = e.target.value;
			this.setState({
				user: new_name
			})
			console.log(new_name)
		}

	}

	passHandler = (e) => {
		e.preventDefault();
		let new_pass = e.target.value
		this.setState({
			pass:new_pass
		})
		console.log(new_pass)
	
	}

	emailHandler = (e) => {
		e.preventDefault();
		let new_email = e.target.value
		this.setState({
			email:new_email
		})
		console.log(new_email)
	}

	render(){

		const new_data = {user : this.state.user,email : this.state.email}

		let setter = (this.state.call_login || this.state.call_register) ?   "none" : "block" 
		let reg = this.state.call_register && <Register1  style ={{overflow : "hidden"}} new_data = {new_data} /> 
		let log = this.state.call_login && <Login1  style ={{overflow : "hidden"}} data = {this.state.data}/> 
		
		let count = this.props.count
		console.log(count)

		return(

			<div className={count!=="1" && "Welcome"}>

			<div style ={{display : setter}} id="main">
				<Mydata ref ={this.child}/>
				<h1>Welcome!!</h1>
				<div id={count!=="1" ? "parent" : "parent2"} >
					<div id="login_div" className="welcome">					
						<h3>Login</h3>	<br/>
						{this.state.login_error}<br/>
						Username<input type="text" name="username" value={this.state.username} onChange={this.nameHandler.bind(this)} id="1"/><br/>
						Password<input type="text" name="pass" value={this.state.pass} onChange={this.passHandler.bind(this)}/><br/>
						<input type="submit" name="submit" value="Login"  onClick={this.login_click.bind(this)}/>
						
					</div><br/>

					<div id="register_div" className="welcome">
						<h3>Register</h3><br/>
						{this.state.register_error}<br/>
						Username<input type="text" name="fullname" value={this.state.user} onChange={this.nameHandler.bind(this)} id="2"/><br/>
						Email<input type="text" name="email" value={this.state.email} onChange={this.emailHandler.bind(this)}/><br/>
						<input type="submit" name="submit" value="Register" id="register" onClick={this.register_click}/>
										
					</div>
				</div>
				
			</div>
			{log}
			{reg}
			</div>
		);
	}
}

export default Welcome;