import React,{Component} from 'react';

class Mydata extends Component{

	constructor(props){
		super(props);

		this.state = [
				{	
					user : 'nishi',
					password : '1234',
					state : 'odisha',
					country : 'india',
					email : 'nishi@',
					age : '22'
				},
				{
					user : 'neha',
					password : '4321',
					state : 'M.P',
					country : 'india',
					email : 'neha@',
					age : '25'
				}
			]
		
		this.login = this.login.bind(this)
		this.updateData = this.updateData.bind(this)
	}

	login = (username,pass_mail,id) => {
		let match = null;

		this.state.map((value) => {
			console.log(value);
			if(id === 1){
				if(username === value.user && pass_mail === value.password){
					match = value;
				}
			}
			else if(id === 2){
				if(username === value.user || pass_mail === value.email){
					match = value;
				}
			}
		} )
		
		return match;
	}

	updateData = (new_data) => {
		console.log("in child")
		console.log(new_data)
		this.state.push(new_data)
		console.log(this.state)	
	}

	render(){
		return(<div/>);
	}
}

export default Mydata;