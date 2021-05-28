import React, {useState, useEffect} from 'react'
import './Top.css'
import data from './../../data.json'
import wallpaper from './../../assets/farm4.jpeg'
import Pilgrimage from './../../assets/pilgrimage.jpeg'
import Tour from './../../assets/tour.jpeg'
import Culture from './../../assets/culture.jpeg'
import Cusine from './../../assets/cusine.jpeg'
import Fauna from './../../assets/fauna.jpeg'
import Hotels from './../../assets/hotels.jpeg'
import {Link} from 'react-router-dom'

 
const Top = ()=>{	
	
		const mytext = data.top.imagetext
		const header = data.top.headerdata

		return(
			<div id="top">

				<header className="header">	
					<img src={wallpaper} id="wallpaper" /><br/>					
					<div className = "menu" >
						<ul className="navbar">
							<li id="li1">{header[0].title}</li>
							<li id="li2"><a href="#" >{header[1].home}</a></li>
							<li id="li3"><a href="#" >{header[2].about}</a></li>
							<li id="li4"><a href="#" >{header[3].explore}</a></li>
							<li id="li5"><a href="#" >{header[4].contact}</a></li>
						</ul>
						<form id="navbar">

	                         <select  name="navbar"  id="select">
	                            <option value="Home">Home</option>
	                            <option value="About">about</option>
	                            <option value="Explor">Explor</option>
	                            <option value="Contain">Contact</option>
	                         </select>
      					</form>
					</div>
				</header>

				<div className="contain">
					<br/>
					<div className = "collection">
						<Link to="/luxury_deals" className = "mybox">
							<img src={Hotels} />
							<div className = "mytext">{mytext.img1}</div>
						</Link>
						<Link to='/' className = "mybox">
							<img src={Tour} />
							<div className = "mytext">{mytext.img2}</div>
						</Link>
						<Link to='/'className = "mybox">
							<img src={Culture} />
							<div className = "mytext">{mytext.img3}</div>
						</Link>
						<Link to='/'className = "mybox">
							<img src={Cusine} />
							<div className = "mytext">{mytext.img4}</div>
						</Link>
						<Link to='/'className = "mybox">
							<img src={Fauna} />
							<div className = "mytext">{mytext.img5}</div>
						</Link>
						<Link to='/'className = "mybox">
							<img src={Pilgrimage} />
							<div className = "mytext">{mytext.img6}</div>
						</Link>
					</div>
				</div>

			


			</div>
		)
	
}

export default Top;