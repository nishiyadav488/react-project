import React ,{Component} from 'react'
import Listing from "./Listing"
import './Loginpage.css'
import Display from './Display.js'

class About extends Component {
 
  
     constructor(props){
    super(props)
    this.state = {
        
     
      username :"",
      password :"",
      number  :"",
      email :"",

      error : "",

      submit : false
      
    };
     this.child=React.createRef(); 
     this.homeclick = this.homeclick.bind(this)
    } 


  register =() =>{
    let result = this.check();
    if(this.state.username !== "" && this.state.password !== "" && this.state.number !== "" && this.state.email !== "" && result === false){
        // if no blank box and new user
        this.updateData();
        this.setState({
            submit : true
        })
    }
    else if(result === true){
        //if that user and email already exist
        this.setState({
            error : "This  username/email already there"
        })
    }
    else if(this.state.username === "" && this.state.password === "" && this.state.number === "" && this.state.email === ""){
        //if any input is blank
        this.setState({
            error : "NO entries should be blank"
        })
    }
   
  }

    homeclick = () => {
        console.log("child calling");
               
        const copypostarray={user:this.state.username,
                    email:this.state.email,
                    password:this.state.password,
                    number:this.state.number};

        this.child.current.updateData(copypostarray)

    }    

    check = () => { 
        console.log("checking");
        let id = 2;
        let result = this.child.current.login(this.state.username,this.state.email,id)
        return result;
    }
  
 name=(e) =>{
    e.preventDefault();
    let new_name=e.target.value;
    console.log(new_name);
    this.setState({
      username:new_name

    })
    console.log(new_name)
  } 

   mail =(e) =>{
    e.preventDefault();
    let new_mail=e.target.value;
    console.log(new_mail);
    this.setState({
      email:new_mail

    })
    console.log(new_mail)
  } 
   pass =(e) =>{
    e.preventDefault();
    let new_pass=e.target.value;
    console.log(new_pass);
    this.setState({
      password:new_pass

    })
    console.log(new_pass)
  } 
   mnumber =(e) =>{
    e.preventDefault();
    let new_number=e.target.value;
    console.log(new_number);
    this.setState({
      number:new_number

    })
    console.log(new_number)
  } 
    
    render(){
    let show = (this.state.submit) ?   "none" : "block" 
    const new_data ={user:this.state.username,
                email:this.state.email,
                password:this.state.password,
                number:this.state.number};

    let display = this.state.submit && <Display style ={{overflow : "hidden"}} new_data = {new_data}/>

    return(
        <div className="about">
           <div id="my_div" style ={{display : show } }>  
              
            <form className="primary" >
             <Listing ref ={this.child}/> 
                <div className='header'>
                 <h1>Registration Form </h1><br/>
                 {this.state.error}<br/>
                </div><br/>
                     <div > 
                     <input type="text" value={this.state.username} placeholder="username" onChange={this.name} required/>
                    </div><br/>
                   <div> 
                  <input type="text" value={this.state.email} placeholder="Email " onChange={this.mail} required/>
                  </div><br/>
                   <div > 
                    <input type="text" value={this.state.password} placeholder="password" onChange={this.pass} required/>
                  </div><br/>

                  <div > 
                    <input type="tel" value={this.state.number} placeholder="Mobile number" maxLength="10" onChange={this.mnumber} required />
                  </div><br/>
                
                  
                  
                </form>
                <div className="footer">
                    <button onClick={this.register.bind(this)}  >Submit</button>
                </div><br/>
                   

            </div>
            {display}
          </div>
        )

  }

}
export default About
