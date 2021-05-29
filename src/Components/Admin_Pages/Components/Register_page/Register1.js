import React,{Component} from 'react';
import './../../Welcome.css'
import Register2 from './Register2.js';

class Register1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			next : false,
			age : "",
			state : "",
			mobile : "",
			error : ""

		};		
	}



	ageHandler = (e) => {
		e.preventDefault();
		let new_age = e.target.value
		this.setState({
			age:new_age
		})
		console.log(new_age)
	}

	stateHandler = (e) => {
		e.preventDefault();
		let new_state = e.target.value
		this.setState({
			state:new_state
		})
		console.log(new_state)
	}

	mobileHandler = (e) => {
		e.preventDefault();
		let new_mobile = e.target.value
		this.setState({
			mobile:new_mobile
		})
		console.log(new_mobile)
	}

	nextHandler = (props) => {
		if(this.state.age!=="" && this.state.state!=="" && this.state.mobile!==""){
			this.setState({
				next : true
			})
		}
		else{
			this.setState({
				error : "All blanks should be filled"
			})
			alert("All blanks should be filled")
		}
	}
	render(){

		const new_data = {  ...this.props.new_data,
							age : this.state.age,
							state : this.state.state,
							mobile : this.state.mobile
						 }

		
		let reg2 = this.state.next && <Register2 counter={this.state.next} style ={{overflow : "hidden"}} new_data={new_data}/> 
		let setter = this.state.next  ?   "none" : "block"

		console.log(this.props.new_data)
		console.log(this.props.new_data.name)
				
		console.log(new_data)

		return(

			<div>
			
			<div id="Login1_div" style ={{display : setter }}> 
				Hello new user<br/>
				{this.state.error}<br/>
				Age<input type="text" name="age" onChange={this.ageHandler.bind(this)} value={this.state.age}/><br/>
				State<input type="text" name="state" onChange={this.stateHandler.bind(this)}value={this.state.state}/><br/>
				Mobile<input type="text" name="mob" onChange={this.mobileHandler.bind(this)} value={this.state.mobile}/><br/>
				<input type="submit" name="submit_r1" value="Next" onClick={this.nextHandler}/>

			</div>
			{reg2}
			</div>
		);
	}
}

export default Register1;