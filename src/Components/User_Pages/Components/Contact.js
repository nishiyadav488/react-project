import {React} from 'react'
import './Contact.css'
import Footer from './Footer/Footer.js'
import Header from './../Shared_components/Header.js'
import locai  from './../assets/locaiiii.png'


const Contact =()=>{
  
	return( 
		   <div className="divcon">
         <Header/>
                       <div className="us">Get In Touch</div><br/>

         <div id="homeiee_flexbox">
            <div id="homeiee">
               <div className="divf">
                 <form>
                  <div id="name_flex">
                   <div className="name_fname">
                        <span className="naamee">First Name </span>
                        <input type="text" id="fname" placeholder="John" ></input>
                       
                   </div>
                   <div className="name_lname">
                    <span className="naamee" id="lnn">Last Name </span>
 					        
                    <input type="text" id="lname"placeholder="Sheikh" ></input> 
                  </div>
                  </div><br/> 
                  <div>
                   <div className="naamee">Email</div>
                   <input type="email" id="mail" placeholder="abcd@gmail.com"></input>
                  </div><br/> 
                  <div>
                    <div>Write your query : </div>
                     <textarea  placeholder="write here"className="conrow"  rows="5" cols="76"> </textarea>
                  </div><br/> 
                  <div >
                    <button type="button" className="buttonn_con">Submit</button><br/>  
                  </div><br/> 
                 </form>

                </div>
              </div>

              <div className="addressbox">
                <div id="map">
                  <img src={locai} alt=""/>
                </div>
                <div className ="map2"> abcd bhgd hfbf fjjn </div>
                <div className ="map2"> abcd bhgd hfbf fjjn </div>
                <div className ="map2"> abcd bhgd hfbf fjjn </div>
              </div>
              </div>
           <br/>
            <Footer/>
         </div> 

		)
}
export default Contact;