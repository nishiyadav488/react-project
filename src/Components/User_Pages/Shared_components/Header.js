import React ,{useState}from 'react'
import './../Components/Top_page/Top.css'
import data from './../data.json'
import {Link} from 'react-router-dom'
import wallpaper from './../assets/newww4.jpg'
import list from './../assets/list.png'


const Header = ()=>{	
	
		const header = data.top.headerdata
		const [click,setClick] = useState(false);
		const [counter,setCounter] = useState(1);
		const clickHandler2 = () => {
			if(counter%2 === 0){
				setClick(false)
				setCounter(counter+1)
			}
			else{
				setClick(true); 
				setCounter(counter+1)
			}
			
		}
		return(
				<div className="header">	
					<img src={wallpaper} id="wallpaper"  alt=""/><br/>					
					<div className = "menu" >
						<ul className="navbar">
							<li id="li1">WELCOME  TO  THE  CITY</li>
							<li id="li2"><Link  to="/" >{header[1].home}</Link></li>
							<li id="li3"><Link  to="/about" >{header[2].about}</Link></li>
							<li id="li4"><Link  to="/bhk" >To-let</Link></li>
							<li id="li5"><Link  to="/contact" >{header[4].contact} Us</Link></li>
						</ul>
						<form id="navbar">

	                         <ul  style={{"text-decoration" : "none"}} className="navbar2"  id="select">
	                            <li style={{"text-decoration" : "none"}} onClick={clickHandler2}><Link to ="/" style={{"text-decoration" : "none"}}><img src={list} alt=""/></Link></li>
	                            <li className= {click ? "showlink" : "hidelink"}><Link to ="/" style={{"text-decoration" : "none"}}>Home</Link></li>
	                            <li className= {click ? "showlink" : "hidelink"}><Link to ="/about" style={{"text-decoration" : "none"}}>About</Link></li>
	                            
	                            <li className= {click ? "showlink" : "hidelink"}><Link to ="/contact" style={{"text-decoration" : "none"}}>Contact us</Link></li>
	                         </ul>
      					</form>
      					
					</div>
				</div>
			)
	}

export default Header;