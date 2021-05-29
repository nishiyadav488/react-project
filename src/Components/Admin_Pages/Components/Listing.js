/* eslint-disable array-callback-return */
import React ,{Component} from 'react'

class Listing extends Component {
  
constructor(props){
  super(props);
  this.state = [
    {

      user : 'sunidhi',
      password : '1234',
      email : 'sunidhi@',
      number : '12345'
  
    },
    {

      user :'nidhi',
      password : '5678',
      email : 'nidhi@',
      number : '54321'

    }
    
    ]

  }

 updateData = (new_data) => {
    console.log("in child")
    console.log(new_data)
    this.state.push(new_data)
    console.log(this.state) 
  }


 

 login=(username,pass_mail,id) => {
 let match =false;
 this.state.map((value) => {
     console.log(value);

     if (id === 1) {
       if (username === value.user && pass_mail === value.password) {
         match = true;
       }
     }
     else if (id === 2) {
       if (username === value.user || pass_mail === value.email) {
         console.log("in register check");
         match = true;
       }
     }

   })
  return match;
}

  render(){
    return(
           <div></div>
          
      )

  }

}
export default Listing;